/**
 * @propCategory Enum
 * @description Defines the size of the TextInput component.
 */
export enum TextInputSize {
  /** Medium size. */
  MEDIUM = "md",
  /** Large size. */
  LARGE = "lg",
}

// export enum InputVariant {
//   SEARCH = "search",
//   TEXT = "text",
// }

/**
 * @propCategory Enum
 * @description Defines the visual state of the TextInput, typically for styling.
 */
export enum TextInputState {
  /** Default state. */
  DEFAULT = "default",
  /** Hover state. */
  HOVER = "hover",
  /** Focus state. */
  FOCUS = "focus",
  /** Error state. */
  ERROR = "error",
  /** Disabled state. */
  DISABLED = "disabled",
}

// Component-level JSDoc (description, features, example) is now in TextInput.tsx
export type InputProps = { // Should ideally be named TextInputProps
  /**
   * @propCategory Validation
   * @description If true, marks the input field as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory Required
   * @description The main label for the input field.
   */
  label: string;
  /**
   * @propCategory Content
   * @description An optional sublabel displayed below the main label.
   */
  sublabel?: string;
  /**
   * @propCategory Content
   * @description A hint text displayed below the input field.
   */
  hintText?: string;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed next to the label.
   */
  helpIconHintText?: string;
  /**
   * @propCategory State
   * @description If true, applies an error style to the input field.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Content
   * @description An error message displayed below the input field when `error` is true.
   */
  errorMessage?: string;
  /**
   * @propCategory State
   * @description If true, disables the input field.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the input field.
   * @default TextInputSize.MEDIUM
   */
  size?: TextInputSize;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the left of the input text.
   */
  leftSlot?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the right of the input text.
   */
  rightSlot?: React.ReactNode;
  /**
   * @propCategory Required
   * @description The controlled value of the input field.
   */
  value: string;
  /**
   * @propCategory Required
   * @description Callback function invoked when the input value changes.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @propCategory Appearance
   * @description Placeholder text for the input field.
   */
  placeholder?: string;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input element.
   */
  name?: string;
};
