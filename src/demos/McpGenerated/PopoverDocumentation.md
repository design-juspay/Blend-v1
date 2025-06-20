# Popover Component Documentation

## Description
A floating element that displays content in relation to a trigger element.
Popovers are used to show additional information or actions without disrupting the main flow of the page.

## Features
- Displays content in a floating panel anchored to a trigger.
- Customizable trigger element.
- Optional heading, description, and close button.
- Supports primary and secondary action buttons in a footer.
- Control over placement (side, alignment, offsets).
- Controllable open/close state.
- Optional modal behavior.

## Props

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `heading` | `string \| undefined` | false | Optional heading text displayed at the top of the popover. | `-` |
| `description` | `string \| undefined` | false | Optional descriptive text displayed below the heading. | `-` |

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `trigger` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | true | The React node that triggers the display of the popover. | `-` |
| `children` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | true | The main content to be displayed inside the popover. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `showCloseButton` | `boolean \| undefined` | false | If true, displays a close button (typically an 'X' icon) in the popover header. | `-` |
| `asModal` | `boolean \| undefined` | false | If true, the popover behaves like a modal (e.g., with an overlay). | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onOpenChange` | `((open: boolean) => void) \| undefined` | false | Callback function invoked when the popover's open state changes. | `-` |
| `onClose` | `(() => void) \| undefined` | false | Callback function invoked when the popover is closed. This is often redundant if `onOpenChange` is used, but can be specific to close actions. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `open` | `boolean \| undefined` | false | Controls the open state of the popover. | `-` |

### Actions

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `primaryAction` | `PopoverActionType \| undefined` | false | Props for the primary action button in the popover footer. | `-` |
| `secondaryAction` | `PopoverActionType \| undefined` | false | Props for the secondary action button in the popover footer. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `sideOffset` | `number \| undefined` | false | The offset of the popover from the trigger along the chosen side. | `-` |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left' \| undefined` | false | The preferred side of the trigger where the popover should appear. | `-` |
| `align` | `'start' \| 'center' \| 'end' \| undefined` | false | The alignment of the popover relative to the trigger. | `-` |
| `alignOffset` | `number \| undefined` | false | The offset of the popover from the trigger along the alignment axis. | `-` |
| `width` | `number \| undefined` | false | Fixed width of the popover content area in pixels. | `-` |
| `minWidth` | `number \| undefined` | false | Minimum width of the popover content area in pixels. | `-` |
| `maxWidth` | `number \| undefined` | false | Maximum width of the popover content area in pixels. | `-` |
| `height` | `number \| undefined` | false | Fixed height of the popover content area in pixels. | `-` |
| `minHeight` | `number \| undefined` | false | Minimum height of the popover content area in pixels. | `-` |
| `maxHeight` | `number \| undefined` | false | Maximum height of the popover content area before scrolling is enabled. | `-` |
| `zIndex` | `number \| undefined` | false | The z-index of the popover. | `-` |
| `size` | `'small' \| 'medium' \| undefined` | false | The size of the popover content area. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Popover, PopoverSize } from "./components/Popover"; // Assuming path
import { ButtonV2, ButtonTypeV2 } from "./components/ButtonV2"; // Assuming path
import { useState } from "react";

function MyComponentWithPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      trigger={<ButtonV2 onClick={() => setIsOpen(!isOpen)}>Toggle Popover</ButtonV2>}
      heading="Popover Title"
      description="This is some information inside the popover."
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      primaryAction={{ text: "OK", onClick: () => setIsOpen(false), buttonType: ButtonTypeV2.PRIMARY }}
      size={PopoverSize.MEDIUM}
      side="bottom"
      align="center"
    >
      <p>Additional popover content can go here.</p>
    </Popover>
  );
}
