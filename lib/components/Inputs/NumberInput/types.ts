/**
 * @propCategory Enum
 * @description Defines the size of the NumberInput component.
 */
export enum NumberInputSize {
  /** Medium size. */
  MEDIUM = "md",
  /** Large size. */
  LARGE = "lg",
}

// Component-level JSDoc (description, features, example) is now in NumberInput.tsx
export type NumberInputProps = {
  /**
   * @propCategory Required
   * @description The controlled numerical value of the input.
   */
  value: number;
  /**
   * @propCategory Required
   * @description Callback function invoked when the input value changes.
   * Note: The event target value will be a string, so conversion to number is needed.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @propCategory Validation
   * @description The minimum allowed value.
   */
  min?: number;
  /**
   * @propCategory Validation
   * @description The maximum allowed value.
   */
  max?: number;
  /**
   * @propCategory Behavior
   * @description The stepping interval for incrementing/decrementing the value (often used with up/down arrows, if implemented).
   */
  step?: number;
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
   * @propCategory Validation
   * @description If true, marks the input field as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the input field.
   * @default NumberInputSize.MEDIUM
   */
  size?: NumberInputSize;
  /**
   * @propCategory State
   * @description If true, disables the input field.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Appearance
   * @description Placeholder text for the input field.
   */
  placeholder?: string;
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
   * @propCategory Content
   * @description A hint text displayed below the input field.
   */
  hintText?: string;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input element.
   */
  name?: string;
};
