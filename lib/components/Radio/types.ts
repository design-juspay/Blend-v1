import { ReactNode } from 'react';

export enum RadioSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export type RadioProps = {
  id?: string;
  value?: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  size?: RadioSize;
  children?: ReactNode;
  subtext?: string;
  rightSlot?: ReactNode;
  className?: string;
  name?: string;
  accessibilityLabel?: string;
};

export type RadioGroupProps = {
  id?: string;
  label?: string;
  name: string;
  defaultValue?: string;
  value?: string;
  children: ReactNode;
  onChange?: (value: string) => void;
  className?: string;
  isDisabled?: boolean;
};
