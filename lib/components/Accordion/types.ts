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
 * @description Represents a single item within an Accordion component. Defines the content and behavior of an individual collapsible section.
 * @feature Expandable content sections with smooth animations
 * @feature Customizable title and subtext display
 * @feature Optional slots for additional content (left, right, subtext)
 * @feature Controllable disabled state and chevron positioning
 * @example Basic Usage
 * ```tsx
 * import { AccordionItem } from "blend-v1";
 *
 * <AccordionItem value="item-1" title="Section 1 Title">
 *   <p>This is the content of section 1.</p>
 * </AccordionItem>
 * ```
 * @example Intermediate Usage with Slots
 * ```tsx
 * import { AccordionItem, AccordionChevronPosition } from "blend-v1";
 * import { Settings } from "lucide-react";
 *
 * <AccordionItem 
 *   value="settings" 
 *   title="Account Settings"
 *   subtext="Manage your account preferences"
 *   leftSlot={<Settings size={18} />}
 *   chevronPosition={AccordionChevronPosition.RIGHT}
 * >
 *   <div>
 *     <h4>Notification Preferences</h4>
 *     <p>Choose how you want to receive updates.</p>
 *   </div>
 * </AccordionItem>
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { AccordionItem, AccordionChevronPosition } from "blend-v1";
 * import { Info, CheckCircle } from "lucide-react";
 *
 * <AccordionItem 
 *   value="billing" 
 *   title="Billing & Payments"
 *   subtext="Manage your subscription and payment methods"
 *   leftSlot={<Info size={18} />}
 *   rightSlot={<span style={{ color: '#10B981' }}>Active</span>}
 *   chevronPosition={AccordionChevronPosition.LEFT}
 *   isDisabled={false}
 *   className="custom-accordion-item"
 *   subtextSlot={
 *     <span style={{ color: '#6B7280', fontSize: '14px' }}>
 *       Help us improve our platform
 *     </span>
 *   }
 * >
 *   <div style={{ padding: '16px 0' }}>
 *     <h4>Payment Methods</h4>
 *     <p>Add, remove, or update your payment methods.</p>
 *     <button onClick={() => console.log('Manage payments')}>
 *       Manage Payment Methods
 *     </button>
 *   </div>
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
 * @description A collapsible content component that displays a list of items where only one or multiple can be expanded at a time. Perfect for FAQs, settings panels, and content organization.
 * @feature Single or multiple item expansion support
 * @feature Customizable visual styles with border and no-border variants
 * @feature Smooth expand/collapse animations
 * @feature Keyboard navigation and accessibility support
 * @feature Controlled and uncontrolled state management
 * @feature Flexible content structure with AccordionItem children
 * @example Basic Usage
 * ```tsx
 * import { Accordion, AccordionItem, AccordionType } from "blend-v1";
 * 
 * <Accordion 
 *   accordionType={AccordionType.NO_BORDER}
 *   defaultValue="item-1"
 * >
 *   <AccordionItem value="item-1" title="Getting Started">
 *     <p>Learn the basics of using our platform.</p>
 *   </AccordionItem>
 *   <AccordionItem value="item-2" title="Advanced Features">
 *     <p>Discover powerful features for your workflow.</p>
 *   </AccordionItem>
 * </Accordion>
 * ```
 * @example Intermediate Usage with Multiple Selection
 * ```tsx
 * import { 
 *   Accordion, 
 *   AccordionItem, 
 *   AccordionType,
 *   AccordionChevronPosition 
 * } from "blend-v1";
 * import { Settings, User } from "lucide-react";
 * 
 * <Accordion 
 *   accordionType={AccordionType.BORDER}
 *   isMultiple={true}
 *   defaultValue={["settings", "profile"]}
 * >
 *   <AccordionItem 
 *     value="settings" 
 *     title="Account Settings"
 *     subtext="Manage your account preferences"
 *     leftSlot={<Settings size={18} />}
 *     chevronPosition={AccordionChevronPosition.RIGHT}
 *   >
 *     <div>
 *       <h4>Notification Preferences</h4>
 *       <p>Choose how you want to receive updates.</p>
 *     </div>
 *   </AccordionItem>
 *   <AccordionItem 
 *     value="profile" 
 *     title="Profile Information"
 *     leftSlot={<User size={18} />}
 *   >
 *     <div>
 *       <h4>Personal Details</h4>
 *       <p>Update your name, email, and other information.</p>
 *     </div>
 *   </AccordionItem>
 * </Accordion>
 * ```
 * @example Advanced Usage with Controlled State
 * ```tsx
 * import { 
 *   Accordion, 
 *   AccordionItem, 
 *   AccordionType,
 *   AccordionChevronPosition 
 * } from "blend-v1";
 * import { Info, AlertCircle, CheckCircle } from "lucide-react";
 * import { useState } from "react";
 * 
 * function HelpCenter() {
 *   const [openSections, setOpenSections] = useState<string[]>(['billing']);
 * 
 *   const handleValueChange = (value: string | string[]) => {
 *     setOpenSections(value as string[]);
 *     console.log('Open sections:', value);
 *   };
 * 
 *   return (
 *     <Accordion 
 *       accordionType={AccordionType.BORDER}
 *       isMultiple={true}
 *       value={openSections}
 *       onValueChange={handleValueChange}
 *       className="help-center-accordion"
 *     >
 *       <AccordionItem 
 *         value="billing" 
 *         title="Billing & Payments"
 *         subtext="Manage your subscription and payment methods"
 *         leftSlot={<Info size={18} />}
 *         rightSlot={<span style={{ color: '#10B981' }}>Active</span>}
 *         chevronPosition={AccordionChevronPosition.LEFT}
 *       >
 *         <div style={{ padding: '16px 0' }}>
 *           <h4>Payment Methods</h4>
 *           <p>Add, remove, or update your payment methods.</p>
 *           <button onClick={() => console.log('Manage payments')}>
 *             Manage Payment Methods
 *           </button>
 *         </div>
 *       </AccordionItem>
 * 
 *       <AccordionItem 
 *         value="support" 
 *         title="Technical Support"
 *         subtext="Get help with technical issues"
 *         leftSlot={<AlertCircle size={18} />}
 *         isDisabled={false}
 *       >
 *         <div style={{ padding: '16px 0' }}>
 *           <h4>Contact Support</h4>
 *           <p>Our support team is available 24/7.</p>
 *           <p>Response time: Usually within 2 hours</p>
 *         </div>
 *       </AccordionItem>
 *     </Accordion>
 *   );
 * }
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
