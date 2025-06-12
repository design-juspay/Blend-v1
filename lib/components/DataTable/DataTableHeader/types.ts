import { ColumnDefinition, SearchConfig, ColumnFilter, FilterType } from '../types';

export type DataTableHeaderProps<T extends Record<string, unknown>> = {
  title?: string;
  description?: string;
  showToolbar?: boolean;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  searchConfig: SearchConfig;
  enableFiltering?: boolean;
  showFilters: boolean;
  columnFilters: ColumnFilter[];
  visibleColumns: ColumnDefinition<T>[];
  data: T[];
  onSearch: (query: string) => void;
  onToggleFilters: () => void;
  onColumnFilter: (field: keyof any, type: FilterType, value: string | string[], operator: 'equals') => void;
  onClearAllFilters: () => void;
  headerSlot1?: React.ReactNode;
  headerSlot2?: React.ReactNode;
  headerSlot3?: React.ReactNode;
};