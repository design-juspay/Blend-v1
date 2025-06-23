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
 * @description A comprehensive sidebar navigation component for complex applications with multi-tenant architecture and hierarchical navigation.
 * Essential for admin dashboards, SaaS platforms, and enterprise applications requiring tenant/merchant switching with organized navigation structure.
 * @feature Multi-tenant and multi-merchant support with switching capabilities
 * @feature Hierarchical navigation using Directory component structure
 * @feature Collapsible sidebar with smooth animations and responsive design
 * @feature Customizable top bar for branding and application controls
 * @feature Footer section for additional links and information
 * @feature Active state management for tenants and merchants
 * @feature Integrated merchant/tenant selector with icons and labels
 * @feature Seamless integration with Directory component for navigation
 * @example Basic Sidebar with Navigation
 * ```tsx
 * import { Sidebar, DirectoryData } from "blend-v1";
 * import { Home, Settings, Users, Building } from "lucide-react";
 * 
 * const navigationData: DirectoryData[] = [
 *   {
 *     label: "Main",
 *     items: [
 *       { label: "Dashboard", href: "/dashboard", leftSlot: <Home size={16} /> },
 *       { label: "Users", href: "/users", leftSlot: <Users size={16} /> },
 *       { label: "Settings", href: "/settings", leftSlot: <Settings size={16} /> }
 *     ]
 *   }
 * ];
 * 
 * const tenants = [
 *   { label: "Main Tenant", icon: <Building size={16} /> }
 * ];
 * 
 * const merchants = [
 *   { label: "Default Store", icon: <Users size={16} /> }
 * ];
 * 
 * <Sidebar
 *   tenants={tenants}
 *   merchants={merchants}
 *   data={navigationData}
 *   topbar={<div>My App</div>}
 *   activeTenant="Main Tenant"
 *   activeMerchant="Default Store"
 * >
 *   <div>Main content area</div>
 * </Sidebar>
 * ```
 * @example Intermediate Multi-Tenant Sidebar
 * ```tsx
 * import { Sidebar, DirectoryData } from "blend-v1";
 * import { useState } from "react";
 * import { Home, BarChart, Users, Store, Building, ShoppingBag } from "lucide-react";
 * 
 * function AppLayout() {
 *   const [activeTenant, setActiveTenant] = useState("company-a");
 *   const [activeMerchant, setActiveMerchant] = useState("store-1");
 * 
 *   const tenants = [
 *     { label: "Company A", icon: <Building size={16} /> },
 *     { label: "Company B", icon: <Store size={16} /> }
 *   ];
 * 
 *   const merchants = [
 *     { label: "Store 1", icon: <ShoppingBag size={16} /> },
 *     { label: "Store 2", icon: <ShoppingBag size={16} /> }
 *   ];
 * 
 *   const navData: DirectoryData[] = [
 *     {
 *       label: "Analytics",
 *       items: [
 *         { label: "Dashboard", href: "/dashboard", leftSlot: <Home size={16} /> },
 *         { label: "Reports", href: "/reports", leftSlot: <BarChart size={16} /> }
 *       ]
 *     },
 *     {
 *       label: "Management",
 *       items: [
 *         { label: "Users", href: "/users", leftSlot: <Users size={16} /> }
 *       ]
 *     }
 *   ];
 * 
 *   return (
 *     <Sidebar
 *       tenants={tenants}
 *       merchants={merchants}
 *       data={navData}
 *       topbar={<h2>Admin Panel</h2>}
 *       activeTenant={activeTenant}
 *       setActiveTenant={setActiveTenant}
 *       activeMerchant={activeMerchant}
 *       setActiveMerchant={setActiveMerchant}
 *       footer={<p>© 2024 My Company</p>}
 *     >
 *       <main>Content goes here</main>
 *     </Sidebar>
 *   );
 * }
 * ```
 * @example Advanced Enterprise Sidebar
 * ```tsx
 * import { Sidebar, DirectoryData } from "blend-v1";
 * import { useState } from "react";
 * import { 
 *   Home, BarChart, Users, Settings, Shield, 
 *   Building, Store, ShoppingBag, CreditCard 
 * } from "lucide-react";
 * 
 * function EnterpriseDashboard() {
 *   const [activeTenant, setActiveTenant] = useState("enterprise-corp");
 *   const [activeMerchant, setActiveMerchant] = useState("main-store");
 * 
 *   const tenants = [
 *     { label: "Enterprise Corp", icon: <Building size={16} /> },
 *     { label: "Subsidiary LLC", icon: <Store size={16} /> }
 *   ];
 * 
 *   const merchants = [
 *     { label: "Main Store", icon: <ShoppingBag size={16} /> },
 *     { label: "Online Shop", icon: <CreditCard size={16} /> },
 *     { label: "Mobile App", icon: <Store size={16} /> }
 *   ];
 * 
 *   const enterpriseNavData: DirectoryData[] = [
 *     {
 *       label: "Overview",
 *       items: [
 *         { label: "Dashboard", href: "/dashboard", leftSlot: <Home size={16} /> },
 *         { label: "Analytics", href: "/analytics", leftSlot: <BarChart size={16} /> }
 *       ]
 *     },
 *     {
 *       label: "Operations",
 *       items: [
 *         { label: "User Management", href: "/users", leftSlot: <Users size={16} /> },
 *         { label: "Security", href: "/security", leftSlot: <Shield size={16} /> },
 *         { label: "System Config", href: "/config", leftSlot: <Settings size={16} /> }
 *       ]
 *     }
 *   ];
 * 
 *   return (
 *     <Sidebar
 *       tenants={tenants}
 *       merchants={merchants}
 *       data={enterpriseNavData}
 *       topbar={
 *         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 *           <Building size={24} />
 *           <span style={{ fontWeight: '600' }}>Enterprise Portal</span>
 *         </div>
 *       }
 *       activeTenant={activeTenant}
 *       setActiveTenant={setActiveTenant}
 *       activeMerchant={activeMerchant}
 *       setActiveMerchant={setActiveMerchant}
 *       footer={
 *         <div style={{ textAlign: 'center', padding: '8px' }}>
 *           <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
 *             v2.1.0 | Support
 *           </p>
 *         </div>
 *       }
 *     >
 *       <main style={{ padding: '24px' }}>
 *         Enterprise dashboard content
 *       </main>
 *     </Sidebar>
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
