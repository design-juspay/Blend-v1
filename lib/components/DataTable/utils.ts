
import { SortDirection, SortConfig } from './types';

export function filterData<T extends Record<string, any>>(
  data: T[],
  filters: Record<string, any>
): T[] {
  if (!filters || Object.keys(filters).length === 0) {
    return data;
  }

  return data.filter(item => {
    return Object.keys(filters).every(key => {
      const filterValue = filters[key];
      const itemValue = item[key];
      
      // Skip empty filters
      if (!filterValue) return true;
      
      // Array filter values
      if (Array.isArray(filterValue) && filterValue.length > 0) {
        // Empty filter array means no filtering
        if (filterValue.length === 0) return true;
        return filterValue.includes(itemValue);
      }
      
      // String filter (case insensitive)
      if (typeof itemValue === 'string' && typeof filterValue === 'string') {
        return itemValue.toLowerCase().includes(filterValue.toLowerCase());
      }
      
      // Number filter
      if (typeof itemValue === 'number' && typeof filterValue === 'number') {
        return itemValue === filterValue;
      }
      
      // Boolean filter
      if (typeof itemValue === 'boolean') {
        return itemValue === filterValue;
      }
      
      // Date filter
      if (itemValue instanceof Date && filterValue instanceof Date) {
        return itemValue.getTime() === filterValue.getTime();
      }
      
      // Default: equality
      return itemValue === filterValue;
    });
  });
}

export function sortData<T extends Record<string, any>>(
  data: T[],
  sortConfig: SortConfig | null
): T[] {
  if (!sortConfig || sortConfig.direction === SortDirection.NONE) {
    return data;
  }
  
  return [...data].sort((a, b) => {
    const aValue = a[sortConfig.field];
    const bValue = b[sortConfig.field];
    
    // Handle strings
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === SortDirection.ASCENDING
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    // Handle numbers
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === SortDirection.ASCENDING
        ? aValue - bValue
        : bValue - aValue;
    }
    
    // Handle dates
    const isDate = (value: unknown): value is Date => value instanceof Date;
    if (isDate(aValue) && isDate(bValue)) {
      return sortConfig.direction === SortDirection.ASCENDING
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }
    
    // Default: use string comparison
    const strA = String(aValue);
    const strB = String(bValue);
    
    return sortConfig.direction === SortDirection.ASCENDING
      ? strA.localeCompare(strB)
      : strB.localeCompare(strA);
  });
}

export const formatCurrency = (amount: number, currency = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}; 