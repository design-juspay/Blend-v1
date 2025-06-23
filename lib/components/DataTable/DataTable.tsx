import { useState, useEffect, useMemo, forwardRef } from 'react';
import {
  ChevronDown, ChevronUp, Download
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


/**
 * @description A powerful and flexible data table component that supports sorting, pagination, filtering, column management, and advanced customization.
 * Essential for displaying large datasets with rich interaction capabilities including multi-select, export functionality, and responsive design.
 * @feature Client-side and server-side sorting with customizable sort indicators
 * @feature Pagination with configurable page sizes and navigation controls
 * @feature Column visibility management with drag-and-drop reordering
 * @feature Multi-row selection with select-all functionality
 * @feature CSV export of selected data
 * @feature Striped rows and hover effects for enhanced readability
 * @feature Custom cell rendering for complex data display
 * @feature Responsive design with proper overflow handling
 * @example Basic User Data Table
 * ```tsx
 * import { DataTable, ColumnDefinition, SortDirection } from "blend-v1";
 * 
 * interface UserData {
 *   id: number;
 *   name: string;
 *   email: string;
 *   role: string;
 *   lastLogin: Date;
 *   isActive: boolean;
 * }
 * 
 * const userData: UserData[] = [
 *   {
 *     id: 1,
 *     name: "Sarah Johnson",
 *     email: "sarah.j@company.com",
 *     role: "Admin",
 *     lastLogin: new Date("2024-01-15"),
 *     isActive: true
 *   },
 *   {
 *     id: 2,
 *     name: "Mike Chen",
 *     email: "mike.chen@company.com",
 *     role: "User",
 *     lastLogin: new Date("2024-01-10"),
 *     isActive: false
 *   }
 * ];
 * 
 * const columns: ColumnDefinition<UserData>[] = [
 *   {
 *     field: "name",
 *     header: "Full Name",
 *     isSortable: true,
 *     width: "200px"
 *   },
 *   {
 *     field: "email",
 *     header: "Email Address",
 *     isSortable: true
 *   },
 *   {
 *     field: "role",
 *     header: "Role",
 *     width: "120px"
 *   }
 * ];
 * 
 * <DataTable<UserData>
 *   data={userData}
 *   columns={columns}
 *   idField="id"
 *   title="User Management"
 *   description="Manage team members and their permissions"
 *   isStriped={true}
 *   isHoverable={true}
 * />
 * ```
 * @example Intermediate Table with Custom Rendering
 * ```tsx
 * import { DataTable, ColumnDefinition, SortDirection } from "blend-v1";
 * import { Badge, Avatar, Button } from "blend-v1";
 * import { MoreHorizontal, Edit, Trash } from "lucide-react";
 * 
 * interface ProjectData {
 *   id: string;
 *   name: string;
 *   status: "active" | "paused" | "completed";
 *   owner: { name: string; avatar: string };
 *   progress: number;
 *   dueDate: Date;
 * }
 * 
 * const projectData: ProjectData[] = [
 *   {
 *     id: "proj-001",
 *     name: "Website Redesign",
 *     status: "active",
 *     owner: { name: "Alice Smith", avatar: "/avatars/alice.jpg" },
 *     progress: 75,
 *     dueDate: new Date("2024-02-15")
 *   },
 *   {
 *     id: "proj-002", 
 *     name: "Mobile App Development",
 *     status: "paused",
 *     owner: { name: "Bob Wilson", avatar: "/avatars/bob.jpg" },
 *     progress: 45,
 *     dueDate: new Date("2024-03-01")
 *   }
 * ];
 * 
 * const columns: ColumnDefinition<ProjectData>[] = [
 *   {
 *     field: "name",
 *     header: "Project Name",
 *     isSortable: true,
 *     width: "250px"
 *   },
 *   {
 *     field: "status",
 *     header: "Status",
 *     width: "120px",
 *     renderCell: (value) => (
 *       <Badge 
 *         variant={value === "active" ? "success" : value === "paused" ? "warning" : "default"}
 *         text={String(value).charAt(0).toUpperCase() + String(value).slice(1)}
 *       />
 *     )
 *   },
 *   {
 *     field: "owner",
 *     header: "Project Owner",
 *     width: "200px",
 *     renderCell: (value, row) => (
 *       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
 *         <Avatar src={row.owner.avatar} alt={row.owner.name} size="sm" />
 *         <span>{row.owner.name}</span>
 *       </div>
 *     )
 *   },
 *   {
 *     field: "progress",
 *     header: "Progress",
 *     width: "150px",
 *     isSortable: true,
 *     renderCell: (value) => (
 *       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
 *         <div style={{ 
 *           width: '60px', 
 *           height: '8px', 
 *           backgroundColor: '#e5e7eb',
 *           borderRadius: '4px',
 *           overflow: 'hidden'
 *         }}>
 *           <div 
 *             style={{ 
 *               width: `${value}%`, 
 *               height: '100%', 
 *               backgroundColor: '#10b981' 
 *             }} 
 *           />
 *         </div>
 *         <span>{value}%</span>
 *       </div>
 *     )
 *   }
 * ];
 * 
 * <DataTable<ProjectData>
 *   data={projectData}
 *   columns={columns}
 *   idField="id"
 *   title="Project Dashboard"
 *   description="Track project progress and team assignments"
 *   isStriped={true}
 *   isHoverable={true}
 *   defaultSort={{ field: "dueDate", direction: SortDirection.ASCENDING }}
 *   enableColumnManager={true}
 *   showToolbar={true}
 * />
 * ```
 * @example Advanced Table with Full Features
 * ```tsx
 * import { DataTable, ColumnDefinition, SortDirection, PaginationConfig } from "blend-v1";
 * import { useState } from "react";
 * import { formatDate } from "date-fns";
 * 
 * interface TransactionData {
 *   id: string;
 *   date: Date;
 *   amount: number;
 *   type: "income" | "expense";
 *   category: string;
 *   description: string;
 *   status: "pending" | "completed" | "failed";
 * }
 * 
 * function TransactionTable() {
 *   const [currentPage, setCurrentPage] = useState(1);
 *   const [pageSize, setPageSize] = useState(25);
 *   const [sortConfig, setSortConfig] = useState({ field: "date", direction: SortDirection.DESCENDING });
 * 
 *   const transactionData: TransactionData[] = [
 *     {
 *       id: "txn-001",
 *       date: new Date("2024-01-15"),
 *       amount: 2500.00,
 *       type: "income",
 *       category: "Salary",
 *       description: "Monthly salary payment",
 *       status: "completed"
 *     },
 *     {
 *       id: "txn-002",
 *       date: new Date("2024-01-14"),
 *       amount: -85.99,
 *       type: "expense",
 *       category: "Groceries",
 *       description: "Weekly grocery shopping",
 *       status: "completed"
 *     },
 *     {
 *       id: "txn-003",
 *       date: new Date("2024-01-13"),
 *       amount: -1200.00,
 *       type: "expense",
 *       category: "Rent",
 *       description: "Monthly rent payment",
 *       status: "pending"
 *     }
 *   ];
 * 
 *   const columns: ColumnDefinition<TransactionData>[] = [
 *     {
 *       field: "date",
 *       header: "Date",
 *       isSortable: true,
 *       width: "120px",
 *       renderCell: (value) => formatDate(new Date(value as string), "MMM dd, yyyy")
 *     },
 *     {
 *       field: "description",
 *       header: "Description",
 *       isSortable: true,
 *       width: "250px"
 *     },
 *     {
 *       field: "category",
 *       header: "Category",
 *       width: "120px"
 *     },
 *     {
 *       field: "amount",
 *       header: "Amount",
 *       isSortable: true,
 *       width: "120px",
 *       renderCell: (value) => {
 *         const amount = Number(value);
 *         const isPositive = amount >= 0;
 *         return (
 *           <span style={{ 
 *             color: isPositive ? '#10b981' : '#ef4444',
 *             fontWeight: '600'
 *           }}>
 *             {isPositive ? '+' : ''}${Math.abs(amount).toFixed(2)}
 *           </span>
 *         );
 *       }
 *     },
 *     {
 *       field: "status",
 *       header: "Status",
 *       width: "100px",
 *       renderCell: (value) => {
 *         const statusColors = {
 *           completed: '#10b981',
 *           pending: '#f59e0b',
 *           failed: '#ef4444'
 *         };
 *         return (
 *           <span style={{ 
 *             color: statusColors[value as keyof typeof statusColors],
 *             fontWeight: '500',
 *             textTransform: 'capitalize'
 *           }}>
 *             {String(value)}
 *           </span>
 *         );
 *       }
 *     }
 *   ];
 * 
 *   const paginationConfig: PaginationConfig = {
 *     currentPage,
 *     pageSize,
 *     totalRows: transactionData.length,
 *     pageSizeOptions: [10, 25, 50, 100]
 *   };
 * 
 *   return (
 *     <DataTable<TransactionData>
 *       data={transactionData}
 *       columns={columns}
 *       idField="id"
 *       title="Financial Transactions"
 *       description="Complete transaction history with filtering and export capabilities"
 *       isStriped={true}
 *       isHoverable={true}
 *       defaultSort={sortConfig}
 *       enableColumnManager={true}
 *       enableFiltering={true}
 *       showToolbar={true}
 *       pagination={paginationConfig}
 *       onPageChange={setCurrentPage}
 *       onPageSizeChange={setPageSize}
 *       onSortChange={setSortConfig}
 *       className="financial-table"
 *     />
 *   );
 * }
 * ```
 */
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