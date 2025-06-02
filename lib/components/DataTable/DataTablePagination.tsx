import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FOUNDATION_THEME } from '../../tokens';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import PrimitiveButton from '../Primitives/PrimitiveButton/PrimitiveButton';

const PageSizeTrigger = styled(PrimitiveButton)<{ isOpen?: boolean }>`
  border: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  border-radius: ${FOUNDATION_THEME.border.radius[2]};
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
  min-width: 60px;

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
  }

  &[data-state="open"] {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
  }
`;

const DropdownContent = styled(DropdownMenu.Content)`
  min-width: 60px;
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
  border: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  border-radius: ${FOUNDATION_THEME.border.radius[2]}px;
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: ${FOUNDATION_THEME.unit[4]}px;
  z-index: 1000;
`;

const DropdownItem = styled(DropdownMenu.Item)`
  padding: ${FOUNDATION_THEME.unit[6]}px ${FOUNDATION_THEME.unit[8]}px;
  border-radius: ${FOUNDATION_THEME.border.radius[2]};
  cursor: pointer;
  font-size: ${FOUNDATION_THEME.font.size.body.sm.fontSize}px;
  outline: none;

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
  }

  &[data-highlighted] {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
  }
`;

const PageNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${FOUNDATION_THEME.unit[4]}px;
`;

const PageEllipsis = styled.span`
  padding: ${FOUNDATION_THEME.unit[6]}px ${FOUNDATION_THEME.unit[4]}px;
  color: ${FOUNDATION_THEME.colors.gray[400]};
  font-size: ${FOUNDATION_THEME.font.size.body.sm.fontSize}px;
`;

type DataTablePaginationProps = {
  currentPage: number;
  pageSize: number;
  totalRows: number;
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export function DataTablePagination({
  currentPage,
  pageSize,
  totalRows,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
}: DataTablePaginationProps) {
  const [pageSizeOpen, setPageSizeOpen] = useState(false);
  
  const totalPages = Math.ceil(totalRows / pageSize);
  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, totalRows);

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }
      
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3);
      }
      
      if (startPage > 2) {
        pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };
  
  const pageNumbers = useMemo(getPageNumbers, [currentPage, totalPages]);
  
  return (
    <Block 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      padding={`${FOUNDATION_THEME.unit[16]}px ${FOUNDATION_THEME.unit[24]}px`}
      borderTop={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}
      backgroundColor={FOUNDATION_THEME.colors.gray[25]}
    >
      <Block display="flex" alignItems="center" gap={FOUNDATION_THEME.unit[8]}>
        <PrimitiveText 
          as="span" 
          fontSize={FOUNDATION_THEME.font.size.body.sm.fontSize}
          color={FOUNDATION_THEME.colors.gray[600]}
        >
          Rows per page:
        </PrimitiveText>
        <DropdownMenu.Root open={pageSizeOpen} onOpenChange={setPageSizeOpen}>
          <DropdownMenu.Trigger asChild>
            <PageSizeTrigger
              contentCentered
              gap={FOUNDATION_THEME.unit[4]}
              paddingX={FOUNDATION_THEME.unit[8]}
              paddingY={FOUNDATION_THEME.unit[4]}
            >
              {pageSize}
              {pageSizeOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </PageSizeTrigger>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownContent
              side="top"
              align="start"
              sideOffset={4}
              avoidCollisions={true}
              collisionPadding={8}
            >
              {pageSizeOptions.map((size) => (
                <DropdownItem
                  key={size}
                  onClick={() => {
                    onPageSizeChange(size);
                    setPageSizeOpen(false);
                  }}
                >
                  {size}
                </DropdownItem>
              ))}
            </DropdownContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Block>

      <PrimitiveText 
        as="span" 
        fontSize={FOUNDATION_THEME.font.size.body.sm.fontSize}
        color={FOUNDATION_THEME.colors.gray[600]}
      >
        {startRow}-{endRow} of {totalRows}
      </PrimitiveText>
      
      <Block display="flex" alignItems="center" gap={FOUNDATION_THEME.unit[8]}>
        <PrimitiveButton
          contentCentered
          size={32}
          backgroundColor="transparent"
          borderRadius={FOUNDATION_THEME.border.radius[2]}
          color={currentPage === 1 ? FOUNDATION_THEME.colors.gray[300] : FOUNDATION_THEME.colors.gray[600]}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
          _hover={{
            backgroundColor: currentPage === 1 ? "transparent" : FOUNDATION_THEME.colors.gray[50],
          }}
        >
          <ArrowLeft size={16} />
        </PrimitiveButton>

        <PageNumbersContainer>
          {pageNumbers.map((page, index) => 
            typeof page === 'number' ? (
              <PrimitiveButton
                key={index}
                contentCentered
                minWidth={32}
                height={32}
                backgroundColor={currentPage === page ? FOUNDATION_THEME.colors.primary[100] : "transparent"}
                color={currentPage === page ? FOUNDATION_THEME.colors.primary[700] : FOUNDATION_THEME.colors.gray[600]}
                borderRadius={FOUNDATION_THEME.border.radius[2]}
                onClick={() => onPageChange(page)}
                _hover={{
                  backgroundColor: currentPage === page ? FOUNDATION_THEME.colors.primary[100] : FOUNDATION_THEME.colors.gray[50],
                }}
              >
                {page}
              </PrimitiveButton>
            ) : (
              <PageEllipsis key={index}>
                {page}
              </PageEllipsis>
            )
          )}
        </PageNumbersContainer>
        
        <PrimitiveButton
          contentCentered
          size={32}
          backgroundColor="transparent"
          borderRadius={FOUNDATION_THEME.border.radius[2]}
          color={currentPage === totalPages ? FOUNDATION_THEME.colors.gray[300] : FOUNDATION_THEME.colors.gray[600]}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
          _hover={{
            backgroundColor: currentPage === totalPages ? "transparent" : FOUNDATION_THEME.colors.gray[50],
          }}
        >
          <ArrowRight size={16} />
        </PrimitiveButton>
      </Block>
    </Block>
  );
}