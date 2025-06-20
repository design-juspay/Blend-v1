/**
 * @propCategory Enum
 * @description Defines the alignment of the menu relative to its trigger.
 */
export enum MenuAlignment {
  /** Aligns the start of the menu with the start of the trigger. */
  START = "start",
  /** Centers the menu with the trigger. */
  CENTER = "center",
  /** Aligns the end of the menu with the end of the trigger. */
  END = "end",
}

/**
 * @propCategory Enum
 * @description Defines the preferred side of the trigger where the menu should appear.
 */
export enum MenuSide {
  /** Positions the menu above the trigger. */
  TOP = "top",
  /** Positions the menu to the left of the trigger. */
  LEFT = "left",
  /** Positions the menu to the right of the trigger. */
  RIGHT = "right",
  /** Positions the menu below the trigger. */
  BOTTOM = "bottom",
}

// Component-level JSDoc (description, features, example) is now in Menu.tsx
export type MenuV2Props = {
  /**
   * @propCategory Required
   * @description The React node that triggers the display of the menu (e.g., a Button).
   */
  trigger: React.ReactNode;
  /**
   * @propCategory Content
   * @description An array of `MenuV2GroupType` objects defining the groups and items to be displayed in the menu.
   */
  items?: MenuV2GroupType[];
  /**
   * @propCategory Behavior
   * @description If true, displays the menu as a modal dialog instead of a popover.
   * @default false
   */
  asModal?: boolean;
  /**
   * @propCategory Appearance
   * @description The alignment of the menu relative to the trigger.
   * @default MenuAlignment.CENTER
   */
  alignment?: MenuAlignment;
  /**
   * @propCategory Appearance
   * @description The preferred side of the trigger where the menu should appear.
   * @default MenuSide.BOTTOM
   */
  side?: MenuSide;
  /**
   * @propCategory Appearance
   * @description The offset of the menu from the trigger along the chosen side.
   */
  sideOffset?: number;
  /**
   * @propCategory Appearance
   * @description The offset of the menu from the trigger along the alignment axis.
   */
  alignOffset?: number;
  /**
   * @propCategory Behavior
   * @description Reference to an element or array of elements that the menu should not collide with.
   */
  collisonBoundaryRef?: Element | null | Array<Element | null>;
  /**
   * @propCategory Appearance
   * @description The maximum height of the menu content before scrolling is enabled.
   */
  maxHeight?: number;
  /**
   * @propCategory Behavior
   * @description If true, enables a search input within the menu to filter items.
   * @default false
   */
  enableSearch?: boolean;
};

/**
 * @propCategory Enum
 * @description Defines the visual variant of a menu item.
 */
export enum MenuItemV2Variant {
  /** Standard menu item. */
  DEFAULT = "default",
  /** Menu item styled as an action, potentially with primary or danger intent. */
  ACTION = "action",
}

/**
 * @propCategory Enum
 * @description Defines the type of action for `MenuItemV2Variant.ACTION` items.
 */
export enum MenuItemV2ActionType {
  /** Primary action style. */
  PRIMARY = "primary",
  /** Danger/destructive action style. */
  DANGER = "danger",
}

/**
 * @description Represents an individual item within a MenuV2.
 * Items can have labels, sub-labels, icons (slots), actions, and sub-menus.
 */
export type MenuItemV2Type = {
  /**
   * @propCategory Required
   * @description The primary text label for the menu item.
   */
  label: string;
  /**
   * @propCategory Content
   * @description Optional secondary text label displayed below or alongside the primary label.
   */
  subLabel?: string;
  /**
   * @propCategory Content
   * @description Optional ReactNode for the first slot, typically for a leading icon or element.
   */
  slot1?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode for the second slot, for additional content.
   */
  slot2?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode for the third slot, for further additional content.
   */
  slot3?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode for the fourth slot, often for a trailing icon or shortcut hint.
   */
  slot4?: React.ReactNode;
  /**
   * @propCategory Appearance
   * @description The visual variant of the menu item.
   * @default MenuItemV2Variant.DEFAULT
   */
  variant?: MenuItemV2Variant;
  /**
   * @propCategory Appearance
   * @description If `variant` is `ACTION`, this defines the action type (primary or danger).
   */
  actionType?: MenuItemV2ActionType;
  /**
   * @propCategory State
   * @description If true, the menu item is disabled and cannot be interacted with.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the menu item is clicked.
   */
  onClick?: () => void;
  /**
   * @propCategory Content
   * @description An array of `MenuItemV2Type` objects to render as a sub-menu when this item is hovered or clicked.
   */
  subMenu?: MenuItemV2Type[];
};

/**
 * @description Represents a group of menu items within a MenuV2.
 * Groups can have an optional label and a separator can be shown after the group.
 */
export type MenuV2GroupType = {
  /**
   * @propCategory Content
   * @description Optional label displayed above the group of items.
   */
  label?: string;
  /**
   * @propCategory Required
   * @description An array of `MenuItemV2Type` objects within this group.
   */
  items: MenuItemV2Type[];
  /**
   * @propCategory Appearance
   * @description If true, displays a separator line after this group of items.
   * @default false
   */
  showSeparator?: boolean;
};
