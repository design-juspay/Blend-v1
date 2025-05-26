import { ReactNode } from "react";

export enum TagV2Variant {
  NO_FILL = "noFill",
  ATTENTIVE = "attentive",
  SUBTLE = "subtle",
}

export enum TagV2Color {
  NEUTRAL = "neutral",
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  PURPLE = "purple",
}

export enum TagV2Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum TagV2Shape {
  ROUNDED = "rounded",
  SQUARICAL = "squarical",
}

export type TagV2Props = {
  text: string;
  variant?: TagV2Variant;
  color?: TagV2Color;
  size?: TagV2Size;
  shape?: TagV2Shape;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  onClick?: () => void;
  splitTagPosition?: "left" | "right";
};
