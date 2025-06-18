import { FOUNDATION_THEME } from "../../tokens";
import {
  MenuItemV2ActionType,
  MenuItemV2Type,
  MenuItemV2Variant,
} from "./types";

export const getHoverBgColor = (item: MenuItemV2Type): string => {
  if (item.variant === MenuItemV2Variant.ACTION) {
    if (item.actionType === MenuItemV2ActionType.DANGER) {
      return (
        FOUNDATION_THEME.colors.red[50] ||
        FOUNDATION_THEME.colors.gray[50] ||
        ""
      );
    }
    return (
      FOUNDATION_THEME.colors.primary[50] ||
      FOUNDATION_THEME.colors.gray[50] ||
      ""
    );
  }
  return FOUNDATION_THEME.colors.gray[50] || "";
};

export const getTextColor = (item: MenuItemV2Type) => {
  if (item.variant === MenuItemV2Variant.ACTION) {
    if (item.actionType === MenuItemV2ActionType.DANGER) {
      if (item.disabled === true) {
        return FOUNDATION_THEME.colors.red[400];
      }
      return FOUNDATION_THEME.colors.red[600];
    }
    if (item.disabled === true) {
      return FOUNDATION_THEME.colors.primary[300];
    }
    return FOUNDATION_THEME.colors.primary[600];
  } else {
    if (item.disabled === true) {
      return FOUNDATION_THEME.colors.gray[400];
    }
    return FOUNDATION_THEME.colors.gray[600];
  }
};
