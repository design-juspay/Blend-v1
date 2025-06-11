export enum SortDirection {
  ASCENDING = "asc",
  DESCENDING = "desc",
  NONE = "none",
}

export enum FilterType {
  TEXT = "text",
  SELECT = "select",
  MULTISELECT = "multiselect",
  DATE = "date",
  NUMBER = "number",
}

export type ColumnDefinition<T> = {
  /** Field key in data object */
  field: keyof T;
  /** Header text to display */
  header: string;
  /** Width of the column */
  width?: string;
  /** Whether column is sortable */
  isSortable?: boolean;
  /** Whether column is initially visible */
  isVisible?: boolean;
  /** Whether column can be hidden by user */
  canHide?: boolean;
  /** Whether column is editable inline */
  isEditable?: boolean;
  /** Whether column is filterable */
  isFilterable?: boolean;
  /** Type of filter for this column */
  filterType?: FilterType;
  /** Filter options for select/multiselect filters */
  filterOptions?: FilterOption[];
  /** Custom classes to apply to the column */
  className?: string;
  renderCell?: (value: unknown, row: T) => React.ReactNode;
  /** Custom render for edit mode */
  renderEditCell?: (value: unknown, row: T, onChange: (value: unknown) => void) => React.ReactNode;
}

export type FilterOption = {
  /** Unique identifier for the filter option */
  id: string;
  /** Display label for the filter */
  label: string;
  /** Value to filter by */
  value: string;
  /** Optional nested options */
  options?: FilterOption[];
}

export type Filter = {
  /** Unique identifier for the filter */
  id: string;
  /** Display label for the filter */
  label: string;
  /** Filter options */
  options: FilterOption[];
  /** Currently selected value(s) */
  selectedValues?: string[];
  /** Whether multiple selections are allowed */
  isMultiSelect?: boolean;
}

export type ColumnFilter = {
  /** Column field to filter */
  field: keyof any;
  /** Filter type */
  type: FilterType;
  /** Filter value(s) */
  value: string | string[] | number | Date;
  /** Filter operator (equals, contains, greater than, etc.) */
  operator?: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'gt' | 'lt' | 'gte' | 'lte';
}

export type SearchConfig = {
  /** Search query string */
  query: string;
  /** Fields to search in (if empty, searches all visible columns) */
  searchFields?: string[];
  /** Whether search is case sensitive */
  caseSensitive?: boolean;
}

export type SortConfig = {
  field: string;
  direction: SortDirection;
}

export type PaginationConfig = {
  currentPage: number;
  pageSize: number;
  totalRows: number;
  pageSizeOptions: number[];
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

export type ColumnManagerProps<T> = {
  columns: ColumnDefinition<T>[];
  visibleColumns: ColumnDefinition<T>[];
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
};

export type DataTableProps<T extends Record<string, unknown>> = {
  /** Array of data objects to display */
  data: T[];
  /** Data summary information */
  summary?: {
    count: number;
    sum?: number;
    totalCount: number;
    [key: string]: unknown;
  };
  /** Column definitions */
  columns: ColumnDefinition<T>[];
  /** Field name to use as unique identifier for rows */
  idField: keyof T;
  /** Optional table title */
  title?: string;
  /** Optional table description */
  description?: string;
  /** Whether to show striped rows */
  isStriped?: boolean;
  /** Whether to show hover effects on rows */
  isHoverable?: boolean;
  /** Default sort configuration */
  defaultSort?: SortConfig;
  /** Whether to enable universal search */
  enableSearch?: boolean;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Whether to enable filtering */
  enableFiltering?: boolean;
  /** Whether to show column manager */
  enableColumnManager?: boolean;
  /** Whether to show toolbar */
  showToolbar?: boolean;
  /** Whether to enable inline editing */
  enableInlineEdit?: boolean;
  /** Pagination configuration */
  pagination?: PaginationConfig;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Callback when page size changes */
  onPageSizeChange?: (size: number) => void;
  /** Callback when sort changes */
  onSortChange?: (sortConfig: SortConfig) => void;
  /** Callback when search changes */
  onSearchChange?: (searchConfig: SearchConfig) => void;
  /** Callback when filters change */
  onFilterChange?: (filters: ColumnFilter[]) => void;
  /** Callback when row is saved after editing */
  onRowSave?: (rowId: unknown, updatedRow: T) => void;
  /** Callback when row edit is cancelled */
  onRowCancel?: (rowId: unknown) => void;
  /** Optional additional class name */
  className?: string;
} 