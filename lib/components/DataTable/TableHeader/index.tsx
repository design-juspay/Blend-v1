import { forwardRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import { TableHeaderProps } from './types';
import { SortDirection } from '../types';
import dataTableTokens from '../dataTable.tokens';
import { Checkbox } from '../../../main';
import { CheckboxSize } from '../../Checkbox/types';
import { ColumnManager } from '../ColumnManager';
import Block from '../../Primitives/Block/Block';
import PrimitiveText from '../../Primitives/PrimitiveText/PrimitiveText';
import { FOUNDATION_THEME } from '../../../tokens';

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

const TableRow = styled.tr`
  ${dataTableTokens.tr.base}
`;

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps<any>>(({
  visibleColumns,
  initialColumns,
  sortConfig,
  selectAll,
  enableInlineEdit = false,
  enableColumnManager = true,
  onSort,
  onSelectAll,
  onColumnChange,
  getColumnWidth,
}, ref) => {
  return (
    <TableHead ref={ref} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <TableRow>
        <TableHeaderCell $isSortable={false} width="60px" style={{ minWidth: '60px', maxWidth: '60px' }}>
          <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
            <Checkbox
              checked={selectAll}
              onCheckedChange={onSelectAll}
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
              onClick={() => column.isSortable && onSort(column.field)}
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
                onColumnChange={onColumnChange}
              />
            </Block>
          </TableHeaderCell>
        )}
      </TableRow>
    </TableHead>
  );
});

TableHeader.displayName = "TableHeader";

export default TableHeader; 