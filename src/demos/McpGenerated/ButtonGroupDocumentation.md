# ButtonGroup Component Documentation

## Description
A component to group multiple buttons together, either horizontally or vertically.
It can control the size and styling mode of the enclosed buttons.

## Features
- Groups multiple buttons.
- Supports horizontal (default) and vertical (stacked) layouts.
- Different modes for button styling within the group (e.g., single primary, all secondary).
- Consistent sizing for all buttons in the group.

## Props

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `size` | `'sm' \| 'md' \| 'lg' \| undefined` | false | The size of the buttons within the group. Uses `ButtonSize` enum from `../Button/types`. | `-` |
| `mode` | `'singlePrimary' \| 'allSecondary' \| 'noTransform' \| undefined` | false | Defines the styling mode for buttons within the group. | `-` |

### Layout

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isStacked` | `boolean \| undefined` | false | If true, stacks the buttons vertically. Otherwise, they are arranged horizontally. | `-` |

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactNode` | true | The Button components to be rendered within the group. | `-` |

## Usage Examples

### ```tsx
```tsx
import { ButtonGroup, ButtonGroupMode } from "./components/ButtonGroup";
import { Button, ButtonSize } from "./components/Button"; // Assuming Button component is used as children

<ButtonGroup mode={ButtonGroupMode.SINGLE_PRIMARY} size={ButtonSize.MEDIUM}>
  <Button text="Save" />
  <Button text="Cancel" />
  <Button text="Help" />
</ButtonGroup>

<ButtonGroup isStacked={true} size={ButtonSize.SMALL}>
  <Button text="Option A" />
  <Button text="Option B" />
</ButtonGroup>
