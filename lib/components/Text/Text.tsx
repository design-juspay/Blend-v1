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
 * @example Basic Usage with Variants
 * ```tsx
 * import { Text, VariantType } from "blend-v1";
 *
 * <Text variant="heading.lg" as="h2">
 *   Large Heading
 * </Text>
 *
 * <Text variant="body.md">
 *   This is a paragraph of body text.
 * </Text>
 *
 * <Text variant="code.md">
 *   const greeting = "Hello, World!";
 * </Text>
 * ```
 * @example Intermediate Usage with Colors and Styling
 * ```tsx
 * import { Text, VariantType } from "blend-v1";
 *
 * <Text variant="display.xl" color="#1f2937" fontWeight="bold">
 *   Hero Title
 * </Text>
 *
 * <Text variant="body.lg" color="#6b7280">
 *   Subtitle with custom color
 * </Text>
 *
 * <Text variant="body.sm" color="#ef4444" fontWeight="medium">
 *   Error message text
 * </Text>
 *
 * <Text variant="heading.md" as="h3" style={{ textAlign: 'center' }}>
 *   Centered Heading
 * </Text>
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { Text, VariantType, SemanticTagType } from "blend-v1";
 *
 * // Display hierarchy examples
 * <Text variant="display.xl" as="h1" color="#111827" fontWeight="extrabold">
 *   Main Page Title
 * </Text>
 *
 * <Text variant="display.lg" as="h2" color="#374151">
 *   Section Title
 * </Text>
 *
 * // Heading hierarchy examples
 * <Text variant="heading.2xl" as="h1" fontWeight="bold">
 *   Article Title
 * </Text>
 *
 * <Text variant="heading.xl" as="h2" color="#1f2937">
 *   Article Subtitle
 * </Text>
 *
 * <Text variant="heading.lg" as="h3" fontWeight="semibold">
 *   Section Header
 * </Text>
 *
 * // Body text examples
 * <Text variant="body.lg" color="#374151">
 *   Large body text for important content or lead paragraphs.
 * </Text>
 *
 * <Text variant="body.md">
 *   Standard body text for most content and readable paragraphs.
 * </Text>
 *
 * <Text variant="body.sm" color="#6b7280">
 *   Small body text for captions, footnotes, or secondary information.
 * </Text>
 *
 * <Text variant="body.xs" color="#9ca3af">
 *   Extra small text for labels, metadata, or fine print.
 * </Text>
 *
 * // Code examples
 * <Text variant="code.lg" as="code" style={{ backgroundColor: '#f3f4f6', padding: '8px' }}>
 *   npm install blend-v1
 * </Text>
 *
 * <Text variant="code.md" as="code">
 *   const Component = () => &lt;div&gt;Hello&lt;/div&gt;;
 * </Text>
 *
 * // Truncation example
 * <Text 
 *   variant="body.md" 
 *   truncate={true} 
 *   style={{ maxWidth: '200px', display: 'block' }}
 * >
 *   This is a very long piece of text that will be truncated with ellipsis when it exceeds the maximum width.
 * </Text>
 *
 * // Custom styling without variant
 * <Text 
 *   as="span" 
 *   fontSize={18} 
 *   fontWeight="bold" 
 *   color="#059669"
 *   style={{ textDecoration: 'underline' }}
 * >
 *   Custom styled text without predefined variant
 * </Text>
 *
 * // Label example
 * <Text variant="body.sm" as="label" fontWeight="medium" color="#374151">
 *   Form Field Label
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
