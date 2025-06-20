import React, { forwardRef, JSX } from "react";
import styled, { css, CSSObject } from "styled-components";

type StateStyles = {
  _hover?: StyledLinkProps;
  _focus?: StyledLinkProps;
  _active?: StyledLinkProps;
  _disabled?: StyledLinkProps;
  _visited?: StyledLinkProps;
};

type StyledLinkProps = StateStyles & {
  color?: CSSObject["color"];
  gap?: CSSObject["gap"];

  // Text
  fontSize?: CSSObject["fontSize"];
  fontWeight?: CSSObject["fontWeight"];
  lineHeight?: CSSObject["lineHeight"];
  letterSpacing?: CSSObject["letterSpacing"];
  textAlign?: CSSObject["textAlign"];
  textTransform?: CSSObject["textTransform"];
  textOverflow?: CSSObject["textOverflow"];
  textDecoration?: CSSObject["textDecoration"];

  // Spacing
  padding?: CSSObject["padding"];
  paddingX?: CSSObject["paddingX"];
  paddingY?: CSSObject["paddingY"];
  paddingTop?: CSSObject["paddingTop"];
  paddingBottom?: CSSObject["paddingBottom"];
  paddingLeft?: CSSObject["paddingLeft"];
  paddingRight?: CSSObject["paddingRight"];

  margin?: CSSObject["margin"];
  marginX?: CSSObject["marginX"];
  marginY?: CSSObject["marginY"];
  marginTop?: CSSObject["marginTop"];
  marginBottom?: CSSObject["marginBottom"];
  marginLeft?: CSSObject["marginLeft"];
  marginRight?: CSSObject["marginRight"];

  // Layout
  display?: CSSObject["display"];
  width?: CSSObject["width"];
  height?: CSSObject["height"];
  cursor?: CSSObject["cursor"];
  whiteSpace?: CSSObject["whiteSpace"];
  transition?: CSSObject["transition"];

  // Decoration
  backgroundColor?: CSSObject["backgroundColor"];
  border?: CSSObject["border"];
  borderRadius?: CSSObject["borderRadius"];

  // Effects
  opacity?: CSSObject["opacity"];
};

const blockedProps = [
  // Pseudo
  "_hover",
  "_focus",
  "_active",
  "_disabled",
  "_visited",

  // Text
  "color",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "textTransform",
  "textOverflow",
  "textDecoration",

  // Spacing
  "padding",
  "paddingX",
  "paddingY",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "margin",
  "marginX",
  "marginY",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",

  // Layout
  "display",
  "width",
  "height",
  "cursor",
  "whiteSpace",
  "transition",

  // Decoration
  "backgroundColor",
  "border",
  "borderRadius",

  // Effects
  "opacity",
];

const shouldForwardProp = (prop: string) => !blockedProps.includes(prop);

const getStyles = (props: StyledLinkProps): CSSObject => {
  const styles: CSSObject = {};

  if (props.color !== undefined) styles.color = props.color;
  if (props.textDecoration !== undefined)
    styles.textDecoration = props.textDecoration;

  if (props.gap !== undefined) styles.gap = props.gap;

  // Font
  if (props.fontSize !== undefined) styles.fontSize = props.fontSize;
  if (props.fontWeight !== undefined) styles.fontWeight = props.fontWeight;
  if (props.lineHeight !== undefined) styles.lineHeight = props.lineHeight;
  if (props.letterSpacing !== undefined)
    styles.letterSpacing = props.letterSpacing;
  if (props.textAlign !== undefined) styles.textAlign = props.textAlign;
  if (props.textTransform !== undefined)
    styles.textTransform = props.textTransform;
  if (props.textOverflow !== undefined)
    styles.textOverflow = props.textOverflow;

  // Spacing
  if (props.padding !== undefined) styles.padding = props.padding;
  if (props.paddingX !== undefined) {
    styles.paddingLeft = props.paddingLeft;
    styles.paddingRight = props.paddingRight;
  }
  if (props.paddingY !== undefined) {
    styles.paddingTop = props.paddingTop;
    styles.paddingBottom = props.paddingBottom;
  }
  if (props.paddingTop !== undefined) styles.paddingTop = props.paddingTop;
  if (props.paddingBottom !== undefined)
    styles.paddingBottom = props.paddingBottom;
  if (props.paddingLeft !== undefined) styles.paddingLeft = props.paddingLeft;
  if (props.paddingRight !== undefined)
    styles.paddingRight = props.paddingRight;

  if (props.margin !== undefined) styles.margin = props.margin;
  if (props.marginX !== undefined) {
    styles.marginLeft = props.marginLeft;
    styles.marginRight = props.marginRight;
  }
  if (props.marginY !== undefined) {
    styles.marginTop = props.marginTop;
    styles.marginBottom = props.marginBottom;
  }
  if (props.marginTop !== undefined) styles.marginTop = props.marginTop;
  if (props.marginBottom !== undefined)
    styles.marginBottom = props.marginBottom;
  if (props.marginLeft !== undefined) styles.marginLeft = props.marginLeft;
  if (props.marginRight !== undefined) styles.marginRight = props.marginRight;

  if (props.display !== undefined) styles.display = props.display;
  if (props.width !== undefined) styles.width = props.width;
  if (props.height !== undefined) styles.height = props.height;
  if (props.cursor !== undefined) styles.cursor = props.cursor;
  if (props.whiteSpace !== undefined) styles.whiteSpace = props.whiteSpace;
  if (props.transition !== undefined) styles.transition = props.transition;

  if (props.backgroundColor !== undefined)
    styles.backgroundColor = props.backgroundColor;
  if (props.border !== undefined) styles.border = props.border;
  if (props.borderRadius !== undefined)
    styles.borderRadius = props.borderRadius;

  if (props.opacity !== undefined) styles.opacity = props.opacity;

  return styles;
};

