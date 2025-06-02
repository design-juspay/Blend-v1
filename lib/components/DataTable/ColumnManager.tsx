import { forwardRef, useState } from 'react';
import { Settings } from 'lucide-react';
import { styled } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FOUNDATION_THEME } from '../../tokens';
import { Checkbox } from '../Checkbox';
import { CheckboxSize } from '../Checkbox/types';

// Styled Components
const TriggerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: ${FOUNDATION_THEME.border.radius[1]};
  cursor: pointer;
  color: ${FOUNDATION_THEME.colors.gray[500]};

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
    color: ${FOUNDATION_THEME.colors.gray[700]};
  }

  &[data-state="open"] {
    background-color: ${FOUNDATION_THEME.colors.gray[100]};
    color: ${FOUNDATION_THEME.colors.gray[700]};
  }
`;

const DropdownContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  max-width: 250px;
  background-color: ${FOUNDATION_THEME.colors.gray[0]};
  border: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  border-radius: ${FOUNDATION_THEME.border.radius[2]};
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: ${FOUNDATION_THEME.unit[4]}px;
  z-index: 1000;
  
  /* Ensure it doesn't overflow viewport */
  max-height: 300px;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${FOUNDATION_THEME.unit[8]};
  padding: ${FOUNDATION_THEME.unit[6]}px ${FOUNDATION_THEME.unit[8]};
  border-radius: ${FOUNDATION_THEME.border.radius[1]};
  cursor: pointer;
  font-size: ${FOUNDATION_THEME.font.size.body.sm.fontSize}px;
  color: ${FOUNDATION_THEME.colors.gray[700]};

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.gray[50]};
  }
`;

const MenuLabel = styled.span`
  flex: 1;
  user-select: none;
`;

const MenuTitle = styled.div`
  padding: ${FOUNDATION_THEME.unit[6]}px ${FOUNDATION_THEME.unit[8]}px;
  font-size: ${FOUNDATION_THEME.font.size.body.sm.fontSize}px;
  font-weight: 500;
  color: ${FOUNDATION_THEME.colors.gray[700]};
  border-bottom: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  margin: -${FOUNDATION_THEME.unit[4]}px -${FOUNDATION_THEME.unit[4]}px ${FOUNDATION_THEME.unit[4]}px -${FOUNDATION_THEME.unit[4]}px;
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
  const [open, setOpen] = useState(false);

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
  
  // Find columns that can be shown/hidden
  const managableColumns = columns.filter(col => col.canHide !== false);
  
  return (
    <div ref={ref}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <TriggerButton>
            <Settings size={16} />
          </TriggerButton>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownContent 
            side="bottom" 
            align="end" 
            sideOffset={4}
            alignOffset={-4}
            avoidCollisions={true}
            collisionPadding={8}
          >
            <MenuTitle>Manage Columns</MenuTitle>
            {managableColumns.map(column => {
              const isVisible = visibleColumns.some(col => col.field === column.field);
              return (
                <MenuItem 
                  key={String(column.field)}
                  onClick={() => toggleColumnVisibility(column.field)}
                >
                  <Checkbox
                    checked={isVisible}
                    onCheckedChange={() => toggleColumnVisibility(column.field)}
                    size={CheckboxSize.SMALL}
                  />
                  <MenuLabel>{column.header}</MenuLabel>
                </MenuItem>
              );
            })}
          </DropdownContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
});

ColumnManager.displayName = "ColumnManager"; 