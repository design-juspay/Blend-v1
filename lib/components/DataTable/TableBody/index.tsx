import { forwardRef } from 'react';
import { Edit, Save, X } from 'lucide-react';
import { styled } from 'styled-components';
import { TableBodyProps } from './types';
import dataTableTokens from '../dataTable.tokens';
import TableCell from '../TableCell';
import { Checkbox } from '../../../main';
import { CheckboxSize } from '../../Checkbox/types';
import Block from '../../Primitives/Block/Block';
import { FOUNDATION_THEME } from '../../../tokens';

const StyledTableBody = styled.tbody`
  ${dataTableTokens.tbody}
`;

const TableRow = styled.tr`
  ${dataTableTokens.tr.base}
`;

const StyledTableCell = styled.td<{ width?: string }>`
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

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps<any>>(({
  currentData,
  visibleColumns,
  idField,
  selectedRows,
  editingRows,
  editValues,
  enableInlineEdit = false,
  enableColumnManager = true,
  onRowSelect,
  onEditRow,
  onSaveRow,
  onCancelEdit,
  onFieldChange,
  getColumnWidth,
}, ref) => {
  return (
    <StyledTableBody ref={ref}>
      {currentData.length > 0 ? (
        currentData.map((row) => {
          const rowId = String(row[idField]);
          const isEditing = editingRows[rowId];
          
          return (
            <TableRow key={rowId}>
              <StyledTableCell width="60px" style={{ minWidth: '60px', maxWidth: '60px' }}>
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
                        <ActionButton
                          onClick={() => onSaveRow(row[idField])}
                          title="Save"
                        >
                          <Save size={16} color={FOUNDATION_THEME.colors.green[600]} />
                        </ActionButton>
                        <ActionButton
                          onClick={() => onCancelEdit(row[idField])}
                          title="Cancel"
                        >
                          <X size={16} color={FOUNDATION_THEME.colors.red[600]} />
                        </ActionButton>
                      </>
                    ) : (
                      <ActionButton
                        onClick={() => onEditRow(row[idField])}
                        title="Edit"
                      >
                        <Edit size={16} color={FOUNDATION_THEME.colors.primary[600]} />
                      </ActionButton>
                    )}
                  </Block>
                </StyledTableCell>
              )}

              {enableColumnManager && (
                <StyledTableCell width="50px" style={{ minWidth: '50px', maxWidth: '50px' }} />
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
    </StyledTableBody>
  );
});

TableBody.displayName = "TableBody";

export default TableBody; 