const stateToSelector: Record<keyof StateStyles, string> = {
  _hover: "&:hover",
  _focus: "&:focus",
  _active: "&:active",
  _disabled: "&:disabled",
  _visited: "&:visited",
};

const StyledLink = styled.a.withConfig({ shouldForwardProp })<StyledLinkProps>(
  (props) => {
    const base = getStyles(props);

    const states = Object.entries(stateToSelector).reduce(
      (acc, [key, selector]) => {
        const stateProps = props[key as keyof StateStyles];
        if (stateProps) {
          acc[selector] = getStyles(stateProps);
        }
        return acc;
      },
      {} as CSSObject
    );

    return css({ ...base, ...states });
  }
);

type SemanticLinkTag = keyof Pick<JSX.IntrinsicElements, "a" | "span" | "div">;

export type PrimitiveLinkProps = StyledLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "as"> & {
    as?: SemanticLinkTag;
    children?: React.ReactNode;
  /**
   * @propCategory Refs
   * @description Forwarded ref to the underlying anchor element.
   */
  ref?: React.Ref<HTMLAnchorElement>;
};

/**
 * @description A foundational link component that provides extensive styling capabilities through props.
 * It can be rendered as an `<a>`, `<span>`, or `<div>` tag.
 * This component is a core building block for creating custom link styles and behaviors.
 * All styling props are optional and correspond to CSS properties.
 * It also supports pseudo-class styling (`_hover`, `_focus`, etc.).
 * @feature Highly customizable styling via direct CSS property props.
 * @feature Support for pseudo-class styles (`_hover`, `_focus`, `_active`, `_disabled`, `_visited`).
 * @feature Can be rendered as `a`, `span`, or `div` using the `as` prop.
 * @feature Forwards standard HTML anchor attributes.
 * @example
 * ```tsx
 * import PrimitiveLink from "./components/Primitives/PrimitiveLink"; // Assuming path
 *
 * <PrimitiveLink
 *   href="https://example.com"
 *   target="_blank"
 *   color="blue"
 *   textDecoration="none"
 *   _hover={{
 *     color: "darkblue",
 *     textDecoration: "underline",
 *   }}
 *   fontSize="16px"
 *   padding="8px 12px"
 * >
 *   Visit Example.com
 * </PrimitiveLink>
 *
 * <PrimitiveLink
 *   as="span"
 *   onClick={() => console.log("Span clicked")}
 *   color="purple"
 *   cursor="pointer"
 *   _hover={{ color: "darkorchid" }}
 * >
 *   Clickable Span
 * </PrimitiveLink>
 * ```
 */
const PrimitiveLink = forwardRef<HTMLAnchorElement, PrimitiveLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledLink ref={ref} {...rest}>
        {children}
      </StyledLink>
    );
  }
);

PrimitiveLink.displayName = "PrimitiveLink";

export default PrimitiveLink;
