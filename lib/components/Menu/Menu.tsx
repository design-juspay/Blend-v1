import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import Text from "../Text/Text";
import { Settings2 } from "lucide-react";
import { Tag, TagColor, TagShape, TagSize } from "../Tags";

import styled, { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import {  MenuV2Props, MenuAlignment, MenuSide, MenuV2GroupType, MenuItemV2Variant, MenuItemV2ActionType } from "./types";
import React, { useState } from "react";
import { filterMenuGroups } from "./utils";
import MenuGroupLabel from "./MenuGroupLabel";
import MenuGroupSeperator from "./MenuGroupSeperator";
import Item from "./MenuItem";
import Block from "../Primitives/Block/Block";
import SearchInput from "../Inputs/SearchInput/SearchInput";

export const contentBaseStyle: CSSObject = {
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "none",
  scrollbarColor: "transparent transparent",
  padding: "0px 6px",
};

const Content = styled(RadixMenu.Content)(() => ({
  ...contentBaseStyle,
}));

const dummyMenuItems: MenuV2GroupType[] = [
  {
    label: "Account GGWP",
    showSeparator: true,
    items: [
      {
        label: "Profile Settings",
        onClick: () => alert("Profile Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Billing & Subscription",
        // subLabel: "Manage your payment methods and plans",
        onClick: () => alert("Billing"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Sign Out",
        // subLabel: "Sign out of your account",
        onClick: () => alert("Sign Out"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.PRIMARY,
      },
      {
        label: "Delete Account",
        // subLabel: "Permanently delete your account and all data",
        onClick: () => alert("Delete Account"),
        slot1: <Settings2 size={13} />,
        // slot2: <Terminal size={13} />,
        slot3: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.ERROR}
            size={TagSize.XS}
            text="Permanent"
          />
        ),
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.DANGER,
      },
    ],
  },
  {
    label: "Workspace",
    showSeparator: true,
    items: [
      {
        label: "Workspace Settings",
        // subLabel: "Configure workspace preferences",
        onClick: () => alert("Workspace Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Members & Permissions",
        // subLabel: "Manage team members and their roles",
        onClick: () => alert("Members"),
        slot1: <Settings2 size={13} />,
        slot2: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.SUCCESS}
            size={TagSize.XS}
            text="8 members"
          />
        ),
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Integrations",
        subLabel: "Connect third-party apps and services",
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Slack",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Connect your Slack workspace",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Slack"),
          },
          {
            label: "GitHub",
            subLabel: "Link your GitHub repositories",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect GitHub"),
          },
          {
            label: "Google Drive",
            subLabel: "Sync with Google Drive",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Google Drive"),
          },
        ],
      },
    ],
  },
  {
    label: "Preferences",
    items: [
      {
        label: "Notifications",
        subLabel: "Configure your notification preferences",
        actionType: MenuItemV2ActionType.DANGER,
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Email Notifications",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Receive updates via email",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Email Notifications"),
            subMenu: [
              {
                label: "Slack",
                variant: MenuItemV2Variant.ACTION,
                actionType: MenuItemV2ActionType.DANGER,
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Slack"),
              },
              {
                label: "GitHub",
                subLabel: "Link your GitHub repositories",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect GitHub"),
              },
              {
                label: "Google Drive",
                subLabel: "Sync with Google Drive",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Google Drive"),
              },
            ],
          },
          {
            label: "Push Notifications",
            subLabel: "Get notifications on your device",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Push Notifications"),
          },
          {
            label: "Slack Notifications",
            subLabel: "Receive alerts in Slack",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Slack Notifications"),
          },
        ],
      },
      {
        label: "Theme",
        subLabel: "Customize your interface appearance",
        onClick: () => alert("Theme Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Language & Region",
        subLabel: "Set your language and timezone",
        onClick: () => alert("Language Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
    ],
  },
];

