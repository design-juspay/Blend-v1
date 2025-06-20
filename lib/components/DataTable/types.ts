/**
 * @propCategory Enum
 * @description Defines the direction for sorting a column in the DataTable.
 */
export enum SortDirection {
  /** Sorts the column in ascending order. */
  ASCENDING = "asc",
  /** Sorts the column in descending order. */
  DESCENDING = "desc",
  /** Indicates no sorting is applied to the column. */
  NONE = "none",
}

/**
 * @description Defines the structure for a column in the DataTable.
 * It specifies how data for a particular field should be displayed and behave.
 * @template T The type of the data object for a row.
 */
export type ColumnDefinition<T> = {
  /**
   * @propCategory Required
   * @description The key of the field in the row data object to display in this column.
   */
  field: keyof T;
  /**
   * @propCategory Required
   * @description The text to display in the column header.
   */
  header: string;
  /**
   * @propCategory Appearance
   * @description The width of the column (e.g., "150px", "20%").
   */
  width?: string;
  /**
   * @propCategory Behavior
   * @description If true, the column can be sorted by the user.
   * @default false
   */
  isSortable?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, the column is visible by default.
   * @default true
   */
  isVisible?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, the user can hide this column via the Column Manager.
   * @default true
   */
  canHide?: boolean;
  /**
   * @propCategory Styling
   * @description Custom CSS class name(s) to apply to the cells in this column.
   */
  className?: string;
  /**
   * @propCategory Rendering
   * @description Optional custom render function for the cell content.
   * Receives the cell value and the entire row data object.
   * @param value The value of the cell (derived from `field`).
   * @param row The data object for the entire row.
   * @returns A ReactNode to render in the cell.
   */
  renderCell?: (value: unknown, row: T) => React.ReactNode;
}

/**
 * @description Represents a single option within a filter. Can be nested.
 */
export type FilterOption = {
  /**
   * @propCategory Required
   * @description A unique identifier for this filter option.
   */
  id: string;
  /**
   * @propCategory Required
   * @description The text label displayed for this filter option.
   */
  label: string;
  /**
   * @propCategory Data
   * @description Optional array of nested `FilterOption` objects for hierarchical filtering.
   */
  options?: FilterOption[];
}

/**
 * @description Defines the structure for a filter that can be applied to the DataTable.
 */
export type Filter = {
  /**
   * @propCategory Required
   * @description A unique identifier for this filter.
   */
  id: string;
  /**
   * @propCategory Required
   * @description The text label displayed for this filter.
   */
  label: string;
  /**
   * @propCategory Required
   * @description An array of `FilterOption` objects available for this filter.
   */
  options: FilterOption[];
  /**
   * @propCategory State
   * @description An array of IDs of the currently selected filter options.
   */
  selectedValues?: string[];
  /**
   * @propCategory Behavior
   * @description If true, allows multiple options to be selected for this filter.
   * @default false
   */
  isMultiSelect?: boolean;
}

/**
 * @description Defines the current sort state of the DataTable.
 */
export type SortConfig = {
  /**
   * @propCategory Required
   * @description The field key (`ColumnDefinition.field`) currently being sorted.
   */
  field: string;
  /**
   * @propCategory Required
   * @description The direction of the sort (`asc`, `desc`, or `none`).
   */
  direction: SortDirection;
}

/**
 * @description Configuration for DataTable pagination.
 */
export type PaginationConfig = {
  /**
   * @propCategory Required
   * @description The currently active page number (1-indexed).
   */
  currentPage: number;
  /**
   * @propCategory Required
   * @description The number of rows to display per page.
   */
  pageSize: number;
  /**
   * @propCategory Required
   * @description The total number of rows available in the dataset (across all pages).
   */
  totalRows: number;
  /**
   * @propCategory Required
   * @description An array of numbers representing the available page size options (e.g., [10, 25, 50]).
   */
  pageSizeOptions: number[];
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the page number changes.
   * @param page The new page number.
   */
  onPageChange?: (page: number) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the page size changes.
   * @param pageSize The new page size.
   */
  onPageSizeChange?: (pageSize: number) => void;
}

/**
 * @description Props for the `ColumnManager` component, used internally by DataTable.
 * @template T The type of the data object for a row.
 */
export type ColumnManagerProps<T> = {
  /** All column definitions for the table. */
  columns: ColumnDefinition<T>[];
  /** Currently visible column definitions. */
  visibleColumns: ColumnDefinition<T>[];
  /** Callback when column visibility or order changes. */
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
};

