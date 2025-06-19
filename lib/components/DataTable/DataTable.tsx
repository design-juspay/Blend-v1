import { useState, useEffect, useMemo, forwardRef } from 'react';
import { styled } from 'styled-components';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition, SearchConfig, ColumnFilter, FilterType } from './types';
import dataTableTokens from './dataTable.tokens';
import {
  sortData, searchData, applyColumnFilters, getDefaultColumnWidth
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
    serverSideSearch = false,
    serverSideFiltering = false,
    serverSidePagination = false,
    isLoading = false,
    enableColumnManager = true,
    showToolbar = true,
    enableInlineEdit = false,
    enableRowExpansion = false,
    renderExpandedRow,
    isRowExpandable,
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
    onRowExpansionChange,
    headerSlot1,
    headerSlot2,
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
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>(false);
  
  // Search and filter state
  const [searchConfig, setSearchConfig] = useState<SearchConfig>({ query: '', caseSensitive: false });
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Inline edit state
  const [editingRows, setEditingRows] = useState<Record<string, boolean>>({});
  const [editValues, setEditValues] = useState<Record<string, T>>({});

  // Row expansion state
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const totalRows = pagination?.totalRows || data.length;

  const processedData = useMemo(() => {
    let result = [...data];

    // Skip processing if server-side pagination is enabled since data comes pre-processed
    if (serverSidePagination) {
      return result;
    }

    // Apply search only if not server-side
    if (enableSearch && !serverSideSearch && searchConfig.query.trim()) {
      result = searchData(result, searchConfig, visibleColumns);
    }

    // Apply column filters only if not server-side
    if (enableFiltering && !serverSideFiltering && columnFilters.length > 0) {
      result = applyColumnFilters(result, columnFilters);
    }

    // Apply sorting (can be local or server-side, user controls via onSortChange)
    if (sortConfig && sortConfig.field) {
      result = sortData(result, sortConfig);
    }

    return result;
  }, [data, searchConfig, columnFilters, sortConfig, visibleColumns, enableSearch, enableFiltering, serverSideSearch, serverSideFiltering, serverSidePagination]);

  const currentData = useMemo(() => {
    // If server-side search/filtering/pagination is enabled, assume data is already processed by server
    if (serverSideSearch || serverSideFiltering || serverSidePagination) {
      return processedData;
    }
    
    // Otherwise, apply local pagination
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, currentPage, pageSize, serverSideSearch, serverSideFiltering, serverSidePagination]);

  const updateSelectAllState = (selectedRowsState: Record<string, boolean>) => {
    const currentPageRowIds = currentData.map(row => String(row[idField]));
    const selectedCurrentPageRows = currentPageRowIds.filter(rowId => selectedRowsState[rowId]);
    
    if (selectedCurrentPageRows.length === 0) {
      setSelectAll(false);
    } else if (selectedCurrentPageRows.length === currentPageRowIds.length) {
      setSelectAll(true);
    } else {
      setSelectAll('indeterminate');
    }
  };

  useEffect(() => {
    updateSelectAllState(selectedRows);
  }, [currentData, selectedRows]);

  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    const newSelectAll = checked === true;
    
    const newSelectedRows = { ...selectedRows };
    
    if (newSelectAll) {
      currentData.forEach(row => {
        const rowId = String(row[idField]);
        newSelectedRows[rowId] = true;
      });
    } else {
      currentData.forEach(row => {
        const rowId = String(row[idField]);
        newSelectedRows[rowId] = false;
      });
    }
    
    setSelectedRows(newSelectedRows);
        updateSelectAllState(newSelectedRows);
  };

  const handleRowSelect = (rowId: unknown) => {
    // Ensure rowId is a string for the Record key
    const rowIdStr = String(rowId);

    const newSelectedRows = {
      ...selectedRows,
      [rowIdStr]: !selectedRows[rowIdStr]
    };
    setSelectedRows(newSelectedRows);

    // Update selectAll state based on current page selection
    updateSelectAllState(newSelectedRows);
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
        if (value != null) {
          const stringValue = String(value);
          const escapedValue = stringValue.replace(/"/g, '""');
          return `"${escapedValue}"`;
        }
        return '';
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

  const handleSort = (field: keyof T) => {
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
    
    setCurrentPage(1);
    
    if (onSearchChange) {
      onSearchChange(newSearchConfig);
    }
  };

  const handleColumnFilter = (field: keyof T, type: FilterType, value: string | string[], operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte') => {
    const existingFilterIndex = columnFilters.findIndex(f => f.field === field);
    const newFilters = [...columnFilters];

    if (existingFilterIndex >= 0) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        // Remove filter if no value
        newFilters.splice(existingFilterIndex, 1);
      } else {
        // Update existing filter
        newFilters[existingFilterIndex] = { field: String(field), type, value, operator };
      }
    } else if (value && (!Array.isArray(value) || value.length > 0)) {
      // Add new filter
      newFilters.push({ field: String(field), type, value, operator });
    }

    setColumnFilters(newFilters);
    
    // Reset to first page when filtering (important for server-side)
    setCurrentPage(1);
    
    // trigger callback - user handles server-side logic here
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearAllFilters = () => {
    const clearedSearchConfig = { query: '', caseSensitive: false };
    
    setColumnFilters([]);
    setSearchConfig(clearedSearchConfig);
    setCurrentPage(1);
    
    if (onFilterChange) {
      onFilterChange([]);
    }
    if (onSearchChange) {
      onSearchChange(clearedSearchConfig);
    }
  };
  const selectedCount = Object.values(selectedRows).filter(selected => selected).length;

  const handleDeselectAll = () => {
    setSelectedRows({});
    setSelectAll(false);
  };

  // Calculate column widths using the generic utility function
  const getColumnWidth = (column: ColumnDefinition<T>) => {
    return getDefaultColumnWidth(column);
  };

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

  const handleFieldChange = (rowId: unknown, field: keyof T, value: unknown) => {
    const rowIdStr = String(rowId);
    setEditValues(prev => ({
      ...prev,
      [rowIdStr]: {
        ...prev[rowIdStr],
        [field]: value
      }
    }));
  };

  const handleRowExpand = (rowId: unknown) => {
    const rowIdStr = String(rowId);
    const newExpandedRows = {
      ...expandedRows,
      [rowIdStr]: !expandedRows[rowIdStr]
    };
    setExpandedRows(newExpandedRows);

    if (onRowExpansionChange) {
      const rowData = currentData.find(row => row[idField] === rowId);
      if (rowData) {
        onRowExpansionChange(rowId, !expandedRows[rowIdStr], rowData);
      }
    }
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
        visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
        data={data}
        onSearch={handleSearch}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onColumnFilter={handleColumnFilter}
        onClearAllFilters={clearAllFilters}
        headerSlot1={headerSlot1}
        headerSlot2={headerSlot2}
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
                visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
                initialColumns={initialColumns as ColumnDefinition<Record<string, unknown>>[]}
                selectAll={selectAll}
                enableInlineEdit={enableInlineEdit}
                enableColumnManager={enableColumnManager}
                enableRowExpansion={enableRowExpansion}
                data={data}
                columnFilters={columnFilters}
                onSort={handleSort}
                onSelectAll={handleSelectAll}
                onColumnChange={(columns) => setVisibleColumns(columns as ColumnDefinition<T>[])}
                onColumnFilter={handleColumnFilter}
                getColumnWidth={getColumnWidth as (column: ColumnDefinition<Record<string, unknown>>, index: number) => string}
              />
              <TableBodyComponent
                currentData={currentData}
                visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
                idField={idField}
                selectedRows={selectedRows}
                editingRows={editingRows}
                editValues={editValues}
                expandedRows={expandedRows}
                enableInlineEdit={enableInlineEdit}
                enableColumnManager={enableColumnManager}
                enableRowExpansion={enableRowExpansion}
                renderExpandedRow={renderExpandedRow as ((expandedData: { row: Record<string, unknown>; index: number; isExpanded: boolean; toggleExpansion: () => void; }) => React.ReactNode) | undefined}
                isRowExpandable={isRowExpandable as ((row: Record<string, unknown>, index: number) => boolean) | undefined}
                onRowSelect={handleRowSelect}
                onEditRow={handleEditRow}
                onSaveRow={handleSaveRow}
                onCancelEdit={handleCancelEdit}
                onRowExpand={handleRowExpand}
                onFieldChange={handleFieldChange}
                getColumnWidth={getColumnWidth as (column: ColumnDefinition<Record<string, unknown>>, index: number) => string}
              />
            </Table>
          </Block>
        </Block>
        
        <TableFooter
          pagination={pagination}
          currentPage={currentPage}
          pageSize={pageSize}
          totalRows={totalRows}
          isLoading={isLoading}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Block>
    </Block>
  );
});

DataTable.displayName = "DataTable";

export default DataTable;