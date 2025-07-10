import { ReactNode } from 'react';

export enum SortDirection {
  NONE = 'none',
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

export enum FilterType {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
  DATE = 'date',
  BOOLEAN = 'boolean',
}

export enum ColumnType {
  TEXT = 'text',
  NUMBER = 'number',
  AVATAR = 'avatar',
  TAG = 'tag',
  PROGRESS = 'progress',
  DROPDOWN = 'dropdown',
  REACT_ELEMENT = 'react_element',
  SELECT = 'select',
  MULTISELECT = 'multiselect', 
  DATE = 'date',
  DATE_RANGE = 'date_range',
  CUSTOM = 'custom',
}

export type AvatarColumnProps = {
  src?: string;
  alt?: string;
  label: string;
  sublabel?: string;
  imageUrl?: string;
}

export type TagColumnProps = {
  text: string;
  variant?: 'filled' | 'subtle' | 'outlined' | 'no_fill';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export type ProgressColumnProps = {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export type DropdownColumnProps = {
  options: Array<{ id: string; label: string; value: unknown }>;
  selectedValue?: unknown;
  placeholder?: string;
}

export type FilterOption = {
  id: string;
  label: string;
  value: string; // Changed from unknown to string for compatibility
}

export type ColumnManagerProps<T extends Record<string, unknown>> = {
  columns: ColumnDefinition<T>[];
  visibleColumns: ColumnDefinition<T>[];
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
}

export type AdvancedFilterProps = {
  filters: unknown[];
  onFiltersChange: (filters: unknown[]) => void;
  onClearFilters: () => void;
}

export type BaseColumnDefinition<T> = {
  field: keyof T;
  header: string;
  headerSubtext?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  isVisible?: boolean;
  isSortable?: boolean;
  isEditable?: boolean;
  filterOptions?: FilterOption[];
  canHide?: boolean;
  frozen?: boolean;
  className?: string;
  filterType?: FilterType;
}

export type ColumnDefinition<T> = 
  | (BaseColumnDefinition<T> & {
      type: ColumnType.TEXT;
      renderCell?: (value: string, row: T, index: number) => ReactNode;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.NUMBER;
      renderCell?: (value: number, row: T, index: number) => ReactNode;
      format?: 'integer' | 'decimal' | 'currency' | 'percentage';
      precision?: number;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.AVATAR;
      renderCell?: (value: AvatarColumnProps, row: T, index: number) => ReactNode;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.TAG;
      renderCell?: (value: TagColumnProps, row: T, index: number) => ReactNode;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.PROGRESS;
      renderCell?: (value: ProgressColumnProps, row: T, index: number) => ReactNode;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.DROPDOWN;
      renderCell?: (value: DropdownColumnProps, row: T, index: number) => ReactNode;
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.REACT_ELEMENT;
      renderCell: (value: unknown, row: T, index: number) => ReactNode;
      isSortable: false; // React elements cannot be sorted
    })
  | (BaseColumnDefinition<T> & {
      type: ColumnType.SELECT | ColumnType.MULTISELECT | ColumnType.DATE | ColumnType.DATE_RANGE | ColumnType.CUSTOM;
      renderCell?: (value: unknown, row: T, index?: number) => ReactNode;
    });

export type SortConfig = {
  field: string;
  direction: SortDirection;
}

export type SearchConfig = {
  query: string;
  caseSensitive?: boolean;
  searchFields?: string[];
}

export type ColumnFilter = {
  field: keyof Record<string, unknown>;
  type: FilterType;
  value: string | string[];
  operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte';
}

export type PaginationConfig = {
  currentPage: number;
  pageSize: number;
  totalRows: number;
  pageSizeOptions?: number[];
}

export type BulkAction = {
  id: string;
  label: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: (selectedRowIds: string[]) => void;
}

export type DataTableProps<T extends Record<string, unknown>> = {
  data: T[];
  columns: ColumnDefinition<T>[];
  idField: keyof T;
  title?: string;
  description?: string;
  className?: string;
  isHoverable?: boolean;
  defaultSort?: SortConfig;
  onSortChange?: (sortConfig: SortConfig) => void;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  serverSideSearch?: boolean;
  onSearchChange?: (searchConfig: SearchConfig) => void;
  enableFiltering?: boolean;
  enableAdvancedFilter?: boolean;
  advancedFilterComponent?: React.ComponentType<AdvancedFilterProps>;
  advancedFilters?: unknown[];
  serverSideFiltering?: boolean;
  onFilterChange?: (filters: ColumnFilter[]) => void;
  onAdvancedFiltersChange?: (filters: unknown[]) => void;
  columnFreeze?: number;
  enableColumnManager?: boolean;
  pagination?: PaginationConfig;
  serverSidePagination?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  
  isLoading?: boolean;
  showToolbar?: boolean;
  headerSlot1?: ReactNode;
  headerSlot2?: ReactNode;
  headerSlot3?: ReactNode;
  
  enableInlineEdit?: boolean;
  onRowSave?: (rowId: unknown, updatedRow: T) => void;
  onRowCancel?: (rowId: unknown) => void;
  onRowClick?: (row: T, index: number) => void;
  
  enableRowExpansion?: boolean;
  renderExpandedRow?: (expandedData: { 
    row: T; 
    index: number; 
    isExpanded: boolean; 
    toggleExpansion: () => void; 
  }) => ReactNode;
  isRowExpandable?: (row: T, index: number) => boolean;
  onRowExpansionChange?: (rowId: unknown, isExpanded: boolean, rowData: T) => void;
  
  bulkActions?: BulkAction[];
  
  getRowStyle?: (row: T, index: number) => React.CSSProperties;
}