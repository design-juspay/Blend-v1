import type { ReactNode } from "react";

export enum TagVariant {
  NO_FILL = "noFill",
  ATTENTIVE = "attentive",
  SUBTLE = "subtle",
}

export enum TagStatus {
  NEUTRAL = "neutral",
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  PURPLE = "purple",
}

export enum TagSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum TagStyle {
  ROUNDED = "rounded",
  SQUARICAL = "squarical",
}
export interface TagBaseProps {
  text: string;
  variant?: TagVariant;
  status?: TagStatus;
  size?: TagSize;
  style?: TagStyle;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  className?: string;
  onClick?: () => void;
  testId?: string;
}

export interface TagProps extends TagBaseProps {
  children?: ReactNode;
}

export interface SplitTagProps extends TagBaseProps {
  secondaryText: string;
  onSecondaryClick?: () => void;
  secondaryVariant?: TagVariant;
  secondaryStatus?: TagStatus;
}
