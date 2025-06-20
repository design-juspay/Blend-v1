# Text Component Documentation

## Description
A versatile text component that can render various semantic HTML tags
and apply typographic styles based on predefined variants or direct props.
It extends `PrimitiveTextProps` for low-level styling capabilities.

## Features
- Renders text with semantic HTML tags (h1-h5, p, span, etc.) via `as` prop or inferred from `variant`.
- Predefined typographic variants (body, display, heading, code) with different sizes.
- Allows overriding font size, weight, and color.
- Supports text truncation.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `children` | `React.ReactNode` | true | The content to be rendered by the Text component. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `variant` | `'body.xs' \| 'body.sm' \| 'body.md' \| 'body.lg' \| 'display.sm' \| 'display.md' \| 'display.lg' \| 'display.xl' \| 'heading.sm' \| 'heading.md' \| 'heading.lg' \| 'heading.xl' \| 'heading.2xl' \| 'code.sm' \| 'code.md' \| 'code.lg' \| undefined` | false | Predefined typographic variant to apply (e.g., "body.md", "heading.lg"). This determines default font size, line height, and semantic tag if `as` is not provided. | `-` |

### Structure

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `as` | `'p' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'span' \| 'code' \| 'q' \| 'small' \| 'label' \| undefined` | false | The semantic HTML tag to render. If not provided, it's inferred from the `variant`. Defaults to `p` if no variant or specific inference rule applies. | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `style` | `React.CSSProperties \| undefined` | false | Optional inline CSS styles to apply to the component. | `-` |

## Usage Examples

### ```tsx
```tsx
import Text, { VariantType } from "./components/Text/Text"; // Assuming path

<Text variant="heading.lg" as="h2" color="blue">
  Large Heading
</Text>

<Text variant="body.md">
  This is a paragraph of body text.
</Text>

<Text fontSize="14px" fontWeight="bold" truncate={true} style={{ maxWidth: '100px' }}>
  This is some very long text that will be truncated.
</Text>
