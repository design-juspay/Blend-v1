import { useState, useEffect, useMemo, forwardRef } from 'react';
import {
  ChevronDown, ChevronUp, Download, Edit, Save, X
} from 'lucide-react';
import { styled } from 'styled-components';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition } from './types';
import dataTableTokens from './dataTable.tokens';
import {
  sortData,
} from './utils';
import { DataTablePagination } from './DataTablePagination';
import Button from '../Button/Button';
import { ButtonSize, ButtonType } from '../Button/types';
import { Checkbox } from '../../main';
import { CheckboxSize } from '../Checkbox/types';
import { ColumnManager } from './ColumnManager';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import PrimitiveInput from '../Primitives/PrimitiveInput/PrimitiveInput';
import { FOUNDATION_THEME } from '../../tokens';

const Table = styled.table<{ $isStriped?: boolean; $isHoverable?: boolean }>`
  ${dataTableTokens.table.base}
  table-layout: fixed;
  width: 100%;
  min-width: 800px;
`;

const TableHead = styled.thead`
  ${dataTableTokens.thead.base}
  background-color: ${FOUNDATION_THEME.colors.gray[25]};
`;

const TableHeaderCell = styled.th<{ $isSortable?: boolean; width?: string }>`
  ${dataTableTokens.th.base}
  ${props => props.$isSortable && dataTableTokens.th.sortable}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
`;

const TableBody = styled.tbody`
  ${dataTableTokens.tbody}
`;

const TableRow = styled.tr`
  ${dataTableTokens.tr.base}
`;

const TableCell = styled.td<{ width?: string; $hasCustomContent?: boolean }>`
  ${dataTableTokens.td.base}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  box-sizing: border-box;
  max-width: 0;
`;

