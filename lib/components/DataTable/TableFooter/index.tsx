import { forwardRef } from 'react';
import { TableFooterProps } from './types';
import { DataTablePagination } from '../DataTablePagination';
import Block from '../../Primitives/Block/Block';
import dataTableTokens from '../dataTable.tokens';

const TableFooter = forwardRef<HTMLDivElement, TableFooterProps>(({
  pagination,
  currentPage,
  pageSize,
  totalRows,
  onPageChange,
  onPageSizeChange,
}, ref) => {
  if (!pagination) {
    return null;
  }

  return (
    <Block
      ref={ref}
      style={{
        ...dataTableTokens.pagination.container,
        flexShrink: 0,
      }}
    >
      <DataTablePagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalRows={totalRows}
        pageSizeOptions={pagination.pageSizeOptions}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </Block>
  );
});

TableFooter.displayName = "TableFooter";

export default TableFooter; 