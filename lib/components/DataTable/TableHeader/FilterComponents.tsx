import React from 'react';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';
import Block from '../../Primitives/Block/Block';
import PrimitiveText from '../../Primitives/PrimitiveText/PrimitiveText';
import { SearchInput } from '../../Inputs/SearchInput';
import { Checkbox } from '../../Checkbox';
import { CheckboxSize } from '../../Checkbox/types';
import { ColumnDefinition } from '../types';
import { ColumnType, getColumnTypeConfig } from '../columnTypes';
import { TableTokenType } from '../dataTable.tokens';
import { SortHandlers, FilterHandlers, FilterState, ColumnFilterHandler } from './handlers';
import { getSelectMenuItems, getMultiSelectMenuItems, filterItemsBySearch } from './utils';
import { FOUNDATION_THEME } from '../../../tokens';

type FilterComponentsProps = {
  column: ColumnDefinition<Record<string, unknown>>;
  data?: Record<string, unknown>[];
  tableToken: TableTokenType;
  sortHandlers: SortHandlers;
  filterHandlers: FilterHandlers;
  filterState: FilterState;
  onColumnFilter?: ColumnFilterHandler;
};

export const SortOptions: React.FC<{
  fieldKey: string;
  tableToken: TableTokenType;
  sortHandlers: SortHandlers;
}> = ({ fieldKey, tableToken, sortHandlers }) => (
  <>
    <Block
      display="flex"
      alignItems="center"
      gap={tableToken.dataTable.table.header.filter.itemGap}
      padding={tableToken.dataTable.table.header.filter.sortOption.padding}
      borderRadius={tableToken.dataTable.table.header.filter.sortOption.borderRadius}
      cursor="pointer"
      backgroundColor="transparent"
      _hover={{
        backgroundColor: tableToken.dataTable.table.header.filter.sortOption.hoverBackground
      }}
      onClick={() => sortHandlers.handleSortAscending(fieldKey)}
      _focus={{outline: 'none'}}
      _focusVisible={{outline: 'none'}}
    >
      <ArrowUp size={FOUNDATION_THEME.unit[16]} color={tableToken.dataTable.table.header.filter.sortOption.iconColor} />
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
      backgroundColor="transparent"
      _hover={{
        backgroundColor: tableToken.dataTable.table.header.filter.sortOption.hoverBackground
      }}
      onClick={() => sortHandlers.handleSortDescending(fieldKey)}
    >
      <ArrowDown size={FOUNDATION_THEME.unit[16]} color={tableToken.dataTable.table.header.filter.sortOption.iconColor} />
      <PrimitiveText style={{
        fontSize: tableToken.dataTable.table.header.filter.sortOption.fontSize,
        color: tableToken.dataTable.table.header.filter.sortOption.textColor,
        fontWeight: tableToken.dataTable.table.header.filter.sortOption.fontWeight
      }}>
        Sort Descending
      </PrimitiveText>
    </Block>
  </>
);

export const DropdownSearchSection: React.FC<{
  column: ColumnDefinition<Record<string, unknown>>;
  fieldKey: string;
  tableToken: TableTokenType;
  filterHandlers: FilterHandlers;
  filterState: FilterState;
}> = ({ fieldKey, tableToken, filterHandlers, filterState }) => (
  <Block>
    <SearchInput
      placeholder={`Search`}
      value={filterState.columnSearchValues[fieldKey] || ''}
      leftSlot={<Search size={FOUNDATION_THEME.unit[16]} color={tableToken.dataTable.table.header.filter.sortOption.iconColor} />}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        filterHandlers.handleSearchChange(fieldKey, value);
      }}
    />
  </Block>
);

export const Separator: React.FC<{ tableToken: TableTokenType }> = ({ tableToken }) => (
  <Block
    height={FOUNDATION_THEME.unit[1]}
    backgroundColor={tableToken.dataTable.table.header.filter.separatorColor}
  />
);

export const SingleSelectItems: React.FC<{
  column: ColumnDefinition<Record<string, unknown>>;
  fieldKey: string;
  tableToken: TableTokenType;
  filterHandlers: FilterHandlers;
  filterState: FilterState;
  data?: Record<string, unknown>[];
  onColumnFilter?: ColumnFilterHandler;
}> = ({ column, fieldKey, tableToken, filterHandlers, filterState, data, onColumnFilter }) => {
  const menuItems = getSelectMenuItems(column, data);
  
  return (
    <Block display="flex" flexDirection="column" maxHeight={tableToken.dataTable.table.header.filter.maxHeight} overflowY={tableToken.dataTable.table.header.filter.overflowY}>
      {menuItems.map((group) =>
        filterItemsBySearch(group.items, filterState.columnSearchValues[fieldKey] || '')
          .map((item) => {
            const isSelected = filterState.columnSelectedValues[fieldKey]?.[0] === item.value;
            return (
              <Block
                key={item.value}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={`${FOUNDATION_THEME.unit[8]} ${FOUNDATION_THEME.unit[6]}`}
                margin={`${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[6]}`}
                borderRadius={FOUNDATION_THEME.border.radius[4]}
                cursor="pointer"
                backgroundColor={isSelected ? tableToken.dataTable.table.header.filter.selectedBackground : 'transparent'}
                _hover={{
                  backgroundColor: tableToken.dataTable.table.header.filter.hoverBackground
                }}
                onClick={() => filterHandlers.handleSelectFilter(column, fieldKey, item.value, onColumnFilter)}
              >
                <PrimitiveText style={{
                  fontSize: tableToken.dataTable.table.header.filter.itemFontSize,
                  color: isSelected ? tableToken.dataTable.table.header.filter.selectedTextColor : tableToken.dataTable.table.header.filter.normalTextColor,
                  fontWeight: isSelected ? tableToken.dataTable.table.header.filter.selectedFontWeight : tableToken.dataTable.table.header.filter.normalFontWeight
                }}>
                  {item.label}
                </PrimitiveText>
                {isSelected && (
                  <Block as="span" display="flex" alignItems="center">
                    <Checkbox
                      checked={isSelected}
                      size={CheckboxSize.SMALL}
                    />
                  </Block>
                )}
              </Block>
            );
          })
      )}
    </Block>
  );
};

