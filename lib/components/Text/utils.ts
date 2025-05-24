
import { FOUNDATION_THEME } from "../../tokens";
import { JSX } from "react";
import { FontGroupType } from "../../tokens/font.tokens";
import { ThemeType } from "../../tokens/theme.tokens";
import { VariantType } from "./types";

export const getFontGroup = (variant?: VariantType): FontGroupType | null => {
  if (!variant) return null;
  const [type, size] = variant.split(".") as [
    keyof ThemeType["font"]["size"],
    keyof ThemeType["font"]["size"][keyof ThemeType["font"]["size"]]
  ];
  return FOUNDATION_THEME.font.size[type][size] as FontGroupType;
};

export const getSemanticTag = (
  variant?: VariantType,
  as?: keyof Pick<
    JSX.IntrinsicElements,
    "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "div" | "code" | "q"
  >
) => {
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
