# Accordion Component Documentation

## Description
A vertically stacked set of interactive headings that each reveal a section of content.
The Accordion component allows users to toggle the display of sections of content.
It can be configured to allow single or multiple items to be open at once.

## Features
- Supports single and multiple open sections.
- Customizable appearance (bordered or no border).
- Controllable state through `value` and `onValueChange`.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `ReactNode` | true | The AccordionItem components to be rendered within the Accordion. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `accordionType` | `'border' \| 'noBorder' \| undefined` | false | The visual style of the accordion. | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `defaultValue` | `string \| string[] \| undefined` | false | The value of the item to be opened by default. Use an array for multiple default values if `isMultiple` is true. | `-` |
| `value` | `string \| string[] \| undefined` | false | Controlled value of the open item(s). Use an array for multiple values if `isMultiple` is true. | `-` |

### Behavior

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `isMultiple` | `boolean \| undefined` | false | If true, multiple accordion items can be open simultaneously. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `onValueChange` | `((value: string \| string[]) => void) \| undefined` | false | Callback function invoked when the opened item(s) change. Receives the new value (string or string[]). | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the accordion root element. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Accordion, AccordionItem } from "./components/Accordion";

<Accordion defaultValue="item-1" isMultiple={false}>
  <AccordionItem value="item-1" title="Section 1 Title">
    <p>Content for section 1.</p>
  </AccordionItem>
  <AccordionItem value="item-2" title="Section 2 Title">
    <p>Content for section 2.</p>
  </AccordionItem>
</Accordion>
