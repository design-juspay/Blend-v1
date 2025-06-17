import { ColumnDefinition } from '../types';

export type TableHeaderProps<T extends Record<string, unknown>> = {
  visibleColumns: ColumnDefinition<T>[];
  initialColumns: ColumnDefinition<T>[];
  selectAll: boolean | 'indeterminate';
  enableInlineEdit?: boolean;
  enableColumnManager?: boolean;
  enableRowExpansion?: boolean;
  onSort: (field: keyof T) => void;
  onSelectAll: (checked: boolean | 'indeterminate') => void;
  onColumnChange: (columns: ColumnDefinition<T>[]) => void;
  onHeaderChange?: (field: keyof T, newHeader: string) => void;
  getColumnWidth: (column: ColumnDefinition<T>, index: number) => string;
}; 