import { styled, CSSObject } from "styled-components";
import FOUNDATION_THEME from "../../tokens/theme.tokens";
import { StyledTextProps, TextProps } from "./types";
import { getFontGroup, getSemanticTag } from "./utils";

const StyledText = styled.p.withConfig({
  displayName: "StyledText",
})<StyledTextProps>(
  ({
    color = "black",
    fontFamily = "body",
    weight = 400,
    letterSpacing = "normal",
    textAlign = "left",
    opacity = 100,
    variant,
  }): CSSObject => {
    const fontGroup = getFontGroup(variant);

    return {
      color,
      fontFamily: FOUNDATION_THEME.font.family[fontFamily],
      fontSize: fontGroup?.fontSize || FOUNDATION_THEME.font.size.base,
      lineHeight: `${fontGroup?.lineHeight}px`,
      fontWeight: FOUNDATION_THEME.font.weight[weight],
      letterSpacing: FOUNDATION_THEME.font.letterSpacing[letterSpacing],
      textAlign,
      opacity: FOUNDATION_THEME.opacity[opacity],
      margin: 0,
    };
  }
);

const Text = ({
  children,
  color,
  fontFamily,
  variant,
  weight,
  letterSpacing,
  textAlign,
  opacity,
  as,
}: TextProps) => {
  let Tag = getSemanticTag(variant, as);

  return (
    <StyledText
      as={Tag}
      color={color}
      fontFamily={fontFamily}
      variant={variant}
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
