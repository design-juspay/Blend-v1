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

/**
 * @description A specialized numeric input component with built-in increment/decrement controls and comprehensive validation features.
 * Perfect for quantity selectors, age inputs, price fields, and any scenario requiring precise numerical data entry with visual feedback and constraints.
 * @feature Input field restricted to numerical values with built-in validation
 * @feature Integrated increment/decrement buttons with intuitive controls
 * @feature Comprehensive min/max value constraints with automatic boundary enforcement
 * @feature Customizable step intervals for precise value adjustments
 * @feature Support for labels, sublabels, hint text, and detailed error messaging
 * @feature Multiple size options for different UI contexts and layouts
 * @feature Disabled state with proper visual feedback and accessibility
 * @feature Real-time validation with immediate user feedback
 * @example Basic Age Input
 * ```tsx
 * import { NumberInput, NumberInputSize } from "blend-v1";
 * import { useState } from "react";
 * 
 * function AgeInput() {
 *   const [age, setAge] = useState(25);
 * 
 *   return (
 *     <NumberInput
 *       label="Age"
 *       value={age}
 *       onChange={(e) => setAge(parseInt(e.target.value) || 0)}
 *       min={0}
 *       max={120}
 *       placeholder="Enter your age"
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Usage with Error State
 * ```tsx
 * import { NumberInput, NumberInputSize } from "blend-v1";
 * import { useState } from "react";
 * 
 * function ProductQuantity() {
 *   const [quantity, setQuantity] = useState(1);
 * 
 *   return (
 *     <NumberInput
 *       label="Quantity"
 *       sublabel="Select the number of items"
 *       value={quantity}
 *       onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
 *       min={1}
 *       max={99}
 *       step={1}
 *       size={NumberInputSize.LARGE}
 *       error={quantity < 1 || quantity > 99}
 *       errorMessage="Quantity must be between 1 and 99"
 *       hintText="Maximum 99 items per order"
 *       required={true}
 *     />
 *   );
 * }
 * ```
 * @example Advanced Usage with All Props
 * ```tsx
 * import { NumberInput, NumberInputSize } from "blend-v1";
 * import { useState } from "react";
 * 
 * function PriceInput() {
 *   const [price, setPrice] = useState(99.99);
 * 
 *   return (
 *     <NumberInput
 *       label="Product Price"
 *       sublabel="Set the selling price"
 *       value={price}
 *       onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
 *       min={0.01}
 *       max={9999.99}
 *       step={0.01}
 *       size={NumberInputSize.LARGE}
 *       placeholder="0.00"
 *       hintText="Price includes all taxes and fees"
 *       helpIconHintText="This price will be displayed to customers"
 *       required={true}
 *       name="product-price"
 *     />
 *   );
 * }
 * ```
 */
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
