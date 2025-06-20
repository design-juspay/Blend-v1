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
 * @description A clickable element used to trigger an action or event.
 * Buttons can contain text, icons, or both, and come in various styles and sizes.
 * @feature Multiple visual types (primary, secondary, danger, success).
 * @feature Different sizes (small, medium, large).
 * @feature Sub-types for specific use cases (icon-only, link, plain-icon).
 * @feature Support for leading and trailing icons.
 * @feature Loading and disabled states.
 * @feature Comprehensive ARIA attribute support for accessibility.
 * @example
 * ```tsx
 * import { Button, ButtonType, ButtonSize } from "./components/Button";
 * import { Zap } from "lucide-react"; // Assuming lucide-react for icons
 *
 * <Button
 *   text="Primary Action"
 *   buttonType={ButtonType.PRIMARY}
 *   size={ButtonSize.MEDIUM}
 *   onClick={() => console.log("Primary button clicked")}
 * />
 *
 * <Button
 *   buttonType={ButtonType.SECONDARY}
 *   size={ButtonSize.SMALL}
 *   leadingIcon={Zap}
 *   text="With Icon"
 * />
 *
 * <Button
 *   subType={ButtonSubType.ICON_ONLY}
 *   leadingIcon={Zap}
 *   ariaLabel="Perform action"
 * />
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
