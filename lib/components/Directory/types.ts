import { ReactNode } from "react";

/**
 * @description Props for the main Directory component.
 * The Directory component renders a list of sections, each containing navigation items.
 * It's often used for side navigation or structured lists.
 * @feature Displays hierarchical navigation structures.
 * @feature Supports collapsible sections.
 * @feature Customizable items with labels, icons (slots), and actions (onClick/href).
 * @example Basic Usage
 * ```tsx
 * import { Directory, DirectoryData, NavbarItem } from "blend-v1";
 *
 * const directoryItems: DirectoryData[] = [
 *   {
 *     label: "General",
 *     items: [
 *       { label: "Dashboard", href: "/dashboard" },
 *       { label: "Profile", href: "/profile" },
 *     ],
 *   },
 * ];
 *
 * <Directory directoryData={directoryItems} />
 * ```
 * @example Intermediate Usage with Icons and Actions
 * ```tsx
 * import { Directory, DirectoryData, NavbarItem } from "blend-v1";
 * import { Home, User, Settings, Bell } from "lucide-react";
 *
 * const directoryItems: DirectoryData[] = [
 *   {
 *     label: "Navigation",
 *     items: [
 *       { 
 *         label: "Dashboard", 
 *         href: "/dashboard",
 *         leftSlot: <Home size={16} />
 *       },
 *       { 
 *         label: "Profile", 
 *         onClick: () => console.log("Profile clicked"),
 *         leftSlot: <User size={16} />,
 *         rightSlot: <span>Updated</span>
 *       },
 *     ],
 *   },
 * ];
 *
 * <Directory directoryData={directoryItems} />
 * ```
 * @example Advanced Usage with Collapsible Sections and Nested Items
 * ```tsx
 * import { Directory, DirectoryData, NavbarItem } from "blend-v1";
 * import { Home, User, Settings, Bell, ChevronRight } from "lucide-react";
 *
 * const directoryItems: DirectoryData[] = [
 *   {
 *     label: "Main Navigation",
 *     isCollapsible: true,
 *     defaultOpen: true,
 *     items: [
 *       { 
 *         label: "Dashboard", 
 *         href: "/dashboard",
 *         leftSlot: <Home size={16} />
 *       },
 *       { 
 *         label: "User Management", 
 *         leftSlot: <User size={16} />,
 *         rightSlot: <ChevronRight size={14} />,
 *         items: [
 *           { label: "All Users", href: "/users" },
 *           { label: "Add User", href: "/users/add" },
 *           { label: "User Roles", href: "/users/roles" },
 *         ]
 *       },
 *     ],
 *   },
 *   {
 *     label: "Settings",
 *     isCollapsible: true,
 *     defaultOpen: false,
 *     items: [
 *       { 
 *         label: "General Settings", 
 *         href: "/settings/general",
 *         leftSlot: <Settings size={16} />
 *       },
 *       { 
 *         label: "Notifications", 
 *         onClick: () => console.log("Notifications clicked"),
 *         leftSlot: <Bell size={16} />,
 *         rightSlot: <span style={{ color: 'red' }}>3</span>
 *       },
 *     ],
 *   },
 * ];
 *
 * <Directory 
 *   directoryData={directoryItems} 
 *   className="custom-directory"
 * />
 * ```
 */
export type DirectoryProps = {
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the root Directory element.
   */
  className?: string;
  /**
   * @propCategory Required
   * @description An array of `DirectoryData` objects, each representing a section in the directory.
   */
  directoryData: DirectoryData[];
};

/**
 * @description Represents a section within the Directory.
 * A section can have a label and contains a list of navigation items.
 * It can also be collapsible.
 */
export type DirectoryData = {
  /**
   * @propCategory Content
   * @description Optional label for the section header.
   */
  label?: string;
  /**
   * @propCategory Content
   * @description An array of `NavbarItem` objects to be displayed within this section.
   */
  items?: NavbarItem[];
  /**
   * @propCategory Behavior
   * @description If true, the section can be collapsed and expanded by the user.
   * @default false
   */
  isCollapsible?: boolean;
  /**
   * @propCategory Behavior
   * @description If true and `isCollapsible` is true, the section will be open by default.
   * @default false
   */
  defaultOpen?: boolean;
};

/**
 * @description Represents an individual navigation item within a Directory section.
 * An item can have a label, optional icons (slots), and an action (onClick or href).
 * Items can also be nested to create sub-menus.
 */
export type NavbarItem = {
  /**
   * @propCategory Required
   * @description The text label for the navigation item.
   */
  label: string;
  /**
   * @propCategory Content
   * @description Optional array of nested `NavbarItem` objects for creating sub-menus.
   */
  items?: NavbarItem[];
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
   * @description Callback function invoked when the item is clicked. Used if `href` is not provided.
   */
  onClick?: () => void;
  /**
   * @propCategory Navigation
   * @description URL or path for navigation when the item is clicked. If provided, `onClick` might be ignored or used supplementarily.
   */
  href?: string;
};

/**
 * @description Props for the internal `Section` component.
 */
export type SectionProps = {
  /** The data for the section to render. */
  section: DirectoryData;
  /** The index of the current section. */
  sectionIndex: number;
  // totalSections: number; // Commented out in original
  /** Callback for navigating between sections, likely for keyboard navigation. */
  onNavigateBetweenSections: (
    direction: "up" | "down",
    currentIndex: number
  ) => void;
};

/**
 * @description Props for the internal `NavItem` component.
 */
export type NavItemProps = {
  /** The data for the navigation item to render. */
  item: NavbarItem;
  /** The index of the current navigation item within its list. */
  index: number;
  // totalItems: number; // Commented out in original
  /** Callback for navigating between items, likely for keyboard navigation. */
  onNavigate: (direction: "up" | "down", currentIndex: number) => void;
};