/**
 * @description A versatile dropdown menu component that displays a list of interactive items, supporting grouping, sub-menus, search functionality, and various action types.
 * Essential for context menus, navigation dropdowns, action menus, and complex hierarchical option lists.
 * @feature Grouped menu items with optional labels and separators
 * @feature Hierarchical sub-menus for nested navigation
 * @feature Search functionality to filter menu items
 * @feature Multiple item variants (default, action) with different styling
 * @feature Action types (primary, danger) for different action contexts
 * @feature Customizable trigger element and positioning
 * @feature Icon slots for enhanced visual communication
 * @feature Modal display mode for mobile-friendly interfaces
 * @example Basic User Menu
 * ```tsx
 * import { 
 *   Menu, 
 *   MenuV2GroupType, 
 *   MenuItemV2Variant, 
 *   MenuAlignment 
 * } from "blend-v1";
 * import { User, Settings, LogOut } from "lucide-react";
 *
 * const userMenuItems: MenuV2GroupType[] = [
 *   {
 *     items: [
 *       {
 *         label: "View Profile",
 *         onClick: () => console.log("Profile clicked"),
 *         slot1: <User size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *       {
 *         label: "Settings",
 *         onClick: () => console.log("Settings clicked"),
 *         slot1: <Settings size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *       {
 *         label: "Sign Out",
 *         onClick: () => console.log("Sign out clicked"),
 *         slot1: <LogOut size={16} />,
 *         variant: MenuItemV2Variant.ACTION,
 *         actionType: MenuItemV2ActionType.DANGER
 *       }
 *     ]
 *   }
 * ];
 *
 * <Menu
 *   trigger={<button>User Menu</button>}
 *   items={userMenuItems}
 *   alignment={MenuAlignment.END}
 *   enableSearch={false}
 * />
 * ```
 * @example Intermediate Navigation Menu with Groups
 * ```tsx
 * import { 
 *   Menu, 
 *   MenuV2GroupType, 
 *   MenuItemV2Variant,
 *   MenuItemV2ActionType,
 *   MenuAlignment,
 *   MenuSide 
 * } from "blend-v1";
 * import { 
 *   FileText, 
 *   Users, 
 *   BarChart, 
 *   Settings, 
 *   Plus,
 *   Download 
 * } from "lucide-react";
 *
 * const workspaceMenuItems: MenuV2GroupType[] = [
 *   {
 *     label: "Quick Actions",
 *     showSeparator: true,
 *     items: [
 *       {
 *         label: "New Document",
 *         onClick: () => console.log("Creating new document"),
 *         slot1: <Plus size={16} />,
 *         variant: MenuItemV2Variant.ACTION,
 *         actionType: MenuItemV2ActionType.PRIMARY
 *       },
 *       {
 *         label: "Export Data",
 *         onClick: () => console.log("Exporting data"),
 *         slot1: <Download size={16} />,
 *         subLabel: "Download as CSV or PDF"
 *       }
 *     ]
 *   },
 *   {
 *     label: "Navigation",
 *     items: [
 *       {
 *         label: "Documents",
 *         onClick: () => console.log("Navigate to documents"),
 *         slot1: <FileText size={16} />
 *       },
 *       {
 *         label: "Team Members",
 *         onClick: () => console.log("Navigate to team"),
 *         slot1: <Users size={16} />,
 *         slot4: "12 members"
 *       },
 *       {
 *         label: "Analytics",
 *         onClick: () => console.log("Navigate to analytics"),
 *         slot1: <BarChart size={16} />
 *       }
 *     ]
 *   }
 * ];
 *
 * <Menu
 *   trigger={<button>Workspace</button>}
 *   items={workspaceMenuItems}
 *   alignment={MenuAlignment.START}
 *   side={MenuSide.BOTTOM}
 *   sideOffset={12}
 *   enableSearch={true}
 * />
 * ```
 * @example Advanced Menu with Sub-menus and All Features
 * ```tsx
 * import { 
 *   Menu, 
 *   MenuV2GroupType, 
 *   MenuItemV2Variant,
 *   MenuItemV2ActionType,
 *   MenuAlignment,
 *   MenuSide 
 * } from "blend-v1";
 * import { 
 *   FolderPlus, 
 *   Share2, 
 *   Trash2, 
 *   Copy,
 *   Edit,
 *   Eye,
 *   Download,
 *   Lock,
 *   Unlock,
 *   Star
 * } from "lucide-react";
 *
 * const advancedMenuItems: MenuV2GroupType[] = [
 *   {
 *     label: "File Actions",
 *     showSeparator: true,
 *     items: [
 *       {
 *         label: "View",
 *         slot1: <Eye size={16} />,
 *         subMenu: [
 *           {
 *             label: "Preview",
 *             onClick: () => console.log("Preview file"),
 *             variant: MenuItemV2Variant.DEFAULT
 *           },
 *           {
 *             label: "Full Screen",
 *             onClick: () => console.log("Full screen view"),
 *             variant: MenuItemV2Variant.DEFAULT
 *           },
 *           {
 *             label: "Properties",
 *             onClick: () => console.log("Show properties"),
 *             subLabel: "View file details"
 *           }
 *         ]
 *       },
 *       {
 *         label: "Edit",
 *         onClick: () => console.log("Edit file"),
 *         slot1: <Edit size={16} />,
 *         variant: MenuItemV2Variant.DEFAULT
 *       },
 *       {
 *         label: "Duplicate",
 *         onClick: () => console.log("Duplicate file"),
 *         slot1: <Copy size={16} />,
 *         subLabel: "Create a copy"
 *       }
 *     ]
 *   },
 *   {
 *     label: "Organization",
 *     showSeparator: true,
 *     items: [
 *       {
 *         label: "Add to Favorites",
 *         onClick: () => console.log("Added to favorites"),
 *         slot1: <Star size={16} />,
 *         variant: MenuItemV2Variant.ACTION,
 *         actionType: MenuItemV2ActionType.PRIMARY
 *       },
 *       {
 *         label: "Move to Folder",
 *         slot1: <FolderPlus size={16} />,
 *         subMenu: [
 *           {
 *             label: "Projects",
 *             onClick: () => console.log("Move to Projects")
 *           },
 *           {
 *             label: "Archive",
 *             onClick: () => console.log("Move to Archive")
 *           },
 *           {
 *             label: "Personal",
 *             onClick: () => console.log("Move to Personal")
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   {
 *     label: "Sharing & Security",
 *     showSeparator: true,
 *     items: [
 *       {
 *         label: "Share",
 *         slot1: <Share2 size={16} />,
 *         subMenu: [
 *           {
 *             label: "Get Link",
 *             onClick: () => console.log("Get shareable link"),
 *             variant: MenuItemV2Variant.ACTION,
 *             actionType: MenuItemV2ActionType.PRIMARY
 *           },
 *           {
 *             label: "Email",
 *             onClick: () => console.log("Share via email")
 *           },
 *           {
 *             label: "Download",
 *             onClick: () => console.log("Download file"),
 *             slot1: <Download size={16} />
 *           }
 *         ]
 *       },
 *       {
 *         label: "Lock File",
 *         onClick: () => console.log("Lock file"),
 *         slot1: <Lock size={16} />,
 *         subLabel: "Prevent editing"
 *       }
 *     ]
 *   },
 *   {
 *     label: "Danger Zone",
 *     items: [
 *       {
 *         label: "Delete",
 *         onClick: () => console.log("Delete file"),
 *         slot1: <Trash2 size={16} />,
 *         variant: MenuItemV2Variant.ACTION,
 *         actionType: MenuItemV2ActionType.DANGER,
 *         subLabel: "Move to trash"
 *       }
 *     ]
 *   }
 * ];
 *
 * <Menu
 *   trigger={<button>File Options</button>}
 *   items={advancedMenuItems}
 *   alignment={MenuAlignment.CENTER}
 *   side={MenuSide.BOTTOM}
 *   sideOffset={8}
 *   alignOffset={0}
 *   maxHeight={400}
 *   enableSearch={true}
 *   asModal={false}
 *   collisonBoundaryRef={document.querySelector('.container')}
 * />
 * ```
 */
