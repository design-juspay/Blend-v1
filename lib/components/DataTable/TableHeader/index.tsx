import { forwardRef, useState, useRef, useEffect } from 'react';
import { ChevronsUpDown, Edit2, ArrowUp, ArrowDown } from 'lucide-react';
import { styled } from 'styled-components';
import { TableHeaderProps } from './types';
import { FilterType, ColumnDefinition } from '../types';

import { ColumnManager } from '../ColumnManager';
import Block from '../../Primitives/Block/Block';
import PrimitiveText from '../../Primitives/PrimitiveText/PrimitiveText';
import { FOUNDATION_THEME } from '../../../tokens';
import { Popover } from '../../Popover';
import { ColumnType, getColumnTypeConfig } from '../columnTypes';
import { getUniqueColumnValues } from '../utils';
import { SearchInput } from '../../Inputs/SearchInput';
import { Checkbox } from '../../Checkbox';
import { CheckboxSize } from '../../Checkbox/types';
import { SelectMenuGroupType } from '../../Select/types';
import { MultiSelectMenuGroupType } from '../../MultiSelect/types';
import  { TableTokenType } from '../dataTable.tokens';

import { useComponentToken } from '../../../context/useComponentToken';

const FilterIcon = styled(ChevronsUpDown)`
  cursor: pointer;
  color: ${FOUNDATION_THEME.colors.gray[400]};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${FOUNDATION_THEME.colors.gray[600]};
  }
`;

