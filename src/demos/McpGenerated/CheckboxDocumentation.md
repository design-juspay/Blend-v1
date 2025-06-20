# Checkbox Component Documentation

## Description
A control that allows the user to select one or more options from a set.
Checkboxes can be in a checked, unchecked, or indeterminate state.

## Features
- Supports checked, unchecked, and indeterminate states.
- Customizable size (small, medium).
- Optional label and subtext.
- Disabled and error states.
- Controlled and uncontrolled behavior.

## Props

### DOM Attributes

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `id` | `string \| undefined` | false | The unique identifier for the checkbox input element. | `-` |
| `value` | `string \| undefined` | false | The value submitted with the form if the checkbox is checked. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `checked` | `boolean \| "indeterminate" \| undefined` | false | The controlled checked state of the checkbox. Can be `true` (checked), `false` (unchecked), or `'indeterminate'`. | `-` |
| `defaultChecked` | `boolean \| undefined` | false | The initial checked state of the checkbox when uncontrolled. | `-` |
| `disabled` | `boolean \| undefined` | false | If true, disables the checkbox and prevents interaction. | `-` |
| `error` | `boolean \| undefined` | false | If true, applies an error style to the checkbox. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onCheckedChange` | `((checked: boolean \| 'indeterminate') => void) \| undefined` | false | Callback function invoked when the checked state changes. Receives the new checked state (`true`, `false`, or `'indeterminate'`). | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `required` | `boolean \| undefined` | false | If true, indicates that the checkbox must be checked for form submission. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| undefined` | false | The size of the checkbox. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactNode` | false | The label content for the checkbox, typically a string or ReactNode. | `-` |
| `subtext` | `string \| undefined` | false | Optional subtext displayed below the main label. | `-` |
| `slot` | `ReactNode` | false | Optional ReactNode to be rendered alongside the checkbox, often for custom label structures. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Checkbox, CheckboxSize } from "./components/Checkbox";
import { useState } from "react";

function MyForm() {
  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(false);

  return (
    <>
      <Checkbox
        id="option1"
        checked={isChecked}
        onCheckedChange={setIsChecked}
        size={CheckboxSize.MEDIUM}
      >
        Option 1
      </Checkbox>
      <Checkbox id="option2" defaultChecked={true} subtext="This is a default checked checkbox.">
        Option 2 with Subtext
      </Checkbox>
      <Checkbox id="option3" disabled={true}>
        Disabled Option
      </Checkbox>
      <Checkbox id="option4" checked="indeterminate">
        Indeterminate Option
      </Checkbox>
    </>
  );
}
