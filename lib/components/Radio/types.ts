import { ReactNode } from 'react';

/**
 * @propCategory Enum
 * @description Defines the size of the Radio button.
 */
export enum RadioSize {
  /** Small sized radio button. */
  SMALL = 'sm',
  /** Medium sized radio button (default). */
  MEDIUM = 'md',
}

/**
 * @description Props for an individual Radio button component.
 * Radio buttons are typically used in a `RadioGroup` to allow users to select one option from a set.
 * @feature Represents a single selectable option in a radio group.
 * @feature Customizable size (small, medium).
 * @feature Optional label and subtext.
 * @feature Disabled and error states.
 * @feature Controlled and uncontrolled behavior for its checked state.
 * @example
 * ```tsx
 * // Usually used within a RadioGroup, see RadioGroup example.
 * import { Radio, RadioSize } from "./components/Radio";
 *
 * <Radio value="option1" size={RadioSize.MEDIUM}>
 *   Option 1
 * </Radio>
 * ```
 */
export type RadioProps = {
  /**
   * @propCategory DOM Attributes
   * @description The unique identifier for the radio input element.
   */
  id?: string;
  /**
   * @propCategory DOM Attributes
   * @description The value associated with this radio button. This value is used by the `RadioGroup` to identify the selected option.
   */
  value?: string;
  /**
   * @propCategory State
   * @description The controlled checked state of the radio button.
   * Typically managed by the parent `RadioGroup`.
   */
  checked?: boolean;
  /**
   * @propCategory State
   * @description The initial checked state of the radio button when uncontrolled.
   * Typically managed by the parent `RadioGroup`.
   */
  defaultChecked?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the checked state changes.
   * Typically managed by the parent `RadioGroup`.
   * @param checked The new checked state (boolean).
   */
  onChange?: (checked: boolean) => void;
  /**
   * @propCategory State
   * @description If true, disables the radio button and prevents interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Validation
   * @description If true, indicates that one radio button in the group must be selected for form submission.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory State
   * @description If true, applies an error style to the radio button.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the radio button.
   * @default RadioSize.MEDIUM
   */
  size?: RadioSize;
  /**
   * @propCategory Content
   * @description The label content for the radio button, typically a string or ReactNode.
   */
  children?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional subtext displayed below the main label.
   */
  subtext?: string;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered alongside the radio button, often for custom label structures.
   */
  slot?: ReactNode;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the radio input element. Should be consistent across all radio buttons in a group.
   * Typically managed by the parent `RadioGroup`.
   */
  name?: string;
};

/**
 * @description A component that groups multiple `Radio` buttons, allowing only one to be selected at a time.
 * It manages the selection state for its child `Radio` components.
 * @feature Groups `Radio` components to ensure single selection.
 * @feature Manages the `name` attribute for child radio buttons for accessibility and functionality.
 * @feature Supports a group label.
 * @feature Controlled and uncontrolled behavior for the selected value.
 * @example
 * ```tsx
 * import { RadioGroup, Radio, RadioSize } from "./components/Radio"; // Assuming path
 * import { useState } from "react";
 *
 * function MyPreferenceForm() {
 *   const [selectedValue, setSelectedValue] = useState("email");
 *
 *   return (
 *     <RadioGroup
 *       label="Notification Preference"
 *       name="notificationType"
 *       value={selectedValue}
 *       onChange={setSelectedValue}
 *     >
 *       <Radio value="email" size={RadioSize.MEDIUM}>Email</Radio>
 *       <Radio value="sms" subtext="Standard rates apply">SMS</Radio>
 *       <Radio value="none" disabled>None</Radio>
 *     </RadioGroup>
 *   );
 * }
 * ```
 */
export type RadioGroupProps = {
  /**
   * @propCategory DOM Attributes
   * @description The unique identifier for the radio group.
   */
  id?: string;
  /**
   * @propCategory Content
   * @description An optional label for the entire radio group.
   */
  label?: string;
  /**
   * @propCategory Required
   * @description The common `name` attribute for all radio buttons within the group. This is crucial for grouping.
   */
  name: string;
  /**
   * @propCategory State
   * @description The `value` of the radio button to be selected by default when the group is uncontrolled.
   */
  defaultValue?: string;
  /**
   * @propCategory State
   * @description The controlled `value` of the currently selected radio button in the group.
   */
  value?: string;
  /**
   * @propCategory Required
   * @description The `Radio` components that are part of this group.
   */
  children: ReactNode;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the selected radio button changes.
   * @param value The `value` of the newly selected radio button.
   */
  onChange?: (value: string) => void;
  /**
   * @propCategory State
   * @description If true, disables all radio buttons within the group.
   * @default false
   */
  disabled?: boolean;
};
