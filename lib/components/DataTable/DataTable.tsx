import { useState, useEffect, useMemo, forwardRef } from 'react';
import { styled } from 'styled-components';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition, SearchConfig, ColumnFilter, FilterType } from './types';
import dataTableTokens from './dataTable.tokens';
import {
  sortData, searchData, applyColumnFilters
} from './utils';
import DataTableHeader from './DataTableHeader';
import TableHeader from './TableHeader';
import TableBodyComponent from './TableBody';
import TableFooter from './TableFooter';
import BulkActionBar from './TableBody/BulkActionBar';
import Block from '../Primitives/Block/Block';

const Table = styled.table<{ $isStriped?: boolean; $isHoverable?: boolean }>`
  ${dataTableTokens.table.base}
  table-layout: fixed;
  width: 100%;
  min-width: 800px;
`;

const DataTable = forwardRef(<T extends Record<string, unknown>>(
  {
    data,
    columns: initialColumns,
    idField,
    title,
    description,
    isStriped = false,
    isHoverable = true,
    defaultSort,
    enableSearch = false,
    searchPlaceholder = "Search...",
    enableFiltering = false,
    enableColumnManager = true,
    showToolbar = true,
    enableInlineEdit = false,
    pagination = {
      currentPage: 1,
      pageSize: 10,
      totalRows: 0,
      pageSizeOptions: [10, 20, 50, 100],
    },
    onPageChange,
    onPageSizeChange,
    onSortChange,
    onSearchChange,
    onFilterChange,
    onRowSave,
    onRowCancel,
    headerSlot1,
    headeSlot2,
    headerSlot3,
    bulkActions
  }: DataTableProps<T>,
  ref: React.Ref<HTMLDivElement>
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(defaultSort || null);
  const [visibleColumns, setVisibleColumns] = useState<ColumnDefinition<T>[]>(() => {
    return initialColumns.filter(col => col.isVisible !== false);
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage || 1);
  const [pageSize, setPageSize] = useState<number>(pagination?.pageSize || 10);

  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [selectAll, setSelectAll] = useState(false);
  
  // Search and filter state
  const [searchConfig, setSearchConfig] = useState<SearchConfig>({ query: '', caseSensitive: false });
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Inline edit state
  const [editingRows, setEditingRows] = useState<Record<string, boolean>>({});
  const [editValues, setEditValues] = useState<Record<string, T>>({});

  const totalRows = pagination?.totalRows || data.length;

  const processedData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (enableSearch && searchConfig.query.trim()) {
      result = searchData(result, searchConfig, visibleColumns);
    }

    // Apply column filters
    if (enableFiltering && columnFilters.length > 0) {
      result = applyColumnFilters(result, columnFilters);
    }

    // Apply sorting
    if (sortConfig && sortConfig.field) {
      result = sortData(result, sortConfig);
    }

    return result;
  }, [data, searchConfig, columnFilters, sortConfig, visibleColumns, enableSearch, enableFiltering]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, currentPage, pageSize]);

  useEffect(() => {
    setSelectedRows({});
    setSelectAll(false);
  }, [data]);

  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    const newSelectAll = checked === true;
    setSelectAll(newSelectAll);

    const newSelectedRows = { ...selectedRows };
    currentData.forEach(row => {
      const rowId = row[idField] as string;
      newSelectedRows[rowId] = newSelectAll;
    });
    setSelectedRows(newSelectedRows);
  };

  const handleRowSelect = (rowId: unknown) => {
    // Ensure rowId is a string for the Record key
    const rowIdStr = String(rowId);

    const newSelectedRows = {
      ...selectedRows,
      [rowIdStr]: !selectedRows[rowIdStr]
    };
    setSelectedRows(newSelectedRows);

    // Check if all rows are selected
    const allSelected = currentData.every(row => {
      const currentRowId = String(row[idField]);
      return newSelectedRows[currentRowId];
    });
    setSelectAll(allSelected);
  };

  // Export selected rows to CSV
  const exportToCSV = () => {
    const selectedData = processedData.filter(row => {
      const rowId = String(row[idField]);
      return selectedRows[rowId];
    });

    if (selectedData.length === 0) {
      alert('Please select at least one row to export');
      return;
    }

    const headers = visibleColumns.map(col => col.header);
    const fields = visibleColumns.map(col => col.field);

    let csvContent = headers.join(',') + '\n';
    selectedData.forEach(row => {
      const rowData = fields.map(field => {
        const value = row[field];
        return value != null ? `"${String(value).replace(/"/g, '""')}"` : '';
      });
      csvContent += rowData.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `export-${new Date().toISOString()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (field: keyof any) => {
    const direction = sortConfig?.field === field
      ? sortConfig.direction === SortDirection.ASCENDING
        ? SortDirection.DESCENDING
        : SortDirection.ASCENDING
      : SortDirection.ASCENDING;

    const newSortConfig = { field: field.toString(), direction };
    setSortConfig(newSortConfig);

    if (onSortChange) {
      onSortChange(newSortConfig);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);

    if (onPageSizeChange) {
      onPageSizeChange(size);
    }
  };

  const handleSearch = (query: string) => {
    const newSearchConfig = { ...searchConfig, query };
    setSearchConfig(newSearchConfig);
    setCurrentPage(1); // Reset to first page when searching
    
    if (onSearchChange) {
      onSearchChange(newSearchConfig);
    }
  };

  const handleColumnFilter = (field: keyof any, type: FilterType, value: string | string[], operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte') => {
    const existingFilterIndex = columnFilters.findIndex(f => f.field === field);
    const newFilters = [...columnFilters];

    if (existingFilterIndex >= 0) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        // Remove filter if no value
        newFilters.splice(existingFilterIndex, 1);
      } else {
        // Update existing filter
        newFilters[existingFilterIndex] = { field, type, value, operator };
      }
    } else if (value && (!Array.isArray(value) || value.length > 0)) {
      // Add new filter
      newFilters.push({ field, type, value, operator });
    }

    setColumnFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filtering
    
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearAllFilters = () => {
    setColumnFilters([]);
    setSearchConfig({ query: '', caseSensitive: false });
    setCurrentPage(1);
    
    if (onFilterChange) {
      onFilterChange([]);
    }
    if (onSearchChange) {
      onSearchChange({ query: '', caseSensitive: false });
    }
  };

  const hasSelectedRows = Object.values(selectedRows).some(selected => selected);
  const selectedCount = Object.values(selectedRows).filter(selected => selected).length;

  const handleDeselectAll = () => {
    setSelectedRows({});
    setSelectAll(false);
  };

  // Calculate column widths to ensure fixed layout
  const getColumnWidth = (column: ColumnDefinition<T>) => {
    if (column.width) return column.width;
    
    // Default widths based on field type or content
    const field = String(column.field);
    if (field === 'id' || field === 'number') return '80px';
    if (field === 'email') return '200px';
    if (field === 'name') return '200px';
    if (field === 'status') return '120px';
    if (field === 'role') return '120px';
    
    // Default width for other columns
    return '150px';
  };

  // Inline edit functions
  const handleEditRow = (rowId: unknown) => {
    const rowIdStr = String(rowId);
    const row = currentData.find(r => String(r[idField]) === rowIdStr);
    if (row) {
      setEditingRows(prev => ({ ...prev, [rowIdStr]: true }));
      setEditValues(prev => ({ ...prev, [rowIdStr]: { ...row } }));
    }
  };

  const handleSaveRow = (rowId: unknown) => {
    const rowIdStr = String(rowId);
    const updatedRow = editValues[rowIdStr];
    if (updatedRow && onRowSave) {
      onRowSave(rowId, updatedRow);
    }
    setEditingRows(prev => ({ ...prev, [rowIdStr]: false }));
    setEditValues(prev => {
      const newValues = { ...prev };
      delete newValues[rowIdStr];
      return newValues;
    });
  };

  const handleCancelEdit = (rowId: unknown) => {
    const rowIdStr = String(rowId);
    if (onRowCancel) {
      onRowCancel(rowId);
    }
    setEditingRows(prev => ({ ...prev, [rowIdStr]: false }));
    setEditValues(prev => {
      const newValues = { ...prev };
      delete newValues[rowIdStr];
      return newValues;
    });
  };

  const handleFieldChange = (rowId: unknown, field: keyof any, value: unknown) => {
    const rowIdStr = String(rowId);
    setEditValues(prev => ({
      ...prev,
      [rowIdStr]: {
        ...prev[rowIdStr],
        [field]: value
      }
    }));
  };

  return (
    <Block ref={ref} style={{
      ...dataTableTokens.container,
      position: 'relative',
    }}>
      <DataTableHeader
        title={title}
        description={description}
        showToolbar={showToolbar}
        enableSearch={enableSearch}
        searchPlaceholder={searchPlaceholder}
        searchConfig={searchConfig}
        enableFiltering={enableFiltering}
        showFilters={showFilters}
        columnFilters={columnFilters}
        visibleColumns={visibleColumns}
        data={data}
        onSearch={handleSearch}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onColumnFilter={handleColumnFilter}
        onClearAllFilters={clearAllFilters}
        headerSlot1={headerSlot1}
        headerSlot2={headeSlot2}
        headerSlot3={headerSlot3}
      />

      <Block style={{
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        maxHeight: 'calc(100vh - 200px)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <BulkActionBar
          selectedCount={selectedCount}
          onExport={exportToCSV}
          onDeselectAll={handleDeselectAll}
          customActions={bulkActions}
        />

        <Block style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}>
          <Block style={{
            overflowY: 'auto',
            flex: 1,
            minHeight: 0,
          }}>
            <Table $isStriped={isStriped} $isHoverable={isHoverable}>
              <TableHeader
                visibleColumns={visibleColumns}
                initialColumns={initialColumns}
                sortConfig={sortConfig}
                selectAll={selectAll}
                enableInlineEdit={enableInlineEdit}
                enableColumnManager={enableColumnManager}
                onSort={handleSort}
                onSelectAll={handleSelectAll}
                onColumnChange={setVisibleColumns}
                getColumnWidth={getColumnWidth}
              />
              <TableBodyComponent
                currentData={currentData}
                visibleColumns={visibleColumns}
                idField={idField}
                selectedRows={selectedRows}
                editingRows={editingRows}
                editValues={editValues}
                enableInlineEdit={enableInlineEdit}
                enableColumnManager={enableColumnManager}
                onRowSelect={handleRowSelect}
                onEditRow={handleEditRow}
                onSaveRow={handleSaveRow}
                onCancelEdit={handleCancelEdit}
                onFieldChange={handleFieldChange}
                getColumnWidth={getColumnWidth}
              />
            </Table>
          </Block>
        </Block>
        
        <TableFooter
          pagination={pagination}
          currentPage={currentPage}
          pageSize={pageSize}
          totalRows={totalRows}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Block>
    </Block>
  );
});

DataTable.displayName = "DataTable";

export default DataTable;