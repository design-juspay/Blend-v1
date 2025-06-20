import { ReactNode } from "react";

/**
 * @propCategory Enum
 * @description Defines the visual style of the Accordion.
 */
export enum AccordionType {
  /** Renders the accordion with a border. */
  BORDER = "border",
  /** Renders the accordion without a border. */
  NO_BORDER = "noBorder",
}

/**
 * @propCategory Enum
 * @description Defines the position of the chevron icon in an AccordionItem.
 */
export enum AccordionChevronPosition {
  /** Positions the chevron to the left of the title. */
  LEFT = "left",
  /** Positions the chevron to the right of the title. */
  RIGHT = "right",
}

/**
 * @description Represents a single item within an Accordion component.
 * It defines the content and behavior of an individual collapsible section.
 * @feature Expandable content sections.
 * @feature Customizable title and subtext.
 * @feature Optional slots for additional content (left, right, subtext).
 * @feature Controllable disabled state.
 * @example
 * ```tsx
 * import { Accordion, AccordionItem } from "./components/Accordion";
 *
 * <AccordionItem value="item-1" title="Section 1 Title">
 *   <p>This is the content of section 1.</p>
 * </AccordionItem>
 * ```
 */
export type AccordionItemProps = {
  /**
   * @propCategory Required
   * @description A unique value for the accordion item.
   */
  value: string;
  /**
   * @propCategory Required
   * @description The title displayed for the accordion item.
   */
  title: string;
  /**
   * @propCategory Content
   * @description Optional subtext displayed below the title.
   */
  subtext?: string;
  /**
   * @propCategory Content
   * @description Optional React node to be placed to the left of the title.
   */
  leftSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional React node to be placed to the right of the title (or chevron, depending on position).
   */
  rightSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional React node to replace or augment the subtext.
   */
  subtextSlot?: ReactNode;
  /**
   * @propCategory Required
   * @description The content to be displayed when the accordion item is expanded.
   */
  children: ReactNode;
  /**
   * @propCategory Behavior
   * @description If true, the accordion item will be disabled and cannot be interacted with.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the accordion item.
   */
  className?: string;
  /**
   * @propCategory Appearance
   * @description Determines the position of the chevron icon.
   * @default AccordionChevronPosition.RIGHT
   */
  chevronPosition?: AccordionChevronPosition;
}

/**
 * @description A vertically stacked set of interactive headings that each reveal a section of content.
 * The Accordion component allows users to toggle the display of sections of content.
 * It can be configured to allow single or multiple items to be open at once.
 * @feature Supports single and multiple open sections.
 * @feature Customizable appearance (bordered or no border).
 * @feature Controllable state through `value` and `onValueChange`.
 * @example
 * ```tsx
 * import { Accordion, AccordionItem } from "./components/Accordion";
 *
 * <Accordion defaultValue="item-1" isMultiple={false}>
 *   <AccordionItem value="item-1" title="Section 1 Title">
 *     <p>Content for section 1.</p>
 *   </AccordionItem>
 *   <AccordionItem value="item-2" title="Section 2 Title">
 *     <p>Content for section 2.</p>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export type AccordionProps = {
  /**
   * @propCategory Required
   * @description The AccordionItem components to be rendered within the Accordion.
   */
  children: ReactNode;
  /**
   * @propCategory Appearance
   * @description The visual style of the accordion.
   * @default AccordionType.NO_BORDER
   */
  accordionType?: AccordionType;
  /**
   * @propCategory State
   * @description The value of the item to be opened by default. Use an array for multiple default values if `isMultiple` is true.
   */
  defaultValue?: string | string[];
  /**
   * @propCategory State
   * @description Controlled value of the open item(s). Use an array for multiple values if `isMultiple` is true.
   */
  value?: string | string[];
  /**
   * @propCategory Behavior
   * @description If true, multiple accordion items can be open simultaneously.
   * @default false
   */
  isMultiple?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the opened item(s) change. Receives the new value (string or string[]).
   */
  onValueChange?: (value: string | string[]) => void;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the accordion root element.
   */
  className?: string;
}
