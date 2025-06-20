# Alert Component Documentation

## Description
Displays a prominent message to the user, often requiring attention or action.
Alerts can convey success, warnings, errors, or general information.
They can include a heading, description, actions, and an optional icon.

## Features
- Supports multiple visual variants (primary, success, warning, error, etc.).
- Customizable styles (subtle, noFill).
- Optional primary and secondary actions.
- Optional close button.

## Props

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `heading` | `string` | true | The main title or heading for the alert. | `-` |
| `description` | `string` | true | A more detailed message or description for the alert. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `variant` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'purple' \| 'orange' \| 'neutral' \| undefined` | false | Determines the color scheme and icon used for the alert, indicating its nature. | `-` |
| `style` | `'subtle' \| 'noFill' \| undefined` | false | Modifies the visual presentation of the alert (e.g., subtle background). | `-` |
| `icon` | `ReactNode` | false | Custom icon to display in the alert, overriding the default icon for the variant. | `-` |

### Actions

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `primaryAction` | `AlertAction \| undefined` | false | Defines the primary action button for the alert. | `-` |
| `secondaryAction` | `AlertAction \| undefined` | false | Defines the secondary action button for the alert. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onClose` | `(() => void) \| undefined` | false | Callback function triggered when the alert's close button (if available) is clicked. | `-` |

### Layout

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `actionPlacement` | `'bottom' \| 'right' \| undefined` | false | Specifies the placement of action buttons within the alert. | `-` |

## Usage Examples

### Basic Success Alert
```tsx
<Alert
variant={AlertVariant.SUCCESS}
heading="Profile Updated"
description="Your profile information has been successfully updated."
onClose={() => console.log("Alert closed")}
/>
```

### Error Alert with Actions
```tsx
<Alert
variant={AlertVariant.ERROR}
heading="Submission Failed"
description="We couldn't save your changes. Please try again."
primaryAction={{ label: "Retry", onClick: () => console.log("Retry clicked") }}
secondaryAction={{ label: "Cancel", onClick: () => console.log("Cancel clicked") }}
/>
