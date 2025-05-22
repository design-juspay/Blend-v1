import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Tag variant types
 */
export enum TagVariant {
  NO_FILL = "noFill",
  ATTENTIVE = "attentive",
  SUBTLE = "subtle",
}

/**
 * Tag status types
 */
export enum TagStatus {
  NEUTRAL = "neutral",
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  PURPLE = "purple",
}

/**
 * Tag size options
 */
export enum TagSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

/**
 * Tag style options
 */
export enum TagStyle {
  ROUNDED = "rounded",
  SQUARICAL = "squarical",
}

/**
 * Base Tag props interface
 */
export interface TagBaseProps {
  /** Tag text content */
  text: string;
  /** Tag variant style */
  variant?: TagVariant;
  /** Tag status/color */
  status?: TagStatus;
  /** Tag size */
  size?: TagSize;
  /** Tag style (rounded or squarical) */
  style?: TagStyle;
  /** Optional leading icon */
  leadingIcon?: LucideIcon;
  /** Optional trailing icon */
  trailingIcon?: LucideIcon;
  /** Additional class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Test ID for testing */
  testId?: string;
}

/**
 * Tag component props
 */
export interface TagProps extends TagBaseProps {
  /** Tag children */
  children?: ReactNode;
}

/**
 * SplitTag component props
 */
export interface SplitTagProps extends TagBaseProps {
  /** Second section text content */
  secondaryText: string;
  /** Click handler for the second section */
  onSecondaryClick?: () => void;
  /** Optional variant style for the secondary section */
  secondaryVariant?: TagVariant;
  /** Optional status/color for the secondary section */
  secondaryStatus?: TagStatus;
}
