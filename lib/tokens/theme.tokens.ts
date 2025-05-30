import shadowTokens, { type ShadowTokensType } from "./shadows.tokens";
import borderTokens, { type BorderTokensType } from "./border.tokens";
import fontTokens, { type FontTokensType } from "./font.tokens";
import opacityTokens, { type OpacityTokensType } from "./opacity.tokens";
import unitTokens, { UnitTokensType } from "./unit.tokens";
import colorTokens, { ColorTokensType } from "./color.tokens";

export type ThemeType = {
  shadows: ShadowTokensType;
  border: BorderTokensType;
  font: FontTokensType;
  opacity: OpacityTokensType;
  unit: UnitTokensType;
  colors: ColorTokensType;
};

const FOUNDATION_THEME: ThemeType = {
  shadows: shadowTokens,
  border: borderTokens,
  font: fontTokens,
  opacity: opacityTokens,
  unit: unitTokens,
  colors: colorTokens,
};

export default FOUNDATION_THEME;
