import React, { forwardRef } from 'react';
import { Edit, Save, X, ChevronRight, ChevronDown } from 'lucide-react';
import { styled, css } from 'styled-components';
import { TableBodyProps } from './types';
import TableCell from '../TableCell';
import Block from '../../Primitives/Block/Block';
import { FOUNDATION_THEME } from '../../../tokens';
import  { TableTokenType } from '../dataTable.tokens';

import { useComponentToken } from '../../../context/useComponentToken';

import { ButtonV2, ButtonTypeV2, ButtonSizeV2, Checkbox, CheckboxSize } from '../../../main';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps<Record<string, unknown>>>(({
  currentData,
  visibleColumns,
  idField,
  selectedRows,
  editingRows,
  editValues,
  expandedRows,
  enableInlineEdit = false,
  enableColumnManager = true,
  enableRowExpansion = false,
  columnFreeze = 0,
  renderExpandedRow,
  isRowExpandable,
  onRowSelect,
  onEditRow,
  onSaveRow,
  onCancelEdit,
  onRowExpand,
  onFieldChange,
  onRowClick,
  getColumnWidth,
  getRowStyle,
}, ref) => {
  const getColSpan = () => {
    let colSpan = visibleColumns.length + 1;
    if (enableRowExpansion) colSpan += 1;
    if (enableInlineEdit) colSpan += 1;
    if (enableColumnManager) colSpan += 1;
    return colSpan;
  };

  const tableToken = useComponentToken("TABLE") as TableTokenType;

const TableRow = styled.tr<{ 
  isClickable?: boolean; 
  customBackgroundColor?: string;
  hasCustomBackground?: boolean;
}>`
  ${tableToken.dataTable.table.body.row}
  ${props => props.customBackgroundColor && css`
    background-color: ${props.customBackgroundColor} !important;
  `}
  
  ${props => props.isClickable && css`
    cursor: pointer;
  `}
  
  ${props => !props.hasCustomBackground && css`
    &:hover {
      background-color: ${FOUNDATION_THEME.colors.gray[100] } !important;
      
      td {
        background-color: ${FOUNDATION_THEME.colors.gray[100]} !important;
      }
    }
  `}
`;

const StyledTableCell = styled.td<{ 
  width?: string;
  customBackgroundColor?: string;
  hasCustomBackground?: boolean;
}>`
  ${tableToken.dataTable.table.body.cell}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.customBackgroundColor && css`
    background-color: ${props.customBackgroundColor} !important;
  `}
  overflow: hidden;
  box-sizing: border-box;
  max-width: 0;
  
  ${props => !props.hasCustomBackground && css`
    tr:hover & {
      background-color: ${FOUNDATION_THEME.colors.gray[100]} !important;
    }
  `}
`;

const ExpandedCell = styled.td`
${tableToken.dataTable.table.body.cell}
${tableToken.dataTable.table.body.cell.expandable}
`;

const ExpandButton = styled.button`
  ${tableToken.dataTable.table.body.cell.expandable.expandButton}
`;



  return (
    <tbody ref={ref}>
      {currentData.length > 0 ? (
        currentData.map((row, index) => {
          const rowId = String(row[idField]);
          const isEditing = editingRows[rowId];
          const isExpanded = expandedRows[rowId];
          const canExpand = isRowExpandable ? isRowExpandable(row, index) : true;
          
          const rowStyling = getRowStyle ? getRowStyle(row, index) : {};
          const hasCustomBackground = !!rowStyling.backgroundColor;
          
          return (
            <React.Fragment key={rowId}>
              <TableRow 
                isClickable={!!onRowClick}
                customBackgroundColor={rowStyling.backgroundColor}
                hasCustomBackground={hasCustomBackground}
                onClick={() => onRowClick && onRowClick(row, index)}
                style={{
                  // Apply other styles but not backgroundColor to avoid conflicts
                  ...Object.fromEntries(
                    Object.entries(rowStyling).filter(([key]) => key !== 'backgroundColor')
                  ),
                }}
              >
                {enableRowExpansion && (
                  <StyledTableCell 
                    width="50px" 
                    customBackgroundColor={rowStyling.backgroundColor}
                    hasCustomBackground={hasCustomBackground}
                    style={{ 
                      minWidth: `${FOUNDATION_THEME.unit[52]}`, 
                      maxWidth: `${FOUNDATION_THEME.unit[52]}`,
                      ...(columnFreeze > 0 && {
                        position: 'sticky',
                        left: '0px',
                        zIndex: 40,
                        borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
                      }),
                    }}
                  >
                    <Block 
                      display='flex' 
                      alignItems='center' 
                      justifyContent='center'
                      onClick={(e) => e.stopPropagation()}
                    >
                      {canExpand ? (
                        <ExpandButton
                          onClick={() => onRowExpand(row[idField])}
                          title={isExpanded ? 'Collapse row' : 'Expand row'}
                        >
                          {isExpanded ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </ExpandButton>
                      ) : (
                        <></>
                      )}
                    </Block>
                  </StyledTableCell>
                )}

                <StyledTableCell 
                  customBackgroundColor={rowStyling.backgroundColor}
                  hasCustomBackground={hasCustomBackground}
                  style={{
                    ...(columnFreeze > 0 && {
                      position: 'sticky',
                      left: enableRowExpansion ? '50px' : '0px',
                      zIndex: 40,
                      borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
                    }),
                  }}
                >
                  <Block 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='center' 
                    width={FOUNDATION_THEME.unit[40]}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      checked={!!selectedRows[rowId]}
                      onCheckedChange={() => onRowSelect(row[idField])}
                      size={CheckboxSize.MEDIUM}
                      disabled={isEditing}
                    />
                  </Block>
                </StyledTableCell>

                {visibleColumns.map((column, colIndex) => {
                  const columnStyles = getColumnWidth(column, colIndex);
                  const currentValue = isEditing ? editValues[rowId]?.[column.field] : row[column.field];
                  
                  // Calculate frozen column positioning for body cells
                  const getFrozenBodyStyles = () => {
                    if (colIndex >= columnFreeze) return {};
                    
                    let leftOffset = 60;
                    if (enableRowExpansion) leftOffset += 50;
                    
                    for (let i = 0; i < colIndex; i++) {
                      const prevColumn = visibleColumns[i];
                      let columnWidth = 120;
                      
                      if (prevColumn.minWidth) {
                        columnWidth = parseInt(prevColumn.minWidth.replace(/px|%|em|rem/g, '')) || 120;
                      } else if (prevColumn.maxWidth) {
                        columnWidth = parseInt(prevColumn.maxWidth.replace(/px|%|em|rem/g, '')) || 120;
                      } else {
                        const prevStyles = getColumnWidth(prevColumn, i);
                        if (prevStyles.width) {
                          columnWidth = parseInt(String(prevStyles.width).replace(/px|%|em|rem/g, '')) || 120;
                        } else if (prevStyles.minWidth) {
                          columnWidth = parseInt(String(prevStyles.minWidth).replace(/px|%|em|rem/g, '')) || 120;
                        }
                      }
                      
                      leftOffset += columnWidth;
                    }
                    
                    return {
                      position: 'sticky' as const,
                      left: `${leftOffset}px`,
                      zIndex: 40,
                      borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
                    };
                  };
                  
                  return (
                    <TableCell
                      key={`${rowId}-${String(column.field)}`}
                      column={column}
                      row={isEditing ? editValues[rowId] : row}
                      rowIndex={index}
                      isEditing={isEditing}
                      currentValue={currentValue}
                      width={columnStyles}
                      frozenStyles={getFrozenBodyStyles()}
                      onFieldChange={(value) => onFieldChange(row[idField], column.field, value)}
                    />
                  );
                })}

                {enableInlineEdit && (
                  <StyledTableCell
                    customBackgroundColor={rowStyling.backgroundColor}
                    hasCustomBackground={hasCustomBackground}
                  >
                    <Block 
                      display='flex' 
                      alignItems='center' 
                      justifyContent='center' 
                      gap={FOUNDATION_THEME.unit[4]}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isEditing ? (
                        <>
                          <ButtonV2
                            onClick={() => onSaveRow(row[idField])}
                            title="Save"
                            buttonType={ButtonTypeV2.SECONDARY}
                            leadingIcon={<Save size={16} />}
                            size={ButtonSizeV2.SMALL}
                          />
                          <ButtonV2
                            onClick={() => onCancelEdit(row[idField])}
                            title="Cancel"
                            buttonType={ButtonTypeV2.SECONDARY}
                            leadingIcon={<X size={16} />}
                            size={ButtonSizeV2.SMALL}
                          />
                        </>
                      ) : (
                        <ButtonV2
                          onClick={() => onEditRow(row[idField])}
                          title="Edit"
                          buttonType={ButtonTypeV2.SECONDARY}
                          leadingIcon={<Edit size={16} />}
                          size={ButtonSizeV2.SMALL}
                        />
                      )}
                    </Block>
                  </StyledTableCell>
                )}

                {enableColumnManager && (
                  <StyledTableCell 
                    width="50px" 
                    customBackgroundColor={rowStyling.backgroundColor}
                    hasCustomBackground={hasCustomBackground}
                    style={{ minWidth: '50px', maxWidth: '50px' }} 
                  />
                )}
              </TableRow>

              {enableRowExpansion && isExpanded && renderExpandedRow && canExpand && (
                <TableRow key={`${rowId}-expanded`} isClickable={false}>
                  <ExpandedCell colSpan={getColSpan()}>
                    {renderExpandedRow({
                      row,
                      index,
                      isExpanded,
                      toggleExpansion: () => onRowExpand(row[idField])
                    })}
                  </ExpandedCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        })
      ) : null}
    </tbody>
  );
});

TableBody.displayName = "TableBody";

export default TableBody; 