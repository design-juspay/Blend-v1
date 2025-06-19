# Blend UI Component Library

A modern, accessible React component library built with TypeScript and styled-components. Blend provides a comprehensive set of UI components designed for building beautiful and functional web applications.

## Features

- 🎨 **Modern Design System** - Clean, consistent design language
- ♿ **Accessibility First** - Built with accessibility in mind using Radix UI primitives
- 🎯 **TypeScript Support** - Full TypeScript support with comprehensive type definitions
- 🎪 **Flexible Theming** - Customizable themes and styling options
- 📱 **Responsive** - Mobile-first responsive design
- 🔧 **Developer Experience** - Easy to use APIs with sensible defaults

## Installation

Install Blend UI using your preferred package manager:

```bash
# npm
npm install blend-v1

# yarn
yarn add blend-v1

# pnpm
pnpm add blend-v1
```

## Quick Start

```tsx
import { Button, DataTable, Alert } from 'blend-v1';

function App() {
  return (
    <div>
      <Alert type="success">
        Welcome to Blend UI!
      </Alert>
      
      <Button variant="primary" size="medium">
        Get Started
      </Button>
    </div>
  );
}
```

## Components

### Form Components
- **Button** - Primary action buttons with multiple variants
- **ButtonV2** - Enhanced button component with theme support
- **ButtonGroup** / **ButtonGroupV2** - Grouped button controls
- **Checkbox** - Checkbox input with custom styling
- **Radio** - Radio button input controls
- **Switch** - Toggle switch component
- **Inputs** - Text inputs, textareas, and form controls
- **SingleSelect** / **MultiSelect** - Dropdown selection components

### Data Display
- **DataTable** - Advanced data table with sorting, pagination, and filtering
- **Charts** - Chart components for data visualization
- **StatCard** - Statistical information cards
- **Tags** / **SplitTag** - Tag and label components
- **Avatar** / **AvatarGroup** - User avatar displays

### Navigation
- **Tabs** - Tab navigation component
- **Breadcrumb** - Breadcrumb navigation
- **Menu** - Context and navigation menus
- **Sidebar** - Side navigation panel

### Feedback
- **Alert** - Alert and notification messages
- **Snackbar** - Toast notifications
- **Modal** - Modal dialogs and overlays
- **Tooltip** - Contextual tooltips
- **Popover** - Popover content displays

### Layout & Structure
- **Accordion** - Collapsible content sections
- **Directory** - File/folder directory components

### Date & Time
- **DateRangePicker** - Date range selection component

### Visual Effects
- **GradientBlur** - Gradient and blur effect components

## Usage Examples

### DataTable

```tsx
import { DataTable } from 'blend-v1';

const columns = [
  { field: 'id', header: 'ID', isSortable: true },
  { field: 'name', header: 'Name', isSortable: true },
  { field: 'email', header: 'Email' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

function MyTable() {
  return (
    <DataTable
      data={data}
      columns={columns}
      idField="id"
      title="Users"
      pagination={{
        currentPage: 1,
        pageSize: 10,
        totalRows: data.length,
      }}
    />
  );
}
```

### Button with Variants

```tsx
import { Button, ButtonV2 } from 'blend-v1';
import { ButtonType, ButtonSize } from 'blend-v1';

function ButtonExamples() {
  return (
    <div>
      <Button 
        buttonType={ButtonType.PRIMARY}
        size={ButtonSize.MEDIUM}
      >
        Primary Button
      </Button>
      
      <ButtonV2 
        variant="secondary"
        size="large"
        disabled={false}
      >
        Enhanced Button
      </ButtonV2>
    </div>
  );
}
```

### Form Controls

```tsx
import { Checkbox, Radio, Switch, SingleSelect } from 'blend-v1';

function FormExample() {
  return (
    <form>
      <Checkbox
        checked={true}
        onCheckedChange={(checked) => console.log(checked)}
      >
        Accept terms
      </Checkbox>
      
      <Switch
        checked={false}
        onCheckedChange={(checked) => console.log(checked)}
      />
      
      <SingleSelect
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value="option1"
        onChange={(value) => console.log(value)}
      />
    </form>
  );
}
```

## Styling

The library comes with default styles that you need to import:

```tsx
import 'blend-v1/style.css';
```

## TypeScript Support

Blend UI is built with TypeScript and provides comprehensive type definitions. All components export their prop types for use in your TypeScript projects:

## Storybook

This library includes Storybook for component documentation and testing. To run Storybook locally:

```bash
pnpm storybook
```

## Development

To contribute to this library:

```bash
# Clone the repository
git clone https://github.com/design-juspay/Blend-v1.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run Storybook
pnpm storybook
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to help improve Blend UI.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/design-juspay/Blend-v1/issues).
