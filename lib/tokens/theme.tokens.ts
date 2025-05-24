import shadowTokens, { type ShadowTokensType } from "./shadows.tokens";
import borderTokens, { type BorderTokensType } from "./border.tokens";
import fontTokens, { type FontTokensType } from "./font.tokens";
import opacityTokens, { type OpacityTokensType } from "./opacity.tokens";

export type ThemeType = {
  shadows: ShadowTokensType;
  border: BorderTokensType;
  font: FontTokensType;
  opacity: OpacityTokensType;
};

const FOUNDATION_THEME: ThemeType = {
  shadows: shadowTokens,
  border: borderTokens,
  font: fontTokens,
  opacity: opacityTokens,
};

export default FOUNDATION_THEME;
