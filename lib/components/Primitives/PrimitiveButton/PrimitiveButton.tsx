import React from "react";
import styled, { css, CSSObject } from "styled-components";

type StateStyles = {
  _hover?: PrimitiveButtonProps;
  _focus?: PrimitiveButtonProps;
  _active?: PrimitiveButtonProps;
  _disabled?: PrimitiveButtonProps;
  _visited?: PrimitiveButtonProps;
};

type PrimitiveButtonProps = StateStyles & {
  // Spacing
  padding?: CSSObject["padding"];
  paddingX?: CSSObject["padding"];
  paddingY?: CSSObject["padding"];
  margin?: CSSObject["margin"];
  marginX?: CSSObject["margin"];
  marginY?: CSSObject["margin"];

  // Layout
  display?: CSSObject["display"];
  justifyContent?: CSSObject["justifyContent"];
  alignItems?: CSSObject["alignItems"];
  gap?: CSSObject["gap"];
  contentCentered?: boolean;

  // Sizing
  width?: CSSObject["width"];
  height?: CSSObject["height"];
  size?: CSSObject["width"] | CSSObject["height"]; // utility prop to set both width and height
  minWidth?: CSSObject["minWidth"];
  maxWidth?: CSSObject["maxWidth"];
  minHeight?: CSSObject["minHeight"];
  maxHeight?: CSSObject["maxHeight"];

  // Flex
  flexGrow?: CSSObject["flexGrow"];
  flexShrink?: CSSObject["flexShrink"];
  flexBasis?: CSSObject["flexBasis"];

  // Positioning
  position?: CSSObject["position"];
  top?: CSSObject["top"];
  right?: CSSObject["right"];
  bottom?: CSSObject["bottom"];
  left?: CSSObject["left"];
  zIndex?: CSSObject["zIndex"];

  // Visual
  backgroundColor?: CSSObject["backgroundColor"];
  color?: CSSObject["color"];
  border?: CSSObject["border"];
  borderTop?: CSSObject["borderTop"];
  borderRight?: CSSObject["borderRight"];
  borderBottom?: CSSObject["borderBottom"];
  borderLeft?: CSSObject["borderLeft"];
  borderRadius?: CSSObject["borderRadius"];
  boxShadow?: CSSObject["boxShadow"];
  textAlign?: CSSObject["textAlign"];
  whiteSpace?: CSSObject["whiteSpace"];
  overflow?: CSSObject["overflow"];
  overflowX?: CSSObject["overflowX"];
  overflowY?: CSSObject["overflowY"];
  cursor?: CSSObject["cursor"];

  // Outline
  outline?: CSSObject["outline"];
  outlineOffset?: CSSObject["outlineOffset"];
  outlineStyle?: CSSObject["outlineStyle"];
  outlineWidth?: CSSObject["outlineWidth"];
  outlineColor?: CSSObject["outlineColor"];

  // State
  disabled?: boolean;
};

const blockedProps = [
  "padding",
  "paddingX",
  "paddingY",
  "margin",
  "marginX",
  "marginY",
  "display",
  "justifyContent",
  "alignItems",
  "gap",
  "contentCentered",
  "width",
  "height",
  "size",
  "minWidth",
  "maxWidth",
  "minHeight",
  "maxHeight",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
  "backgroundColor",
  "color",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderRadius",
  "boxShadow",
  "textAlign",
  "whiteSpace",
  "overflow",
  "overflowX",
  "overflowY",
  "cursor",
  "outline",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "outlineColor",
  "variant",
  "disabled",
];

const shouldForwardProp = (prop: string) => !blockedProps.includes(prop);

