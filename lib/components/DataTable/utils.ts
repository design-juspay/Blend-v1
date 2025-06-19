import { SortDirection, SortConfig, ColumnFilter, SearchConfig, FilterType, ColumnDefinition } from './types';
import { ColumnType } from './columnTypes';

export const filterData = <T extends Record<string, unknown>>(
  data: T[],
  filters: Record<string, unknown>
): T[] => {
  return data.filter(row => {
    return Object.entries(filters).every(([field, filterValue]) => {
      const cellValue = row[field];
      if (Array.isArray(filterValue)) {
        return filterValue.includes(cellValue);
      }
      return String(cellValue).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
};

export const searchData = <T extends Record<string, unknown>>(
  data: T[],
  searchConfig: SearchConfig,
  columns: ColumnDefinition<T>[]
): T[] => {
  if (!searchConfig.query.trim()) {
    return data;
  }

  const query = searchConfig.caseSensitive 
    ? searchConfig.query.trim()
    : searchConfig.query.trim().toLowerCase();

  const searchFields = searchConfig.searchFields?.length 
    ? searchConfig.searchFields 
    : columns.map(col => String(col.field));

  return data.filter(row => {
    return searchFields.some(fieldStr => {
      const cellValue = row[fieldStr as keyof T];
      if (cellValue == null) return false;
      
      const valueStr = searchConfig.caseSensitive 
        ? String(cellValue)
        : String(cellValue).toLowerCase();
        
      return valueStr.includes(query);
    });
  });
};

export const applyColumnFilters = <T extends Record<string, unknown>>(
  data: T[],
  filters: ColumnFilter[]
): T[] => {
  if (!filters.length) {
    return data;
  }

  return data.filter(row => {
    return filters.every(filter => {
      const cellValue = row[filter.field as keyof T];
      const filterValue = filter.value;
      const operator = filter.operator || 'contains';

      if (cellValue == null) return false;

      switch (filter.type) {
        case FilterType.TEXT:
          return applyTextFilter(cellValue, filterValue as string, operator);
        
        case FilterType.SELECT:
          return String(cellValue) === String(filterValue);
        
        case FilterType.MULTISELECT:
          const filterValues = Array.isArray(filterValue) ? filterValue : [filterValue];
          return filterValues.some(val => String(cellValue) === String(val));
        
        case FilterType.NUMBER:
          return applyNumberFilter(cellValue, filterValue as number, operator);
        
        case FilterType.DATE:
          return applyDateFilter(cellValue, filterValue as Date, operator);
        
        default:
          return true;
      }
    });
  });
};

const applyTextFilter = (cellValue: unknown, filterValue: string, operator: string): boolean => {
  const cellStr = String(cellValue).toLowerCase();
  const filterStr = filterValue.toLowerCase();

  switch (operator) {
    case 'equals':
      return cellStr === filterStr;
    case 'contains':
      return cellStr.includes(filterStr);
    case 'startsWith':
      return cellStr.startsWith(filterStr);
    case 'endsWith':
      return cellStr.endsWith(filterStr);
    default:
      return cellStr.includes(filterStr);
  }
};

const applyNumberFilter = (cellValue: unknown, filterValue: number, operator: string): boolean => {
  const cellNum = typeof cellValue === 'number' ? cellValue : parseFloat(String(cellValue));
  if (isNaN(cellNum)) return false;

  switch (operator) {
    case 'equals':
      return cellNum === filterValue;
    case 'gt':
      return cellNum > filterValue;
    case 'lt':
      return cellNum < filterValue;
    case 'gte':
      return cellNum >= filterValue;
    case 'lte':
      return cellNum <= filterValue;
    default:
      return cellNum === filterValue;
  }
};

const applyDateFilter = (cellValue: unknown, filterValue: Date, operator: string): boolean => {
  const cellDate = new Date(String(cellValue));
  if (isNaN(cellDate.getTime())) return false;

  const cellTime = cellDate.getTime();
  const filterTime = filterValue.getTime();

  switch (operator) {
    case 'equals':
      return cellTime === filterTime;
    case 'gt':
      return cellTime > filterTime;
    case 'lt':
      return cellTime < filterTime;
    case 'gte':
      return cellTime >= filterTime;
    case 'lte':
      return cellTime <= filterTime;
    default:
      return cellTime === filterTime;
  }
};

export const getUniqueColumnValues = <T extends Record<string, unknown>>(
  data: T[],
  field: keyof T
): string[] => {
  const uniqueValues = new Set<string>();
  
  data.forEach(row => {
    const value = row[field];
    if (value != null) {
      uniqueValues.add(String(value));
    }
  });
  
  return Array.from(uniqueValues).sort();
};

export const sortData = <T extends Record<string, unknown>>(
  data: T[],
  sortConfig: SortConfig
): T[] => {
  return [...data].sort((a, b) => {
    const aValue = a[sortConfig.field];
    const bValue = b[sortConfig.field];

    // Handle null/undefined values
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;

    // Convert to strings for comparison if they're not numbers
    const aCompare = typeof aValue === 'number' ? aValue : String(aValue).toLowerCase();
    const bCompare = typeof bValue === 'number' ? bValue : String(bValue).toLowerCase();

    let result = 0;
    if (aCompare < bCompare) result = -1;
    else if (aCompare > bCompare) result = 1;

    return sortConfig.direction === SortDirection.ASCENDING ? result : -result;
  });
};

export const formatCurrency = (amount: number, currency = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const getDefaultColumnWidth = <T extends Record<string, unknown>>(
  column: ColumnDefinition<T>
): string => {
  if (column.width) return column.width;
  
  switch (column.type) {
    case ColumnType.AVATAR:
      return `'250px'`;
    case ColumnType.TAG:
      return '120px';
    case ColumnType.SELECT:
      return '140px';
    case ColumnType.MULTISELECT:
      return '180px';
    case ColumnType.DATE:
    case ColumnType.DATE_RANGE:
      return '130px';
    case ColumnType.NUMBER:
      return '100px';
    case ColumnType.TEXT:
      return '200px';
    case ColumnType.CUSTOM:
      return '200px';
    default:
      return '150px';
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}; 