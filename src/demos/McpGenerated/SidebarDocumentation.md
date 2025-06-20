# Sidebar Component Documentation

## Description
Props for the Sidebar component.
The Sidebar provides primary navigation for an application, often including tenant/merchant selection,
a main navigation tree (using `DirectoryData`), and custom top bar and footer sections.

## Features
- Multi-level navigation with tenant and merchant switching.
- Main navigation area using `Directory` component structure.
- Customizable top bar and footer sections.
- Controlled active tenant and merchant states.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `tenants` | `TenantInfo[]` | true | An array of `TenantInfo` objects for the tenant switcher. | `-` |
| `merchants` | `MerchantInfo[]` | true | An array of `MerchantInfo` objects for the merchant switcher. | `-` |
| `children` | `ReactNode` | true | The main content of the application, rendered alongside the sidebar. Note: This seems to imply the Sidebar might also act as a layout wrapper. | `-` |
| `data` | `DirectoryData[]` | true | An array of `DirectoryData` objects for the main navigation tree within the sidebar. | `-` |
| `topbar` | `ReactNode` | true | ReactNode for the content of the top bar within the sidebar (e.g., logo, app name). | `-` |

### State

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `activeTenant` | `string \| undefined` | false | The ID of the currently active tenant. | `-` |
| `activeMerchant` | `string \| undefined` | false | The ID of the currently active merchant. | `-` |

### Event Handler

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `setActiveTenant` | `((tenant: string) => void) \| undefined` | false | Callback function invoked when the active tenant changes. | `-` |
| `setActiveMerchant` | `((merchant: string) => void) \| undefined` | false | Callback function invoked when the active merchant changes. | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `footer` | `ReactNode` | false | Optional ReactNode for the content of the footer within the sidebar. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Sidebar, DirectoryData, TenantInfo, MerchantInfo } from "./components/Sidebar"; // Assuming path
import { HomeIcon, SettingsIcon, UsersIcon, BuildingIcon } from "lucide-react"; // Assuming lucide-react
import { useState } from "react";

const tenantsData: TenantInfo[] = [
  { id: "tenant1", label: "Tenant Alpha", icon: <BuildingIcon /> },
];
const merchantsData: MerchantInfo[] = [
  { id: "merchantA", label: "Merchant A", icon: <UsersIcon /> },
];
const navData: DirectoryData[] = [
  {
    label: "Main Menu",
    items: [
      { label: "Dashboard", href: "/dashboard", leftSlot: <HomeIcon /> },
      { label: "Settings", href: "/settings", leftSlot: <SettingsIcon /> },
    ],
  },
];

function AppLayout({ children }) {
  const [activeTenant, setActiveTenant] = useState("tenant1");
  const [activeMerchant, setActiveMerchant] = useState("merchantA");

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        tenants={tenantsData}
        merchants={merchantsData}
        data={navData}
        topbar={<div>My App Logo</div>}
        activeTenant={activeTenant}
        setActiveTenant={setActiveTenant}
        activeMerchant={activeMerchant}
        setActiveMerchant={setActiveMerchant}
        footer={<div>© 2024 My App</div>}
      >
        {children} // Main content area
      </Sidebar>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
