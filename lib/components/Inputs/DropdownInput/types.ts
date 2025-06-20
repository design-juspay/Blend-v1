import { TextInputSize } from "../TextInput/types"; // Assuming TextInputSize is relevant for styling the input part
import { SelectMenuGroupType } from "../../Select/types"; // Used for dropdown items

/**
 * @propCategory Enum
 * @description Defines the size of the DropdownInput component.
 * Note: The `size` prop in `DropdownInputProps` uses `TextInputSize`, not this enum.
 * This enum might be for internal use or a previous version.
 */
export enum DropdownInputSize {
  /** Medium size. */
  MD = "md",
  /** Large size. */
  LG = "lg",
}

/**
 * @propCategory Enum
 * @description Defines the visual state of the DropdownInput, typically for styling.
 */
export enum DropdownInputState {
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

// Component-level JSDoc (description, features, example) is now in DropdownInput.tsx
export type DropdownInputProps = {
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
   * @propCategory State
   * @description If true, disables both the text input and the dropdown.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed next to the label.
   */
  helpIconHintText?: string;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the text input element.
   */
  name?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the input field as required.
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
   * @description The controlled value of the text input part.
   */
  value?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the text input value changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered, typically as an icon or element inside the text input.
   */
  slot?: React.ReactNode;
  /**
   * @propCategory Appearance
   * @description The size of the text input part, using `TextInputSize` enum.
   */
  size?: TextInputSize;
  /**
   * @propCategory Appearance
   * @description Placeholder text for the text input part.
   */
  placeholder?: string;
  /**
   * @propCategory State
   * @description The controlled value of the dropdown part. This should match one of the `value` properties in `dropDownItems`.
   */
  dropDownValue?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the dropdown selection changes.
   * @param value The `value` of the selected dropdown item.
   */
  onDropDownChange?: (value: string) => void;
  /**
   * @propCategory Required
   * @description An array of `SelectMenuGroupType` objects defining the items and groups for the dropdown menu.
   */
  dropDownItems: SelectMenuGroupType[];
};
