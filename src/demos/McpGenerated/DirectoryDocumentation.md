# Directory Component Documentation

## Description
Props for the main Directory component.
The Directory component renders a list of sections, each containing navigation items.
It's often used for side navigation or structured lists.

## Features
- Displays hierarchical navigation structures.
- Supports collapsible sections.
- Customizable items with labels, icons (slots), and actions (onClick/href).

## Props

### Styling

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `className` | `string \| undefined` | false | Optional CSS class name to apply to the root Directory element. | `-` |

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `directoryData` | `DirectoryData[]` | true | An array of `DirectoryData` objects, each representing a section in the directory. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Directory, DirectoryData, NavbarItem } from "./components/Directory"; // Assuming path

const directoryItems: DirectoryData[] = [
  {
    label: "General",
    isCollapsible: true,
    defaultOpen: true,
    items: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Profile", href: "/profile" },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: "Account", href: "/settings/account" },
      { label: "Preferences", onClick: () => console.log("Prefs clicked") },
    ],
  },
];

<Directory directoryData={directoryItems} />
