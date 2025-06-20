# Dropdown Component Documentation

## Description
A component that combines a label, an optional label, a hint text, and a trigger (styled button)
which opens a Menu component to display a list of selectable items.
It is essentially a styled wrapper around the Menu component to provide a common Dropdown UI pattern.

## Features
- Displays a trigger element that opens a menu of items.
- Includes optional main label, secondary "optional" label, and hint text.
- Allows for a custom slot (e.g., an icon) within the trigger.
- Utilizes the `Menu` component for displaying items.

## Props

No props defined for this component.

## Usage Examples

### ```tsx
```tsx
import Dropdown from "./components/Dropdown"; // Assuming path
import { MenuV2GroupType, MenuItemType } from "./components/Menu"; // Assuming path
import { User } from "lucide-react";

const menuItems: MenuV2GroupType[] = [
  {
    items: [
      { label: "Profile", value: "profile", onSelect: () => console.log("Profile selected") },
      { label: "Settings", value: "settings", onSelect: () => console.log("Settings selected") },
    ]
  },
  {
    label: "Actions",
    items: [
      { label: "Logout", value: "logout", onSelect: () => console.log("Logout selected"), isDanger: true },
    ]
  }
];

<Dropdown
  label="User Options"
  optionalLabel="(click to select)"
  hintText="Choose an action from the menu."
  slot={<User size={16} />}
  items={menuItems}
/>
