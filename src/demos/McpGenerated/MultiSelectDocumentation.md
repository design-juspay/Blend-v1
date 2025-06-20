# MultiSelect Component Documentation

## Description
A component that allows users to select multiple options from a dropdown list.
Selected items are often displayed as tags within the input area.

## Features
- Selection of multiple items from a list.
- Display of selected items, often as tags.
- Customizable appearance and behavior, inheriting options from Select/Menu components.
- Supports labels, sublabels, hint text, and placeholder.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `selectedValues` | `string[]` | true | An array of strings representing the values of the currently selected items. | `-` |
| `onChange` | `(selectedValue: string) => void` | true | Callback function invoked when an item is selected or deselected. Receives the `value` of the item whose selection state changed. | `-` |
| `items` | `SelectMenuGroupType[]` | true | An array of `SelectMenuGroupType` objects defining the items and groups available for selection in the dropdown. | `-` |
| `label` | `string` | true | The main label for the multi-select field. | `-` |
| `placeholder` | `string` | true | Placeholder text displayed in the input area when no items are selected. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `sublabel` | `string \| undefined` | false | An optional sublabel displayed below the main label. | `-` |
| `helpIconHintText` | `string \| undefined` | false | Tooltip text for an optional help icon displayed next to the label. | `-` |
| `slot` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Optional ReactNode to be rendered, typically as an icon or element inside the input area. | `-` |
| `hintText` | `string \| undefined` | false | A hint text displayed below the multi-select field. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `disabled` | `boolean \| undefined` | false | If true, disables the multi-select field. | `-` |

### DOM Attributes

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `name` | `string \| undefined` | false | The name attribute for the input field (if applicable, often hidden). | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `required` | `boolean \| undefined` | false | If true, marks the multi-select field as required. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `variant` | `'container' \| 'no-container' \| undefined` | false | The visual variant of the dropdown menu, inherited from `SelectMenuVariant`. | `-` |
| `selectionTagType` | `'count' \| 'text' \| undefined` | false | Defines how selected items are displayed (e.g., as tags). Inherited from `SelectionTagType`. | `-` |
| `size` | `'sm' \| 'md' \| 'lg' \| undefined` | false | The size of the multi-select input area, inherited from `SelectMenuSize`. | `-` |
| `minWidth` | `number \| undefined` | false | Minimum width of the dropdown menu. | `-` |
| `maxWidth` | `number \| undefined` | false | Maximum width of the dropdown menu. | `-` |
| `maxHeight` | `number \| undefined` | false | Maximum height of the dropdown menu before scrolling is enabled. | `-` |
| `alignment` | `'start' \| 'center' \| 'end' \| undefined` | false | Alignment of the dropdown menu relative to the input, inherited from `SelectMenuAlignment`. | `-` |
| `side` | `'top' \| 'left' \| 'right' \| 'bottom' \| undefined` | false | Preferred side for the dropdown menu to open, inherited from `SelectMenuSide`. | `-` |
| `sideOffset` | `number \| undefined` | false | Offset of the dropdown menu from the trigger along the chosen side. | `-` |
| `alignOffset` | `number \| undefined` | false | Offset of the dropdown menu from the trigger along the alignment axis. | `-` |

## Usage Examples

### ```tsx
```tsx
import { MultiSelect } from "./components/MultiSelect"; // Assuming path
import { SelectMenuGroupType } from "./components/Select"; // Assuming path
import { useState } from "react";

const options: SelectMenuGroupType[] = [
  {
    label: "Fruits",
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
    ],
  },
];

function MyMultiSelectForm() {
  const [selected, setSelected] = useState<string[]>(["apple", "carrot"]);

  const handleChange = (value: string) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <MultiSelect
      label="Select Produce"
      selectedValues={selected}
      onChange={handleChange}
      items={options}
      placeholder="Choose items..."
    />
  );
}
