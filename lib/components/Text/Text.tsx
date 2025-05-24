import React from "react";
import { styled, CSSObject } from "styled-components";
import { theme } from "../../tokens/index";
import type { ThemeType } from "../../tokens/index";
import { CSS } from "styled-components/dist/types";

interface StyledTextProps {
  size?:
    | keyof ThemeType["font"]["size"]["body"]
    | keyof ThemeType["font"]["size"]["heading"]
    | keyof ThemeType["font"]["size"]["display"]
    | keyof ThemeType["font"]["size"]["code"];
  weight?: keyof ThemeType["font"]["weight"];
  color?: string;
  textAlign?: CSS.Property.TextAlign;
  letterSpacing?: keyof ThemeType["font"]["letterSpacing"];
  fontFamily?: keyof ThemeType["font"]["family"];
  fontSize?: number;
  theme?: any;
  opacity?: keyof ThemeType["opacity"];
}

export interface TextProps extends StyledTextProps {
  children: React.ReactNode;
}

const StyledText = styled.p.withConfig({
  displayName: "StyledText",
})<StyledTextProps>(
  ({
    color = "black",
    fontFamily = "body",
    fontSize = theme.font.size.base,
    weight = 400,
    letterSpacing = "normal",
    textAlign = "left",
    opacity = 100,
    ...props
  }): CSSObject => {
    return {
      color, // TODO: Match with foundation tokens - ask Deepanshu
      fontFamily: theme.font.family[fontFamily],
      fontSize,
      weight: theme.font.weight[weight],
      letterSpacing: theme.font.letterSpacing[letterSpacing],
      textAlign,
      opacity: theme.opacity[opacity],
    };
  }
);

const Text = ({
  children,
  color,
  fontFamily,
  fontSize,
  size,
  weight,
  letterSpacing,
  textAlign,
  opacity,
}: 
TextProps) => {
  return (
    <StyledText
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      size={size}
      weight={weight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      opacity={opacity}
    >
      {children}
    </StyledText>
  );
};

export default Text;
