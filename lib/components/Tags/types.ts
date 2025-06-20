import { ReactNode } from "react";

/**
 * @propCategory Enum
 * @description Defines the visual variant of the Tag, affecting its fill and intensity.
 */
export enum TagVariant {
  /** Tag with no background fill, only border and text color. */
  NO_FILL = "noFill",
  /** Tag with a more prominent, attentive styling. */
  ATTENTIVE = "attentive",
  /** Tag with a subtle background color. */
  SUBTLE = "subtle",
  // Note: The component file `Tags.tsx` also implements a "filled" variant logic,
  // which is not explicitly in this enum but is derived from `variant` and `color`.
}

/**
 * @propCategory Enum
 * @description Defines the color scheme of the Tag.
 */
export enum TagColor {
  /** Neutral color scheme. */
  NEUTRAL = "neutral",
  /** Primary color scheme. */
  PRIMARY = "primary",
  /** Success color scheme (e.g., green). */
  SUCCESS = "success",
  /** Error color scheme (e.g., red). */
  ERROR = "error",
  /** Warning color scheme (e.g., orange/yellow). */
  WARNING = "warning",
  /** Purple color scheme. */
  PURPLE = "purple",
}

/**
 * @propCategory Enum
 * @description Defines the size of the Tag.
 */
export enum TagSize {
  /** Extra small size. */
  XS = "xs",
  /** Small size. */
  SM = "sm",
  /** Medium size (default). */
  MD = "md",
  /** Large size. */
  LG = "lg",
}

/**
 * @propCategory Enum
 * @description Defines the shape of the Tag's corners.
 */
export enum TagShape {
  /** Tag with rounded corners. */
  ROUNDED = "rounded",
  /** Tag with more squared-off corners. */
  SQUARICAL = "squarical",
}

// Component-level JSDoc (description, features, example) is now in Tags.tsx
export type TagProps = {
  /**
   * @propCategory Required
   * @description The text content to be displayed within the tag.
   */
  text: string;
  /**
   * @propCategory Appearance
   * @description The visual variant of the tag.
   * A "filled" variant is achieved if `variant` is not `NO_FILL`.
   * @default TagVariant.SUBTLE (or derived "filled" if color is present and not NO_FILL)
   */
  variant?: TagVariant;
  /**
   * @propCategory Appearance
   * @description The color scheme of the tag.
   * @default TagColor.NEUTRAL
   */
  color?: TagColor;
  /**
   * @propCategory Appearance
   * @description The size of the tag.
   * @default TagSize.MD
   */
  size?: TagSize;
  /**
   * @propCategory Appearance
   * @description The shape of the tag's corners.
   * @default TagShape.ROUNDED
   */
  shape?: TagShape;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the left of the tag text (e.g., an icon).
   */
  leftSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the right of the tag text (e.g., a close icon or count).
   */
  rightSlot?: ReactNode;
  /**
   * @propCategory Event Handler
   * @description Optional callback function invoked when the tag is clicked.
   */
  onClick?: () => void;
  /**
   * @propCategory Internal Use
   * @description Internal prop used by `SplitTag` to adjust border radius. Not for direct use.
   */
  splitTagPosition?: "left" | "right";
};
