import React from "react";
import PrimitiveText, {
  PrimitiveTextProps,
} from "../Primitives/PrimitiveText/PrimitiveText";
import { JSX } from "react";
import { FOUNDATION_THEME } from "../../tokens";

export type SemanticTagType = keyof Pick<
  JSX.IntrinsicElements,
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "span"
  | "code"
  | "q"
  | "small"
  | "label"
>;

/**
 * @description A versatile text component that can render various semantic HTML tags
 * and apply typographic styles based on predefined variants or direct props.
 * It extends `PrimitiveTextProps` for low-level styling capabilities.
 * @feature Renders text with semantic HTML tags (h1-h5, p, span, etc.) via `as` prop or inferred from `variant`.
 * @feature Predefined typographic variants (body, display, heading, code) with different sizes.
 * @feature Allows overriding font size, weight, and color.
 * @feature Supports text truncation.
 * @example
 * ```tsx
 * import Text, { VariantType } from "./components/Text/Text"; // Assuming path
 *
 * <Text variant="heading.lg" as="h2" color="blue">
 *   Large Heading
 * </Text>
 *
 * <Text variant="body.md">
 *   This is a paragraph of body text.
 * </Text>
 *
 * <Text fontSize="14px" fontWeight="bold" truncate={true} style={{ maxWidth: '100px' }}>
 *   This is some very long text that will be truncated.
 * </Text>
 * ```
 */
export type TextProps = PrimitiveTextProps & {
  /**
   * @propCategory Required
   * @description The content to be rendered by the Text component.
   */
  children: React.ReactNode;
  /**
   * @propCategory Appearance
   * @description Predefined typographic variant to apply (e.g., "body.md", "heading.lg").
   * This determines default font size, line height, and semantic tag if `as` is not provided.
   */
  variant?: VariantType;
  /**
   * @propCategory Structure
   * @description The semantic HTML tag to render. If not provided, it's inferred from the `variant`.
   * Defaults to `p` if no variant or specific inference rule applies.
   */
  as?: SemanticTagType;
  /**
   * @propCategory Styling
   * @description Optional inline CSS styles to apply to the component.
   */
  style?: React.CSSProperties;
};

/**
 * @description Defines the available typographic variants for the Text component.
 * Format: `category.size` (e.g., "body.md", "heading.lg").
 */
export type VariantType =
  | "body.xs"
  | "body.sm"
  | "body.md"
  | "body.lg"
  | "display.sm"
  | "display.md"
  | "display.lg"
  | "display.xl"
  | "heading.sm"
  | "heading.md"
  | "heading.lg"
  | "heading.xl"
  | "heading.2xl"
  | "code.sm"
  | "code.md"
  | "code.lg";

const getFontGroup = (
  variant?: VariantType
): { fontSize: number; lineHeight: number } | null => {
  if (!variant) return null;
  const [type, size] = variant.split(".") as [
    keyof typeof FOUNDATION_THEME.font.size,
    keyof (typeof FOUNDATION_THEME.font.size)[keyof typeof FOUNDATION_THEME.font.size]
  ];

  return FOUNDATION_THEME.font.size[type]?.[size] || null;
};

const getSemanticTag = (
  variant?: VariantType,
  as?: SemanticTagType
): SemanticTagType => {
  if (as) return as;
  if (!variant) return "p";

  if (variant.startsWith("display")) return "h1";
  if (variant.startsWith("heading")) {
    const size = variant.split(".")[1];
    switch (size) {
      case "2xl":
        return "h1";
      case "xl":
        return "h2";
      case "lg":
        return "h3";
      case "md":
        return "h4";
      case "sm":
        return "h5";
      default:
        return "p";
    }
  }
  return "p";
};

const Text = ({
  children,
  variant,
  as,
  color,
  fontWeight,
  fontSize,
  truncate,
  style,
  ...rest
}: TextProps) => {
  const Tag = getSemanticTag(variant, as);

  // treat as PrimitiveText if variant is undefined
  if (variant === undefined) {
    return (
      <PrimitiveText
        as={Tag}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color ?? "inherit"}
        style={style}
      >
        {children}
      </PrimitiveText>
    );
  }

  const fontGroup = getFontGroup(variant);

  return (
    <PrimitiveText
      as={Tag}
      fontSize={fontGroup?.fontSize}
      fontWeight={fontWeight}
      color={color ?? "inherit"}
      truncate={truncate}
      style={style}
      {...rest}
    >
      {children}
    </PrimitiveText>
  );
};

export default Text;
