import React, { useState, useEffect, useMemo } from 'react';
import {
  ChevronDown, ChevronUp, Download
} from 'lucide-react';
import { DataTableProps, SortDirection, SortConfig, ColumnDefinition } from './types';
import {
  filterData,
  sortData,
} from './dataTableUtils';
import {
  StyledDataTableContainer,
  StyledDataTableHeader,
  StyledDataTableTitle,
  StyledDataTableDescription,
  StyledTable,
  StyledTableHead,
  StyledTableHeaderCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledTableWrapper,
  StyledSortIcon
} from './StyledDataTable';
import { DataTablePagination } from './DataTablePagination';
import { Button } from '../Button';
import { ButtonType } from '../Button/types';
import { Checkbox } from '../Checkbox';
import { CheckboxSize } from '../Checkbox/types';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';

const DataTable = React.forwardRef(<T extends Record<string, unknown>>(
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
    // onFilterChange,
  }: DataTableProps<T>
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(defaultSort || null);
  const [filters, _setFilters] = useState<Record<string, unknown>>({});
  const [visibleColumns] = useState<ColumnDefinition<T>[]>(() => {
    return initialColumns.filter(col => col.isVisible !== false);
  });
  const [currentPage, setCurrentPage] = useState<number>(pagination?.currentPage || 1);
  const [pageSize, setPageSize] = useState<number>(pagination?.pageSize || 10);

  // Track selected rows
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

  // Reset selection when data changes
  useEffect(() => {
    setSelectedRows({});
    setSelectAll(false);
  }, [data]);

  // Handle select all
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

  // Handle individual row selection
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

    // Create CSV headers
    const headers = visibleColumns.map(col => col.header);
    const fields = visibleColumns.map(col => col.field);

    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    selectedData.forEach(row => {
      const rowData = fields.map(field => {
        const value = row[field];
        // Handle comma in values by wrapping in quotes
        return value != null ? `"${String(value).replace(/"/g, '""')}"` : '';
      });
      csvContent += rowData.join(',') + '\n';
    });

    // Create and download blob
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
    <StyledDataTableContainer>
      {(title || description || showToolbar) && (
        <StyledDataTableHeader>
          <Block display="flex" flexDirection="column">
            {title && <StyledDataTableTitle>{title}</StyledDataTableTitle>}
            {description && <StyledDataTableDescription>{description}</StyledDataTableDescription>}
          </Block>

          {showToolbar && (
            <Block display="flex" justifyContent="space-between" alignItems="center" marginTop="16px" gap="8px">
              {hasSelectedRows && (
                <Button
                  buttonType={ButtonType.SECONDARY}
                  leadingIcon={Download}
                  onClick={exportToCSV}
                >
                  Export
                </Button>
              )}
            </Block>
          )}
        </StyledDataTableHeader>
      )}

      <StyledTableWrapper>
        <StyledTable $isStriped={isStriped} $isHoverable={isHoverable}>
          <StyledTableHead>
            <StyledTableRow>
              <StyledTableHeaderCell $isSortable={false}>
                <Block display="flex" alignItems="center" justifyContent="center">
                  <Checkbox
                    checked={selectAll}
                    onCheckedChange={handleSelectAll}
                    size={CheckboxSize.MEDIUM}
                  />
                </Block>
              </StyledTableHeaderCell>

              {visibleColumns.map((column) => (
                <StyledTableHeaderCell
                  key={String(column.field)}
                  $isSortable={!!column.isSortable}
                  style={column.width ? { width: column.width } : undefined}
                  onClick={() => column.isSortable && handleSort(column.field)}
                >
                  <Block display="flex" alignItems="center" justifyContent="space-between">
                    <PrimitiveText as="span">{column.header}</PrimitiveText>
                    {column.isSortable && (
                      <StyledSortIcon
                        $direction={
                          sortConfig?.field === column.field 
                            ? sortConfig.direction === SortDirection.ASCENDING ? 'asc' : 'desc'
                            : 'none'
                        }
                      >
                        {sortConfig?.field === column.field && sortConfig.direction === SortDirection.ASCENDING ? (
                          <ChevronUp size={16} />
                        ) : sortConfig?.field === column.field && sortConfig.direction === SortDirection.DESCENDING ? (
                          <ChevronDown size={16} />
                        ) : (
                          <Block width="16px" height="16px" />
                        )}
                      </StyledSortIcon>
                    )}
                  </Block>
                </StyledTableHeaderCell>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <StyledTableBody>
            {currentData.length > 0 ? (
              currentData.map((row, index) => (
                <StyledTableRow 
                  key={String(row[idField])}
                  $isStriped={isStriped}
                  $isOdd={index % 2 === 1}
                  $isHoverable={isHoverable}
                >
                  <StyledTableCell>
                    <Block display="flex" alignItems="center" justifyContent="center">
                      <Checkbox
                        checked={!!selectedRows[String(row[idField])]}
                        onCheckedChange={() => handleRowSelect(row[idField])}
                        size={CheckboxSize.MEDIUM}
                      />
                    </Block>
                  </StyledTableCell>

                  {visibleColumns.map((column) => (
                    <StyledTableCell key={`${String(row[idField])}-${String(column.field)}`}>
                      {column.renderCell
                        ? column.renderCell(row[column.field], row)
                        : row[column.field] != null ? String(row[column.field]) : ''}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  colSpan={visibleColumns.length + 1}
                  style={{ textAlign: 'center', padding: '16px' }}
                >
                  <PrimitiveText color="#6B7280">No data available</PrimitiveText>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </StyledTableBody>
        </StyledTable>
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
      </StyledTableWrapper>
    </StyledDataTableContainer>
  );
});

DataTable.displayName = "DataTable";

export default DataTable; 