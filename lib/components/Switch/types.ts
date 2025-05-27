import { ReactNode } from 'react';

export enum SwitchSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export type SwitchProps = {
  id?: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  size?: SwitchSize;
  onChange?: (isChecked: boolean) => void;
  value?: string;
  label?: string;
  subtext?: string;
  accessibilityLabel?: string;
  rightSlot?: ReactNode;
  className?: string;
  name?: string;
};

export type SwitchGroupProps = {
  id?: string;
  label?: string;
  name?: string;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
};
