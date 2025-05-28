import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DataTablePaginationProps } from './types';
import {
  StyledPaginationContainer,
  StyledPaginationText,
  StyledPaginationButton,
  StyledPaginationControls,
  StyledPaginationSelect
} from './StyledDataTable';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';

export const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  currentPage,
  pageSize,
  totalRows,
  pageSizeOptions = [10, 20, 50, 100],
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalRows / pageSize);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value, 10);
    onPageSizeChange(newPageSize);
  };

  return (
    <StyledPaginationContainer>
      <StyledPaginationText>
        <PrimitiveText as="span">
          Rows per page:
        </PrimitiveText>
        <StyledPaginationSelect
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {pageSizeOptions.map((size: number) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </StyledPaginationSelect>
      </StyledPaginationText>

      <StyledPaginationControls>
        <StyledPaginationButton
          $isDisabled={currentPage <= 1}
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
        >
          <ChevronLeft size={16} />
        </StyledPaginationButton>

        {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
          let pageNumber;
          if (totalPages <= 5) {
            pageNumber = index + 1;
          } else if (currentPage <= 3) {
            pageNumber = index + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNumber = totalPages - 4 + index;
          } else {
            pageNumber = currentPage - 2 + index;
          }

          return (
            <StyledPaginationButton
              key={pageNumber}
              $isDisabled={false}
              $isActive={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </StyledPaginationButton>
          );
        })}

        <StyledPaginationButton
          $isDisabled={currentPage >= totalPages}
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight size={16} />
        </StyledPaginationButton>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
}; 