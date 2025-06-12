import { forwardRef } from 'react';
import { Filter } from 'lucide-react';
import { DataTableHeaderProps } from './types';
import { FilterType } from '../types';
import { getUniqueColumnValues } from '../utils';
import Button from '../../Button/Button';
import { ButtonSize, ButtonType } from '../../Button/types';
import Block from '../../Primitives/Block/Block';
import PrimitiveText from '../../Primitives/PrimitiveText/PrimitiveText';
import PrimitiveInput from '../../Primitives/PrimitiveInput/PrimitiveInput';
import { SearchInput } from '../../Inputs/SearchInput';
import { FOUNDATION_THEME } from '../../../tokens';
import dataTableTokens from '../dataTable.tokens';
import { Popover } from '../../Popover';
import { PopoverSize } from '../../Popover/types';

const DataTableHeader = forwardRef<HTMLDivElement, DataTableHeaderProps<any>>(({
  title,
  description,
  showToolbar = true,
  enableSearch = false,
  searchPlaceholder = "Search...",
  searchConfig,
  enableFiltering = false,
  showFilters,
  columnFilters,
  visibleColumns,
  data,
  onSearch,
  onToggleFilters,
  onColumnFilter,
  onClearAllFilters,
  headerSlot1,
  headerSlot2,
  headerSlot3
}, ref) => {
  if (!title && !description && !showToolbar) {
    return null;
  }

  return (
    <Block
      ref={ref}
      style={{
        ...dataTableTokens.header.container,
      }}
    >
      <Block display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[10]} maxWidth={"60%"}>
        {title && (
          <PrimitiveText
            as='h2'
            style={{
              ...dataTableTokens.header.title,
            }}
          >
            {title}
          </PrimitiveText>
        )}
        {description && (
          <PrimitiveText
            as='p'
            style={{
              ...dataTableTokens.header.description,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '2.5em',
              lineHeight: '1.25em',
            }}
          >
            {description}
          </PrimitiveText>
        )}
      </Block>

      {showToolbar && (
        <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[12]}>
          {(enableSearch || enableFiltering) && (
            <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[12]} style={{ flex: 1 }}>
              {enableSearch && (
                <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]} style={{ minWidth: '300px' }}>
                  <SearchInput
                  placeholder={searchPlaceholder}
                  value={searchConfig.query}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value)}
                  />
                </Block>
              )}
              
              {enableFiltering && (
                <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]}>
                  <Popover
                    trigger={
                      <Button
                        buttonType={showFilters ? ButtonType.PRIMARY : ButtonType.SECONDARY}
                        leadingIcon={Filter}
                        size={ButtonSize.SMALL}
                      >
                        Filters {columnFilters.length > 0 && `(${columnFilters.length})`}
                      </Button>
                    }
                    heading="Advanced Filters"
                    description="Apply multiple filters to narrow down your data"
                    size={PopoverSize.MD}
                    primaryAction={{
                      label: "Apply Filters",
                      onClick: () => onToggleFilters(),
                    }}
                    secondaryAction={{
                      label: "Clear All",
                      onClick: onClearAllFilters,
                      isDisabled: !searchConfig.query.trim() && columnFilters.length === 0,
                    }}
                  >
                    <Block 
                      display='flex' 
                      flexDirection='column' 
                      gap={FOUNDATION_THEME.unit[8]}
                      style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                      }}
                    >
                      {visibleColumns
                        .filter(col => col.isFilterable)
                        .map(column => {
                          const currentFilter = columnFilters.find(f => f.field === column.field);
                          const filterType = column.filterType || FilterType.TEXT;
                          
                          if (filterType === FilterType.SELECT || filterType === FilterType.MULTISELECT) {
                            const options = column.filterOptions || 
                              getUniqueColumnValues(data, column.field).map(val => ({ id: val, label: val, value: val }));
                            
                            return (
                              <Block key={String(column.field)} display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[4]} style={{ minWidth: '200px' }}>
                                <PrimitiveText style={{ fontSize: FOUNDATION_THEME.font.size.body.xs.fontSize, fontWeight: FOUNDATION_THEME.font.weight[500] }}>
                                  {column.header}
                                </PrimitiveText>
                                <select
                                  value={Array.isArray(currentFilter?.value) ? '' : (currentFilter?.value as string || '')}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    onColumnFilter(column.field, filterType, value, 'equals');
                                  }}
                                  style={{
                                    width: '100%',
                                    height: '32px',
                                    border: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[300]}`,
                                    borderRadius: FOUNDATION_THEME.border.radius[12],
                                    padding: `0 ${FOUNDATION_THEME.unit[8]}`,
                                    fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                                    backgroundColor: FOUNDATION_THEME.colors.gray[0],
                                    outline: 'none',
                                  }}
                                >
                                  <option value="">All</option>
                                  {options.map(option => (
                                    <option key={option.id} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </Block>
                            );
                          }
                          
                          return (
                            <Block key={String(column.field)} display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[4]} style={{ minWidth: '200px' }}>
                              <PrimitiveText style={{ fontSize: FOUNDATION_THEME.font.size.body.xs.fontSize, fontWeight: FOUNDATION_THEME.font.weight[500] }}>
                                {column.header}
                              </PrimitiveText>
                              <PrimitiveInput
                                placeholder={`Filter ${column.header}...`}
                                value={(currentFilter?.value as string) || ''}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  onColumnFilter(column.field, filterType, value, 'equals');
                                }}
                                style={{
                                  width: '100%',
                                  height: '32px',
                                  border: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[300]}`,
                                  borderRadius: FOUNDATION_THEME.border.radius[12],
                                  padding: `0 ${FOUNDATION_THEME.unit[8]}`,
                                  fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                                  backgroundColor: FOUNDATION_THEME.colors.gray[0],
                                  outline: 'none',
                                }}
                              />
                            </Block>
                          );
                        })}
                    </Block>
                  </Popover>
                </Block>
              )}
            </Block>
          )}

          {headerSlot1 && (
            <Block
              display='flex'
              alignItems='center'
              style={{
                maxHeight: `${FOUNDATION_THEME.unit[36]}`,
                flexShrink: 0,
              }}
            >
              {headerSlot1}
            </Block>
          )}

          {headerSlot2 && (
            <Block
              display='flex'
              alignItems='center'
              style={{
                maxHeight: `${FOUNDATION_THEME.unit[36]}`,
                flexShrink: 0,
              }}
            >
              {headerSlot2}
            </Block>
          )}

          {headerSlot3 && (
            <Block
              display='flex'
              alignItems='center'
              style={{
                maxHeight: `${FOUNDATION_THEME.unit[36]}`,
                flexShrink: 0,
              }}
            >
              {headerSlot3}
            </Block>
          )}
        </Block>
      )}
    </Block>
  );
});

DataTableHeader.displayName = "DataTableHeader";

export default DataTableHeader;