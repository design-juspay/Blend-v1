import Block from "../Primitives/Block/Block";
import { FOUNDATION_THEME } from "../../tokens";
import PrimitiveLink from "../Primitives/PrimitiveLink";
import { Ellipsis } from "lucide-react";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
import { BreadcrumbTokenType } from "./breadcrumb.tokens";
import { useComponentToken } from "../../context/useComponentToken";
import { BreadcrumbItemType, BreadcrumbProps } from "./types";

const MAX_ITEMS = 4;

const BreadcrumbItem = ({
  item,
  isActive,
}: {
  item: BreadcrumbItemType;
  isActive: boolean;
}) => {
  const breadcrumbTokens = useComponentToken(
    "BREADCRUMB"
  ) as BreadcrumbTokenType;
  return (
    <>
      <PrimitiveLink
        padding={breadcrumbTokens.item.padding}
        display="flex"
        height={"full"}
        gap={breadcrumbTokens.item.gap}
        color={breadcrumbTokens.item.color[isActive ? "active" : "inactive"]}
        href={isActive ? undefined : item.href}
        textDecoration="none"
      >
        {item.leftSlot && <Block contentCentered>{item.leftSlot}</Block>}
        <PrimitiveText
          as="span"
          fontWeight={
            breadcrumbTokens.item.fontWeight[isActive ? "active" : "inactive"]
          }
          fontSize={
            breadcrumbTokens.item.fontSize[isActive ? "active" : "inactive"]
          }
        >
          {item.label}
        </PrimitiveText>
        {item.rightSlot && <Block contentCentered>{item.rightSlot}</Block>}
      </PrimitiveLink>
      {!isActive && <Block color={FOUNDATION_THEME.colors.gray[400]}>/</Block>}
    </>
  );
};

