import { ButtonV2Props } from "../ButtonV2";

/**
 * @description Defines the props for action buttons within a Popover, derived from `ButtonV2Props`.
 * Excludes `buttonGroupPosition` and `subType` as they are not typically relevant for popover actions.
 */
export type PopoverActionType = Omit<ButtonV2Props, "buttonGroupPosition" | "subType">;

/**
 * @propCategory Enum
 * @description Defines the size of the Popover content area.
 */
export enum PopoverSize {
  /** Small popover size. */
  SMALL = "small",
  /** Medium popover size (default). */
  MEDIUM = "medium",
}

/**
 * @description A floating element that displays content in relation to a trigger element.
 * Popovers are used to show additional information or actions without disrupting the main flow of the page.
 * @feature Displays content in a floating panel anchored to a trigger.
 * @feature Customizable trigger element.
 * @feature Optional heading, description, and close button.
 * @feature Supports primary and secondary action buttons in a footer.
 * @feature Control over placement (side, alignment, offsets).
 * @feature Controllable open/close state.
 * @feature Optional modal behavior.
 * @example
 * ```tsx
 * import { Popover, PopoverSize } from "./components/Popover"; // Assuming path
 * import { ButtonV2, ButtonTypeV2 } from "./components/ButtonV2"; // Assuming path
 * import { useState } from "react";
 *
 * function MyComponentWithPopover() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   return (
 *     <Popover
 *       trigger={<ButtonV2 onClick={() => setIsOpen(!isOpen)}>Toggle Popover</ButtonV2>}
 *       heading="Popover Title"
 *       description="This is some information inside the popover."
 *       isOpen={isOpen}
 *       onOpenChange={setIsOpen}
 *       primaryAction={{ text: "OK", onClick: () => setIsOpen(false), buttonType: ButtonTypeV2.PRIMARY }}
 *       size={PopoverSize.MEDIUM}
 *       side="bottom"
 *       align="center"
 *     >
 *       <p>Additional popover content can go here.</p>
 *     </Popover>
 *   );
 * }
 * ```
 */
export type PopoverProps = {
  /**
   * @propCategory Content
   * @description Optional heading text displayed at the top of the popover.
   */
  heading?: string;
  /**
   * @propCategory Content
   * @description Optional descriptive text displayed below the heading.
   */
  description?: string;
  /**
   * @propCategory Required
   * @description The React node that triggers the display of the popover.
   */
  trigger: React.ReactNode;
  /**
   * @propCategory Required
   * @description The main content to be displayed inside the popover.
   */
  children: React.ReactNode;
  /**
   * @propCategory Behavior
   * @description If true, displays a close button (typically an 'X' icon) in the popover header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the popover's open state changes.
   * @param open The new open state (boolean).
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * @propCategory State
   * @description Controls the open state of the popover.
   */
  open?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, the popover behaves like a modal (e.g., with an overlay).
   * @default false
   */
  asModal?: boolean;
  /**
   * @propCategory Actions
   * @description Props for the primary action button in the popover footer.
   */
  primaryAction?: PopoverActionType;
  /**
   * @propCategory Actions
   * @description Props for the secondary action button in the popover footer.
   */
  secondaryAction?: PopoverActionType;
  /**
   * @propCategory Appearance
   * @description The offset of the popover from the trigger along the chosen side.
   * @default 4
   */
  sideOffset?: number;
  /**
   * @propCategory Appearance
   * @description The preferred side of the trigger where the popover should appear.
   * @default "bottom"
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * @propCategory Appearance
   * @description The alignment of the popover relative to the trigger.
   * @default "center"
   */
  align?: "start" | "center" | "end";
  /**
   * @propCategory Appearance
   * @description The offset of the popover from the trigger along the alignment axis.
   */
  alignOffset?: number;
  /**
   * @propCategory Appearance
   * @description Fixed width of the popover content area in pixels.
   */
  width?: number;
  /**
   * @propCategory Appearance
   * @description Minimum width of the popover content area in pixels.
   */
  minWidth?: number;
  /**
   * @propCategory Appearance
   * @description Maximum width of the popover content area in pixels.
   */
  maxWidth?: number;
  /**
   * @propCategory Appearance
   * @description Fixed height of the popover content area in pixels.
   */
  height?: number;
  /**
   * @propCategory Appearance
   * @description Minimum height of the popover content area in pixels.
   */
  minHeight?: number;
  /**
   * @propCategory Appearance
   * @description Maximum height of the popover content area before scrolling is enabled.
   */
  maxHeight?: number;
  /**
   * @propCategory Appearance
   * @description The z-index of the popover.
   */
  zIndex?: number;
  /**
   * @propCategory Appearance
   * @description The size of the popover content area.
   * @default PopoverSize.MEDIUM
   */
  size?: PopoverSize;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the popover is closed.
   * This is often redundant if `onOpenChange` is used, but can be specific to close actions.
   */
  onClose?: () => void;
};
