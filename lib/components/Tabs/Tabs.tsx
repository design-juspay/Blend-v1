import { forwardRef } from 'react';
import { TabsProps } from './types';
import { StyledTabs } from './StyledTabs';

/**
 * @description A tabbed interface component that organizes content into multiple panels, with only one panel visible at a time.
 * Built on Radix UI Tabs primitive with support for different visual variants and sizes.
 * @feature Multiple visual variants (boxed, floating, underline)
 * @feature Controlled and uncontrolled modes for tab selection
 * @feature Keyboard navigation support with arrow keys
 * @feature Customizable sizes (medium and large)
 * @feature Expandable tabs list for full-width layouts
 * @feature Support for left and right slots in tab triggers
 * @feature Accessible by default with proper ARIA attributes
 * @feature Smooth transitions and hover states
 * @example Basic Usage
 * ```tsx
 * import { Tabs, TabsList, TabsTrigger, TabsContent, TabsVariant } from "blend-v1";
 * 
 * function BasicTabsExample() {
 *   return (
 *     <Tabs defaultValue="account" variant={TabsVariant.UNDERLINE}>
 *       <TabsList>
 *         <TabsTrigger value="account">Account</TabsTrigger>
 *         <TabsTrigger value="password">Password</TabsTrigger>
 *       </TabsList>
 *       <TabsContent value="account">Account content</TabsContent>
 *       <TabsContent value="password">Password content</TabsContent>
 *     </Tabs>
 *   );
 * }
 * ```
 * @example With Icons and Variants
 * ```tsx
 * import { Tabs, TabsList, TabsTrigger, TabsContent, TabsVariant, TabsSize } from "blend-v1";
 * import { User, Settings } from "lucide-react";
 * 
 * // Underline variant with icons
 * <Tabs defaultValue="profile" variant={TabsVariant.UNDERLINE} size={TabsSize.MD}>
 *   <TabsList>
 *     <TabsTrigger value="profile" leftSlot={<User size={16} />}>Profile</TabsTrigger>
 *     <TabsTrigger value="settings" leftSlot={<Settings size={16} />}>Settings</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="profile">Profile settings</TabsContent>
 *   <TabsContent value="settings">Account settings</TabsContent>
 * </Tabs>
 * 
 * // Boxed variant - Large size
 * <Tabs defaultValue="overview" variant={TabsVariant.BOXED} size={TabsSize.LG}>
 *   <TabsList>
 *     <TabsTrigger value="overview">Overview</TabsTrigger>
 *     <TabsTrigger value="analytics">Analytics</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="overview">Overview content</TabsContent>
 *   <TabsContent value="analytics">Analytics content</TabsContent>
 * </Tabs>
 * 
 * // Floating variant with right slots
 * <Tabs defaultValue="inbox" variant={TabsVariant.FLOATING}>
 *   <TabsList>
 *     <TabsTrigger value="inbox" rightSlot={<span>5</span>}>Inbox</TabsTrigger>
 *     <TabsTrigger value="sent">Sent</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="inbox">Inbox messages</TabsContent>
 *   <TabsContent value="sent">Sent messages</TabsContent>
 * </Tabs>
 * ```
 * @example Controlled State
 * ```tsx
 * import { Tabs, TabsList, TabsTrigger, TabsContent, TabsVariant } from "blend-v1";
 * import { useState } from "react";
 * 
 * function ControlledTabsExample() {
 *   const [activeTab, setActiveTab] = useState("dashboard");
 *   const [expandedTabs, setExpandedTabs] = useState(false);
 * 
 *   return (
 *     <Tabs 
 *       value={activeTab} 
 *       onValueChange={setActiveTab}
 *       variant={TabsVariant.UNDERLINE}
 *     >
 *       <TabsList expanded={expandedTabs}>
 *         <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
 *         <TabsTrigger value="users">Users</TabsTrigger>
 *         <TabsTrigger value="settings">Settings</TabsTrigger>
 *       </TabsList>
 *       
 *       <TabsContent value="dashboard">Dashboard content</TabsContent>
 *       <TabsContent value="users">Users management</TabsContent>
 *       <TabsContent value="settings">System settings</TabsContent>
 *     </Tabs>
 *   );
 * }
 * ```
 */
const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ className, ...props }, ref) => (
  <StyledTabs {...props} ref={ref} className={className} />
));

Tabs.displayName = 'Tabs';

export default Tabs;