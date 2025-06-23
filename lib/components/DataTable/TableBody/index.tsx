import React, { forwardRef } from 'react';
import { Edit, Save, X, ChevronRight, ChevronDown } from 'lucide-react';
import { styled } from 'styled-components';
import { TableBodyProps } from './types';
import TableCell from '../TableCell';
import { ButtonSize, ButtonType, Checkbox } from '../../../main';
import { CheckboxSize } from '../../Checkbox/types';
import Block from '../../Primitives/Block/Block';
import { FOUNDATION_THEME } from '../../../tokens';
import  { TableTokenType } from '../dataTable.tokens';

import { useComponentToken } from '../../../context/useComponentToken';

import { Button } from '../../../main';

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
  renderExpandedRow,
  isRowExpandable,
  onRowSelect,
  onEditRow,
  onSaveRow,
  onCancelEdit,
  onRowExpand,
  onFieldChange,
  getColumnWidth,
}, ref) => {
  const getColSpan = () => {
    let colSpan = visibleColumns.length + 1;
    if (enableRowExpansion) colSpan += 1;
    if (enableInlineEdit) colSpan += 1;
    if (enableColumnManager) colSpan += 1;
    return colSpan;
  };

  const tableToken = useComponentToken("TABLE") as TableTokenType;

const TableRow = styled.tr`
  ${tableToken.dataTable.table.body.row}
`;

const StyledTableCell = styled.td<{ width?: string }>`
  ${tableToken.dataTable.table.body.cell}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  box-sizing: border-box;
  max-width: 0;
`;

const EmptyStateCell = styled.td`
  ${tableToken.dataTable.table.body.cell}
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
          
          return (
            <React.Fragment key={rowId}>
              <TableRow>
                {enableRowExpansion && (
                  <StyledTableCell width="50px" style={{ minWidth: `${FOUNDATION_THEME.unit[52]}`, maxWidth: `${FOUNDATION_THEME.unit[52]}` }}>
                    <Block display='flex' alignItems='center' justifyContent='center'>
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

                <StyledTableCell>
                  <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
                    <Checkbox
                      checked={!!selectedRows[rowId]}
                      onCheckedChange={() => onRowSelect(row[idField])}
                      size={CheckboxSize.MEDIUM}
                      disabled={isEditing}
                    />
                  </Block>
                </StyledTableCell>

                {visibleColumns.map((column, index) => {
                  const columnWidth = getColumnWidth(column, index);
                  const currentValue = isEditing ? editValues[rowId]?.[column.field] : row[column.field];
                  
                  return (
                    <TableCell
                      key={`${rowId}-${String(column.field)}`}
                      column={column}
                      row={isEditing ? editValues[rowId] : row}
                      isEditing={isEditing}
                      currentValue={currentValue}
                      width={columnWidth}
                      onFieldChange={(value) => onFieldChange(row[idField], column.field, value)}
                    />
                  );
                })}

                {enableInlineEdit && (
                  <StyledTableCell width="100px" style={{ minWidth: '100px', maxWidth: '100px' }}>
                    <Block display='flex' alignItems='center' justifyContent='center' gap={FOUNDATION_THEME.unit[4]}>
                      {isEditing ? (
                        <>
                          <Button
                            onClick={() => onSaveRow(row[idField])}
                            title="Save"
                            buttonType={ButtonType.SECONDARY}
                            leadingIcon={Save}
                            size={ButtonSize.SMALL}
                          />
                          <Button
                            onClick={() => onCancelEdit(row[idField])}
                            title="Cancel"
                            buttonType={ButtonType.SECONDARY}
                            leadingIcon={X}
                            size={ButtonSize.SMALL}
                          />
                        </>
                      ) : (
                        <Button
                          onClick={() => onEditRow(row[idField])}
                          title="Edit"
                          buttonType={ButtonType.SECONDARY}
                          leadingIcon={Edit}
                          size={ButtonSize.SMALL}
                        
                        />
                      )}
                    </Block>
                  </StyledTableCell>
                )}

                {enableColumnManager && (
                  <StyledTableCell width="50px" style={{ minWidth: '50px', maxWidth: '50px' }} />
                )}
              </TableRow>

              {enableRowExpansion && isExpanded && renderExpandedRow && canExpand && (
                <TableRow key={`${rowId}-expanded`}>
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
      ) : (
        <TableRow>
          <EmptyStateCell colSpan={getColSpan()}>
            No data available
          </EmptyStateCell>
        </TableRow>
      )}
    </tbody>
  );
});

TableBody.displayName = "TableBody";

export default TableBody; 