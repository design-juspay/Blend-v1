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
 * @description A single radio button control that allows users to select one option from a mutually exclusive set. Typically used within RadioGroup for selection scenarios.
 * @feature Single selection behavior within radio groups
 * @feature Two size variants: small and medium
 * @feature Optional labels, subtext, and custom slot content
 * @feature Disabled and error states with proper visual feedback
 * @feature Controlled and uncontrolled behavior support
 * @feature Accessibility compliance with ARIA attributes
 * @example Basic Usage
 * ```tsx
 * import { Radio, RadioSize } from "blend-v1";
 * 
 * <Radio
 *   value="credit-card"
 *   size={RadioSize.MEDIUM}
 *   name="paymentMethod"
 * >
 *   Credit Card
 * </Radio>
 * ```
 * @example Intermediate Usage with Slots
 * ```tsx
 * import { Radio, RadioSize } from "blend-v1";
 * import { CreditCard } from "lucide-react";
 * 
 * <Radio
 *   id="credit-card"
 *   value="credit-card"
 *   name="paymentMethod"
 *   size={RadioSize.MEDIUM}
 *   defaultChecked={true}
 *   slot={<CreditCard size={18} />}
 *   subtext="Visa, Mastercard, American Express"
 * >
 *   Credit Card
 * </Radio>
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { Radio, RadioSize } from "blend-v1";
 * import { CreditCard, AlertCircle } from "lucide-react";
 * 
 * <Radio
 *   id="premium-plan"
 *   value="premium"
 *   name="subscriptionPlan"
 *   size={RadioSize.MEDIUM}
 *   slot={<CreditCard size={20} />}
 *   subtext="$29.99/month - All features included"
 *   disabled={false}
 *   error={false}
 *   required={true}
 *   onChange={(checked) => console.log('Radio checked:', checked)}
 * >
 *   Premium Plan
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
 * @description A wrapper component that groups multiple Radio buttons, ensuring only one can be selected at a time. Manages state and accessibility for mutually exclusive selections.
 * @feature Groups Radio components for single selection behavior
 * @feature Automatic name attribute management for accessibility
 * @feature Optional group labels for better organization
 * @feature Controlled and uncontrolled state management
 * @feature Keyboard navigation and screen reader support
 * @feature Disabled state propagation to all child radios
 * @example Basic Usage
 * ```tsx
 * import { RadioGroup, Radio, RadioSize } from "blend-v1";
 * 
 * <RadioGroup 
 *   name="paymentMethod"
 *   defaultValue="credit-card"
 * >
 *   <Radio value="credit-card" size={RadioSize.MEDIUM}>
 *     Credit Card
 *   </Radio>
 *   <Radio value="paypal">
 *     PayPal
 *   </Radio>
 * </RadioGroup>
 * ```
 * @example Intermediate Usage with Labels
 * ```tsx
 * import { RadioGroup, Radio, RadioSize } from "blend-v1";
 * import { CreditCard, Smartphone } from "lucide-react";
 * 
 * <RadioGroup 
 *   label="Preferred Payment Method"
 *   name="paymentPreference"
 *   defaultValue="card"
 * >
 *   <Radio 
 *     value="card" 
 *     size={RadioSize.MEDIUM}
 *     slot={<CreditCard size={18} />}
 *     subtext="Visa, Mastercard, American Express"
 *   >
 *     Credit/Debit Card
 *   </Radio>
 *   <Radio 
 *     value="mobile" 
 *     slot={<Smartphone size={18} />}
 *     subtext="Apple Pay, Google Pay, Samsung Pay"
 *   >
 *     Mobile Payment
 *   </Radio>
 * </RadioGroup>
 * ```
 * @example Advanced Usage with Controlled State
 * ```tsx
 * import { RadioGroup, Radio, RadioSize } from "blend-v1";
 * import { useState } from "react";
 * import { Crown, Star, Zap } from "lucide-react";
 * 
 * function SubscriptionSelector() {
 *   const [selectedPlan, setSelectedPlan] = useState("basic");
 *   const [isDisabled, setIsDisabled] = useState(false);
 * 
 *   const handlePlanChange = (value: string) => {
 *     setSelectedPlan(value);
 *     console.log('Plan selected:', value);
 *   };
 * 
 *   return (
 *     <div>
 *       <RadioGroup 
 *         id="subscription-plans"
 *         label="Choose Your Plan"
 *         name="subscriptionTier"
 *         value={selectedPlan}
 *         onChange={handlePlanChange}
 *         disabled={isDisabled}
 *       >
 *         <Radio 
 *           value="basic" 
 *           size={RadioSize.MEDIUM}
 *           slot={<Star size={18} />}
 *           subtext="$9.99/month - Essential features"
 *         >
 *           Basic Plan
 *         </Radio>
 *         <Radio 
 *           value="pro" 
 *           slot={<Zap size={18} />}
 *           subtext="$19.99/month - Advanced features"
 *         >
 *           Pro Plan
 *         </Radio>
 *         <Radio 
 *           value="enterprise" 
 *           slot={<Crown size={18} />}
 *           subtext="$49.99/month - All features + support"
 *         >
 *           Enterprise Plan
 *         </Radio>
 *       </RadioGroup>
 *       
 *       <button 
 *         onClick={() => setIsDisabled(!isDisabled)}
 *         style={{ marginTop: '16px' }}
 *       >
 *         {isDisabled ? 'Enable' : 'Disable'} Selection
 *       </button>
 *     </div>
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
