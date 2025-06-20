# Tooltip Component Documentation

## Description
A small, contextual popup that displays descriptive text or information when a user hovers over or focuses on an element.

## Features
- Displays informative text in a floating panel near a trigger element.
- Customizable content, which can be a string or ReactNode.
- Control over placement (side, alignment, offset) and appearance (size, arrow).
- Optional slot for additional content (e.g., an icon) within the tooltip.
- Configurable delay duration before the tooltip appears.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactNode` | true | The trigger element that the tooltip is associated with. The tooltip will appear when this element is hovered or focused. | `-` |
| `content` | `ReactNode` | true | The content to be displayed inside the tooltip. Can be a simple string or a more complex ReactNode. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `open` | `boolean \| undefined` | false | Controls the open state of the tooltip. If not provided, the tooltip's visibility is managed internally based on hover/focus. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `side` | `'top' \| 'right' \| 'left' \| 'bottom' \| undefined` | false | The preferred side of the trigger element where the tooltip should appear. | `-` |
| `align` | `'start' \| 'end' \| 'center' \| undefined` | false | The alignment of the tooltip relative to the trigger element. | `-` |
| `showArrow` | `boolean \| undefined` | false | If true, displays an arrow pointing from the tooltip to the trigger element. | `-` |
| `size` | `'sm' \| 'lg' \| undefined` | false | The size of the tooltip content area. | `-` |
| `slotDirection` | `'left' \| 'right' \| undefined` | false | The direction/position of the `slot` content relative to the main `content`. | `-` |
| `offset` | `number \| undefined` | false | The offset of the tooltip from the trigger element, in pixels. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `slot` | `ReactNode` | false | Optional ReactNode to be displayed inside the tooltip, alongside the main `content`. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `delayDuration` | `number \| undefined` | false | The delay in milliseconds before the tooltip appears after the trigger is hovered. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Tooltip, TooltipSide, TooltipAlign, TooltipSize } from "./components/Tooltip"; // Assuming path
import { Button } from "./components/Button"; // Assuming path
import { InfoIcon } from "lucide-react"; // Assuming lucide-react

<Tooltip
  content="This provides more details about the button's action."
  side={TooltipSide.TOP}
  align={TooltipAlign.CENTER}
  size={TooltipSize.SMALL}
  showArrow={true}
  delayDuration={300}
>
  <Button text="Hover Me" />
</Tooltip>

<Tooltip
  content={<span>Detailed <strong>HTML</strong> content is also supported.</span>}
  slot={<InfoIcon size={14} />}
  slotDirection={TooltipSlotDirection.LEFT}
>
  <span style={{textDecoration: 'underline dotted'}}>Info</span>
</Tooltip>
