import { forwardRef } from 'react';
import { Settings } from 'lucide-react';
import { styled } from 'styled-components';
import { FOUNDATION_THEME } from '../../tokens';
import { Checkbox } from '../Checkbox';
import { CheckboxSize } from '../Checkbox/types';
import Menu from '../Menu/Menu';
import { MenuAlignment } from '../Menu/types';
import PrimitiveButton from '../Primitives/PrimitiveButton/PrimitiveButton';
import Block from '../Primitives/Block/Block';

// Styled Components
const TriggerButton = styled(PrimitiveButton)`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  color: ${FOUNDATION_THEME.colors.gray[500]};

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
    color: ${FOUNDATION_THEME.colors.gray[700]};
  }
`;

interface ColumnManagerProps<T> {
  columns: Array<{
    field: keyof T;
    header: string;
    isVisible?: boolean;
    canHide?: boolean;
  }>;
  visibleColumns: Array<{
    field: keyof T;
    header: string;
  }>;
  onColumnChange: (columns: Array<any>) => void;
}

export const ColumnManager = forwardRef<HTMLDivElement, ColumnManagerProps<any>>(function ColumnManager<T>({ 
  columns, 
  visibleColumns, 
  onColumnChange 
}: ColumnManagerProps<T>, ref: React.Ref<HTMLDivElement>) {
  
  const toggleColumnVisibility = (field: keyof T) => {
    const isCurrentlyVisible = visibleColumns.some(col => col.field === field);
    
    if (isCurrentlyVisible) {
      // Don't allow hiding all columns - at least one must remain visible
      if (visibleColumns.length <= 1) return;
      
      // Remove column from visible list
      const newVisibleColumns = visibleColumns.filter(col => col.field !== field);
      onColumnChange(newVisibleColumns);
    } else {
      // Add column to visible list
      const columnToAdd = columns.find(col => col.field === field);
      if (columnToAdd) {
        onColumnChange([...visibleColumns, columnToAdd]);
      }
    }
  };
  
  const managableColumns = columns.filter(col => col.canHide !== false);
  
  const menuItems = [
    {
      groupLabel: "Manage Columns",
      showSeparator: false,
      items: managableColumns.map(column => {
        const isVisible = visibleColumns.some(col => col.field === column.field);
        return {
          label: column.header,
          value: String(column.field),
          slot1: (
            <Checkbox
              checked={isVisible}
              onCheckedChange={() => toggleColumnVisibility(column.field)}
              size={CheckboxSize.SMALL}
            />
          ),
          onClick: () => toggleColumnVisibility(column.field),
        };
      }),
    },
  ];
  
  return (
    <Block ref={ref}>
      <Menu
        alignment={MenuAlignment.END}
        enableSearch={false}
        trigger={
          <TriggerButton contentCentered>
            <Settings size={16} />
          </TriggerButton>
        }
        items={menuItems}
      />
    </Block>
  );
});

ColumnManager.displayName = "ColumnManager"; 