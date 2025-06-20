# SingleSelect Component Documentation

## Description
A component that allows users to select a single option from a dropdown list.
It typically displays the selected value and opens a menu of options when clicked.

## Features
- Selection of a single item from a list.
- Display of the currently selected value.
- Customizable appearance and behavior, inheriting options from Select/Menu components.
- Supports labels, sublabels, hint text, and placeholder.
- Optional search functionality within the dropdown.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `label` | `string` | true | The main label for the single-select field. | `-` |
| `placeholder` | `string` | true | Placeholder text displayed in the input area when no item is selected. | `-` |
| `items` | `SelectMenuGroupType[]` | true | An array of `SelectMenuGroupType` objects defining the items and groups available for selection in the dropdown. | `-` |
| `selected` | `string` | true | The `value` of the currently selected item. | `-` |
| `onSelect` | `(value: string) => void` | true | Callback function invoked when an item is selected. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `subLabel` | `string \| undefined` | false | An optional sublabel displayed below the main label. | `-` |
| `hintText` | `string \| undefined` | false | A hint text displayed below the single-select field. | `-` |
| `helpIconText` | `string \| undefined` | false | Tooltip text for an optional help icon displayed next to the label. (Note: prop name might be `helpIconHintText` based on other inputs) | `-` |
| `slot` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Optional ReactNode to be rendered, typically as an icon or element inside the input area. | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `required` | `boolean \| undefined` | false | If true, marks the single-select field as required. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| 'lg' \| undefined` | false | The size of the single-select input area, inherited from `SelectMenuSize`. | `-` |
| `variant` | `'container' \| 'no-container' \| undefined` | false | The visual variant of the dropdown menu, inherited from `SelectMenuVariant`. | `-` |
| `alignment` | `'start' \| 'center' \| 'end' \| undefined` | false | Alignment of the dropdown menu relative to the input, inherited from `SelectMenuAlignment`. | `-` |
| `side` | `'top' \| 'left' \| 'right' \| 'bottom' \| undefined` | false | Preferred side for the dropdown menu to open, inherited from `SelectMenuSide`. | `-` |
| `sideOffset` | `number \| undefined` | false | Offset of the dropdown menu from the trigger along the chosen side. | `-` |
| `alignOffset` | `number \| undefined` | false | Offset of the dropdown menu from the trigger along the alignment axis. | `-` |
| `minWidth` | `number \| undefined` | false | Minimum width of the dropdown menu. | `-` |
| `maxWidth` | `number \| undefined` | false | Maximum width of the dropdown menu. | `-` |
| `maxHeight` | `number \| undefined` | false | Maximum height of the dropdown menu before scrolling is enabled. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `enableSearch` | `boolean \| undefined` | false | If true, enables a search input within the dropdown to filter items. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `disabled` | `boolean \| undefined` | false | If true, disables the single-select field. | `-` |

### DOM Attributes

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `name` | `string \| undefined` | false | The name attribute for the input field (if applicable, often hidden). | `-` |

## Usage Examples

### ```tsx
```tsx
import { SingleSelect } from "./components/SingleSelect"; // Assuming path
import { SelectMenuGroupType, SelectMenuSize } from "./components/Select"; // Assuming path
import { useState } from "react";

const countryOptions: SelectMenuGroupType[] = [
  {
    items: [
      { label: "United States", value: "US" },
      { label: "Canada", value: "CA" },
      { label: "Mexico", value: "MX" },
    ],
  },
];

function MyCountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState<string>("US");

  return (
    <SingleSelect
      label="Country"
      selected={selectedCountry}
      onSelect={setSelectedCountry}
      items={countryOptions}
      placeholder="Select a country"
      size={SelectMenuSize.MEDIUM}
    />
  );
}
