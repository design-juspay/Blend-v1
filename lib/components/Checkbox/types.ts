import { ReactNode } from 'react';

/**
 * @propCategory Enum
 * @description Defines the size of the Checkbox.
 */
export enum CheckboxSize {
  /** Small sized checkbox. */
  SMALL = 'sm',
  /** Medium sized checkbox (default). */
  MEDIUM = 'md',
}

/**
 * @propCategory State
 * @description Represents the possible checked states of a Checkbox.
 * 'checked': The checkbox is selected.
 * 'unchecked': The checkbox is not selected.
 * 'indeterminate': The checkbox is in a mixed or indeterminate state (often used for parent checkboxes in a tree).
 */
export type CheckboxCheckedState = 'checked' | 'unchecked' | 'indeterminate';

/**
 * @propCategory State
 * @description Represents the possible interaction states of a Checkbox, mainly for internal styling logic.
 */
export type CheckboxInteractionState = 'default' | 'hover' | 'disabled' | 'error';

/**
 * @description A control that allows the user to select one or more options from a set.
 * Checkboxes can be in a checked, unchecked, or indeterminate state.
 * @feature Supports checked, unchecked, and indeterminate states.
 * @feature Customizable size (small, medium).
 * @feature Optional label and subtext.
 * @feature Disabled and error states.
 * @feature Controlled and uncontrolled behavior.
 * @example
 * ```tsx
 * import { Checkbox, CheckboxSize } from "./components/Checkbox";
 * import { useState } from "react";
 *
 * function MyForm() {
 *   const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(false);
 *
 *   return (
 *     <>
 *       <Checkbox
 *         id="option1"
 *         checked={isChecked}
 *         onCheckedChange={setIsChecked}
 *         size={CheckboxSize.MEDIUM}
 *       >
 *         Option 1
 *       </Checkbox>
 *       <Checkbox id="option2" defaultChecked={true} subtext="This is a default checked checkbox.">
 *         Option 2 with Subtext
 *       </Checkbox>
 *       <Checkbox id="option3" disabled={true}>
 *         Disabled Option
 *       </Checkbox>
 *       <Checkbox id="option4" checked="indeterminate">
 *         Indeterminate Option
 *       </Checkbox>
 *     </>
 *   );
 * }
 * ```
 */
export type CheckboxProps = {
  /**
   * @propCategory DOM Attributes
   * @description The unique identifier for the checkbox input element.
   */
  id?: string;
  /**
   * @propCategory DOM Attributes
   * @description The value submitted with the form if the checkbox is checked.
   */
  value?: string;
  /**
   * @propCategory State
   * @description The controlled checked state of the checkbox.
   * Can be `true` (checked), `false` (unchecked), or `'indeterminate'`.
   */
  checked?: boolean | 'indeterminate';
  /**
   * @propCategory State
   * @description The initial checked state of the checkbox when uncontrolled.
   */
  defaultChecked?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the checked state changes.
   * Receives the new checked state (`true`, `false`, or `'indeterminate'`).
   */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  /**
   * @propCategory State
   * @description If true, disables the checkbox and prevents interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Validation
   * @description If true, indicates that the checkbox must be checked for form submission.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory State
   * @description If true, applies an error style to the checkbox.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the checkbox.
   * @default CheckboxSize.MEDIUM
   */
  size?: CheckboxSize;
  /**
   * @propCategory Content
   * @description The label content for the checkbox, typically a string or ReactNode.
   */
  children?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional subtext displayed below the main label.
   */
  subtext?: string;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered alongside the checkbox, often for custom label structures.
   */
  slot?: ReactNode;
};
