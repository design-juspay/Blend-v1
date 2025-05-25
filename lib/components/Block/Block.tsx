import React, { JSX } from "react";
import styled, { css, CSSObject } from "styled-components";

type SpacingValue = string | number;

interface StyledBlockProps {
  // Padding
  padding?: SpacingValue;
  paddingTop?: SpacingValue;
  paddingBottom?: SpacingValue;
  paddingLeft?: SpacingValue;
  paddingRight?: SpacingValue;
  paddingX?: SpacingValue;
  paddingY?: SpacingValue;

  // Margin
  margin?: SpacingValue;
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
  marginLeft?: SpacingValue;
  marginRight?: SpacingValue;
  marginX?: SpacingValue;
  marginY?: SpacingValue;

  // ✨ Future props like background, border, etc.
}

const blockedProps = [
  "padding",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingX",
  "paddingY",
  "margin",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginX",
  "marginY",
];

const shouldForwardProp = (prop: string) => !blockedProps.includes(prop);

const getStyles = (props: StyledBlockProps): CSSObject => {
  const styles: CSSObject = {};

  // Padding
  if (props.padding !== undefined) styles.padding = props.padding;
  if (props.paddingTop !== undefined) styles.paddingTop = props.paddingTop;
  if (props.paddingBottom !== undefined)
    styles.paddingBottom = props.paddingBottom;
  if (props.paddingLeft !== undefined) styles.paddingLeft = props.paddingLeft;
  if (props.paddingRight !== undefined)
    styles.paddingRight = props.paddingRight;
  if (props.paddingX !== undefined) {
    styles.paddingLeft = props.paddingX;
    styles.paddingRight = props.paddingX;
  }
  if (props.paddingY !== undefined) {
    styles.paddingTop = props.paddingY;
    styles.paddingBottom = props.paddingY;
  }

  // Margin
  if (props.margin !== undefined) styles.margin = props.margin;
  if (props.marginTop !== undefined) styles.marginTop = props.marginTop;
  if (props.marginBottom !== undefined)
    styles.marginBottom = props.marginBottom;
  if (props.marginLeft !== undefined) styles.marginLeft = props.marginLeft;
  if (props.marginRight !== undefined) styles.marginRight = props.marginRight;
  if (props.marginX !== undefined) {
    styles.marginLeft = props.marginX;
    styles.marginRight = props.marginX;
  }
  if (props.marginY !== undefined) {
    styles.marginTop = props.marginY;
    styles.marginBottom = props.marginY;
  }

  return styles;
};

// Only allow semantic tag types
type SemanticTagType = keyof Pick<
  JSX.IntrinsicElements,
  "div" | "section" | "article" | "header" | "footer" | "main" | "span" | "nav"
>;

const StyledBlock = styled.div.withConfig({
  shouldForwardProp,
})<StyledBlockProps>((props) => css(getStyles(props)));

export interface BlockProps
  extends StyledBlockProps,
    Omit<React.HTMLAttributes<HTMLElement>, "as"> {
  children?: React.ReactNode;
  as?: SemanticTagType;
}

const Block: React.FC<BlockProps> = ({ children, ...rest }) => {
  return <StyledBlock {...rest}>{children}</StyledBlock>;
};

export default Block;