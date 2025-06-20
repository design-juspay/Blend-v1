# Switch Component Documentation

## Description
A two-state toggle switch that allows users to turn an option on or off.

## Features
- Represents an on/off state toggle.
- Customizable size (small, medium).
- Optional label and subtext.
- Disabled and error states.
- Controlled and uncontrolled behavior.

## Props

### DOM Attributes

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `id` | `string \| undefined` | false | The unique identifier for the switch input element. | `-` |
| `name` | `string \| undefined` | false | The name attribute for the switch input element. | `-` |
| `value` | `string \| undefined` | false | The value submitted with the form if the switch is part of a form. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `checked` | `boolean \| undefined` | false | The controlled checked state of the switch (true for on, false for off). | `-` |
| `defaultChecked` | `boolean \| undefined` | false | The initial checked state of the switch when uncontrolled. | `-` |
| `disabled` | `boolean \| undefined` | false | If true, disables the switch and prevents interaction. | `-` |
| `error` | `boolean \| undefined` | false | If true, applies an error style to the switch (visual only, as switches don't typically have validation errors). | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onChange` | `((checked: boolean) => void) \| undefined` | false | Callback function invoked when the switch state changes. | `-` |

### Validation

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `required` | `boolean \| undefined` | false | If true, indicates that the switch must be in a specific state for form submission (though typically not used for standalone switches). | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| undefined` | false | The size of the switch. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `label` | `ReactNode` | false | The label content for the switch, typically a string or ReactNode. | `-` |
| `subtext` | `ReactNode` | false | Optional subtext displayed below or alongside the main label. | `-` |
| `slot` | `ReactNode` | false | Optional ReactNode to be rendered, often for custom label structures or additional elements. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Switch, SwitchSize } from "./components/Switch"; // Assuming path
import { useState } from "react";

function MySettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <Switch
      id="notifications"
      checked={notificationsEnabled}
      onChange={setNotificationsEnabled}
      label="Enable Notifications"
      subtext="Receive updates about your account."
      size={SwitchSize.MEDIUM}
    />
  );
}