const getStyles = (props: PrimitiveButtonProps): CSSObject => {
  const styles: CSSObject = {
    appearance: "none",
    outline: "none",
    border: "none",
    font: "inherit",
    cursor: props.disabled ? "not-allowed" : props.cursor ?? "pointer",
    opacity: props.disabled ? 0.6 : 1,
  };

  // Layout
  if (props.contentCentered) {
    styles.display = props.display ?? "flex";
    styles.justifyContent = props.justifyContent ?? "center";
    styles.alignItems = props.alignItems ?? "center";
  } else {
    if (props.display !== undefined) styles.display = props.display;
    if (props.justifyContent !== undefined)
      styles.justifyContent = props.justifyContent;
    if (props.alignItems !== undefined) styles.alignItems = props.alignItems;
  }

  if (props.gap !== undefined) styles.gap = props.gap;

  // Spacing
  if (props.padding !== undefined) styles.padding = props.padding;
  if (props.paddingX !== undefined) {
    styles.paddingLeft = props.paddingX;
    styles.paddingRight = props.paddingX;
  }
  if (props.paddingY !== undefined) {
    styles.paddingTop = props.paddingY;
    styles.paddingBottom = props.paddingY;
  }
  if (props.margin !== undefined) styles.margin = props.margin;
  if (props.marginX !== undefined) {
    styles.marginLeft = props.marginX;
    styles.marginRight = props.marginX;
  }
  if (props.marginY !== undefined) {
    styles.marginTop = props.marginY;
    styles.marginBottom = props.marginY;
  }

  // Sizing
  if (props.size !== undefined) {
    styles.width = props.size;
    styles.height = props.size;
  } else {
    styles.width = props.width ?? "fit-content";
    if (props.height !== undefined) styles.height = props.height;
  }

  if (props.minWidth !== undefined) styles.minWidth = props.minWidth;
  if (props.maxWidth !== undefined) styles.maxWidth = props.maxWidth;
  if (props.minHeight !== undefined) styles.minHeight = props.minHeight;
  if (props.maxHeight !== undefined) styles.maxHeight = props.maxHeight;

  // Flex
  if (props.flexGrow !== undefined) styles.flexGrow = props.flexGrow;
  if (props.flexShrink !== undefined) styles.flexShrink = props.flexShrink;
  if (props.flexBasis !== undefined) styles.flexBasis = props.flexBasis;

  // Position
  if (props.position !== undefined) styles.position = props.position;
  if (props.top !== undefined) styles.top = props.top;
  if (props.right !== undefined) styles.right = props.right;
  if (props.bottom !== undefined) styles.bottom = props.bottom;
  if (props.left !== undefined) styles.left = props.left;
  if (props.zIndex !== undefined) styles.zIndex = props.zIndex;

  // Visual
  if (props.backgroundColor !== undefined)
    styles.backgroundColor = props.backgroundColor;
  if (props.color !== undefined) styles.color = props.color;
  if (props.border !== undefined) styles.border = props.border;
  if (props.borderTop !== undefined) styles.borderTop = props.borderTop;
  if (props.borderRight !== undefined) styles.borderRight = props.borderRight;
  if (props.borderBottom !== undefined)
    styles.borderBottom = props.borderBottom;
  if (props.borderLeft !== undefined) styles.borderLeft = props.borderLeft;
  if (props.borderRadius !== undefined)
    styles.borderRadius = props.borderRadius;
  if (props.boxShadow !== undefined) styles.boxShadow = props.boxShadow;
  if (props.textAlign !== undefined) styles.textAlign = props.textAlign;
  if (props.whiteSpace !== undefined) styles.whiteSpace = props.whiteSpace;
  if (props.overflow !== undefined) styles.overflow = props.overflow;
  if (props.overflowX !== undefined) styles.overflowX = props.overflowX;
  if (props.overflowY !== undefined) styles.overflowY = props.overflowY;

  // Outline
  if (props.outline !== undefined) styles.outline = props.outline;
  if (props.outlineOffset !== undefined)
    styles.outlineOffset = props.outlineOffset;
  if (props.outlineStyle !== undefined)
    styles.outlineStyle = props.outlineStyle;
  if (props.outlineWidth !== undefined)
    styles.outlineWidth = props.outlineWidth;
  if (props.outlineColor !== undefined)
    styles.outlineColor = props.outlineColor;

  return styles;
};

const stateToSelector: Record<keyof StateStyles, string> = {
  _hover: "&:hover",
  _focus: "&:focus",
  _active: "&:active",
  _disabled: "&:disabled",
  _visited: "&:visited",
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp,
})<PrimitiveButtonProps>((props) => {
  const base = getStyles(props);

  const stateStyles = Object.entries(stateToSelector).reduce(
    (acc, [key, selector]) => {
      const stateProps = props[key as keyof StateStyles];
      if (stateProps) {
        acc[selector] = getStyles(stateProps);
      }
      return acc;
    },
    {} as CSSObject
  );

  return css({ ...base, ...stateStyles });
});

export type ButtonProps = PrimitiveButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
    children?: React.ReactNode;
    className?: string;
  };

const PrimitiveButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton className={rest.className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default PrimitiveButton;