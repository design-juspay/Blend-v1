import { TextInputSize } from "../TextInput/types";

/**
 * @propCategory Enum
 * @description Defines the size of the MultiValueInput component.
 * Note: The `size` prop in `MultiValueInputProps` uses `TextInputSize`, not this enum.
 * This enum might be for internal use or a previous version.
 */
export enum MultiValueInputSize {
  /** Medium size. */
  MD = "md",
  /** Large size. */
  LG = "lg",
}

/**
 * @propCategory Enum
 * @description Defines the visual state of the MultiValueInput, typically for styling.
 */
export enum MultiValueInputState {
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

// Component-level JSDoc (description, features, example) is now in MultiValueInput.tsx
export type MultiValueInputProps = {
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
   * @description Tooltip text for an optional help icon displayed next to the label.
   */
  helpIconHintText?: string;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the underlying input element.
   */
  name?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the input field as required (though "required" behavior for multi-value might need custom handling).
   * @default false
   */
  required?: boolean;
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
   * @propCategory Content
   * @description A hint text displayed below the input field.
   */
  hintText?: string;
  /**
   * @propCategory State
   * @description If true, disables the input field and tag interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Required
   * @description An array of strings representing the current tags/values.
   */
  tags: string[];
  /**
   * @propCategory Required
   * @description Callback function invoked when a new tag should be added.
   * @param tag The string value of the tag to be added.
   */
  onTagAdd: (tag: string) => void;
  /**
   * @propCategory Required
   * @description Callback function invoked when an existing tag should be removed.
   * @param tag The string value of the tag to be removed.
   */
  onTagRemove: (tag: string) => void;
  /**
   * @propCategory Appearance
   * @description The size of the input part, using `TextInputSize` enum.
   */
  size?: TextInputSize;
};