export const MultiSelectItems: React.FC<{
  column: ColumnDefinition<Record<string, unknown>>;
  fieldKey: string;
  tableToken: TableTokenType;
  filterHandlers: FilterHandlers;
  filterState: FilterState;
  data?: Record<string, unknown>[];
  onColumnFilter?: ColumnFilterHandler;
}> = ({ column, fieldKey, tableToken, filterHandlers, filterState, data, onColumnFilter }) => {
  const menuItems = getMultiSelectMenuItems(column, data);
  
  return (
    <Block display="flex" flexDirection="column" maxHeight={tableToken.dataTable.table.header.filter.maxHeight} overflowY={tableToken.dataTable.table.header.filter.overflowY}>
      {menuItems.map((group) =>
        filterItemsBySearch(group.items, filterState.columnSearchValues[fieldKey] || '')
          .map((item) => {
            const isSelected = (filterState.columnSelectedValues[fieldKey] || []).includes(item.value);
            return (
              <Block
                key={item.value}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={`${FOUNDATION_THEME.unit[8]} ${FOUNDATION_THEME.unit[6]}`}
                margin={`${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[6]}`}
                borderRadius={FOUNDATION_THEME.border.radius[4]}
                cursor="pointer"
                backgroundColor={isSelected ? tableToken.dataTable.table.header.filter.selectedBackground : 'transparent'}
                _hover={{
                  backgroundColor: tableToken.dataTable.table.header.filter.hoverBackground
                }}
                onClick={() => filterHandlers.handleMultiSelectFilter(column, fieldKey, item.value, onColumnFilter)}
              >
                <PrimitiveText style={{
                  fontSize: tableToken.dataTable.table.header.filter.itemFontSize,
                  color: isSelected ? tableToken.dataTable.table.header.filter.selectedTextColor : tableToken.dataTable.table.header.filter.normalTextColor,
                  fontWeight: isSelected ? tableToken.dataTable.table.header.filter.selectedFontWeight : tableToken.dataTable.table.header.filter.normalFontWeight,
                  flexGrow: 1
                }}>
                  {item.label}
                </PrimitiveText>
                <Block as="span" display="flex" alignItems="center" flexShrink={0}>
                  <Checkbox
                    checked={isSelected}
                    size={CheckboxSize.SMALL}
                  />
                </Block>
              </Block>
            );
          })
      )}
    </Block>
  );
};

export const ColumnFilter: React.FC<FilterComponentsProps> = ({
  column,
  data,
  tableToken,
  sortHandlers,
  filterHandlers,
  filterState,
  onColumnFilter
}) => {
  const columnConfig = getColumnTypeConfig(column.type || ColumnType.TEXT);
  const fieldKey = String(column.field);

  const hasDropdownFilter = columnConfig.filterComponent === 'multiselect' || columnConfig.filterComponent === 'select';

  return (
    <Block display="flex" flexDirection="column" gap={FOUNDATION_THEME.unit[0]} padding={`${FOUNDATION_THEME.unit[4]} ${FOUNDATION_THEME.unit[0]}`} _focus={{outline: 'none'}} _focusVisible={{outline: 'none'}}>
      {columnConfig.supportsSorting && (
        <>
          <SortOptions
            fieldKey={fieldKey}
            tableToken={tableToken}
            sortHandlers={sortHandlers}
          />
          {hasDropdownFilter && <Separator tableToken={tableToken} />}
        </>
      )}

      {hasDropdownFilter && (
        <>
          <DropdownSearchSection
            column={column}
            fieldKey={fieldKey}
            tableToken={tableToken}
            filterHandlers={filterHandlers}
            filterState={filterState}
          />
        </>
      )}

      {columnConfig.filterComponent === 'select' && (
        <SingleSelectItems
          column={column}
          fieldKey={fieldKey}
          tableToken={tableToken}
          filterHandlers={filterHandlers}
          filterState={filterState}
          data={data}
          onColumnFilter={onColumnFilter}
        />
      )}

      {columnConfig.filterComponent === 'multiselect' && (
        <MultiSelectItems
          column={column}
          fieldKey={fieldKey}
          tableToken={tableToken}
          filterHandlers={filterHandlers}
          filterState={filterState}
          data={data}
          onColumnFilter={onColumnFilter}
        />
      )}

      {(columnConfig.filterComponent === 'dateRange' || columnConfig.filterComponent === 'numberRange') && (
        <Block display="flex" flexDirection="column" gap={tableToken.dataTable.table.header.filter.gap} padding={`${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[8]}`}>
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