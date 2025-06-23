import type { ComponentPropsWithoutRef, ElementType } from "react";

/**
 * @propCategory Enum
 * @description Defines the main visual style or intent of the Button.
 */
export enum ButtonType {
  /** Standard primary action button. */
  PRIMARY = "primary",
  /** Secondary action button. */
  SECONDARY = "secondary",
  /** Button for actions that may have destructive consequences. */
  DANGER = "danger",
  /** Button for actions that indicate a successful operation. */
  SUCCESS = "success",
}

/**
 * @propCategory Enum
 * @description Defines the size of the Button.
 */
export enum ButtonSize {
  /** Small sized button. */
  SMALL = "sm",
  /** Medium sized button (default). */
  MEDIUM = "md",
  /** Large sized button. */
  LARGE = "lg",
}

/**
 * @propCategory Enum
 * @description Defines specific stylistic variations of the Button.
 */
export enum ButtonSubType {
  /** Standard button appearance. */
  DEFAULT = "default",
  /** Button that only contains an icon, typically circular or square. */
  ICON_ONLY = "iconOnly",
  /** Button styled as a hyperlink. */
  LINK = "link",
  /** Button with an icon and no background or border, often used for subtle actions. */
  PLAIN_ICON = "plainIcon",
}

/**
 * @description A versatile clickable component for triggering actions or events. Supports multiple styles, sizes, icons, and accessibility features.
 * @feature Multiple visual types: primary, secondary, danger, and success
 * @feature Three sizes: small, medium, and large
 * @feature Specialized sub-types: default, icon-only, link, and plain-icon
 * @feature Leading and trailing icon support
 * @feature Loading and disabled states with proper accessibility
 * @feature Comprehensive ARIA attributes for accessibility compliance
 * @example Basic Usage
 * ```tsx
 * import { Button, ButtonType, ButtonSize } from "blend-v1";
 * 
 * <Button
 *   text="Save Changes"
 *   buttonType={ButtonType.PRIMARY}
 *   size={ButtonSize.MEDIUM}
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 * @example Intermediate Usage with Icons
 * ```tsx
 * import { Button, ButtonType, ButtonSize, ButtonSubType } from "blend-v1";
 * import { Download, ArrowRight } from "lucide-react";
 * 
 * <Button
 *   text="Download Report"
 *   buttonType={ButtonType.SECONDARY}
 *   size={ButtonSize.LARGE}
 *   leadingIcon={Download}
 *   trailingIcon={ArrowRight}
 *   onClick={() => console.log('Download started')}
 *   ariaLabel="Download the monthly report"
 * />
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { 
 *   Button, 
 *   ButtonType, 
 *   ButtonSize, 
 *   ButtonSubType 
 * } from "blend-v1";
 * import { Trash2, Settings, Plus } from "lucide-react";
 * import { useState } from "react";
 * 
 * function ActionButtons() {
 *   const [isLoading, setIsLoading] = useState(false);
 *   const [isExpanded, setIsExpanded] = useState(false);
 * 
 *   const handleAsyncAction = async () => {
 *     setIsLoading(true);
 *     await new Promise(resolve => setTimeout(resolve, 2000));
 *     setIsLoading(false);
 *   };
 * 
 *   return (
 *     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
 *       <Button
 *         text="Delete Item"
 *         buttonType={ButtonType.DANGER}
 *         size={ButtonSize.SMALL}
 *         leadingIcon={Trash2}
 *         isLoading={isLoading}
 *         onClick={handleAsyncAction}
 *         ariaLabel="Delete the selected item permanently"
 *       />
 *       
 *       <Button
 *         subType={ButtonSubType.ICON_ONLY}
 *         leadingIcon={Settings}
 *         buttonType={ButtonType.SECONDARY}
 *         size={ButtonSize.MEDIUM}
 *         ariaLabel="Open settings menu"
 *         ariaHasPopup="menu"
 *         ariaExpanded={isExpanded}
 *         ariaControls="settings-menu"
 *         onClick={() => setIsExpanded(!isExpanded)}
 *       />
 *       
 *       <Button
 *         text="Add New"
 *         subType={ButtonSubType.LINK}
 *         buttonType={ButtonType.SUCCESS}
 *         trailingIcon={Plus}
 *         onClick={() => console.log('Adding new item')}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  /**
   * @propCategory Appearance
   * @description The main visual style of the button.
   * @default ButtonType.PRIMARY
   */
  buttonType?: ButtonType;
  /**
   * @propCategory Appearance
   * @description The size of the button.
   * @default ButtonSize.MEDIUM
   */
  size?: ButtonSize;
  /**
   * @propCategory Appearance
   * @description The specific stylistic variation of the button.
   * @default ButtonSubType.DEFAULT
   */
  subType?: ButtonSubType;
  /**
   * @propCategory Content
   * @description The text content displayed on the button.
   */
  text?: string;
  /**
   * @propCategory Content
   * @description An icon component to be displayed before the button text.
   */
  leadingIcon?: ElementType;
  /**
   * @propCategory Content
   * @description An icon component to be displayed after the button text.
   */
  trailingIcon?: ElementType;
  /**
   * @propCategory State
   * @description If true, displays a loading indicator and disables the button.
   * @default false
   */
  isLoading?: boolean;
  /**
   * @propCategory State
   * @description If true, disables the button and applies a disabled style.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @propCategory Accessibility
   * @description Defines a string value that labels the current element.
   * Essential for icon-only buttons or when the button text is not sufficiently descriptive.
   */
  ariaLabel?: string;
  /**
   * @propCategory Accessibility
   * @description Indicates whether a collapsible element is currently expanded or collapsed.
   */
  ariaExpanded?: boolean;
  /**
   * @propCategory Accessibility
   * @description Identifies the element(s) whose contents or presence are controlled by the current element.
   */
  ariaControls?: string;
  /**
   * @propCategory Accessibility
   * @description Indicates the current "pressed" state of a toggle button.
   */
  ariaPressed?: boolean | "mixed";
  /**
   * @propCategory Accessibility
   * @description Indicates that the element has a popup menu or dialog.
   */
  ariaHasPopup?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
};
