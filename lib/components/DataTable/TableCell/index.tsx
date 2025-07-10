import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { TableCellProps } from './types';
import { TableTokenType } from '../dataTable.tokens';
import Block from '../../Primitives/Block/Block';
import PrimitiveInput from '../../Primitives/PrimitiveInput/PrimitiveInput';
import { FOUNDATION_THEME } from '../../../tokens';
import { useComponentToken } from '../../../context/useComponentToken';

const StyledTableCell = styled.td<{ width?: React.CSSProperties; $hasCustomContent?: boolean; $tableToken?: TableTokenType }>`
  ${props => props.$tableToken ? props.$tableToken.dataTable.table.body.cell : ''}
  overflow: hidden;
  box-sizing: border-box;
  max-width: 0;
`;

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps<Record<string, unknown>>>(({
  column,
  row,
  rowIndex,
  isEditing,
  currentValue,
  width,
  frozenStyles,
  onFieldChange,
  getDisplayValue,
}, ref) => {
  const tableToken = useComponentToken("TABLE") as TableTokenType;

  // Apply formatting if getDisplayValue is provided and we're not editing
  const displayValue = (!isEditing && getDisplayValue) 
    ? getDisplayValue(currentValue, column) 
    : currentValue;

  const renderContent = () => {
    if (isEditing && column.isEditable) {
      return (
        <PrimitiveInput
          value={currentValue != null ? String(currentValue) : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFieldChange(e.target.value)}
          style={{
            width: '100%',
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
            fontFamily: 'inherit',
            color: 'inherit',
            padding: '4px 0'
          }}
        />
      );
    }

    if (column.renderCell) {
      return (
        <Block style={{ width: '100%' }}>
          {(column.renderCell as (value: unknown, row: unknown, index: number) => React.ReactNode)(displayValue, row, rowIndex)}
        </Block>
      );
    }

    return (
      <Block 
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%',
          lineHeight: '1.5',
          cursor: 'default'
        }}
        title={displayValue != null ? String(displayValue) : ''}
      >
        <span style={{
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {displayValue != null ? String(displayValue) : ''}
        </span>
      </Block>
    );
  };

  return (
    <StyledTableCell 
      ref={ref}
      $tableToken={tableToken}
      $hasCustomContent={!!column.renderCell || (isEditing && column.isEditable)}
      style={{ 
        ...width,
        ...frozenStyles,
        verticalAlign: 'middle',
        position: frozenStyles?.position || 'relative'
      }}
    >
      <Block style={{ 
        width: '100%', 
        minHeight: `${FOUNDATION_THEME.unit[36]}`,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {renderContent()}
      </Block>
    </StyledTableCell>
  );
});

TableCell.displayName = "TableCell";

export default TableCell; 