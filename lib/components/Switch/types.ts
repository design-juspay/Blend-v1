import { ReactNode } from 'react';

/**
 * @propCategory Enum
 * @description Defines the size of the Switch component.
 */
export enum SwitchSize {
  /** Small sized switch. */
  SMALL = 'sm',
  /** Medium sized switch (default). */
  MEDIUM = 'md',
}

/**
 * @description A two-state toggle switch that allows users to turn an option on or off.
 * @feature Represents an on/off state toggle.
 * @feature Customizable size (small, medium).
 * @feature Optional label and subtext.
 * @feature Disabled and error states.
 * @feature Controlled and uncontrolled behavior.
 * @example
 * ```tsx
 * import { Switch, SwitchSize } from "./components/Switch"; // Assuming path
 * import { useState } from "react";
 *
 * function MySettings() {
 *   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
 *
 *   return (
 *     <Switch
 *       id="notifications"
 *       checked={notificationsEnabled}
 *       onChange={setNotificationsEnabled}
 *       label="Enable Notifications"
 *       subtext="Receive updates about your account."
 *       size={SwitchSize.MEDIUM}
 *     />
 *   );
 * }
 * ```
 */
export type SwitchProps = {
  /**
   * @propCategory DOM Attributes
   * @description The unique identifier for the switch input element.
   */
  id?: string;
  /**
   * @propCategory State
   * @description The controlled checked state of the switch (true for on, false for off).
   */
  checked?: boolean;
  /**
   * @propCategory State
   * @description The initial checked state of the switch when uncontrolled.
   */
  defaultChecked?: boolean;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the switch state changes.
   * @param checked The new checked state (boolean).
   */
  onChange?: (checked: boolean) => void;
  /**
   * @propCategory State
   * @description If true, disables the switch and prevents interaction.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Validation
   * @description If true, indicates that the switch must be in a specific state for form submission (though typically not used for standalone switches).
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory State
   * @description If true, applies an error style to the switch (visual only, as switches don't typically have validation errors).
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Appearance
   * @description The size of the switch.
   * @default SwitchSize.MEDIUM
   */
  size?: SwitchSize;
  /**
   * @propCategory Content
   * @description The label content for the switch, typically a string or ReactNode.
   */
  label?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional subtext displayed below or alongside the main label.
   */
  subtext?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered, often for custom label structures or additional elements.
   */
  slot?: ReactNode;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the switch input element.
   */
  name?: string;
  /**
   * @propCategory DOM Attributes
   * @description The value submitted with the form if the switch is part of a form.
   */
  value?: string;
};

/**
 * @description A component that groups multiple `Switch` components, often under a common label.
 * While switches are typically independent, a group might be used for layout or to manage a set of related toggles.
 * Note: Unlike RadioGroup, SwitchGroup usually allows multiple switches to be on. If single selection is needed, RadioGroup is more appropriate.
 * @feature Groups multiple `Switch` components.
 * @feature Can apply a common label or disabled state to all switches in the group.
 * @example
 * ```tsx
 * import { SwitchGroup, Switch } from "./components/Switch"; // Assuming path
 * import { useState } from "react";
 *
 * function FeatureToggles() {
 *   const [featureA, setFeatureA] = useState(true);
 *   const [featureB, setFeatureB] = useState(false);
 *
 *   return (
 *     <SwitchGroup label="Feature Settings">
 *       <Switch checked={featureA} onChange={setFeatureA} label="Enable Feature A" />
 *       <Switch checked={featureB} onChange={setFeatureB} label="Enable Feature B" />
 *     </SwitchGroup>
 *   );
 * }
 * ```
 */
export type SwitchGroupProps = {
  /**
   * @propCategory DOM Attributes
   * @description The unique identifier for the switch group.
   */
  id?: string;
  /**
   * @propCategory Content
   * @description An optional label for the entire switch group.
   */
  label?: string;
  /**
   * @propCategory DOM Attributes
   * @description A common name that can be applied to switches within the group, though less common for switches than radios.
   */
  name?: string;
  /**
   * @propCategory Required
   * @description The `Switch` components that are part of this group.
   */
  children: ReactNode;
  /**
   * @propCategory State
   * @description If true, disables all switches within the group.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory State
   * @description An array of values for controlled `Switch` components within the group.
   * This is more typical for checkbox groups; for switches, individual `checked` props are common.
   */
  value?: string[]; // This seems more like CheckboxGroupProps, might need review for Switch context
  /**
   * @propCategory State
   * @description An array of values for initially checked `Switch` components when uncontrolled.
   */
  defaultValue?: string[]; // Similar to `value`, might need review for Switch context
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the state of any switch in the group changes.
   * Provides an array of values of the currently "on" switches.
   */
  onChange?: (value: string[]) => void; // Similar to `value`, might need review for Switch context
};