/**
 * @description A powerful and flexible component for displaying tabular data.
 * Supports sorting, pagination, filtering, column management, and custom cell rendering.
 * @template T The type of the data object for each row. Must be a Record<string, unknown>.
 * @feature Display of structured data in rows and columns.
 * @feature Client-side sorting by column.
 * @feature Client-side pagination.
 * @feature Optional filtering capabilities (structure provided, implementation may vary).
 * @feature Column visibility management.
 * @feature Customizable cell rendering.
 * @feature Optional toolbar with title, description, and custom actions.
 * @feature Striped rows and hover effects for readability.
 * @example
 * ```tsx
 * import { DataTable, ColumnDefinition, SortDirection } from './components/DataTable'; // Assuming path
 *
 * interface UserData {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age: number;
 * }
 *
 * const data: UserData[] = [
 *   { id: 1, name: 'Alice Wonderland', email: 'alice@example.com', age: 30 },
 *   { id: 2, name: 'Bob The Builder', email: 'bob@example.com', age: 45 },
 *   // ... more data
 * ];
 *
 * const columns: ColumnDefinition<UserData>[] = [
 *   { field: 'name', header: 'Full Name', isSortable: true },
 *   { field: 'email', header: 'Email Address' },
 *   { field: 'age', header: 'Age', isSortable: true, width: '100px' },
 * ];
 *
 * <DataTable<UserData>
 *   data={data}
 *   columns={columns}
 *   idField="id"
 *   title="User List"
 *   description="A list of registered users."
 *   isStriped={true}
 *   isHoverable={true}
 *   defaultSort={{ field: 'name', direction: SortDirection.ASCENDING }}
 *   enableColumnManager={true}
 *   showToolbar={true}
 *   pagination={{
 *     currentPage: 1,
 *     pageSize: 10,
 *     totalRows: data.length,
 *     pageSizeOptions: [10, 25, 50],
 *   }}
 * />
 * ```
 */
export type DataTableProps<T extends Record<string, unknown>> = {
  /**
   * @propCategory Required
   * @description An array of data objects to be displayed in the table. Each object represents a row.
   */
  data: T[];
  /**
   * @propCategory Data
   * @description Optional summary information about the data, can be displayed in the toolbar or footer.
   */
  summary?: {
    /** The count of items in the current view/page. */
    count: number;
    /** An optional sum of a particular field, if applicable. */
    sum?: number;
    /** The total count of items in the entire dataset. */
    totalCount: number;
    /** Allows for additional custom summary fields. */
    [key: string]: unknown;
  };
  /**
   * @propCategory Required
   * @description An array of `ColumnDefinition` objects that define the table's columns.
   */
  columns: ColumnDefinition<T>[];
  /**
   * @propCategory Required
   * @description The key of the field in the row data object that serves as a unique identifier for each row.
   */
  idField: keyof T;
  /**
   * @propCategory Content
   * @description Optional title for the table, displayed in the toolbar if `showToolbar` is true.
   */
  title?: string;
  /**
   * @propCategory Content
   * @description Optional description for the table, displayed in the toolbar if `showToolbar` is true.
   */
  description?: string;
  /**
   * @propCategory Appearance
   * @description If true, applies alternating row background colors (striping).
   * @default false
   */
  isStriped?: boolean;
  /**
   * @propCategory Appearance
   * @description If true, applies a hover effect to rows.
   * @default false
   */
  isHoverable?: boolean;
  /**
   * @propCategory Behavior
   * @description The default sort configuration to apply when the table initially loads.
   */
  defaultSort?: SortConfig;
  /**
   * @propCategory Behavior
   * @description If true, enables filtering UI elements (filter structure defined by `Filter` type, actual filtering logic may be external).
   * @default false
   */
  enableFiltering?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, enables the column manager UI for showing/hiding columns.
   * @default false
   */
  enableColumnManager?: boolean;
  /**
   * @propCategory Appearance
   * @description If true, displays the toolbar which can contain the title, description, and other controls.
   * @default false
   */
  showToolbar?: boolean;
  /**
   * @propCategory Behavior
   * @description Configuration object for pagination. If provided, pagination controls are displayed.
   */
  pagination?: PaginationConfig;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the current page changes via pagination controls.
   * Typically used with server-side pagination.
   * @param page The new page number.
   */
  onPageChange?: (page: number) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the page size changes via pagination controls.
   * Typically used with server-side pagination.
   * @param size The new page size.
   */
  onPageSizeChange?: (size: number) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the sort configuration changes (e.g., user clicks a sortable header).
   * @param sortConfig The new sort configuration.
   */
  onSortChange?: (sortConfig: SortConfig) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when filter selections change.
   * @param filters A record of active filters.
   */
  onFilterChange?: (filters: Record<string, unknown>) => void;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the root DataTable element.
   */
  className?: string;
}
