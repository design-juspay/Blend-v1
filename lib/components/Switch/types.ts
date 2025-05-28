import { ReactNode } from 'react';

export enum SwitchSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export type SwitchProps = {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  size?: SwitchSize;
  onChange?: (isChecked: boolean) => void;
  value?: string;
  children?: string;
  subtext?: string;
  slot?: ReactNode;
  name?: string;
};

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
