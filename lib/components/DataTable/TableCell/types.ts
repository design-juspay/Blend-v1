import { ColumnDefinition } from '../types';

export type TableCellProps<T extends Record<string, unknown>> = {
  column: ColumnDefinition<T>;
  row: T;
  isEditing: boolean;
  currentValue: unknown;
  width: React.CSSProperties;
  frozenStyles?: React.CSSProperties;
  onFieldChange: (value: unknown) => void;
}; 