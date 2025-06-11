import { ReactNode } from 'react';

export enum SwitchSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export interface SwitchProps {
  /** Unique identifier for the switch */
  id?: string;
  /** The controlled checked state */
  checked?: boolean;
  /** The default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when the switch state changes */
  onChange?: (checked: boolean) => void;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Whether the switch is required */
  required?: boolean;
  /** Whether the switch has an error state */
  error?: boolean;
  /** The size of the switch */
  size?: SwitchSize;
  /** The label text for the switch */
  label?: ReactNode;
  /** Additional descriptive text below the switch */
  subtext?: ReactNode;
  /** Optional slot for additional content */
  slot?: ReactNode;
  /** The name attribute for form submission */
  name?: string;
  /** The value attribute for form submission */
  value?: string;
}

export type SwitchGroupProps = {
  id?: string;
  label?: string;
  name?: string;
  children: ReactNode;
  disabled?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
};
