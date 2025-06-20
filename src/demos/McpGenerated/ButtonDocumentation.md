# Button Component Documentation

## Description
A clickable element used to trigger an action or event.
Buttons can contain text, icons, or both, and come in various styles and sizes.

## Features
- Multiple visual types (primary, secondary, danger, success).
- Different sizes (small, medium, large).
- Sub-types for specific use cases (icon-only, link, plain-icon).
- Support for leading and trailing icons.
- Loading and disabled states.
- Comprehensive ARIA attribute support for accessibility.

## Props

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `buttonType` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| undefined` | false | The main visual style of the button. | `-` |
| `size` | `'sm' \| 'md' \| 'lg' \| undefined` | false | The size of the button. | `-` |
| `subType` | `'default' \| 'iconOnly' \| 'link' \| 'plainIcon' \| undefined` | false | The specific stylistic variation of the button. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `text` | `string \| undefined` | false | The text content displayed on the button. | `-` |
| `leadingIcon` | `ElementType \| undefined` | false | An icon component to be displayed before the button text. | `-` |
| `trailingIcon` | `ElementType \| undefined` | false | An icon component to be displayed after the button text. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isLoading` | `boolean \| undefined` | false | If true, displays a loading indicator and disables the button. | `-` |
| `isDisabled` | `boolean \| undefined` | false | If true, disables the button and applies a disabled style. | `-` |

### Accessibility

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `ariaLabel` | `string \| undefined` | false | Defines a string value that labels the current element. Essential for icon-only buttons or when the button text is not sufficiently descriptive. | `-` |
| `ariaExpanded` | `boolean \| undefined` | false | Indicates whether a collapsible element is currently expanded or collapsed. | `-` |
| `ariaControls` | `string \| undefined` | false | Identifies the element(s) whose contents or presence are controlled by the current element. | `-` |
| `ariaPressed` | `boolean \| "mixed" \| undefined` | false | Indicates the current "pressed" state of a toggle button. | `-` |
| `ariaHasPopup` | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| undefined` | false | Indicates that the element has a popup menu or dialog. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Button, ButtonType, ButtonSize } from "./components/Button";
import { Zap } from "lucide-react"; // Assuming lucide-react for icons

<Button
  text="Primary Action"
  buttonType={ButtonType.PRIMARY}
  size={ButtonSize.MEDIUM}
  onClick={() => console.log("Primary button clicked")}
/>

<Button
  buttonType={ButtonType.SECONDARY}
  size={ButtonSize.SMALL}
  leadingIcon={Zap}
  text="With Icon"
/>

<Button
  subType={ButtonSubType.ICON_ONLY}
  leadingIcon={Zap}
  ariaLabel="Perform action"
/>
