# DateRangePicker Component Documentation

## Description
A component that allows users to select a range of dates, optionally with time.
It can include preset ranges and various customization options.

## Features
- Selection of date ranges (start and end dates).
- Optional time selection for start and end dates.
- Predefined date range presets (e.g., Today, Last 7 Days).
- Customizable date format and placeholder.
- Min/max date constraints.
- Option to disable future or past dates.
- Support for a custom trigger element.

## Props

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `value` | `DateRange \| undefined` | false | The currently selected date range. | `-` |
| `isDisabled` | `boolean \| undefined` | false | If true, disables the date range picker. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onChange` | `((range: DateRange) => void) \| undefined` | false | Callback function invoked when the selected date range changes. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `showTimePicker` | `boolean \| undefined` | false | If true, allows users to select time along with the date. | `-` |
| `showPresets` | `boolean \| undefined` | false | If true, displays a list of preset date ranges for quick selection. | `-` |
| `allowSingleDateSelection` | `boolean \| undefined` | false | If true, allows selecting a single date (start and end date will be the same). | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `placeholder` | `string \| undefined` | false | Placeholder text displayed in the input field when no date range is selected. | `-` |
| `icon` | `ReactNode` | false | Optional icon to display in the input field. | `-` |
| `dateFormat` | `string \| undefined` | false | The format for displaying dates (e.g., "MM/dd/yyyy"). Refer to date-fns format strings. | `-` |
| `triggerElement` | `ReactNode` | false | Optional custom React node to use as the trigger for opening the date range picker popover. If not provided, a default input field is used. | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the date range picker component. | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `minDate` | `Date \| undefined` | false | The minimum selectable date. | `-` |
| `maxDate` | `Date \| undefined` | false | The maximum selectable date. | `-` |
| `disableFutureDates` | `boolean \| undefined` | false | If true, disables selection of future dates. | `-` |
| `disablePastDates` | `boolean \| undefined` | false | If true, disables selection of past dates. | `-` |

### Accessibility

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `ariaLabel` | `string \| undefined` | false | ARIA label for the date range picker input. | `-` |

## Usage Examples

### ```tsx
```tsx
import { DateRangePicker, DateRange } from "./components/DateRangePicker"; // Assuming path
import { useState } from "react";

function MyComponent() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  return (
    <DateRangePicker
      value={dateRange}
      onChange={setDateRange}
      showTimePicker={true}
      showPresets={true}
      placeholder="Select a date range"
    />
  );
}
