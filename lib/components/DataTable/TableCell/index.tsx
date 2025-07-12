import { forwardRef } from 'react';
import { styled } from 'styled-components';
import { TableCellProps } from './types';
import { TableTokenType } from '../dataTable.tokens';
import Block from '../../Primitives/Block/Block';
import PrimitiveInput from '../../Primitives/PrimitiveInput/PrimitiveInput';
import { FOUNDATION_THEME } from '../../../tokens';
import { useComponentToken } from '../../../context/useComponentToken';
import { ColumnType, DropdownColumnProps, DateColumnProps } from '../types';
import Menu from '../../Menu/Menu';
import { MenuV2GroupType } from '../../Menu/types';
import { ChevronDown } from 'lucide-react';

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
      // For dropdown columns, show the dropdown even in edit mode
      if (column.type === ColumnType.DROPDOWN) {
        const dropdownData = currentValue as DropdownColumnProps;
        if (dropdownData && dropdownData.options) {
          const selectedOption = dropdownData.options.find(opt => opt.value === dropdownData.selectedValue);
          const displayLabel = selectedOption ? selectedOption.label : (dropdownData.placeholder || 'Select...');
          
          const menuItems: MenuV2GroupType[] = [
            {
              items: dropdownData.options.map(option => ({
                label: option.label,
                onClick: () => {
                  // Create updated dropdown data with new selected value
                  const updatedDropdownData: DropdownColumnProps = {
                    ...dropdownData,
                    selectedValue: option.value
                  };
                  console.log('🔄 Dropdown option selected (editing):', { option, updatedDropdownData });
                  if (onFieldChange) {
                    onFieldChange(updatedDropdownData);
                    console.log('✅ onFieldChange called (editing):', updatedDropdownData);
                  }
                }
              })),
              showSeparator: false
            }
          ];

          return (
            <Menu
              trigger={
                <Block
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  padding="2px 6px"
                  borderRadius="4px"
                  cursor="pointer"
                  border={`1px solid ${FOUNDATION_THEME.colors.primary[300]}`}
                  backgroundColor={FOUNDATION_THEME.colors.primary[50]}
                  _hover={{
                    backgroundColor: FOUNDATION_THEME.colors.primary[100],
                    border: `1px solid ${FOUNDATION_THEME.colors.primary[400]}`
                  }}
                >
                  <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                    color: selectedOption ? FOUNDATION_THEME.colors.gray[900] : FOUNDATION_THEME.colors.gray[400],
                    flex: 1
                  }}>
                    {displayLabel}
                  </span>
                  <ChevronDown size={12} color={FOUNDATION_THEME.colors.gray[400]} style={{ marginLeft: '4px', flexShrink: 0 }} />
                </Block>
              }
              items={menuItems}
              minWidth={100}
              maxWidth={180}
            />
          );
        }
      }
      
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

    if (column.type === ColumnType.DROPDOWN && !isEditing) {
      const dropdownData = displayValue as DropdownColumnProps;
      if (dropdownData && dropdownData.options) {
        const selectedOption = dropdownData.options.find(opt => opt.value === dropdownData.selectedValue);
        const displayLabel = selectedOption ? selectedOption.label : (dropdownData.placeholder || 'Select...');
        
        const menuItems: MenuV2GroupType[] = [
          {
            items: dropdownData.options.map(option => ({
              label: option.label,
              onClick: () => {
                const updatedDropdownData: DropdownColumnProps = {
                  ...dropdownData,
                  selectedValue: option.value
                };
                console.log('🔄 Dropdown option selected (non-editing):', { option, updatedDropdownData });
                if (onFieldChange) {
                  onFieldChange(updatedDropdownData);
                }
              }
            })),
            showSeparator: false
          }
        ];

        return (
          <Menu
            trigger={
              <Block
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                padding="2px 6px"
                borderRadius="4px"
                cursor="pointer"
                border={`1px solid transparent`}
                _hover={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[50],
                  border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
                }}
              >
                <span style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                  color: selectedOption ? FOUNDATION_THEME.colors.gray[900] : FOUNDATION_THEME.colors.gray[400],
                  flex: 1
                }}>
                  {displayLabel}
                </span>
                <ChevronDown size={12} color={FOUNDATION_THEME.colors.gray[400]} style={{ marginLeft: '4px', flexShrink: 0 }} />
              </Block>
            }
            items={menuItems}
            minWidth={100}
            maxWidth={180}
          />
        );
      }
    }

    if (column.type === ColumnType.DATE && !isEditing) {
      const dateData = displayValue as DateColumnProps;
      if (dateData && dateData.date) {
        const date = new Date(dateData.date);
        const showTime = dateData.showTime || false;
        
        const formatDate = (date: Date): string => {
          if (isNaN(date.getTime())) return 'Invalid Date';
          
          const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          };
          
          if (showTime) {
            options.hour = '2-digit';
            options.minute = '2-digit';
          }
          
          return new Intl.DateTimeFormat('en-US', options).format(date);
        };
        
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
            title={formatDate(date)}
          >
            <span style={{
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
              color: FOUNDATION_THEME.colors.gray[700]
            }}>
              {formatDate(date)}
            </span>
          </Block>
        );
      }
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