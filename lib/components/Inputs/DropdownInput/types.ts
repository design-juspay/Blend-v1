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

/**
 * @description A versatile input component that combines a text input field with an integrated dropdown selector, perfect for scenarios requiring both free text entry and predefined options.
 * Essential for unit selectors, category inputs, currency selection, and any form field where users need both typing flexibility and quick selection options.
 * @feature Seamless integration of text input with dropdown selection in a single component
 * @feature Support for labels, sublabels, hint text, and comprehensive error handling
 * @feature Customizable input size and placeholder text for enhanced user experience
 * @feature Grouped dropdown items with search functionality for large option sets
 * @feature Individual control over text input value and dropdown selection state
 * @feature Proper accessibility support with ARIA attributes and keyboard navigation
 * @feature Icon slot support for enhanced visual communication
 * @feature Responsive design with proper spacing and alignment
 * @example Basic Currency Input
 * ```tsx
 * import { DropdownInput, TextInputSize, SelectMenuGroupType } from "blend-v1";
 * import { useState } from "react";
 * 
 * const currencyOptions: SelectMenuGroupType[] = [
 *   {
 *     items: [
 *       { label: "USD", value: "usd" },
 *       { label: "EUR", value: "eur" },
 *       { label: "GBP", value: "gbp" }
 *     ]
 *   }
 * ];
 * 
 * function PriceInput() {
 *   const [amount, setAmount] = useState("");
 *   const [currency, setCurrency] = useState("usd");
 * 
 *   return (
 *     <DropdownInput
 *       label="Price"
 *       value={amount}
 *       onChange={(e) => setAmount(e.target.value)}
 *       placeholder="Enter amount"
 *       dropDownValue={currency}
 *       onDropDownChange={setCurrency}
 *       dropDownItems={currencyOptions}
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Weight Input with Error Handling
 * ```tsx
 * import { DropdownInput, TextInputSize, SelectMenuGroupType } from "blend-v1";
 * import { useState } from "react";
 * import { Scale } from "lucide-react";
 * 
 * const weightUnits: SelectMenuGroupType[] = [
 *   {
 *     groupLabel: "Metric",
 *     items: [
 *       { label: "Kilograms", value: "kg" },
 *       { label: "Grams", value: "g" }
 *     ]
 *   },
 *   {
 *     groupLabel: "Imperial", 
 *     items: [
 *       { label: "Pounds", value: "lb" },
 *       { label: "Ounces", value: "oz" }
 *     ]
 *   }
 * ];
 * 
 * function WeightInput() {
 *   const [weight, setWeight] = useState("");
 *   const [unit, setUnit] = useState("kg");
 *   const [error, setError] = useState(false);
 * 
 *   const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *     const value = e.target.value;
 *     setWeight(value);
 *     setError(value !== "" && (isNaN(Number(value)) || Number(value) <= 0));
 *   };
 * 
 *   return (
 *     <DropdownInput
 *       label="Product Weight"
 *       sublabel="Enter the shipping weight"
 *       value={weight}
 *       onChange={handleWeightChange}
 *       placeholder="0.00"
 *       dropDownValue={unit}
 *       onDropDownChange={setUnit}
 *       dropDownItems={weightUnits}
 *       size={TextInputSize.LARGE}
 *       slot={<Scale size={16} />}
 *       error={error}
 *       errorMessage="Please enter a valid weight greater than 0"
 *       hintText="Weight is used for shipping calculations"
 *     />
 *   );
 * }
 * ```
 * @example Advanced Measurement Input with Validation
 * ```tsx
 * import { DropdownInput, TextInputSize, SelectMenuGroupType } from "blend-v1";
 * import { useState } from "react";
 * import { Ruler, AlertCircle } from "lucide-react";
 * 
 * const measurementUnits: SelectMenuGroupType[] = [
 *   {
 *     groupLabel: "Length",
 *     items: [
 *       { label: "Centimeters", value: "cm" },
 *       { label: "Inches", value: "in" },
 *       { label: "Feet", value: "ft" }
 *     ]
 *   },
 *   {
 *     groupLabel: "Area",
 *     items: [
 *       { label: "Square Meters", value: "m2" },
 *       { label: "Square Feet", value: "ft2" }
 *     ]
 *   }
 * ];
 * 
 * function MeasurementInput() {
 *   const [measurement, setMeasurement] = useState("");
 *   const [unit, setUnit] = useState("cm");
 *   const [error, setError] = useState(false);
 *   const [disabled, setDisabled] = useState(false);
 * 
 *   const validateMeasurement = (value: string) => {
 *     const numValue = parseFloat(value);
 *     return value === "" || (!isNaN(numValue) && numValue > 0 && numValue <= 1000);
 *   };
 * 
 *   const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *     const value = e.target.value;
 *     setMeasurement(value);
 *     setError(!validateMeasurement(value));
 *   };
 * 
 *   return (
 *     <DropdownInput
 *       label="Room Dimension"
 *       sublabel="Specify the room measurement"
 *       value={measurement}
 *       onChange={handleMeasurementChange}
 *       placeholder="Enter measurement"
 *       dropDownValue={unit}
 *       onDropDownChange={setUnit}
 *       dropDownItems={measurementUnits}
 *       size={TextInputSize.LARGE}
 *       slot={<Ruler size={16} />}
 *       error={error}
 *       errorMessage="Please enter a valid measurement (0-1000)"
 *       hintText="Maximum supported dimension is 1000 units"
 *       helpIconHintText="This measurement will be used for space planning calculations"
 *       disabled={disabled}
 *       required={true}
 *       name="room-dimension"
 *     />
 *   );
 * }
 * ```
 */
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