const EditIcon = styled(Edit2)`
  cursor: pointer;
  color: ${FOUNDATION_THEME.colors.gray[500]};
  
  &:hover {
    color: ${FOUNDATION_THEME.colors.primary[600]};
  }
`;

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps<Record<string, unknown>>>(({
  visibleColumns,
  initialColumns,
  selectAll,
  enableInlineEdit = false,
  enableColumnManager = true,
  enableRowExpansion = false,
  data,
  columnFreeze = 0,
  onSort,
  onSelectAll,
  onColumnChange,
  onHeaderChange,
  onColumnFilter,
  getColumnWidth,
}, ref) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [localColumns, setLocalColumns] = useState(visibleColumns);
  const [columnSearchValues, setColumnSearchValues] = useState<Record<string, string>>({});
  const [columnSelectedValues, setColumnSelectedValues] = useState<Record<string, string[]>>({});
  const editableRef = useRef<HTMLDivElement>(null);
  const tableToken = useComponentToken("TABLE") as TableTokenType;

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
      
      onHeaderChange?.(field as keyof Record<string, unknown>, trimmedValue);
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

  const handleSort = (field: string) => {
    onSort(field as keyof Record<string, unknown>);
  };

  const getFilterOptions = (column: ColumnDefinition<Record<string, unknown>>) => {
    if (column.filterOptions) {
      return column.filterOptions;
    }
    
    if (!data) return [];
    const uniqueValues = getUniqueColumnValues(data, column.field);
    return uniqueValues.map((val: unknown) => ({
      id: String(val),
      label: String(val),
      value: String(val)
    }));
  };

  const getSelectMenuItems = (column: ColumnDefinition<Record<string, unknown>>): SelectMenuGroupType[] => {
    const filterOptions = getFilterOptions(column);
    return [
      {
        groupLabel: `${column.header} Options`,
        items: filterOptions.map((option) => ({
          label: option.label,
          value: option.value,
          onClick: () => {}
        })),
        showSeparator: false
      }
    ];
  };

  const getMultiSelectMenuItems = (column: ColumnDefinition<Record<string, unknown>>): MultiSelectMenuGroupType[] => {
    const filterOptions = getFilterOptions(column);
    return [
      {
        groupLabel: `${column.header} Options`,
        items: filterOptions.map((option) => ({
          label: option.label,
          value: option.value,
        })),
        showSeparator: false
      }
    ];
  };

  const renderColumnFilter = (column: ColumnDefinition<Record<string, unknown>>) => {
    const columnConfig = getColumnTypeConfig(column.type || ColumnType.TEXT);
    const fieldKey = String(column.field);

    if (!columnConfig.supportsFiltering) {
      return (
        <Block>
          <PrimitiveText style={{ 
            fontSize: tableToken.dataTable.table.header.filter.groupLabelFontSize,
            color: tableToken.dataTable.table.header.filter.groupLabelColor
          }}>
            No filters available for this column
          </PrimitiveText>
        </Block>
      );
    }

    return (
      <Block display="flex" flexDirection="column">

        {columnConfig.supportsSorting && (
          <Block display="flex" flexDirection="column" gap={tableToken.dataTable.table.header.filter.gap}>
            <Block
              display="flex"
              alignItems="center"
              gap={tableToken.dataTable.table.header.filter.itemGap}
              padding={tableToken.dataTable.table.header.filter.sortOption.padding}
              borderRadius={tableToken.dataTable.table.header.filter.sortOption.borderRadius}
              cursor="pointer" 
              backgroundColor={tableToken.dataTable.table.header.filter.backgroundColor}
              _hover={{
                backgroundColor: tableToken.dataTable.table.header.filter.sortOption.hoverBackground
              }}
              onClick={() => {
                handleSort(fieldKey);
              }}
            >
              <ArrowUp size={16} color={tableToken.dataTable.table.header.filter.sortOption.iconColor} />
              <PrimitiveText style={{ 
                fontSize: tableToken.dataTable.table.header.filter.sortOption.fontSize, 
                color: tableToken.dataTable.table.header.filter.sortOption.textColor,
                fontWeight: tableToken.dataTable.table.header.filter.sortOption.fontWeight
              }}>
                Sort Ascending
              </PrimitiveText>
            </Block>
            <Block
              display="flex"
              alignItems="center"
              gap={tableToken.dataTable.table.header.filter.itemGap}
              padding={tableToken.dataTable.table.header.filter.sortOption.padding}
              borderRadius={tableToken.dataTable.table.header.filter.sortOption.borderRadius}
              cursor="pointer"
              _hover={{
                backgroundColor: tableToken.dataTable.table.header.filter.sortOption.hoverBackground
              }}
              onClick={() => {
                handleSort(fieldKey);
              }}
            >
              <ArrowDown size={16} color={tableToken.dataTable.table.header.filter.sortOption.iconColor} />
              <PrimitiveText style={{ 
                fontSize: tableToken.dataTable.table.header.filter.sortOption.fontSize, 
                color: tableToken.dataTable.table.header.filter.sortOption.textColor,
                fontWeight: tableToken.dataTable.table.header.filter.sortOption.fontWeight
              }}>
                Sort Descending
              </PrimitiveText>
            </Block>
          </Block>
        )}

        <Block 
          height={tableToken.dataTable.table.header.filter.separatorHeight}
          backgroundColor={tableToken.dataTable.table.header.filter.separatorColor}
        />

        {columnConfig.filterComponent === 'search' && (
          <SearchInput
            placeholder={`Search ${column.header}...`}
            value={columnSearchValues[fieldKey] || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setColumnSearchValues(prev => ({ ...prev, [fieldKey]: value }));
              onColumnFilter?.(column.field, FilterType.TEXT, value, 'contains');
            }}
          />
        )}

        {columnConfig.filterComponent === 'select' && (
          <Block display="flex" flexDirection="column" gap={tableToken.dataTable.table.header.filter.gap} maxHeight={tableToken.dataTable.table.header.filter.maxHeight} overflowY={tableToken.dataTable.table.header.filter.overflowY}>
            {getSelectMenuItems(column).map((group, groupIndex) => (
              <Block key={groupIndex}>
                {group.groupLabel && (
                  <PrimitiveText style={{
                    fontSize: tableToken.dataTable.table.header.filter.groupLabelFontSize,
                    fontWeight: tableToken.dataTable.table.header.filter.groupLabelFontWeight,
                    color: tableToken.dataTable.table.header.filter.groupLabelColor,
                    padding: tableToken.dataTable.table.header.filter.groupLabelPadding,
                    textTransform: tableToken.dataTable.table.header.filter.groupLabelTextTransform
                  }}>
                    {group.groupLabel}
                  </PrimitiveText>
                )}
                {group.items.map((item) => {
                  const isSelected = columnSelectedValues[fieldKey]?.[0] === item.value;
                  return (
                    <Block
                      key={item.value}
                      display="flex"
                      alignItems="center"
                      padding={tableToken.dataTable.table.header.filter.itemPadding}
                      borderRadius={tableToken.dataTable.table.header.filter.itemBorderRadius}
                      cursor="pointer"
                      backgroundColor={isSelected ? tableToken.dataTable.table.header.filter.selectedBackground : 'transparent'}
                      _hover={{
                        backgroundColor: tableToken.dataTable.table.header.filter.hoverBackground
                      }}
                      onClick={() => {
                        setColumnSelectedValues(prev => ({ ...prev, [fieldKey]: [item.value] }));
                        onColumnFilter?.(column.field, FilterType.SELECT, item.value, 'equals');
                      }}
                    >
                      <PrimitiveText style={{
                        fontSize: tableToken.dataTable.table.header.filter.itemFontSize,
                        color: isSelected ? tableToken.dataTable.table.header.filter.selectedTextColor : tableToken.dataTable.table.header.filter.normalTextColor,
                        fontWeight: isSelected ? tableToken.dataTable.table.header.filter.selectedFontWeight : tableToken.dataTable.table.header.filter.normalFontWeight
                      }}>
                        {item.label}
                      </PrimitiveText>
                    </Block>
                  );
                })}
              </Block>
            ))}
          </Block>
        )}

        {columnConfig.filterComponent === 'multiselect' && (
          <Block display="flex" flexDirection="column" gap={tableToken.dataTable.table.header.filter.gap} maxHeight={tableToken.dataTable.table.header.filter.maxHeight} overflowY={tableToken.dataTable.table.header.filter.overflowY}>
            {getMultiSelectMenuItems(column).map((group, groupIndex) => (
              <Block key={groupIndex}>
                {group.groupLabel && (
                  <PrimitiveText style={{
                    fontSize: tableToken.dataTable.table.header.filter.groupLabelFontSize,
                    fontWeight: tableToken.dataTable.table.header.filter.groupLabelFontWeight,
                    color: tableToken.dataTable.table.header.filter.groupLabelColor,
                    padding: tableToken.dataTable.table.header.filter.groupLabelPadding,
                    textTransform: tableToken.dataTable.table.header.filter.groupLabelTextTransform
                  }}>
                    {group.groupLabel}
                  </PrimitiveText>
                )}
                {group.items.map((item) => {
                  const isSelected = (columnSelectedValues[fieldKey] || []).includes(item.value);
                  return (
                    <Block
                      key={item.value}
                      display="flex"
                      alignItems="center"
                      gap={tableToken.dataTable.table.header.filter.itemGap}
                      padding={tableToken.dataTable.table.header.filter.itemPadding}
                      borderRadius={tableToken.dataTable.table.header.filter.itemBorderRadius}
                      cursor="pointer"
                      backgroundColor={isSelected ? tableToken.dataTable.table.header.filter.selectedBackground : 'transparent'}
                      _hover={{
                        backgroundColor: tableToken.dataTable.table.header.filter.hoverBackground
                      }}
                      onClick={() => {
                        const currentSelected = columnSelectedValues[fieldKey] || [];
                        let newSelected = [...currentSelected];
                        if (newSelected.includes(item.value)) {
                          newSelected = newSelected.filter(v => v !== item.value);
                        } else {
                          newSelected.push(item.value);
                        }
                        setColumnSelectedValues(prev => ({ ...prev, [fieldKey]: newSelected }));
                        onColumnFilter?.(column.field, FilterType.MULTISELECT, newSelected, 'equals');
                      }}
                    >
                      <Checkbox
                        checked={isSelected}
                        size={CheckboxSize.SMALL}
                      />
                      <PrimitiveText style={{
                        fontSize: tableToken.dataTable.table.header.filter.itemFontSize,
                        color: isSelected ? tableToken.dataTable.table.header.filter.selectedTextColor : tableToken.dataTable.table.header.filter.normalTextColor,
                        fontWeight: isSelected ? tableToken.dataTable.table.header.filter.selectedFontWeight : tableToken.dataTable.table.header.filter.normalFontWeight
                      }}>
                        {item.label}
                      </PrimitiveText>
                    </Block>
                  );
                })}
              </Block>
            ))}
          </Block>
        )}

        {(columnConfig.filterComponent === 'dateRange' || columnConfig.filterComponent === 'numberRange') && (
          <Block display="flex" flexDirection="column" gap={tableToken.dataTable.table.header.filter.gap}>
            <PrimitiveText style={{ 
              fontSize: tableToken.dataTable.table.header.filter.groupLabelFontSize,
              color: tableToken.dataTable.table.header.filter.groupLabelColor
            }}>
              {columnConfig.filterComponent === 'dateRange' ? 'Date range filtering coming soon...' : 'Number range filtering coming soon...'}
            </PrimitiveText>
          </Block>
        )}
      </Block>
    );
  };

  return (
    <thead ref={ref} style={{ position: 'sticky', top: 0, zIndex: 60, backgroundColor: tableToken.dataTable.table.header.backgroundColor, borderBottom: tableToken.dataTable.table.header.borderBottom, height: tableToken.dataTable.table.header.height }}>
      <tr style={{ height: tableToken.dataTable.table.header.height, ...tableToken.dataTable.table.header.row }}>
        {enableRowExpansion && (
          <th style={{ 
            ...tableToken.dataTable.table.header.cell,
            width: '50px', 
            minWidth: '50px', 
            maxWidth: '50px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(columnFreeze > 0 && {
              position: 'sticky',
              left: '0px',
              zIndex: 50,
              backgroundColor: tableToken.dataTable.table.header.backgroundColor,
              borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            }),
          }}>
            <Block display='flex' alignItems='center' justifyContent='center'>
            </Block>
          </th>
        )}
        
        <th style={{ 
          ...tableToken.dataTable.table.header.cell,
          width: '60px', 
          minWidth: '60px', 
          maxWidth: '60px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(columnFreeze > 0 && {
            position: 'sticky',
            left: enableRowExpansion ? '50px' : '0px',
            zIndex: 50,
            backgroundColor: tableToken.dataTable.table.header.backgroundColor,
            borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
          }),
        }}>
            <Block display='flex' alignItems='center' justifyContent='center' width={FOUNDATION_THEME.unit[40]}>
              <Checkbox
                checked={selectAll}
                onCheckedChange={onSelectAll}
                size={CheckboxSize.MEDIUM}
              />
            </Block>
          </th>

        {localColumns.map((column, index) => {
          const columnStyles = getColumnWidth(column, index);
          const isEditing = editingField === String(column.field);
          const columnConfig = getColumnTypeConfig(column.type || ColumnType.TEXT);
          
          const getPopoverAlignment = (): "start" | "center" | "end" => {
            if (index === 0) return "start";
            if (index === localColumns.length - 1) return "end";
            return "center";
          };

          const getFrozenStyles = () => {
            if (index >= columnFreeze) return {};
            
            let leftOffset = 60;
            if (enableRowExpansion) leftOffset += 50;
            
            for (let i = 0; i < index; i++) {
              const prevColumn = localColumns[i];
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
              zIndex: 50,
              backgroundColor: tableToken.dataTable.table.header.backgroundColor,
              borderRight: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            };
          };
          
          return (
            <th
              key={String(column.field)}
              style={{ 
                ...tableToken.dataTable.table.header.cell,
                ...(column.isSortable && tableToken.dataTable.table.header.sortable),
                ...columnStyles,
                ...getFrozenStyles()
              }}
            >
              <Block
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                gap='8px'
                width='100%'
                minWidth={0}
                onMouseEnter={() => setHoveredField(String(column.field))}
                onMouseLeave={() => setHoveredField(null)}
              >
                <Block 
                  display='flex' 
                  alignItems='center' 
                  minWidth={0}
                  flexGrow={1}
                  overflow='hidden'
                >
                  {isEditing ? (
                    <Block
                      ref={editableRef}
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleHeaderSave(String(column.field), e.currentTarget.textContent || '')}
                      onKeyDown={(e) => handleHeaderKeyDown(e, String(column.field))}
                      style={{
                        minWidth: 0,
                        flex: 1,
                        outline: 'none',
                        cursor: 'text',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                    >
                      {column.header}
                    </Block>
                  ) : (
                                          <Block
                        display='flex'
                        minWidth={0}
                        flexGrow={1}
                        position='relative'
                        gap={tableToken.dataTable.table.header.filter.gap}
                      >
                      <Block
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        minWidth={0}
                        flexGrow={1}
                      >
                        <PrimitiveText
                          title={column.header}
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                            width: '100%',
                            display: 'block',
                            cursor: 'default',
                            fontSize: tableToken.dataTable.table.header.cell.fontSize || FOUNDATION_THEME.font.size.body.sm.fontSize,
                            fontWeight: tableToken.dataTable.table.header.cell.fontWeight || FOUNDATION_THEME.font.weight[600],
                            lineHeight: 1.2
                          }}
                        >
                          {column.header}
                        </PrimitiveText>
                        {column.headerSubtext && (
                          <PrimitiveText
                            title={column.headerSubtext}
                            style={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              minWidth: 0,
                              width: '100%',
                              display: 'block',
                              cursor: 'default',
                              fontSize: tableToken.dataTable.table.header.filter.groupLabelFontSize,
                              color: tableToken.dataTable.table.header.filter.groupLabelColor,
                              lineHeight: 1.2,
                              marginTop: '2px'
                            }}
                          >
                            {column.headerSubtext}
                          </PrimitiveText>
                        )}
                      </Block>
                      {enableInlineEdit && (
                        <Block
                          as='span'
                          className="edit-icon-wrapper"
                          display='flex'
                          alignItems='center'
                          opacity={hoveredField === String(column.field) ? 1 : 0}
                          transition='opacity 0.2s'
                          zIndex={2}
                          flexShrink={0}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleHeaderEdit(String(column.field));
                          }}
                        >
                          <EditIcon 
                            size={14} 
                          />
                        </Block>
                      )}
                    </Block>
                  )}
                </Block>

                {(columnConfig.supportsSorting || columnConfig.supportsFiltering) && (
                  <Block
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexShrink={0}
                    width='16px'
                    height='16px'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Popover
                      trigger={<FilterIcon size={16} />}
                      maxWidth={220}
                      minWidth={220}
                      zIndex={1000}
                      side="bottom"
                      align={getPopoverAlignment()}
                      sideOffset={20}
                    >
                      {renderColumnFilter(column)}
                    </Popover>
                  </Block>
                )}
              </Block>
            </th>
          );
        })}

        {enableInlineEdit && (
          <th style={{ 
            ...tableToken.dataTable.table.header.cell,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box'
          }}>
            <Block display='flex' alignItems='center' justifyContent='center'>
              <PrimitiveText as='span' style={{ fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize }}>
                Actions
              </PrimitiveText>
            </Block>
          </th>
        )}

        {enableColumnManager && (
          <th style={{ 
            ...tableToken.dataTable.table.header.cell,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            <Block position='relative'>
              <ColumnManager
                columns={initialColumns}
                visibleColumns={localColumns}
                onColumnChange={onColumnChange}
              />
            </Block>
          </th>
        )}
      </tr>
    </thead>
  );
});

TableHeader.displayName = "TableHeader";

export default TableHeader;