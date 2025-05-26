import shadowTokens, { type ShadowTokensType } from "./shadows.tokens";
import borderTokens, { type BorderTokensType } from "./border.tokens";
import fontTokens, { type FontTokensType } from "./font.tokens";
import opacityTokens, { type OpacityTokensType } from "./opacity.tokens";
import spacingTokens, { SpacingTokensType } from "./spacing.tokens";
import colorTokens, { ColorTokensType } from "./color.tokens";

export type ThemeType = {
  shadows: ShadowTokensType;
  border: BorderTokensType;
  font: FontTokensType;
  opacity: OpacityTokensType;
  spacing: SpacingTokensType;
  colors: ColorTokensType;
};

const FOUNDATION_THEME: ThemeType = {
  shadows: shadowTokens,
  border: borderTokens,
  font: fontTokens,
  opacity: opacityTokens,
  spacing: spacingTokens,
  colors: colorTokens,
};

export default FOUNDATION_THEME;