/**
 * @description A navigation aid that helps users understand their current location within a website or application.
 * Provides a hierarchical trail of links to parent pages with automatic truncation for long paths.
 * @feature Displays a clickable hierarchical navigation path
 * @feature Automatic truncation for long breadcrumb trails with ellipsis menu
 * @feature Support for custom icons and content slots on each item
 * @feature Active state styling for the current page
 * @feature Accessible navigation with proper link semantics
 * @feature Responsive design with consistent visual hierarchy
 * @feature Customizable separators between breadcrumb items
 * @example Basic Usage
 * ```tsx
 * import { Breadcrumb, BreadcrumbItemType } from "blend-v1";
 * 
 * function BasicBreadcrumbExample() {
 *   const items: BreadcrumbItemType[] = [
 *     { label: "Home", href: "/" },
 *     { label: "Products", href: "/products" },
 *     { label: "Electronics", href: "/products/electronics" },
 *     { label: "Smartphones", href: "/products/electronics/smartphones" }
 *   ];
 * 
 *   return (
 *     <div className="p-6">
 *       <Breadcrumb items={items} />
 *     </div>
 *   );
 * }
 * ```
 * @example Breadcrumbs with Icons
 * ```tsx
 * import { Breadcrumb, BreadcrumbItemType } from "blend-v1";
 * import { 
 *   Home, 
 *   ShoppingCart, 
 *   Laptop, 
 *   Smartphone,
 *   Building,
 *   Users,
 *   Settings
 * } from "lucide-react";
 * 
 * function IconBreadcrumbExample() {
 *   const ecommerceItems: BreadcrumbItemType[] = [
 *     { 
 *       label: "Home", 
 *       href: "/",
 *       leftSlot: <Home size={16} />
 *     },
 *     { 
 *       label: "Shop", 
 *       href: "/shop",
 *       leftSlot: <ShoppingCart size={16} />
 *     },
 *     { 
 *       label: "Electronics", 
 *       href: "/shop/electronics",
 *       leftSlot: <Laptop size={16} />
 *     },
 *     { 
 *       label: "iPhone 15 Pro", 
 *       href: "/shop/electronics/iphone-15-pro",
 *       leftSlot: <Smartphone size={16} />
 *     }
 *   ];
 * 
 *   const adminItems: BreadcrumbItemType[] = [
 *     { 
 *       label: "Dashboard", 
 *       href: "/admin",
 *       leftSlot: <Building size={16} />
 *     },
 *     { 
 *       label: "User Management", 
 *       href: "/admin/users",
 *       leftSlot: <Users size={16} />
 *     },
 *     { 
 *       label: "User Settings", 
 *       href: "/admin/users/settings",
 *       leftSlot: <Settings size={16} />
 *     }
 *   ];
 * 
 *   return (
 *     <div className="space-y-8 p-6">
 *       <div>
 *         <h3 className="text-lg font-semibold mb-4">E-commerce Navigation</h3>
 *         <Breadcrumb items={ecommerceItems} />
 *       </div>
 * 
 *       <div>
 *         <h3 className="text-lg font-semibold mb-4">Admin Panel Navigation</h3>
 *         <Breadcrumb items={adminItems} />
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with Long Paths and Right Slots
 * ```tsx
 * import { Breadcrumb, BreadcrumbItemType } from "blend-v1";
 * import { 
 *   Home, 
 *   FolderOpen, 
 *   FileText,
 *   ChevronDown,
 *   Building2,
 *   Calendar,
 *   Clock,
 *   Tag
 * } from "lucide-react";
 * import { useState } from "react";
 * 
 * function AdvancedBreadcrumbExample() {
 *   const [currentProject, setCurrentProject] = useState("Q4 Marketing Campaign");
 * 
 *   // Long path that will trigger truncation
 *   const longPathItems: BreadcrumbItemType[] = [
 *     { 
 *       label: "Company", 
 *       href: "/",
 *       leftSlot: <Building2 size={16} />
 *     },
 *     { 
 *       label: "Projects", 
 *       href: "/projects",
 *       leftSlot: <FolderOpen size={16} />
 *     },
 *     { 
 *       label: "2024", 
 *       href: "/projects/2024",
 *       leftSlot: <Calendar size={16} />
 *     },
 *     { 
 *       label: "Q4", 
 *       href: "/projects/2024/q4",
 *       leftSlot: <Clock size={16} />
 *     },
 *     { 
 *       label: "Marketing", 
 *       href: "/projects/2024/q4/marketing",
 *       leftSlot: <Tag size={16} />
 *     },
 *     { 
 *       label: "Campaigns", 
 *       href: "/projects/2024/q4/marketing/campaigns",
 *       leftSlot: <FolderOpen size={16} />
 *     },
 *     { 
 *       label: "Social Media", 
 *       href: "/projects/2024/q4/marketing/campaigns/social",
 *       leftSlot: <FolderOpen size={16} />
 *     },
 *     { 
 *       label: currentProject, 
 *       href: `/projects/2024/q4/marketing/campaigns/social/${currentProject.toLowerCase().replace(/\s+/g, '-')}`,
 *       leftSlot: <FileText size={16} />
 *     }
 *   ];
 * 
 *   // Documentation breadcrumb with right slots
 *   const documentationItems: BreadcrumbItemType[] = [
 *     { 
 *       label: "Docs", 
 *       href: "/docs",
 *       leftSlot: <Home size={16} />
 *     },
 *     { 
 *       label: "Components", 
 *       href: "/docs/components",
 *       leftSlot: <FolderOpen size={16} />,
 *       rightSlot: <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">24</span>
 *     },
 *     { 
 *       label: "Navigation", 
 *       href: "/docs/components/navigation",
 *       leftSlot: <FolderOpen size={16} />,
 *       rightSlot: <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
 *     },
 *     { 
 *       label: "Breadcrumb", 
 *       href: "/docs/components/navigation/breadcrumb",
 *       leftSlot: <FileText size={16} />,
 *       rightSlot: <ChevronDown size={14} className="text-gray-400" />
 *     }
 *   ];
 * 
 *   // Simple file system breadcrumb
 *   const fileSystemItems: BreadcrumbItemType[] = [
 *     { label: "~", href: "/home" },
 *     { label: "Documents", href: "/home/documents" },
 *     { label: "Projects", href: "/home/documents/projects" },
 *     { label: "blend-ui", href: "/home/documents/projects/blend-ui" },
 *     { label: "src", href: "/home/documents/projects/blend-ui/src" },
 *     { label: "components", href: "/home/documents/projects/blend-ui/src/components" }
 *   ];
 * 
 *   return (
 *     <div className="space-y-8 p-6">
 *       <div>
 *         <h3 className="text-lg font-semibold mb-2">Long Path (Auto-truncation)</h3>
 *         <p className="text-sm text-gray-600 mb-4">
 *           Demonstrates automatic truncation when there are more than 4 items
 *         </p>
 *         <Breadcrumb items={longPathItems} />
 *       </div>
 * 
 *       <div>
 *         <h3 className="text-lg font-semibold mb-2">Documentation with Badges</h3>
 *         <p className="text-sm text-gray-600 mb-4">
 *           Shows breadcrumbs with right slots containing badges and indicators
 *         </p>
 *         <Breadcrumb items={documentationItems} />
 *       </div>
 * 
 *       <div>
 *         <h3 className="text-lg font-semibold mb-2">File System Navigation</h3>
 *         <p className="text-sm text-gray-600 mb-4">
 *           Simple file system-style breadcrumb without icons
 *         </p>
 *         <Breadcrumb items={fileSystemItems} />
 *       </div>
 * 
 *       <div>
 *         <h3 className="text-lg font-semibold mb-2">Interactive Example</h3>
 *         <div className="space-y-3">
 *           <label className="block">
 *             <span className="text-sm font-medium">Current Project:</span>
 *             <select 
 *               value={currentProject} 
 *               onChange={(e) => setCurrentProject(e.target.value)}
 *               className="ml-2 px-3 py-1 border rounded"
 *             >
 *               <option>Q4 Marketing Campaign</option>
 *               <option>Holiday Promotion</option>
 *               <option>Brand Awareness Drive</option>
 *               <option>Product Launch Strategy</option>
 *             </select>
 *           </label>
 *           <p className="text-sm text-gray-600">
 *             Change the project name to see how the breadcrumb updates
 *           </p>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const breadcrumbTokens = useComponentToken(
    "BREADCRUMB"
  ) as BreadcrumbTokenType;
  if (items.length === 0) return null;

  const baseItem = items[0];
  const shouldShowMenu = items.length > MAX_ITEMS;

  const breadcrumbMenuItems = shouldShowMenu
    ? items.slice(1, items.length - 3)
    : [];

  const menuItems = breadcrumbMenuItems.map((item) => {
    return {
      label: item.label,
      href: item.href,
      leftSlot: item.leftSlot,
      rightSlot: item.rightSlot,
    };
  });

  const restItems = shouldShowMenu ? items.slice(-3) : items.slice(1);

  return (
    <Block
      width={"full"}
      display="flex"
      height={breadcrumbTokens.height}
      alignItems="center"
    >
      {baseItem && (
        <BreadcrumbItem
          item={baseItem}
          key={`breadcrumb-item-${0}`}
          isActive={items.length == 1 ? true : false}
        />
      )}
      {menuItems.length > 0 && (
        <>
          <PrimitiveButton
            background={"none"}
            borderRadius={FOUNDATION_THEME.border.radius[6]}
            // TODO: add a menu when menu items are fixed
            // _hover={{
            //   outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
            // }}
            contentCentered
            color={FOUNDATION_THEME.colors.gray[400]}
            size={24}
          >
            <Ellipsis
              size={FOUNDATION_THEME.unit[14]}
              color={FOUNDATION_THEME.colors.gray[400]}
            />
          </PrimitiveButton>
          <Block color={FOUNDATION_THEME.colors.gray[400]}>/</Block>
        </>
      )}
      {restItems.map((item, index) => (
        <BreadcrumbItem
          key={`breadcrumb-item-${index}`}
          item={item}
          isActive={index === restItems.length - 1}
        />
      ))}
    </Block>
  );
};

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
