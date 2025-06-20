/**
 * @propCategory Enum
 * @description Defines the alignment of the Select dropdown menu relative to its trigger.
 */
export enum SelectMenuAlignment {
  /** Aligns the start of the menu with the start of the trigger. */
  START = "start",
  /** Centers the menu with the trigger. */
  CENTER = "center",
  /** Aligns the end of the menu with the end of the trigger. */
  END = "end",
}

/**
 * @propCategory Enum
 * @description Defines the visual variant of the Select dropdown menu.
 */
export enum SelectMenuVariant {
  /** Menu is displayed within a container with borders/shadows. */
  CONTAINER = "container",
  /** Menu is displayed without a container, often for more integrated UIs. */
  NO_CONTAINER = "no-container",
}

/**
 * @propCategory Enum
 * @description Defines the size of the Select component (trigger and menu items).
 */
export enum SelectMenuSize {
  /** Small size. */
  SMALL = "sm",
  /** Medium size (default). */
  MEDIUM = "md",
  /** Large size. */
  LARGE = "lg",
}

/**
 * @propCategory Enum
 * @description Defines the preferred side of the trigger where the Select dropdown menu should appear.
 */
export enum SelectMenuSide {
  /** Positions the menu above the trigger. */
  TOP = "top",
  /** Positions the menu to the left of the trigger. */
  LEFT = "left",
  /** Positions the menu to the right of the trigger. */
  RIGHT = "right",
  /** Positions the menu below the trigger. */
  BOTTOM = "bottom",
}

/**
 * @description Represents a group of items within a Select dropdown menu.
 * Groups can have an optional label and a separator can be shown after the group.
 */
export type SelectMenuGroupType = {
  /**
   * @propCategory Content
   * @description Optional label displayed above the group of items.
   */
  groupLabel?: string;
  /**
   * @propCategory Required
   * @description An array of `SelectMenuItemType` objects within this group.
   */
  items: SelectMenuItemType[];
  /**
   * @propCategory Appearance
   * @description If true, displays a separator line after this group of items.
   * @default false
   */
  showSeparator?: boolean;
};

/**
 * @description Props for the SelectMenu component, which forms the dropdown part of a Select.
 * The Select component allows users to choose one or multiple options from a list.
 * @feature Displays a dropdown list of selectable items.
 * @feature Supports single or multiple selections.
 * @feature Items can be grouped and include sub-menus.
 * @feature Customizable trigger, alignment, side, and offsets.
 * @feature Optional search functionality within the menu.
 * @example
 * ```tsx
 * // This example shows usage with a hypothetical Select component that uses SelectMenuProps.
 * // See MultiSelect for a concrete example of a component using similar types.
 * import { Select, SelectMenuProps, SelectMenuGroupType } from "./components/Select"; // Assuming path
 * import { Button } from "./components/Button"; // Assuming path
 * import { useState } from "react";
 *
 * const selectOptions: SelectMenuGroupType[] = [
 *   {
 *     groupLabel: "Colors",
 *     items: [
 *       { label: "Red", value: "red" },
 *       { label: "Green", value: "green" },
 *       { label: "Blue", value: "blue" },
 *     ],
 *   },
 * ];
 *
 * function MySelectComponent() {
 *   const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
 *
 *   return (
 *     <Select // Hypothetical Select component
 *       trigger={<Button text={selectedValue ? `Selected: ${selectedValue}` : "Select a color"} />}
 *       items={selectOptions}
 *       selected={selectedValue}
 *       onSelect={(value) => setSelectedValue(value as string)}
 *       alignment="start"
 *       side="bottom"
 *     />
 *   );
 * }
 * ```
 */
export type SelectMenuProps = {
  /**
   * @propCategory Content
   * @description The React node that triggers the display of the select menu (e.g., a Button or styled input).
   * If not provided, a default trigger might be rendered by the parent Select component.
   */
  trigger?: React.ReactNode;
  /**
   * @propCategory Required
   * @description An array of `SelectMenuGroupType` objects defining the items and groups for the select menu.
   */
  items: SelectMenuGroupType[];
  /**
   * @propCategory Behavior
   * @description If true, displays the menu as a modal dialog.
   * @default false
   */
  asModal?: boolean;
  /**
   * @propCategory Appearance
   * @description The alignment of the menu relative to the trigger.
   */
  alignment?: SelectMenuAlignment;
  /**
   * @propCategory Appearance
   * @description The preferred side of the trigger where the menu should appear.
   */
  side?: SelectMenuSide;
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
   * @description The maximum height of the menu content before scrolling.
   */
  maxHeight?: number;
  /**
   * @propCategory State
   * @description The value(s) of the currently selected item(s). Can be a string for single select or string array for multi-select.
   */
  selected?: string | string[];
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when an item is selected.
   * @param value The `value` of the selected item, or an array of values if `allowMultiSelect` is true.
   */
  onSelect?: (value: string | string[]) => void;
  /**
   * @propCategory Behavior
   * @description If true, allows multiple items to be selected.
   * @default false
   */
  allowMultiSelect?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, enables a search input within the menu to filter items.
   * @default false
   */
  enableSearch?: boolean;
};

/**
 * @description Represents an individual selectable item within a Select dropdown menu.
 */
export type SelectMenuItemType = {
  /**
   * @propCategory Required
   * @description The primary text label for the menu item.
   */
  label: string;
  /**
   * @propCategory Required
   * @description The unique value associated with this menu item.
   */
  value: string;
  /**
   * @propCategory State
   * @description If true, indicates that this item is currently checked (relevant for multi-select or specific UIs).
   */
  checked?: boolean;
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
   * @description Optional ReactNode for the fourth slot, often for a trailing icon or element.
   */
  slot4?: React.ReactNode;
  /**
   * @propCategory State
   * @description If true, the menu item is disabled and cannot be interacted with.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the menu item is clicked.
   * Note: `onSelect` on the parent `SelectMenuProps` is usually preferred for handling selection.
   */
  onClick?: () => void;
  /**
   * @propCategory Content
   * @description An array of `SelectMenuItemType` objects to render as a sub-menu.
   */
  subMenu?: SelectMenuItemType[];
};

export const dummyMenuItemsLong: SelectMenuGroupType[] = Array.from(
  { length: 5 },
  (_, groupIndex) => ({
    groupLabel: `Group ${groupIndex + 1}`,
    showSeparator: groupIndex < 99,
    items: Array.from({ length: 2 }, (_, itemIndex) => {
      const itemNumber = groupIndex * 10 + itemIndex + 1;
      return {
        label: `Item ${itemNumber}`,
        value: `item-${itemNumber}`,
        subMenu:
          itemNumber % 20 === 0
            ? [
                {
                  label: `Sub Item ${itemNumber}-1`,
                  value: `sub-item-${itemNumber}-1`,
                },
                {
                  label: `Sub Item ${itemNumber}-2`,
                  value: `sub-item-${itemNumber}-2`,
                },
              ]
            : undefined,
      };
    }),
  })
);
