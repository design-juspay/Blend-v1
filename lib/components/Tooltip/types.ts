import { ReactNode } from "react";

/**
 * @propCategory Enum
 * @description Defines the direction of the optional slot within the Tooltip content.
 */
export enum TooltipSlotDirection {
  /** Slot is positioned to the left of the main content. */
  LEFT = "left",
  /** Slot is positioned to the right of the main content. */
  RIGHT = "right",
}

/**
 * @propCategory Enum
 * @description Defines the preferred side of the trigger where the Tooltip should appear.
 */
export enum TooltipSide {
  /** Positions the tooltip above the trigger. */
  TOP = "top",
  /** Positions the tooltip to the right of the trigger. */
  RIGHT = "right",
  /** Positions the tooltip to the left of the trigger. */
  LEFT = "left",
  /** Positions the tooltip below the trigger. */
  BOTTOM = "bottom",
}

/**
 * @propCategory Enum
 * @description Defines the alignment of the Tooltip relative to its trigger.
 */
export enum TooltipAlign {
  /** Aligns the start of the tooltip with the start or end of the trigger (depending on side). */
  START = "start",
  /** Aligns the end of the tooltip with the start or end of the trigger (depending on side). */
  END = "end",
  /** Centers the tooltip with the trigger. */
  CENTER = "center",
}

/**
 * @propCategory Enum
 * @description Defines the size of the Tooltip content area.
 */
export enum TooltipSize {
  /** Small tooltip size. */
  SMALL = "sm",
  /** Large tooltip size. */
  LARGE = "lg",
}

/**
 * @description A small, contextual popup that displays descriptive text or information when a user hovers over or focuses on an element.
 * @feature Displays informative text in a floating panel near a trigger element.
 * @feature Customizable content, which can be a string or ReactNode.
 * @feature Control over placement (side, alignment, offset) and appearance (size, arrow).
 * @feature Optional slot for additional content (e.g., an icon) within the tooltip.
 * @feature Configurable delay duration before the tooltip appears.
 * @example
 * ```tsx
 * import { Tooltip, TooltipSide, TooltipAlign, TooltipSize } from "./components/Tooltip"; // Assuming path
 * import { Button } from "./components/Button"; // Assuming path
 * import { InfoIcon } from "lucide-react"; // Assuming lucide-react
 *
 * <Tooltip
 *   content="This provides more details about the button's action."
 *   side={TooltipSide.TOP}
 *   align={TooltipAlign.CENTER}
 *   size={TooltipSize.SMALL}
 *   showArrow={true}
 *   delayDuration={300}
 * >
 *   <Button text="Hover Me" />
 * </Tooltip>
 *
 * <Tooltip
 *   content={<span>Detailed <strong>HTML</strong> content is also supported.</span>}
 *   slot={<InfoIcon size={14} />}
 *   slotDirection={TooltipSlotDirection.LEFT}
 * >
 *   <span style={{textDecoration: 'underline dotted'}}>Info</span>
 * </Tooltip>
 * ```
 */
export type TooltipProps = {
  /**
   * @propCategory Required
   * @description The trigger element that the tooltip is associated with. The tooltip will appear when this element is hovered or focused.
   */
  children: ReactNode;
  /**
   * @propCategory Required
   * @description The content to be displayed inside the tooltip. Can be a simple string or a more complex ReactNode.
   */
  content: ReactNode | string;
  /**
   * @propCategory State
   * @description Controls the open state of the tooltip. If not provided, the tooltip's visibility is managed internally based on hover/focus.
   */
  open?: boolean;
  /**
   * @propCategory Appearance
   * @description The preferred side of the trigger element where the tooltip should appear.
   * @default TooltipSide.TOP
   */
  side?: TooltipSide;
  /**
   * @propCategory Appearance
   * @description The alignment of the tooltip relative to the trigger element.
   * @default TooltipAlign.CENTER
   */
  align?: TooltipAlign;
  /**
   * @propCategory Appearance
   * @description If true, displays an arrow pointing from the tooltip to the trigger element.
   * @default true
   */
  showArrow?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the tooltip content area.
   * @default TooltipSize.SMALL
   */
  size?: TooltipSize;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed inside the tooltip, alongside the main `content`.
   */
  slot?: ReactNode;
  /**
   * @propCategory Appearance
   * @description The direction/position of the `slot` content relative to the main `content`.
   * @default TooltipSlotDirection.LEFT
   */
  slotDirection?: TooltipSlotDirection;
  /**
   * @propCategory Behavior
   * @description The delay in milliseconds before the tooltip appears after the trigger is hovered.
   * @default 0
   */
  delayDuration?: number;
  /**
   * @propCategory Appearance
   * @description The offset of the tooltip from the trigger element, in pixels.
   * @default 4
   */
  offset?: number;
};
