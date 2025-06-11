import { ColumnDefinition, SortConfig } from '../types';

export type TableHeaderProps<T extends Record<string, unknown>> = {
  visibleColumns: ColumnDefinition<T>[];
  initialColumns: ColumnDefinition<T>[];
  sortConfig: SortConfig | null;
  selectAll: boolean;
  enableInlineEdit?: boolean;
  enableColumnManager?: boolean;
  onSort: (field: keyof any) => void;
  onSelectAll: (checked: boolean | 'indeterminate') => void;
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
  getColumnWidth: (column: ColumnDefinition<T>, index: number) => string;
}; 