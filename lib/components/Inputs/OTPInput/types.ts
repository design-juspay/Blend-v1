// Component-level JSDoc (description, features, example) is now in OTPInput.tsx
export type OTPProps = {
  /**
   * @propCategory Required
   * @description The main label for the OTP input field.
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
   * @description The name attribute for the input fields (often a common prefix).
   */
  name?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the OTP input as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory State
   * @description If true, applies an error style to the input fields.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Content
   * @description An error message displayed below the input fields when `error` is true.
   */
  errorMessage?: string;
  /**
   * @propCategory Content
   * @description A hint text displayed below the input fields.
   */
  hintText?: string;
  /**
   * @propCategory State
   * @description If true, disables the OTP input fields.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory State
   * @description The controlled value of the OTP input (concatenated string of all digits).
   */
  value?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the OTP value changes.
   * @param value The complete OTP string.
   */
  onChange?: (value: string) => void;
  /**
   * @propCategory DOM Attributes
   * @description The ID of the form that the OTP input belongs to.
   */
  form?: string;
};
