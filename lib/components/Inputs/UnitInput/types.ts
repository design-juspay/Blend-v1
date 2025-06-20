/**
 * @propCategory Enum
 * @description Defines the size of the UnitInput component.
 */
export enum UnitInputSize {
  /** Medium size. */
  MEDIUM = "md",
  /** Large size. */
  LARGE = "lg",
}

/**
 * @propCategory Enum
 * @description Defines the position of the unit string relative to the input field.
 */
export enum UnitPosition {
  /** Unit is displayed to the left of the input field. */
  LEFT = "left",
  /** Unit is displayed to the right of the input field. */
  RIGHT = "right",
}

// Component-level JSDoc (description, features, example) is now in UnitInput.tsx
export type UnitInputProps = {
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
   * @description The minimum allowed value for the number input.
   */
  min?: number;
  /**
   * @propCategory Validation
   * @description The maximum allowed value for the number input.
   */
  max?: number;
  /**
   * @propCategory Behavior
   * @description The stepping interval for the number input.
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
   * @default UnitInputSize.MEDIUM
   */
  size?: UnitInputSize;
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
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the left of the input field (and unit, if unitPosition is 'left').
   */
  leftSlot?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the right of the input field (and unit, if unitPosition is 'right').
   */
  rightSlot?: React.ReactNode;
  /**
   * @propCategory Required
   * @description The unit string to be displayed (e.g., "kg", "px", "$").
   */
  unit: string;
  /**
   * @propCategory Appearance
   * @description The position of the unit string relative to the input field.
   * @default UnitPosition.RIGHT
   */
  unitPosition?: UnitPosition;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input element.
   */
  name?: string;
};
