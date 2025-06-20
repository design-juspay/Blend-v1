# SplitTag Component Documentation

## Description
A component that displays two tags joined together, often to represent a key-value pair or a status with a sub-status.
It can also include leading and trailing slots for icons or other elements.

## Features
- Displays two connected tags (primary and optional secondary).
- Customizable size and shape for the combined tag.
- Optional leading and trailing slots for icons or adornments.
- Individual tag parts can have their own text, variant, style, and onClick handlers (via `TagProps`).

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `primaryTag` | `Omit<TagProps, "splitTagPosition" \| "size" \| "shape">` | true | Props for the primary (usually left) part of the split tag. Uses `TagProps` excluding `splitTagPosition`, `size`, and `shape` (which are controlled by `SplitTagProps`). | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `secondaryTag` | `Omit<TagProps, "splitTagPosition" \| "size" \| "shape"> \| undefined` | false | Props for the secondary (usually right) part of the split tag. Optional. Uses `TagProps` excluding `splitTagPosition`, `size`, and `shape`. | `-` |
| `leadingSlot` | `ReactNode` | false | Optional ReactNode to be displayed at the beginning (left) of the entire split tag. | `-` |
| `trailingSlot` | `ReactNode` | false | Optional ReactNode to be displayed at the end (right) of the entire split tag. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| undefined` | false | The overall size of the split tag, inherited from `TagSize`. | `-` |
| `shape` | `'rounded' \| 'squarical' \| undefined` | false | The overall shape of the split tag, inherited from `TagShape`. | `-` |

## Usage Examples

### ```tsx
```tsx
import { SplitTag, TagSize, TagShape, TagColor, TagVariant } from "./components/SplitTag"; // Assuming path
import { CheckCircle, AlertTriangle } from "lucide-react"; // Assuming lucide-react

<SplitTag
  primaryTag={{
    text: "Status",
    variant: TagVariant.FILLED,
    style: TagColor.NEUTRAL,
  }}
  secondaryTag={{
    text: "Active",
    variant: TagVariant.FILLED,
    style: TagColor.SUCCESS,
    onClick: () => console.log("Active part clicked"),
  }}
  leadingSlot={<CheckCircle size={14} />}
  size={TagSize.MEDIUM}
  shape={TagShape.ROUNDED}
/>

<SplitTag
  primaryTag={{ text: "Priority", style: TagColor.NEUTRAL }}
  secondaryTag={{ text: "High", style: TagColor.ERROR }}
  trailingSlot={<AlertTriangle size={14} />}
/>
