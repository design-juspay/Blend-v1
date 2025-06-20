# DataTable Component Documentation

## Description
A powerful and flexible component for displaying tabular data.
Supports sorting, pagination, filtering, column management, and custom cell rendering.

## Features
- Display of structured data in rows and columns.
- Client-side sorting by column.
- Client-side pagination.
- Optional filtering capabilities (structure provided, implementation may vary).
- Column visibility management.
- Customizable cell rendering.
- Optional toolbar with title, description, and custom actions.
- Striped rows and hover effects for readability.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `data` | `T[]` | true | An array of data objects to be displayed in the table. Each object represents a row. | `-` |
| `columns` | `ColumnDefinition<T>[]` | true | An array of `ColumnDefinition` objects that define the table's columns. | `-` |
| `idField` | `keyof T` | true | The key of the field in the row data object that serves as a unique identifier for each row. | `-` |

### Data

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `summary` | `{ [key: string]: unknown; count: number; sum?: number \| undefined; totalCount: number; } \| undefined` | false | Optional summary information about the data, can be displayed in the toolbar or footer. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `title` | `string \| undefined` | false | Optional title for the table, displayed in the toolbar if `showToolbar` is true. | `-` |
| `description` | `string \| undefined` | false | Optional description for the table, displayed in the toolbar if `showToolbar` is true. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isStriped` | `boolean \| undefined` | false | If true, applies alternating row background colors (striping). | `-` |
| `isHoverable` | `boolean \| undefined` | false | If true, applies a hover effect to rows. | `-` |
| `showToolbar` | `boolean \| undefined` | false | If true, displays the toolbar which can contain the title, description, and other controls. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `defaultSort` | `SortConfig \| undefined` | false | The default sort configuration to apply when the table initially loads. | `-` |
| `enableFiltering` | `boolean \| undefined` | false | If true, enables filtering UI elements (filter structure defined by `Filter` type, actual filtering logic may be external). | `-` |
| `enableColumnManager` | `boolean \| undefined` | false | If true, enables the column manager UI for showing/hiding columns. | `-` |
| `pagination` | `PaginationConfig \| undefined` | false | Configuration object for pagination. If provided, pagination controls are displayed. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onPageChange` | `((page: number) => void) \| undefined` | false | Callback function invoked when the current page changes via pagination controls. Typically used with server-side pagination. | `-` |
| `onPageSizeChange` | `((size: number) => void) \| undefined` | false | Callback function invoked when the page size changes via pagination controls. Typically used with server-side pagination. | `-` |
| `onSortChange` | `((sortConfig: SortConfig) => void) \| undefined` | false | Callback function invoked when the sort configuration changes (e.g., user clicks a sortable header). | `-` |
| `onFilterChange` | `((filters: Record<string, unknown>) => void) \| undefined` | false | Callback function invoked when filter selections change. | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the root DataTable element. | `-` |

## Usage Examples

### ```tsx
```tsx
import { DataTable, ColumnDefinition, SortDirection } from './components/DataTable'; // Assuming path

interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
}

const data: UserData[] = [
  { id: 1, name: 'Alice Wonderland', email: 'alice@example.com', age: 30 },
  { id: 2, name: 'Bob The Builder', email: 'bob@example.com', age: 45 },
  // ... more data
];

const columns: ColumnDefinition<UserData>[] = [
  { field: 'name', header: 'Full Name', isSortable: true },
  { field: 'email', header: 'Email Address' },
  { field: 'age', header: 'Age', isSortable: true, width: '100px' },
];

<DataTable<UserData>
  data={data}
  columns={columns}
  idField="id"
  title="User List"
  description="A list of registered users."
  isStriped={true}
  isHoverable={true}
  defaultSort={{ field: 'name', direction: SortDirection.ASCENDING }}
  enableColumnManager={true}
  showToolbar={true}
  pagination={{
    currentPage: 1,
    pageSize: 10,
    totalRows: data.length,
    pageSizeOptions: [10, 25, 50],
  }}
/>
