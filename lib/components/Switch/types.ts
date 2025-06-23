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
 * @description A two-state toggle control that allows users to turn an option on or off with smooth visual transitions. Perfect for settings, preferences, and feature toggles.
 * @feature Binary on/off state with visual feedback
 * @feature Two size variants: small and medium
 * @feature Optional labels, subtext, and custom slot content
 * @feature Disabled and error states with proper styling
 * @feature Controlled and uncontrolled behavior support
 * @feature Touch-friendly and keyboard accessible
 * @example Basic Usage
 * ```tsx
 * import { Switch, SwitchSize } from "blend-v1";
 * 
 * <Switch
 *   id="dark-mode"
 *   label="Dark Mode"
 *   size={SwitchSize.MEDIUM}
 *   defaultChecked={false}
 * />
 * ```
 * @example Intermediate Usage with State Management
 * ```tsx
 * import { Switch, SwitchSize } from "blend-v1";
 * import { useState } from "react";
 * import { Bell } from "lucide-react";
 * 
 * function NotificationSettings() {
 *   const [emailNotifications, setEmailNotifications] = useState(true);
 *   const [pushNotifications, setPushNotifications] = useState(false);
 * 
 *   return (
 *     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
 *       <Switch
 *         id="email-notifications"
 *         checked={emailNotifications}
 *         onChange={setEmailNotifications}
 *         label="Email Notifications"
 *         subtext="Receive updates via email"
 *         size={SwitchSize.MEDIUM}
 *       />
 *       
 *       <Switch
 *         id="push-notifications"
 *         checked={pushNotifications}
 *         onChange={setPushNotifications}
 *         label="Push Notifications"
 *         subtext="Get instant alerts on your device"
 *         size={SwitchSize.SMALL}
 *         slot={<Bell size={16} />}
 *       />
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { Switch, SwitchSize } from "blend-v1";
 * import { useState } from "react";
 * import { Shield, AlertTriangle } from "lucide-react";
 * 
 * function PrivacySettings() {
 *   const [publicProfile, setPublicProfile] = useState(false);
 *   const [analyticsTracking, setAnalyticsTracking] = useState(true);
 *   const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
 * 
 *   const handleAnalyticsChange = (checked: boolean) => {
 *     setAnalyticsTracking(checked);
 *     console.log('Analytics tracking:', checked ? 'enabled' : 'disabled');
 *   };
 * 
 *   return (
 *     <div style={{ padding: '20px' }}>
 *       <Switch
 *         id="public-profile"
 *         checked={publicProfile}
 *         onChange={setPublicProfile}
 *         label="Public Profile"
 *         subtext="Make your profile visible to everyone"
 *         size={SwitchSize.MEDIUM}
 *         slot={<Shield size={18} />}
 *         name="profileVisibility"
 *         value="public"
 *         required={false}
 *       />
 * 
 *       <Switch
 *         id="analytics-tracking"
 *         checked={analyticsTracking}
 *         onChange={handleAnalyticsChange}
 *         label="Analytics Tracking"
 *         subtext="Help us improve by sharing usage data"
 *         size={SwitchSize.SMALL}
 *         disabled={false}
 *         error={false}
 *       />
 * 
 *       <Switch
 *         id="maintenance-mode"
 *         checked={isMaintenanceMode}
 *         onChange={setIsMaintenanceMode}
 *         label="Maintenance Mode"
 *         subtext="Temporarily disable public access"
 *         size={SwitchSize.MEDIUM}
 *         slot={<AlertTriangle size={18} color="#EF4444" />}
 *         error={isMaintenanceMode}
 *         disabled={!publicProfile}
 *       />
 *     </div>
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
 * @description A container component that groups multiple Switch components under a common label or theme. Perfect for organizing related settings and feature toggles.
 * @feature Groups multiple Switch components for better organization
 * @feature Supports common labels and disabled state propagation
 * @feature Multiple independent switches can be toggled simultaneously
 * @feature Managed state tracking for all grouped switches
 * @feature Layout and accessibility improvements for switch collections
 * @feature Controlled and uncontrolled group behavior
 * @example Basic Usage
 * ```tsx
 * import { SwitchGroup, Switch, SwitchSize } from "blend-v1";
 * 
 * <SwitchGroup label="Privacy Settings">
 *   <Switch 
 *     id="public-profile" 
 *     label="Public Profile" 
 *     size={SwitchSize.MEDIUM}
 *   />
 *   <Switch 
 *     id="show-email" 
 *     label="Show Email Address" 
 *   />
 * </SwitchGroup>
 * ```
 * @example Intermediate Usage with Group State
 * ```tsx
 * import { SwitchGroup, Switch, SwitchSize } from "blend-v1";
 * import { useState } from "react";
 * import { Bell, Mail } from "lucide-react";
 * 
 * function NotificationPreferences() {
 *   const [groupValues, setGroupValues] = useState(['email']);
 * 
 *   return (
 *     <SwitchGroup 
 *       label="Notification Preferences"
 *       name="notifications"
 *       value={groupValues}
 *       onChange={setGroupValues}
 *     >
 *       <Switch 
 *         id="email-notifications"
 *         label="Email Notifications" 
 *         value="email"
 *         slot={<Mail size={16} />}
 *         subtext="Receive updates via email"
 *         size={SwitchSize.MEDIUM}
 *       />
 *       <Switch 
 *         id="push-notifications"
 *         label="Push Notifications" 
 *         value="push"
 *         slot={<Bell size={16} />}
 *         subtext="Get instant mobile alerts"
 *       />
 *     </SwitchGroup>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { SwitchGroup, Switch, SwitchSize } from "blend-v1";
 * import { useState } from "react";
 * import { Settings, Shield, Zap, Users } from "lucide-react";
 * 
 * function FeatureManager() {
 *   const [enabledFeatures, setEnabledFeatures] = useState(['analytics', 'security']);
 *   const [isGroupDisabled, setIsGroupDisabled] = useState(false);
 * 
 *   const handleFeatureChange = (features: string[]) => {
 *     setEnabledFeatures(features);
 *     console.log('Enabled features:', features);
 *   };
 * 
 *   return (
 *     <div>
 *       <button 
 *         onClick={() => setIsGroupDisabled(!isGroupDisabled)}
 *         style={{ marginBottom: '16px' }}
 *       >
 *         {isGroupDisabled ? 'Enable' : 'Disable'} All Features
 *       </button>
 *       
 *       <SwitchGroup 
 *         id="feature-toggles"
 *         label="Advanced Features"
 *         name="features"
 *         value={enabledFeatures}
 *         defaultValue={['analytics']}
 *         onChange={handleFeatureChange}
 *         disabled={isGroupDisabled}
 *       >
 *         <Switch 
 *           id="analytics-feature"
 *           label="Analytics Tracking" 
 *           value="analytics"
 *           slot={<Zap size={18} />}
 *           subtext="Track user interactions and performance"
 *           size={SwitchSize.MEDIUM}
 *         />
 *         
 *         <Switch 
 *           id="security-feature"
 *           label="Enhanced Security" 
 *           value="security"
 *           slot={<Shield size={18} />}
 *           subtext="Enable advanced security features"
 *           size={SwitchSize.MEDIUM}
 *         />
 *         
 *         <Switch 
 *           id="collaboration-feature"
 *           label="Team Collaboration" 
 *           value="collaboration"
 *           slot={<Users size={18} />}
 *           subtext="Share and collaborate with team members"
 *           size={SwitchSize.SMALL}
 *         />
 *         
 *         <Switch 
 *           id="automation-feature"
 *           label="Workflow Automation" 
 *           value="automation"
 *           slot={<Settings size={18} />}
 *           subtext="Automate repetitive tasks and workflows"
 *         />
 *       </SwitchGroup>
 *     </div>
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
