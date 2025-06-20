import { ReactNode } from "react";
import { DirectoryData } from "../Directory/types"; // Used for the main navigation data structure

/**
 * @description Represents an individual navigation item within a Sidebar section.
 */
export type SidebarNavItem = {
  /**
   * @propCategory Required
   * @description The text label for the navigation item.
   */
  label: string;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the left of the item label (e.g., an icon).
   */
  leftSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the right of the item label (e.g., a badge or arrow).
   */
  rightSlot?: ReactNode;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the item is clicked.
   */
  onClick?: () => void;
};

/**
 * @description Represents a section of navigation items within the Sidebar, often under a merchant.
 */
export type SidebarNavSection = {
  /**
   * @propCategory Content
   * @description Optional label for the section header.
   */
  label?: string;
  /**
   * @propCategory Required
   * @description An array of `SidebarNavItem` objects to be displayed within this section.
   */
  navItems: SidebarNavItem[];
};

/**
 * @description Represents the data structure for a merchant, including its label and navigation sections.
 * This type seems specific to a multi-level sidebar structure involving tenants and merchants.
 */
export type MerchantData = {
  /**
   * @propCategory Required
   * @description The label for the merchant.
   */
  label: string;
  /**
   * @propCategory Required
   * @description An array of `SidebarNavSection` objects associated with this merchant.
   */
  sections: SidebarNavSection[];
};

/**
 * @description Represents the data structure for a tenant, including its label, icon, and associated merchant data.
 * This type seems specific to a multi-level sidebar structure.
 */
export type TenantData = {
  /**
   * @propCategory Required
   * @description The label for the tenant.
   */
  label: string;
  /**
   * @propCategory Required
   * @description A ReactNode (e.g., an icon) representing the tenant.
   */
  icon: ReactNode;
  /**
   * @propCategory Required
   * @description An array of `MerchantData` objects associated with this tenant.
   */
  merchantData: MerchantData[];
};

/**
 * @description Information for displaying a tenant in the Sidebar's tenant switcher.
 */
type TenantInfo = {
  /**
   * @propCategory Required
   * @description The display label for the tenant.
   */
  label: string;
  /**
   * @propCategory Required
   * @description A ReactNode (e.g., an icon) for the tenant.
   */
  icon: ReactNode;
  /**
   * @propCategory Data
   * @description Optional unique identifier for the tenant.
   */
  id?: string;
};

/**
 * @description Information for displaying a merchant in the Sidebar's merchant switcher.
 */
type MerchantInfo = {
  /**
   * @propCategory Required
   * @description The display label for the merchant.
   */
  label: string;
  /**
   * @propCategory Required
   * @description A ReactNode (e.g., an icon) for the merchant.
   */
  icon: ReactNode;
  /**
   * @propCategory Data
   * @description Optional unique identifier for the merchant.
   */
  id?: string;
};

/**
 * @description Props for the Sidebar component.
 * The Sidebar provides primary navigation for an application, often including tenant/merchant selection,
 * a main navigation tree (using `DirectoryData`), and custom top bar and footer sections.
 * @feature Multi-level navigation with tenant and merchant switching.
 * @feature Main navigation area using `Directory` component structure.
 * @feature Customizable top bar and footer sections.
 * @feature Controlled active tenant and merchant states.
 * @example
 * ```tsx
 * import { Sidebar, DirectoryData, TenantInfo, MerchantInfo } from "./components/Sidebar"; // Assuming path
 * import { HomeIcon, SettingsIcon, UsersIcon, BuildingIcon } from "lucide-react"; // Assuming lucide-react
 * import { useState } from "react";
 *
 * const tenantsData: TenantInfo[] = [
 *   { id: "tenant1", label: "Tenant Alpha", icon: <BuildingIcon /> },
 * ];
 * const merchantsData: MerchantInfo[] = [
 *   { id: "merchantA", label: "Merchant A", icon: <UsersIcon /> },
 * ];
 * const navData: DirectoryData[] = [
 *   {
 *     label: "Main Menu",
 *     items: [
 *       { label: "Dashboard", href: "/dashboard", leftSlot: <HomeIcon /> },
 *       { label: "Settings", href: "/settings", leftSlot: <SettingsIcon /> },
 *     ],
 *   },
 * ];
 *
 * function AppLayout({ children }) {
 *   const [activeTenant, setActiveTenant] = useState("tenant1");
 *   const [activeMerchant, setActiveMerchant] = useState("merchantA");
 *
 *   return (
 *     <div style={{ display: 'flex' }}>
 *       <Sidebar
 *         tenants={tenantsData}
 *         merchants={merchantsData}
 *         data={navData}
 *         topbar={<div>My App Logo</div>}
 *         activeTenant={activeTenant}
 *         setActiveTenant={setActiveTenant}
 *         activeMerchant={activeMerchant}
 *         setActiveMerchant={setActiveMerchant}
 *         footer={<div>© 2024 My App</div>}
 *       >
 *         {children} // Main content area
 *       </Sidebar>
 *       <main style={{ flexGrow: 1, padding: '20px' }}>
 *         {children}
 *       </main>
 *     </div>
 *   );
 * }
 * ```
 */
export type SidebarProps = {
  /**
   * @propCategory Required
   * @description An array of `TenantInfo` objects for the tenant switcher.
   */
  tenants: TenantInfo[];
  /**
   * @propCategory Required
   * @description An array of `MerchantInfo` objects for the merchant switcher.
   */
  merchants: MerchantInfo[];
  /**
   * @propCategory Required
   * @description The main content of the application, rendered alongside the sidebar.
   * Note: This seems to imply the Sidebar might also act as a layout wrapper.
   */
  children: ReactNode;
  /**
   * @propCategory Required
   * @description An array of `DirectoryData` objects for the main navigation tree within the sidebar.
   */
  data: DirectoryData[];
  /**
   * @propCategory Required
   * @description ReactNode for the content of the top bar within the sidebar (e.g., logo, app name).
   */
  topbar: ReactNode;
  /**
   * @propCategory State
   * @description The ID of the currently active tenant.
   */
  activeTenant?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the active tenant changes.
   * @param tenant The ID of the newly selected tenant.
   */
  setActiveTenant?: (tenant: string) => void;
  /**
   * @propCategory State
   * @description The ID of the currently active merchant.
   */
  activeMerchant?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the active merchant changes.
   * @param merchant The ID of the newly selected merchant.
   */
  setActiveMerchant?: (merchant: string) => void;
  /**
   * @propCategory Content
   * @description Optional ReactNode for the content of the footer within the sidebar.
   */
  footer?: ReactNode;
};
