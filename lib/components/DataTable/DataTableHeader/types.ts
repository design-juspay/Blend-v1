import { ColumnDefinition, ColumnFilter, FilterType, SearchConfig } from '../types';

export type DataTableHeaderProps<T> = {
  title?: string;
  description?: string;
  showToolbar?: boolean;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  searchConfig: SearchConfig;
  enableFiltering?: boolean;
  showFilters?: boolean;
  columnFilters: ColumnFilter[];
  visibleColumns: ColumnDefinition<T>[];
  data: T[];
  onSearch: (query: string) => void;
  onToggleFilters: () => void;
  onColumnFilter?: (field: string | number | symbol, type: FilterType, value: string | string[], operator?: "equals" | "contains" | "startsWith" | "endsWith" | "gt" | "lt" | "gte" | "lte" | undefined) => void;  onClearAllFilters: () => void;
  // Slot props
  headerSlot1?: React.ReactNode;
  headerSlot2?: React.ReactNode;
  headerSlot3?: React.ReactNode;
};