const Menu = ({
  trigger,
  items = dummyMenuItems,
  asModal = false,
  alignment = MenuAlignment.CENTER,
  side = MenuSide.BOTTOM,
  sideOffset = 8,
  alignOffset = 0,
  collisonBoundaryRef,
  maxHeight,
  enableSearch = true,
}: MenuV2Props) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredItems = filterMenuGroups(items, searchText);

  return (
    <RadixMenu.Root modal={asModal}>
      <RadixMenu.Trigger asChild>{trigger}</RadixMenu.Trigger>
      <Content
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        side={side}
        align={alignment}
        collisionBoundary={collisonBoundaryRef}
        style={{
          maxHeight: maxHeight ? `${maxHeight}px` : "auto",
          paddingTop: 10,
        }}
      >
        {enableSearch && (
          <Block
            width="calc(100% + 12px)"
            marginLeft="-6px"
            position="sticky"
            top={0}
            zIndex={1000}
          >
            <SearchInput
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Block>
        )}
        {filteredItems &&
          filteredItems.map((group, groupId) => (
            <React.Fragment key={groupId}>
              {group.label && (
                <MenuGroupLabel>
                  <Text
                    variant="body.sm"
                    color={FOUNDATION_THEME.colors.gray[400]}
                  >
                    {group.label}
                  </Text>
                </MenuGroupLabel>
              )}
              {group.items.map((item, itemIndex) => (
                <Item
                  key={`${groupId}-${itemIndex}`}
                  item={item}
                  idx={itemIndex}
                />
              ))}
              {groupId !== filteredItems.length - 1 && group.showSeparator && (
                <MenuGroupSeperator />
              )}
            </React.Fragment>
          ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default Menu;
