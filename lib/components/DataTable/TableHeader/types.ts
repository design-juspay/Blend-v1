import { ColumnDefinition } from '../types';
import { SortConfig } from '../types';

export type TableHeaderProps<T extends Record<string, unknown>> = {
  visibleColumns: ColumnDefinition<T>[];
  initialColumns: ColumnDefinition<T>[];
  sortConfig: SortConfig | null;
  selectAll: boolean;
  enableInlineEdit?: boolean;
  enableColumnManager?: boolean;
  onSort: (field: keyof T) => void;
  onSelectAll: (checked: boolean | 'indeterminate') => void;
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
  onHeaderChange?: (field: keyof T, newHeader: string) => void;
  getColumnWidth: (column: ColumnDefinition<T>, index: number) => string;
}; 