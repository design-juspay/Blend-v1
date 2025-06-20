/**
 * @propCategory Enum
 * @description Defines the main visual style or intent of the ButtonV2.
 */
export enum ButtonTypeV2 {
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
 * @description Defines the size of the ButtonV2.
 */
export enum ButtonSizeV2 {
  /** Small sized button. */
  SMALL = "sm",
  /** Medium sized button (default). */
  MEDIUM = "md",
  /** Large sized button. */
  LARGE = "lg",
}

/**
 * @propCategory Enum
 * @description Defines specific stylistic variations of the ButtonV2.
 */
export enum ButtonSubTypeV2 {
  /** Standard button appearance. */
  DEFAULT = "default",
  /** Button that only contains an icon, typically circular or square. */
  ICON_ONLY = "iconOnly",
  /** Button styled for inline usage, often with minimal chrome, similar to a link or plain button. */
  INLINE = "inline",
}

/**
 * @description A revised version of the Button component (ButtonV2).
 * It provides various styles, sizes, and states for user interaction.
 * Note: This version does not explicitly extend standard HTMLButtonElement props, so ARIA attributes
 * and other standard button props might need to be passed directly or considered for future enhancement.
 * @feature Multiple visual types (primary, secondary, danger, success).
 * @feature Different sizes (small, medium, large).
 * @feature Sub-types for specific use cases (icon-only, inline).
 * @feature Support for leading and trailing icons (ReactNode).
 * @feature Loading and disabled states.
 * @example
 * ```tsx
 * import { ButtonV2, ButtonTypeV2, ButtonSizeV2 } from "./components/ButtonV2";
 * import { Zap } from "lucide-react"; // Assuming lucide-react for icons
 *
 * <ButtonV2
 *   text="Primary Action V2"
 *   buttonType={ButtonTypeV2.PRIMARY}
 *   size={ButtonSizeV2.MEDIUM}
 *   onClick={() => console.log("ButtonV2 clicked")}
 * />
 *
 * <ButtonV2
 *   buttonType={ButtonTypeV2.SECONDARY}
 *   size={ButtonSizeV2.SMALL}
 *   leadingIcon={<Zap size={16} />}
 *   text="With Icon V2"
 * />
 *
 * <ButtonV2
 *   subType={ButtonSubTypeV2.ICON_ONLY}
 *   leadingIcon={<Zap size={20} />}
 *   aria-label="Perform action V2" // aria-label passed directly
 * />
 * ```
 */
export type ButtonV2Props = {
  /**
   * @propCategory Appearance
   * @description The main visual style of the button.
   * @default ButtonTypeV2.PRIMARY
   */
  buttonType?: ButtonTypeV2;
  /**
   * @propCategory Appearance
   * @description The size of the button.
   * @default ButtonSizeV2.MEDIUM
   */
  size?: ButtonSizeV2;
  /**
   * @propCategory Appearance
   * @description The specific stylistic variation of the button.
   * @default ButtonSubTypeV2.DEFAULT
   */
  subType?: ButtonSubTypeV2;
  /**
   * @propCategory Content
   * @description The text content displayed on the button.
   */
  text?: string;
  /**
   * @propCategory Content
   * @description A ReactNode (e.g., an icon component) to be displayed before the button text.
   */
  leadingIcon?: React.ReactNode;
  /**
   * @propCategory Content
   * @description A ReactNode (e.g., an icon component) to be displayed after the button text.
   */
  trailingIcon?: React.ReactNode;
  /**
   * @propCategory State
   * @description If true, displays a loading indicator and disables the button. Alias for `loading`.
   * @default false
   */
  isLoading?: boolean;
  /**
   * @propCategory State
   * @description If true, disables the button and applies a disabled style. Alias for `disabled`.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @propCategory Advanced
   * @description A ref to the underlying HTML button element.
   */
  ref?: React.RefObject<HTMLButtonElement>;
  /**
   * @propCategory State
   * @description If true, disables the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the button is clicked.
   */
  onClick?: () => void;
  /**
   * @propCategory State
   * @description If true, displays a loading indicator.
   * @default false
   */
  loading?: boolean;
  /**
   * @propCategory Layout
   * @description Specifies the button's position within a ButtonGroupV2, influencing border radius.
   * Not typically set manually; managed by ButtonGroupV2.
   */
  buttonGroupPosition?: "center" | "left" | "right";
  /**
   * @propCategory Advanced
   * @description A key for the component, useful when rendering lists of buttons.
   */
  key?: string | number;
};
