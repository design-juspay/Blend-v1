import { ColumnDefinition } from '../types';

export type TableBodyProps<T extends Record<string, unknown>> = {
  currentData: T[];
  visibleColumns: ColumnDefinition<T>[];
  idField: keyof T;
  selectedRows: Record<string, boolean>;
  editingRows: Record<string, boolean>;
  editValues: Record<string, T>;
  enableInlineEdit?: boolean;
  enableColumnManager?: boolean;
  onRowSelect: (rowId: unknown) => void;
  onEditRow: (rowId: unknown) => void;
  onSaveRow: (rowId: unknown) => void;
  onCancelEdit: (rowId: unknown) => void;
  onFieldChange: (rowId: unknown, field: keyof any, value: unknown) => void;
  getColumnWidth: (column: ColumnDefinition<T>, index: number) => string;
}; 