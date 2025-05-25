import React, { JSX } from "react";
import { CSSObject, styled } from "styled-components";

// ——— Semantic Tag Support ———

export type SemanticTagType = keyof Pick<
  JSX.IntrinsicElements,
  | "div"
  | "span"
  | "section"
  | "footer"
  | "aside"
  | "main"
  | "article"
  | "header"
  | "nav"
>;

// ——— Spacing and Layout Types ———

type SpacingType = string | number;

interface StyledBlockProps {
  // Spacing
  padding?: SpacingType;
  paddingTop?: SpacingType;
  paddingRight?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingX?: SpacingType;
  paddingY?: SpacingType;

  margin?: SpacingType;
  marginTop?: SpacingType;
  marginRight?: SpacingType;
  marginBottom?: SpacingType;
  marginLeft?: SpacingType;
  marginX?: SpacingType;
  marginY?: SpacingType;

  // Layout
  display?: CSSObject["display"];
  width?: CSSObject["width"];
  height?: CSSObject["height"];
  minWidth?: CSSObject["minWidth"];
  maxWidth?: CSSObject["maxWidth"];
  minHeight?: CSSObject["minHeight"];
  maxHeight?: CSSObject["maxHeight"];
  overflow?: CSSObject["overflow"];

  // Flexbox
  flexDirection?: CSSObject["flexDirection"];
  flexWrap?: CSSObject["flexWrap"];
  justifyContent?: CSSObject["justifyContent"];
  alignItems?: CSSObject["alignItems"];
  alignContent?: CSSObject["alignContent"];
  alignSelf?: CSSObject["alignSelf"];
  flex?: CSSObject["flex"];
  flexGrow?: CSSObject["flexGrow"];
  flexShrink?: CSSObject["flexShrink"];
  flexBasis?: CSSObject["flexBasis"];
  gap?: CSSObject["gap"];
  rowGap?: CSSObject["rowGap"];
  columnGap?: CSSObject["columnGap"];

  // Positioning
  position?: CSSObject["position"];
  top?: CSSObject["top"];
  right?: CSSObject["right"];
  bottom?: CSSObject["bottom"];
  left?: CSSObject["left"];
  zIndex?: number;

  // Visuals
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string | number;
  boxShadow?: string;
  opacity?: number;
}

// ——— Component Props ———

interface BlockProps extends StyledBlockProps {
  as?: SemanticTagType;
  children: React.ReactNode;
}

// ——— Utility: Expand Shorthands ———

const expandShorthand = (props: StyledBlockProps): CSSObject => {
  const styles: CSSObject = {};

  // Padding
  if (props.paddingX) {
    styles.paddingLeft = props.paddingX;
    styles.paddingRight = props.paddingX;
  }
  if (props.paddingY) {
    styles.paddingTop = props.paddingY;
    styles.paddingBottom = props.paddingY;
  }

  // Margin
  if (props.marginX) {
    styles.marginLeft = props.marginX;
    styles.marginRight = props.marginX;
  }
  if (props.marginY) {
    styles.marginTop = props.marginY;
    styles.marginBottom = props.marginY;
  }

  return styles;
};

// ——— Styled Component ———

const StyledBlock = styled.div<StyledBlockProps>((props): CSSObject => {
  return {
    // Spacing
    padding: props.padding,
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,

    margin: props.margin,
    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginBottom: props.marginBottom,
    marginLeft: props.marginLeft,

    // Layout
    display: props.display,
    width: props.width,
    height: props.height,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    overflow: props.overflow,

    // Flexbox
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    alignSelf: props.alignSelf,
    flex: props.flex,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    gap: props.gap,
    rowGap: props.rowGap,
    columnGap: props.columnGap,

    // Position
    position: props.position,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    zIndex: props.zIndex,

    // Visual
    backgroundColor: props.backgroundColor,
    color: props.color,
    border: props.border,
    borderRadius: props.borderRadius,
    boxShadow: props.boxShadow,
    opacity: props.opacity,

    // Shorthand expansion
    ...expandShorthand(props),
  };
});

// ——— Main Component ———

const Block = ({ children, as = "div", ...rest }: BlockProps) => {
  return (
    <StyledBlock as={as} {...rest}>
      {children}
    </StyledBlock>
  );
};

export default Block;
