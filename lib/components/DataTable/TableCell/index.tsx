import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { TableCellProps } from './types';
import dataTableTokens from '../dataTable.tokens';
import Block from '../../Primitives/Block/Block';
import PrimitiveInput from '../../Primitives/PrimitiveInput/PrimitiveInput';
import { FOUNDATION_THEME } from '../../../tokens';

const StyledTableCell = styled.td<{ width?: string; $hasCustomContent?: boolean }>`
  ${dataTableTokens.td.base}
  ${props => props.width && `width: ${props.width};`}
  overflow: hidden;
  box-sizing: border-box;
  max-width: 0;
`;

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps<any>>(({
  column,
  row,
  isEditing,
  currentValue,
  width,
  onFieldChange,
}, ref) => {
  const renderContent = () => {
    if (isEditing && column.isEditable) {
      if (column.renderEditCell) {
        return column.renderEditCell(
          currentValue,
          row,
          onFieldChange
        );
      } else {
        // Default edit input
        return (
          <Block style={{ 
            width: '100%', 
            padding: '2px 0',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <PrimitiveInput
              value={String(currentValue || '')}
              onChange={(e) => onFieldChange(e.target.value)}
              style={{
                width: 'calc(100% - 8px)',
                height: '32px',
                border: `1px solid ${FOUNDATION_THEME.colors.gray[300]}`,
                borderRadius: '4px',
                padding: `${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[8]}`,
                fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
                color: '#6b7280',
                fontWeight: FOUNDATION_THEME.font.weight[500],
                backgroundColor: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                margin: '0',
                minWidth: '0',
                maxWidth: '100%'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 1px #dbeafe';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </Block>
        );
      }
    }

    // Display mode
    if (column.renderCell) {
      return (
        <Block style={{ width: '100%' }}>
          {column.renderCell(currentValue, row)}
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
          lineHeight: '1.5'
        }}
        title={currentValue != null ? String(currentValue) : ''}
      >
        {currentValue != null ? String(currentValue) : ''}
      </Block>
    );
  };

  return (
    <StyledTableCell 
      ref={ref}
      width={width}
      $hasCustomContent={!!column.renderCell || (isEditing && column.isEditable)}
      style={{ 
        width: width,
        minWidth: width,
        maxWidth: width,
        verticalAlign: 'middle',
        position: 'relative'
      }}
    >
      <Block style={{ 
        width: '100%', 
        minHeight: '36px',
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