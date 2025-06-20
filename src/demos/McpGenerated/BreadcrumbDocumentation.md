# Breadcrumb Component Documentation

## Description
A navigation aid that helps users understand their current location within a website or application.
Breadcrumbs provide a trail of links to parent pages or sections.

## Features
- Displays a hierarchical navigation path.
- Customizable separator between items.
- Each item is a clickable link.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `items` | `BreadcrumbItemType[]` | true | An array of `BreadcrumbItemType` objects, each representing an item in the breadcrumb trail. | `-` |

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `separator` | `import("/Users/deepanshu.kumar/Documents/Blend-v1/node_modules/.pnpm/@types+react@19.1.5/node_modules/@types/react/index").ReactNode` | false | Optional custom separator to be displayed between breadcrumb items. Defaults to '/'. | `-` |

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the breadcrumb container. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Breadcrumb } from "./components/Breadcrumb";
import { BreadcrumbItemType } from "./components/Breadcrumb/types";

const items: BreadcrumbItemType[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", href: "/products/electronics" },
];

<Breadcrumb items={items} />
