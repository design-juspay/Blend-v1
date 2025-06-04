import { SortDirection, SortConfig } from './types';

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