import { useState } from 'react';
import { ColumnDefinition } from './types';

interface DataTableFiltersProps<T> {
  columns: ColumnDefinition<T>[];
  filters: Record<string, unknown>;
  onFilterChange: (filters: Record<string, unknown>) => void;
}

export function DataTableFilters<T>({
  columns,
  filters,
  onFilterChange,
}: DataTableFiltersProps<T>) {
  const [localFilters, setLocalFilters] = useState<Record<string, unknown>>(filters);

  const handleFilterChange = (field: string, value: unknown) => {
    const newFilters = { ...localFilters, [field]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setLocalFilters({});
    onFilterChange({});
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      {columns
        .filter(col => col.field) // Only show filterable columns
        .map((column) => (
          <div key={String(column.field)} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500' }}>
              {column.header}
            </label>
            <input
              type="text"
              value={String(localFilters[String(column.field)] || '')}
              onChange={(e) => handleFilterChange(String(column.field), e.target.value)}
              placeholder={`Filter ${column.header}`}
              style={{
                padding: '4px 8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
        ))}
      
      {Object.keys(localFilters).length > 0 && (
        <button
          onClick={clearFilters}
          style={{
            padding: '4px 8px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
} 