const EmptyStateCell = styled.td`
  ${dataTableTokens.td.base}
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[100]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
    onRowSave,
    onRowCancel,
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
  
  // Inline edit state
  const [editingRows, setEditingRows] = useState<Record<string, boolean>>({});
  const [editValues, setEditValues] = useState<Record<string, T>>({});

  const totalRows = pagination?.totalRows || data.length;

  const processedData = useMemo(() => {
    let result = [...data];

    if (sortConfig && sortConfig.field) {
      result = sortData(result, sortConfig);
    }

    return result;
  }, [data, sortConfig]);

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

  const hasSelectedRows = Object.values(selectedRows).some(selected => selected);

  // Calculate column widths to ensure fixed layout
  const getColumnWidth = (column: ColumnDefinition<T>, index: number) => {
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

  const renderEditableCell = (column: ColumnDefinition<T>, row: T, isEditing: boolean) => {
    const rowId = String(row[idField]);
    const currentValue = isEditing ? editValues[rowId]?.[column.field] : row[column.field];

    if (isEditing && column.isEditable) {
      if (column.renderEditCell) {
        return column.renderEditCell(
          currentValue,
          isEditing ? editValues[rowId] : row,
          (value) => handleFieldChange(row[idField], column.field, value)
        );
      } else {
        // Default edit input
        return (
          <Block style={{ 
            width: '100%', 
            padding: '2px 0',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <PrimitiveInput
              value={String(currentValue || '')}
              onChange={(e) => handleFieldChange(row[idField], column.field, e.target.value)}
              style={{
                width: 'calc(100% - 8px)',
                height: '32px',
                border: `1px solid ${FOUNDATION_THEME.colors.gray[300]}`,
                borderRadius: '4px',
                padding: `${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[8]}`,
                fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
                color: '#6b7280',
                fontWeight: FOUNDATION_THEME.font.weight[500],
                backgroundColor: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                margin: '0',
                minWidth: '0',
                maxWidth: '100%'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 1px #dbeafe';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </Block>
        );
      }
    }

    // Display mode
    if (column.renderCell) {
      return (
        <Block style={{ width: '100%' }}>
          {column.renderCell(currentValue, isEditing ? editValues[rowId] : row)}
        </Block>
      );
    }

    return (
      <Block 
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          lineHeight: '1.5'
        }}
        title={currentValue != null ? String(currentValue) : ''}
      >
        {currentValue != null ? String(currentValue) : ''}
      </Block>
    );
  };

  return (
    <Block ref={ref} style={{
      ...dataTableTokens.container,
    }}>
      {(title || description || showToolbar) && (
        <Block style={{
          ...dataTableTokens.header.container,
        }}>
          <Block display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[10]}>
            {title && <PrimitiveText as='h2' style={{
              ...dataTableTokens.header.title,
            }}>{title}</PrimitiveText>}
            {description && <PrimitiveText as='p' style={{
              ...dataTableTokens.header.description,
            }}>{description}</PrimitiveText>}
          </Block>

          {showToolbar && (
            <Block display='flex' justifyContent='space-between' alignItems='center' gap={8}>
              {hasSelectedRows && (
                <Button
                  buttonType={ButtonType.SECONDARY}
                  leadingIcon={Download}
                  onClick={exportToCSV}
                  size={ButtonSize.SMALL}
                >
                  Export
                </Button>
              )}
            </Block>
          )}
        </Block>
      )}

      <Block style={{
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        maxHeight: 'calc(100vh - 200px)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
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
              <TableHead style={{ position: 'sticky', top: 0, zIndex: 10 }}>
                <TableRow>
                  <TableHeaderCell $isSortable={false} width="60px" style={{ minWidth: '60px', maxWidth: '60px' }}>
                    <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
                      <Checkbox
                        checked={selectAll}
                        onCheckedChange={handleSelectAll}
                        size={CheckboxSize.MEDIUM}
                      />
                    </Block>
                  </TableHeaderCell>

                  {visibleColumns.map((column, index) => {
                    const columnWidth = getColumnWidth(column, index);
                    return (
                      <TableHeaderCell
                        key={String(column.field)}
                        $isSortable={!!column.isSortable}
                        width={columnWidth}
                        style={{ 
                          width: columnWidth,
                          minWidth: columnWidth,
                          maxWidth: columnWidth
                        }}
                        onClick={() => column.isSortable && handleSort(column.field)}
                      >
                        <Block display='flex' alignItems='center' justifyContent='space-between'>
                          <PrimitiveText 
                            as='span' 
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              minWidth: 0,
                              flex: 1
                            }}
                            title={column.header}
                          >
                            {column.header}
                          </PrimitiveText>
                          {column.isSortable && (
                            <Block display='flex' flexDirection='column' alignItems='center' style={{ flexShrink: 0, marginLeft: 8 }}>
                              <ChevronUp 
                                size={FOUNDATION_THEME.unit[12]} 
                                style={{ 
                                  opacity: sortConfig?.field === String(column.field) && sortConfig.direction === SortDirection.ASCENDING ? 1 : 0.3,
                                }} 
                              />
                              <ChevronDown 
                                size={FOUNDATION_THEME.unit[12]} 
                                style={{ 
                                  opacity: sortConfig?.field === String(column.field) && sortConfig.direction === SortDirection.DESCENDING ? 1 : 0.3,
                                }} 
                              />
                            </Block>
                          )}
                        </Block>
                      </TableHeaderCell>
                    );
                  })}

                  {enableInlineEdit && (
                    <TableHeaderCell $isSortable={false} width="100px" style={{ minWidth: '100px', maxWidth: '100px' }}>
                      <Block display='flex' alignItems='center' justifyContent='center'>
                        <PrimitiveText as='span' style={{ fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize }}>
                          Actions
                        </PrimitiveText>
                      </Block>
                    </TableHeaderCell>
                  )}

                  {enableColumnManager && (
                    <TableHeaderCell $isSortable={false} width="50px" style={{ minWidth: '50px', maxWidth: '50px' }}>
                      <Block position='relative'>
                        <ColumnManager
                          columns={initialColumns}
                          visibleColumns={visibleColumns}
                          onColumnChange={setVisibleColumns}
                        />
                      </Block>
                    </TableHeaderCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData.length > 0 ? (
                  currentData.map((row) => {
                    const rowId = String(row[idField]);
                    const isEditing = editingRows[rowId];
                    
                    return (
                      <TableRow key={rowId}>
                        <TableCell width="60px" style={{ minWidth: '60px', maxWidth: '60px' }}>
                          <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
                            <Checkbox
                              checked={!!selectedRows[rowId]}
                              onCheckedChange={() => handleRowSelect(row[idField])}
                              size={CheckboxSize.MEDIUM}
                              disabled={isEditing}
                            />
                          </Block>
                        </TableCell>

                        {visibleColumns.map((column, index) => {
                          const columnWidth = getColumnWidth(column, index);
                          return (
                            <TableCell 
                              key={`${rowId}-${String(column.field)}`}
                              width={columnWidth}
                              $hasCustomContent={!!column.renderCell || (isEditing && column.isEditable)}
                              style={{ 
                                width: columnWidth,
                                minWidth: columnWidth,
                                maxWidth: columnWidth,
                                verticalAlign: 'middle',
                                position: 'relative'
                              }}
                            >
                              <Block style={{ 
                                width: '100%', 
                                minHeight: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                overflow: 'hidden'
                              }}>
                                {renderEditableCell(column, row, isEditing)}
                              </Block>
                            </TableCell>
                          );
                        })}

                        {enableInlineEdit && (
                          <TableCell width="100px" style={{ minWidth: '100px', maxWidth: '100px' }}>
                            <Block display='flex' alignItems='center' justifyContent='center' gap={FOUNDATION_THEME.unit[4]}>
                              {isEditing ? (
                                <>
                                  <ActionButton
                                    onClick={() => handleSaveRow(row[idField])}
                                    title="Save"
                                  >
                                    <Save size={16} color={FOUNDATION_THEME.colors.green[600]} />
                                  </ActionButton>
                                  <ActionButton
                                    onClick={() => handleCancelEdit(row[idField])}
                                    title="Cancel"
                                  >
                                    <X size={16} color={FOUNDATION_THEME.colors.red[600]} />
                                  </ActionButton>
                                </>
                              ) : (
                                <ActionButton
                                  onClick={() => handleEditRow(row[idField])}
                                  title="Edit"
                                >
                                  <Edit size={16} color={FOUNDATION_THEME.colors.primary[600]} />
                                </ActionButton>
                              )}
                            </Block>
                          </TableCell>
                        )}

                        {enableColumnManager && (
                          <TableCell width="50px" style={{ minWidth: '50px', maxWidth: '50px' }} />
                        )}
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <EmptyStateCell
                      colSpan={visibleColumns.length + (enableInlineEdit ? 1 : 0) + (enableColumnManager ? 1 : 0) + 1}
                    >
                      No data available
                    </EmptyStateCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Block>
        </Block>
        
        {pagination && (
          <Block style={{
            ...dataTableTokens.pagination.container,
            flexShrink: 0,
          }}>
            <DataTablePagination
              currentPage={currentPage}
              pageSize={pageSize}
              totalRows={totalRows}
              pageSizeOptions={pagination.pageSizeOptions}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </Block>
        )}
      </Block>
    </Block>
  );
});

DataTable.displayName = "DataTable";

export default DataTable; 