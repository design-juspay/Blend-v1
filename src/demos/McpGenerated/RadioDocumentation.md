# Radio Component Documentation

## Description
Props for an individual Radio button component.
Radio buttons are typically used in a `RadioGroup` to allow users to select one option from a set.

## Features
- Represents a single selectable option in a radio group.
- Customizable size (small, medium).
- Optional label and subtext.
- Disabled and error states.
- Controlled and uncontrolled behavior for its checked state.

## Props

### DOM Attributes

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `id` | `string \| undefined` | false | The unique identifier for the radio input element. | `-` |
| `value` | `string \| undefined` | false | The value associated with this radio button. This value is used by the `RadioGroup` to identify the selected option. | `-` |
| `name` | `string \| undefined` | false | The name attribute for the radio input element. Should be consistent across all radio buttons in a group. Typically managed by the parent `RadioGroup`. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `checked` | `boolean \| undefined` | false | The controlled checked state of the radio button. Typically managed by the parent `RadioGroup`. | `-` |
| `defaultChecked` | `boolean \| undefined` | false | The initial checked state of the radio button when uncontrolled. Typically managed by the parent `RadioGroup`. | `-` |
| `disabled` | `boolean \| undefined` | false | If true, disables the radio button and prevents interaction. | `-` |
| `error` | `boolean \| undefined` | false | If true, applies an error style to the radio button. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onChange` | `((checked: boolean) => void) \| undefined` | false | Callback function invoked when the checked state changes. Typically managed by the parent `RadioGroup`. | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `required` | `boolean \| undefined` | false | If true, indicates that one radio button in the group must be selected for form submission. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| undefined` | false | The size of the radio button. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactNode` | false | The label content for the radio button, typically a string or ReactNode. | `-` |
| `subtext` | `string \| undefined` | false | Optional subtext displayed below the main label. | `-` |
| `slot` | `ReactNode` | false | Optional ReactNode to be rendered alongside the radio button, often for custom label structures. | `-` |

## Usage Examples

### ```tsx
```tsx
// Usually used within a RadioGroup, see RadioGroup example.
import { Radio, RadioSize } from "./components/Radio";

<Radio value="option1" size={RadioSize.MEDIUM}>
  Option 1
</Radio>
