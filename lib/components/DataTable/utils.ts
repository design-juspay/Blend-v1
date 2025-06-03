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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}; 