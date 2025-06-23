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
 * @description A form control that allows users to select one or more options from a set. Supports checked, unchecked, and indeterminate states for complex selection scenarios.
 * @feature Three distinct states: checked, unchecked, and indeterminate
 * @feature Two size variants: small and medium
 * @feature Controlled and uncontrolled behavior support
 * @feature Optional labels, subtext, and custom slot content
 * @feature Error and disabled states with proper visual feedback
 * @feature Full accessibility support with ARIA attributes
 * @example Basic Usage
 * ```tsx
 * import { Checkbox, CheckboxSize } from "blend-v1";
 * 
 * <Checkbox 
 *   id="terms"
 *   size={CheckboxSize.MEDIUM}
 *   defaultChecked={false}
 * >
 *   I agree to the terms and conditions
 * </Checkbox>
 * ```
 * @example Intermediate Usage with State Management
 * ```tsx
 * import { Checkbox, CheckboxSize } from "blend-v1";
 * import { useState } from "react";
 * import { Info } from "lucide-react";
 * 
 * function PreferencesForm() {
 *   const [emailNotifications, setEmailNotifications] = useState(true);
 *   const [pushNotifications, setPushNotifications] = useState(false);
 * 
 *   return (
 *     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
 *       <Checkbox
 *         id="email-notifications"
 *         checked={emailNotifications}
 *         onCheckedChange={setEmailNotifications}
 *         size={CheckboxSize.MEDIUM}
 *         subtext="Receive updates about your account via email"
 *       >
 *         Email Notifications
 *       </Checkbox>
 * 
 *       <Checkbox
 *         id="push-notifications"
 *         checked={pushNotifications}
 *         onCheckedChange={setPushNotifications}
 *         size={CheckboxSize.SMALL}
 *         slot={<Info size={16} />}
 *       >
 *         Push Notifications
 *       </Checkbox>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with Indeterminate State
 * ```tsx
 * import { Checkbox, CheckboxSize } from "blend-v1";
 * import { useState } from "react";
 * import { Shield, AlertTriangle } from "lucide-react";
 * 
 * function PermissionsManager() {
 *   const [parentChecked, setParentChecked] = useState<boolean | 'indeterminate'>('indeterminate');
 *   const [childOptions, setChildOptions] = useState({
 *     read: true,
 *     write: false,
 *     delete: false
 *   });
 * 
 *   const updateParentState = (newChildOptions: typeof childOptions) => {
 *     const checkedCount = Object.values(newChildOptions).filter(Boolean).length;
 *     
 *     if (checkedCount === 0) {
 *       setParentChecked(false);
 *     } else if (checkedCount === Object.keys(newChildOptions).length) {
 *       setParentChecked(true);
 *     } else {
 *       setParentChecked('indeterminate');
 *     }
 *   };
 * 
 *   const handleChildChange = (permission: keyof typeof childOptions) => {
 *     return (checked: boolean | 'indeterminate') => {
 *       const newOptions = { ...childOptions, [permission]: checked };
 *       setChildOptions(newOptions);
 *       updateParentState(newOptions);
 *     };
 *   };
 * 
 *   return (
 *     <div style={{ padding: '20px' }}>
 *       <Checkbox
 *         id="all-permissions"
 *         checked={parentChecked}
 *         onCheckedChange={setParentChecked}
 *         size={CheckboxSize.MEDIUM}
 *         slot={<Shield size={18} />}
 *         subtext="Grant or revoke all permissions for this user"
 *         required={true}
 *       >
 *         All Permissions
 *       </Checkbox>
 * 
 *       <div style={{ marginLeft: '32px', marginTop: '16px' }}>
 *         <Checkbox
 *           id="read-permission"
 *           checked={childOptions.read}
 *           onCheckedChange={handleChildChange('read')}
 *           size={CheckboxSize.SMALL}
 *           disabled={false}
 *           error={false}
 *         >
 *           Read Permission
 *         </Checkbox>
 * 
 *         <Checkbox
 *           id="delete-permission"
 *           checked={childOptions.delete}
 *           onCheckedChange={handleChildChange('delete')}
 *           size={CheckboxSize.SMALL}
 *           slot={<AlertTriangle size={14} color="#EF4444" />}
 *           subtext="Dangerous: Allows permanent deletion"
 *           error={childOptions.delete && !childOptions.write}
 *         >
 *           Delete Permission
 *         </Checkbox>
 *       </div>
 *     </div>
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
