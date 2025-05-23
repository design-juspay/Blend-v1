import type { ReactNode, MouseEventHandler } from "react";

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

export enum TagShape {
  ROUNDED = "rounded",
  SQUARICAL = "squarical",
}

export interface TagBaseProps {
  text: string;
  variant?: TagVariant;
  status?: TagStatus;
  size?: TagSize;
  shape?: TagShape;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  testId?: string;
}

export interface TagProps extends TagBaseProps {
  children?: ReactNode;
}
