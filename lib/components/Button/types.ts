export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success';
export type ButtonSubType = 'default' | 'iconOnly' | 'link' | 'plainIcon';
export type ButtonState = 'default' | 'hover' | 'active' | 'focussed' | 'disabled';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonType;
  subType?: ButtonSubType;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
}
