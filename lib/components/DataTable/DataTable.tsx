import { useState, useEffect, useMemo, forwardRef } from 'react';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition, SearchConfig, ColumnFilter, FilterType, ColumnType } from './types';
import  { TableTokenType } from './dataTable.tokens';
import {
  sortData, searchData, applyColumnFilters,
  updateColumnFilter, exportSelectedRowsToCSV, getSelectedRowCount,
  createSearchConfig, clearAllFiltersAndSearch, getColumnStyles
} from './utils';
import DataTableHeader from './DataTableHeader';
import TableHeader from './TableHeader';
import TableBodyComponent from './TableBody';
import TableFooter from './TableFooter';
import BulkActionBar from './TableBody/BulkActionBar';
import Block from '../Primitives/Block/Block';
import Button from '../Button/Button';
import { ButtonSize, ButtonType } from '../Button/types';
import { Settings, Check } from 'lucide-react';
import Menu from '../Menu/Menu';
import { MenuV2GroupType, MenuAlignment } from '../Menu/types';

import { useComponentToken } from '../../context/useComponentToken';
import { foundationToken } from '../../foundationToken';

const DataTable = forwardRef(<T extends Record<string, unknown>>(
  {
    data,
    columns: initialColumns,
    idField,
    title,
    description,
    defaultSort,
    enableSearch = false,
    searchPlaceholder = "Search...",
    enableFiltering = false,
    enableAdvancedFilter = false,
    advancedFilterComponent,
    advancedFilters = [],
    columnFreeze = 0,
    serverSideSearch = false,
    serverSideFiltering = false,
    serverSidePagination = false,
    isLoading = false,
    enableColumnManager = true,
    showToolbar = true,
    enableInlineEdit = false,
    enableRowExpansion = false,
    enableRowSelection = true,
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
    onAdvancedFiltersChange,
    onRowSave,
    onRowCancel,
    onRowExpansionChange,
    onRowClick,
    onFieldChange,
    headerSlot1,
    headerSlot2,
    bulkActions,
    getRowStyle,
  }: DataTableProps<T>,
  ref: React.Ref<HTMLDivElement>
) => {
  const tableToken = useComponentToken("TABLE") as TableTokenType;
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(defaultSort || null);
  const [visibleColumns, setVisibleColumns] = useState<ColumnDefinition<T>[]>(() => {
    return initialColumns.filter(col => col.isVisible !== false);
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage || 1);
  const [pageSize, setPageSize] = useState<number>(pagination?.pageSize || 10);

  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>(false);
  
  const [searchConfig, setSearchConfig] = useState<SearchConfig>({ query: '', caseSensitive: false });
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  
  const [editingRows, setEditingRows] = useState<Record<string, boolean>>({});
  const [editValues, setEditValues] = useState<Record<string, T>>({});

  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  
  // Formatting state
  const [isFormatEnabled, setIsFormatEnabled] = useState<boolean>(true);

  const totalRows = pagination?.totalRows || data.length;

  const formatOptions: MenuV2GroupType[] = [
    {
      items: [
        {
          label: "Format",
          slot3: isFormatEnabled ? <Check size={16} /> : null,
          onClick: () => setIsFormatEnabled(!isFormatEnabled)
        }
      ],
      showSeparator: false
    }
  ];

  const removeNumberFormatting = (value: unknown): string => {
    if (value == null) return '';
    
    const stringValue = String(value);
    
    let cleaned = stringValue.replace(/[$€£¥₹₽₪₩₦₡₵₸₴₺₻₼₽¢]/g, '');
    
    cleaned = cleaned.replace(/%/g, '');
    
    cleaned = cleaned.replace(/,/g, '');
    
    cleaned = cleaned.trim();
    
    const numericValue = parseFloat(cleaned);
    if (!isNaN(numericValue)) {
      return numericValue.toString();
    }
    
    return stringValue;
  };

  const getDisplayValue = (value: unknown, column: ColumnDefinition<T>): unknown => {
    if (!isFormatEnabled && (column.type === ColumnType.NUMBER || 
        (typeof value === 'string' && /[$€£¥₹₽₪₩₦₡₵₸₴₺₻₼₽¢%,\d]/.test(value)))) {
      return removeNumberFormatting(value);
    }
    return value;
  };

  const processedData = useMemo(() => {
    let result = [...data];

    if (serverSidePagination) {
      return result;
    }

    if (enableSearch && !serverSideSearch && searchConfig.query.trim()) {
      result = searchData(result, searchConfig, visibleColumns);
    }

    if (enableFiltering && !serverSideFiltering && columnFilters.length > 0) {
      result = applyColumnFilters(result, columnFilters);
    }

    if (sortConfig && sortConfig.field) {
      result = sortData(result, sortConfig, visibleColumns);
    }

    return result;
  }, [data, searchConfig, columnFilters, sortConfig, visibleColumns, enableSearch, enableFiltering, serverSideSearch, serverSideFiltering, serverSidePagination]);

  const currentData = useMemo(() => {
    if (serverSideSearch || serverSideFiltering || serverSidePagination) {
      return processedData;
    }
    
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
    const rowIdStr = String(rowId);

    const newSelectedRows = {
      ...selectedRows,
      [rowIdStr]: !selectedRows[rowIdStr]
    };
    setSelectedRows(newSelectedRows);

    updateSelectAllState(newSelectedRows);
  };

  const exportToCSV = () => {
    try {
      const dataForExport = isFormatEnabled ? processedData : processedData.map(row => {
        const formattedRow = { ...row } as Record<string, unknown>;
        visibleColumns.forEach(column => {
          const fieldKey = String(column.field);
          if (column.type === ColumnType.NUMBER || 
              (typeof formattedRow[fieldKey] === 'string' && 
               /^[$€£¥₹₽₪₩₦₡₵₸₴₺₻₼₽¢%,\d.\s]+$/.test(formattedRow[fieldKey]))) {
            formattedRow[fieldKey] = removeNumberFormatting(formattedRow[fieldKey]);
          }
        });
        return formattedRow as T;
      });

      exportSelectedRowsToCSV(
        dataForExport,
        selectedRows,
        visibleColumns,
        String(idField),
        `${title || 'data'}-export-${new Date().toISOString().split('T')[0]}.csv`
      );
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Export failed');
    }
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
    const newSearchConfig = createSearchConfig(query, searchConfig.caseSensitive, searchConfig.searchFields);
    
    setSearchConfig(newSearchConfig);
    setCurrentPage(1);
    
    if (onSearchChange) {
      onSearchChange(newSearchConfig);
    }
  };

  const handleColumnFilter = (field: string, type: FilterType, value: string | string[] | { min: number; max: number }, operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte' | 'range' = 'contains') => {
    const updatedFilters = updateColumnFilter(columnFilters, field as keyof Record<string, unknown>, type, value, operator);
    
    setColumnFilters(updatedFilters);
    setCurrentPage(1);
    
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  const clearAllFilters = () => {
    const { searchConfig: clearedSearchConfig } = clearAllFiltersAndSearch();
    
    setSearchConfig(clearedSearchConfig);
    setColumnFilters([]);
    setCurrentPage(1);
    
    if (onAdvancedFiltersChange) {
      onAdvancedFiltersChange([]);
    }
    if (onSearchChange) {
      onSearchChange(clearedSearchConfig);
    }
    if (onFilterChange) {
      onFilterChange([]);
    }
  };
  const selectedCount = getSelectedRowCount(selectedRows);

  const handleDeselectAll = () => {
    setSelectedRows({});
    setSelectAll(false);
  };

  const renderBulkActions = () => {
    if (!bulkActions?.length) return null;
    
    const selectedRowIds = Object.entries(selectedRows)
      .filter(([, selected]) => selected)
      .map(([rowId]) => rowId);

    return bulkActions.map(action => (
      <Button
        key={action.id}
        buttonType={action.variant === 'danger' ? ButtonType.DANGER : action.variant === 'primary' ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        size={ButtonSize.SMALL}
        onClick={() => action.onClick(selectedRowIds)}
      >
        {action.label}
      </Button>
    ));
  };

  const getColumnWidth = (column: ColumnDefinition<T>): React.CSSProperties => {
    return getColumnStyles(column);
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
    
    if (enableInlineEdit) {
      setEditValues(prev => ({
        ...prev,
        [rowIdStr]: {
          ...prev[rowIdStr],
          [field]: value
        }
      }));
    } else {
      if (onFieldChange) {
        onFieldChange(rowId, field, value);
      }
    }
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
      position: tableToken.position,
      padding: tableToken.padding,
      width: tableToken.width,
      height: tableToken.height,
      display: tableToken.display,
      flexDirection: tableToken.flexDirection,
    }}>
      <DataTableHeader
        title={title}
        description={description}
        showToolbar={showToolbar}
        enableSearch={enableSearch}
        searchPlaceholder={searchPlaceholder}
        searchConfig={searchConfig}
        enableAdvancedFilter={enableAdvancedFilter}
        advancedFilterComponent={advancedFilterComponent}
        advancedFilters={advancedFilters}
        visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
        data={data}
        onSearch={handleSearch}
        onAdvancedFiltersChange={onAdvancedFiltersChange}
        onClearAllFilters={clearAllFilters}
        headerSlot1={
          <>
            <Menu
              items={formatOptions}
              alignment={MenuAlignment.END}
              sideOffset={8}
              alignOffset={-20}
              trigger={
                <Button
                  buttonType={ButtonType.SECONDARY}
                  leadingIcon={Settings}
                  size={ButtonSize.SMALL}
                >
                  Settings
                </Button>
              }
            />
          </>
        }
        headerSlot2={headerSlot1}
        headerSlot3={headerSlot2}
      />

      <Block style={{
        borderRadius: tableToken.dataTable.borderRadius,
        border: tableToken.dataTable.border,
        maxHeight: tableToken.dataTable.maxHeight,
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <BulkActionBar
          selectedCount={selectedCount}
          onExport={exportToCSV}
          onDeselectAll={handleDeselectAll}
          customActions={renderBulkActions()}
        />

        <Block style={{
          flex: 1,
          position: 'relative',
          minHeight: 0,
          maxHeight: 'calc(100vh - 280px)',
          overflow: 'hidden',
        }}>
          <Block style={{
            overflowX: 'auto',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            height: '100%',
            maxHeight: '100%',
            position: 'relative',
          }}>
            <table style={{
              width: tableToken.dataTable.table.width,
              minWidth: tableToken.dataTable.table.minWidth,
              tableLayout: tableToken.dataTable.table.tableLayout,
              borderCollapse: tableToken.dataTable.table.borderCollapse,
              borderSpacing: tableToken.dataTable.table.borderSpacing,
              position: tableToken.dataTable.table.position,
              overflow: 'auto',
            }}>
              <TableHeader
                visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
                initialColumns={initialColumns as ColumnDefinition<Record<string, unknown>>[]}
                selectAll={selectAll}
                enableInlineEdit={enableInlineEdit}
                enableColumnManager={enableColumnManager}
                enableRowExpansion={enableRowExpansion}
                enableRowSelection={enableRowSelection}
                data={data}
                onSort={handleSort}
                onSelectAll={handleSelectAll}
                onColumnChange={(columns) => setVisibleColumns(columns as ColumnDefinition<T>[])}
                onColumnFilter={handleColumnFilter}
                getColumnWidth={getColumnWidth as (column: ColumnDefinition<Record<string, unknown>>, index: number) => React.CSSProperties}
                columnFreeze={columnFreeze}
              />
              {currentData.length > 0 ? (
                <TableBodyComponent
                  currentData={currentData}
                  visibleColumns={visibleColumns as ColumnDefinition<Record<string, unknown>>[]}
                  idField={String(idField)}
                  selectedRows={selectedRows}
                  editingRows={editingRows}
                  editValues={editValues}
                  expandedRows={expandedRows}
                  enableInlineEdit={enableInlineEdit}
                  enableColumnManager={enableColumnManager}
                  enableRowExpansion={enableRowExpansion}
                  enableRowSelection={enableRowSelection}
                  columnFreeze={columnFreeze}
                  renderExpandedRow={renderExpandedRow as ((expandedData: { row: Record<string, unknown>; index: number; isExpanded: boolean; toggleExpansion: () => void; }) => React.ReactNode) | undefined}
                  isRowExpandable={isRowExpandable as ((row: Record<string, unknown>, index: number) => boolean) | undefined}
                  onRowSelect={handleRowSelect}
                  onEditRow={handleEditRow}
                  onSaveRow={handleSaveRow}
                  onCancelEdit={handleCancelEdit}
                  onRowExpand={handleRowExpand}
                  onFieldChange={handleFieldChange}
                  getColumnWidth={getColumnWidth as (column: ColumnDefinition<Record<string, unknown>>, index: number) => React.CSSProperties}
                  onRowClick={onRowClick as ((row: Record<string, unknown>, index: number) => void) | undefined}
                  getRowStyle={getRowStyle as ((row: Record<string, unknown>, index: number) => React.CSSProperties) | undefined}
                  getDisplayValue={(value: unknown, column: ColumnDefinition<Record<string, unknown>>) => getDisplayValue(value, column as ColumnDefinition<T>)}
                />
              ) : (
                <tbody>
                  <tr>
                    <td 
                      colSpan={visibleColumns.length + (enableRowSelection ? 1 : 0) + (enableRowExpansion ? 1 : 0) + (enableInlineEdit ? 1 : 0) + (enableColumnManager ? 1 : 0)}
                      style={{
                        textAlign: 'center',
                        padding: '40px 20px',
                        color: tableToken.dataTable.table.body.cell.color,
                        fontSize: tableToken.dataTable.table.body.cell.fontSize,
                        backgroundColor: foundationToken.colors.gray[0],
                      }}
                    >
                      No data available
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
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