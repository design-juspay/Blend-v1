import { useState, useRef } from 'react';
import { ColumnDefinition } from './types';

interface ColumnManagerProps<T> {
  columns: ColumnDefinition<T>[];
  visibleColumns: ColumnDefinition<T>[];
  onColumnToggle: (columnField: keyof T) => void;
}

export function ColumnManager<T>({
  columns,
  visibleColumns,
  onColumnToggle,
}: ColumnManagerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = (columnField: keyof T) => {
    onColumnToggle(columnField);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'white',
          cursor: 'pointer'
        }}
      >
        Columns
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            minWidth: '200px',
            zIndex: 1000,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {columns
            .filter(col => col.canHide !== false)
            .map((column) => {
              const isVisible = visibleColumns.some(vc => vc.field === column.field);
              return (
                <label
                  key={String(column.field)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 0',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={() => handleToggle(column.field)}
                    style={{ marginRight: '8px' }}
                  />
                  {column.header}
                </label>
              );
            })}
        </div>
      )}
    </div>
  );
} 