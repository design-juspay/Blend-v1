import { forwardRef, useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit2 } from 'lucide-react';
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
import Menu from '../../Menu/Menu';
import { MenuAlignment, MenuSide } from '../../Menu/types';
import { ColumnType, getColumnTypeConfig } from '../columnTypes';

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

const EditIcon = styled(Edit2)`
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;
  color: ${FOUNDATION_THEME.colors.gray[500]};
  
  &:hover {
    color: ${FOUNDATION_THEME.colors.primary[600]};
  }
`;

const HeaderContainer = styled(Block)`
  &:hover ${EditIcon} {
    opacity: 1;
  }
`;

const MoreIcon = styled(MoreVertical)`
  cursor: pointer;
  color: ${FOUNDATION_THEME.colors.gray[400]};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${FOUNDATION_THEME.colors.gray[600]};
  }
`;

const HeaderCellContainer = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps<any>>(({
  visibleColumns,
  initialColumns,
  selectAll,
  enableInlineEdit = false,
  enableColumnManager = true,
  enableRowExpansion = false,
  onSort,
  onSelectAll,
  onColumnChange,
  onHeaderChange,
  getColumnWidth,
}, ref) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [localColumns, setLocalColumns] = useState(visibleColumns);
  const editableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalColumns(visibleColumns);
  }, [visibleColumns]);

  useEffect(() => {
    if (editingField && editableRef.current) {
      editableRef.current.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editableRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [editingField]);

  const handleHeaderEdit = (field: string) => {
    setEditingField(field);
  };

  const handleHeaderSave = (field: string, newValue?: string) => {
    const valueToSave = newValue || editableRef.current?.textContent || '';
    const trimmedValue = valueToSave.trim();
    const currentColumn = localColumns.find(col => String(col.field) === field);
    
    if (currentColumn && trimmedValue !== currentColumn.header) {
      const updatedColumns = localColumns.map(col => 
        String(col.field) === field 
          ? { ...col, header: trimmedValue }
          : col
      );
      setLocalColumns(updatedColumns);
      
      onHeaderChange?.(field as any, trimmedValue);
      onColumnChange?.(updatedColumns);
    }
    setEditingField(null);
  };

  const handleHeaderKeyDown = (e: React.KeyboardEvent, field: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleHeaderSave(field, e.currentTarget.textContent || '');
    } else if (e.key === 'Escape') {
      setEditingField(null);
    }
  };

  const handleSort = (field: string, direction: SortDirection) => {
    onSort(field as any);
  };

  const getColumnMenuItems = (column: any) => {
    const columnType = column.type || ColumnType.TEXT;
    const config = getColumnTypeConfig(columnType);
    
    return config.menuItems?.map(item => ({
      ...item,
      onClick: () => {
        if (item.label === 'Sort Ascending') {
          handleSort(String(column.field), SortDirection.ASCENDING);
        } else if (item.label === 'Sort Descending') {
          handleSort(String(column.field), SortDirection.DESCENDING);
        } else {
          item.onClick();
        }
      }
    })) || [];
  };

  return (
    <TableHead ref={ref} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <TableRow>
        {enableRowExpansion && (
          <TableHeaderCell $isSortable={false} width="50px" style={{ minWidth: '50px', maxWidth: '50px' }}>
            <Block display='flex' alignItems='center' justifyContent='center'>
            </Block>
          </TableHeaderCell>
        )}
        
        <TableHeaderCell $isSortable={false} width="60px" style={{ minWidth: '60px', maxWidth: '60px' }}>
          <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
            <Checkbox
              checked={selectAll}
              onCheckedChange={onSelectAll}
              size={CheckboxSize.MEDIUM}
            />
          </Block>
        </TableHeaderCell>

        {localColumns.map((column, index) => {
          const columnWidth = getColumnWidth(column, index);
          const isEditing = editingField === String(column.field);
          const menuItems = getColumnMenuItems(column);
          
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
            >
              <HeaderCellContainer>
                <HeaderContainer display='flex' alignItems='center' gap={8}>
                  {isEditing ? (
                    <Block
                      ref={editableRef}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleHeaderSave(String(column.field), e.currentTarget.textContent || '')}
                      onKeyDown={(e) => handleHeaderKeyDown(e, String(column.field))}
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                        flex: 1,
                        outline: 'none',
                        cursor: 'text'
                      }}
                    >
                      {column.header}
                    </Block>
                  ) : (
                    <>
                      <PrimitiveText
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          minWidth: 0,
                          flex: 1
                        }}
                      >
                        {column.header}
                      </PrimitiveText>
                      {enableInlineEdit && (
                        <EditIcon 
                          size={14} 
                          onClick={() => handleHeaderEdit(String(column.field))}
                        />
                      )}
                    </>
                  )}
                </HeaderContainer>

                {column.isSortable && (
                  <Menu
                    trigger={<MoreIcon size={16} />}
                    items={[{
                      label: column.header,
                      items: menuItems
                    }]}
                    alignment={MenuAlignment.END}
                    side={MenuSide.BOTTOM}
                  />
                )}
              </HeaderCellContainer>
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
                visibleColumns={localColumns}
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