import { forwardRef } from 'react';
import { Filter, Download } from 'lucide-react';
import { DataTableHeaderProps } from './types';
import { FilterType } from '../types';
import { getUniqueColumnValues } from '../utils';
import Button from '../../Button/Button';
import { ButtonSize, ButtonType } from '../../Button/types';
import Block from '../../Primitives/Block/Block';
import PrimitiveText from '../../Primitives/PrimitiveText/PrimitiveText';
import PrimitiveInput from '../../Primitives/PrimitiveInput/PrimitiveInput';
import { FOUNDATION_THEME } from '../../../tokens';
import dataTableTokens from '../dataTable.tokens';

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
  hasSelectedRows,
  onSearch,
  onToggleFilters,
  onColumnFilter,
  onClearAllFilters,
  onExportToCSV,
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
      <Block display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[10]}>
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
            }}
          >
            {description}
          </PrimitiveText>
        )}
      </Block>

      {showToolbar && (
        <Block display='flex' flexDirection='column' gap={FOUNDATION_THEME.unit[12]}>
          {/* Search and Filter Controls */}
          {(enableSearch || enableFiltering) && (
            <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[12]} flexWrap='wrap'>
              {enableSearch && (
                <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]} style={{ minWidth: '300px' }}>
                  <PrimitiveInput
                    placeholder={searchPlaceholder}
                    value={searchConfig.query}
                    onChange={(e) => onSearch(e.target.value)}
                    style={{
                      width: '100%',
                      height: '36px',
                      border: `1px solid ${FOUNDATION_THEME.colors.gray[300]}`,
                      borderRadius: '6px',
                      padding: `0 ${FOUNDATION_THEME.unit[12]}`,
                      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                      backgroundColor: '#ffffff',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6';
                      e.target.style.boxShadow = '0 0 0 2px #dbeafe';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </Block>
              )}
              
              {enableFiltering && (
                <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]}>
                  <Button
                    buttonType={showFilters ? ButtonType.PRIMARY : ButtonType.SECONDARY}
                    leadingIcon={Filter}
                    onClick={onToggleFilters}
                    size={ButtonSize.SMALL}
                  >
                    Filters {columnFilters.length > 0 && `(${columnFilters.length})`}
                  </Button>
                  
                  {(searchConfig.query.trim() || columnFilters.length > 0) && (
                    <Button
                      buttonType={ButtonType.SECONDARY}
                      onClick={onClearAllFilters}
                      size={ButtonSize.SMALL}
                    >
                      Clear All
                    </Button>
                  )}
                </Block>
              )}
            </Block>
          )}
          
          {/* Column Filters */}
          {enableFiltering && showFilters && (
            <Block 
              display='flex' 
              flexDirection='column' 
              gap={FOUNDATION_THEME.unit[8]}
              style={{
                padding: FOUNDATION_THEME.unit[16],
                backgroundColor: FOUNDATION_THEME.colors.gray[50],
                borderRadius: '6px',
                border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
              }}
            >
              <PrimitiveText style={{ fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize, fontWeight: FOUNDATION_THEME.font.weight[500] }}>
                Column Filters
              </PrimitiveText>
              
              <Block display='flex' flexWrap='wrap' gap={FOUNDATION_THEME.unit[12]}>
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
                              onColumnFilter(column.field, filterType, value || '', 'equals');
                            }}
                            style={{
                              width: '100%',
                              height: '32px',
                              border: `1px solid ${FOUNDATION_THEME.colors.gray[300]}`,
                              borderRadius: '4px',
                              padding: `0 ${FOUNDATION_THEME.unit[8]}`,
                              fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                              backgroundColor: '#ffffff',
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
                            onColumnFilter(column.field, filterType, value, 'contains');
                          }}
                          style={{
                            width: '100%',
                            height: '32px',
                            border: `1px solid ${FOUNDATION_THEME.colors.gray[300]}`,
                            borderRadius: '4px',
                            padding: `0 ${FOUNDATION_THEME.unit[8]}`,
                            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
                            backgroundColor: '#ffffff',
                            outline: 'none',
                          }}
                        />
                      </Block>
                    );
                  })}
              </Block>
            </Block>
          )}
          
          {/* Action Buttons */}
          <Block display='flex' justifyContent='space-between' alignItems='center' gap={8}>
            {hasSelectedRows && (
              <Button
                buttonType={ButtonType.SECONDARY}
                leadingIcon={Download}
                onClick={onExportToCSV}
                size={ButtonSize.SMALL}
              >
                Export
              </Button>
            )}
          </Block>
        </Block>
      )}
    </Block>
  );
});

DataTableHeader.displayName = "DataTableHeader";

export default DataTableHeader; 