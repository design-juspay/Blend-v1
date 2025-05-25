import React, { JSX } from "react";
import styled, { css, CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../../tokens";

// --------------------
// Types
// --------------------

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

// @TODO can we add additional semantic tags? like figcaption, caption, etc.
export type SemanticTagType = keyof Pick<
  JSX.IntrinsicElements,
  "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "code" | "q"
>;

export interface PrimitiveTextProps {
  variant?: VariantType;
  weight?: keyof typeof FOUNDATION_THEME.font.weight;
  color?: string;
  textAlign?: CSSObject["textAlign"];
  letterSpacing?: keyof typeof FOUNDATION_THEME.font.letterSpacing;
  fontFamily?: keyof typeof FOUNDATION_THEME.font.family;
  opacity?: keyof typeof FOUNDATION_THEME.opacity;
  margin?: CSSObject["margin"];
  marginX?: string | number;
  marginY?: string | number;
  padding?: CSSObject["padding"];
  paddingX?: string | number;
  paddingY?: string | number;
}

export interface TextProps
  extends PrimitiveTextProps,
    Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  children: React.ReactNode;
  as?: SemanticTagType;
}

// --------------------
// Utility Functions
// --------------------

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

// --------------------
// Styled Component
// --------------------

const blockedProps = [
  "variant",
  "weight",
  "color",
  "textAlign",
  "letterSpacing",
  "fontFamily",
  "opacity",
  "margin",
  "marginX",
  "marginY",
  "padding",
  "paddingX",
  "paddingY",
];

const shouldForwardProp = (prop: string) => !blockedProps.includes(prop);

const getStyles = (props: PrimitiveTextProps): CSSObject => {
  const {
    variant,
    weight = 400,
    color = "black",
    fontFamily = "body",
    textAlign = "left",
    letterSpacing = "normal",
    opacity = 100,
  } = props;

  const fontGroup = getFontGroup(variant);

  const styles: CSSObject = {
    color,
    fontFamily: FOUNDATION_THEME.font.family[fontFamily],
    fontSize: fontGroup?.fontSize ?? FOUNDATION_THEME.font.size.base,
    lineHeight: `${fontGroup?.lineHeight}px`,
    fontWeight: FOUNDATION_THEME.font.weight[weight],
    letterSpacing: FOUNDATION_THEME.font.letterSpacing[letterSpacing],
    textAlign,
    opacity: FOUNDATION_THEME.opacity[opacity],
    margin: 0,
  };

  // Spacing
  if (props.margin) styles.margin = props.margin;
  if (props.marginX) {
    styles.marginLeft = props.marginX;
    styles.marginRight = props.marginX;
  }
  if (props.marginY) {
    styles.marginTop = props.marginY;
    styles.marginBottom = props.marginY;
  }
  if (props.padding) styles.padding = props.padding;
  if (props.paddingX) {
    styles.paddingLeft = props.paddingX;
    styles.paddingRight = props.paddingX;
  }
  if (props.paddingY) {
    styles.paddingTop = props.paddingY;
    styles.paddingBottom = props.paddingY;
  }

  return styles;
};

const PrimitiveText = styled.p.withConfig({
  shouldForwardProp,
})<PrimitiveTextProps>((props) => css(getStyles(props)));

// --------------------
// Component
// --------------------

/**
 * Text Component
 * @description
 * The Text component is a primitive component that renders a styled paragraph, heading, or code element to render text.
 * It is used to display text in a consistent manner across the application.
 *
 * @param {React.ReactNode} children - The content to display inside the text component.
 * @param {SemanticTagType} as - The semantic tag to use for the text component. "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "div" | "code" | "q"
 * @param {VariantType} variant - The variant to use for the text component.
 * @param {PrimitiveTextProps} rest - The rest of the props to pass to the text component.
 *
 */

const Text: React.FC<TextProps> = ({ children, as, variant, ...rest }) => {
  const Tag = getSemanticTag(variant, as);

  return (
    <PrimitiveText as={Tag} variant={variant} {...rest}>
      {children}
    </PrimitiveText>
  );
};

export default Text;
