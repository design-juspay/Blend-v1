import { useState, useEffect, useMemo, forwardRef } from 'react';
import {
  ChevronDown, ChevronUp, Download
} from 'lucide-react';
import { styled } from 'styled-components';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition } from './types';
import dataTableTokens from './dataTable.tokens';
import {

  filterData,
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
import { FOUNDATION_THEME } from '../../tokens';

const Table = styled.table<{ isStriped?: boolean; isHoverable?: boolean }>`
  ${dataTableTokens.table.base}
  table-layout: fixed;
`;

const TableHead = styled.thead`
  ${dataTableTokens.thead.base}
`;

const TableHeaderCell = styled.th<{ isSortable?: boolean; width?: string }>`
  ${dataTableTokens.th.base}
  ${props => props.isSortable && dataTableTokens.th.sortable}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableBody = styled.tbody`
  ${dataTableTokens.tbody}
`;

const TableRow = styled.tr`
  ${dataTableTokens.tr.base}
`;

const TableCell = styled.td<{ width?: string }>`
  ${dataTableTokens.td.base}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 0;
`;


const EmptyStateCell = styled.td`
  ${dataTableTokens.td.base}
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
    enableFiltering = true,
    enableColumnManager = true,
    showToolbar = true,
    pagination = {
      currentPage: 1,
      pageSize: 10,
      totalRows: 0,
      pageSizeOptions: [10, 20, 50, 100],
    },
    onPageChange,
    onPageSizeChange,
    onSortChange,
  }: DataTableProps<T>
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(defaultSort || null);
  const [filters, _setFilters] = useState<Record<string, unknown>>({});
  const [visibleColumns, setVisibleColumns] = useState<ColumnDefinition<T>[]>(() => {
    return initialColumns.filter(col => col.isVisible !== false);
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage || 1);
  const [pageSize, setPageSize] = useState<number>(pagination?.pageSize || 10);

  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [selectAll, setSelectAll] = useState(false);

  const totalRows = pagination?.totalRows || data.length;

  const processedData = useMemo(() => {
    let result = [...data];

    if (enableFiltering && Object.keys(filters).length > 0) {
      result = filterData(result, filters);
    }

    if (sortConfig && sortConfig.field) {
      result = sortData(result, sortConfig);
    }

    return result;
  }, [data, filters, sortConfig, enableFiltering]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return processedData.slice(startIndex, startIndex + pageSize);
  }, [processedData, currentPage, pageSize]);

  useEffect(() => {
    setSelectedRows({});
    setSelectAll(false);
  }, [data]);

  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    // We only care about boolean values for selectAll
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

  return (
    <Block style={{
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
        overflowX: 'auto',
      }}>
        <Table isStriped={isStriped} isHoverable={isHoverable}>
          <TableHead>
            <TableRow>
              <TableHeaderCell isSortable={false}>
                <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
                  <Checkbox
                    checked={selectAll}
                    onCheckedChange={handleSelectAll}
                    size={CheckboxSize.MEDIUM}
                  />
                </Block>
              </TableHeaderCell>

              {visibleColumns.map((column) => (
                <TableHeaderCell
                  key={String(column.field)}
                  isSortable={!!column.isSortable}
                  width={column.width || 'auto'}
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
              ))}

              {enableColumnManager && (
                <TableHeaderCell isSortable={false} width="40px">
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
              currentData.map((row) => (
                <TableRow key={String(row[idField])}>
                  <TableCell>
                    <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
                      <Checkbox
                        checked={!!selectedRows[String(row[idField])]}
                        onCheckedChange={() => handleRowSelect(row[idField])}
                        size={CheckboxSize.MEDIUM}
                      />
                    </Block>
                  </TableCell>

                  {visibleColumns.map((column) => (
                    <TableCell 
                      key={`${String(row[idField])}-${String(column.field)}`}
                      width={column.width || 'auto'}
                    >
                      <Block 
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          width: '100%'
                        }}
                        title={column.renderCell 
                          ? String(column.renderCell(row[column.field], row)) 
                          : (row[column.field] != null ? String(row[column.field]) : '')
                        }
                      >
                        {column.renderCell
                          ? column.renderCell(row[column.field], row)
                          : row[column.field] != null ? String(row[column.field]) : ''}
                      </Block>
                    </TableCell>
                  ))}

                  {enableColumnManager && (
                    <TableCell />
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <EmptyStateCell
                  colSpan={visibleColumns.length + (enableColumnManager ? 2 : 1)}
                >
                  No data available
                </EmptyStateCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {pagination && (
          <DataTablePagination
            currentPage={currentPage}
            pageSize={pageSize}
            totalRows={totalRows}
            pageSizeOptions={pagination.pageSizeOptions}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        )}
      </Block>
    </Block>
  );
});

DataTable.displayName = "DataTable";

export default DataTable; 