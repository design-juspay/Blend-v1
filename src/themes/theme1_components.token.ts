import { FOUNDATION_THEME } from "../../lib/main";

export const theme1ComponentsToken = {
  gap: FOUNDATION_THEME.unit[6],
  paddingX: FOUNDATION_THEME.unit[8],
  paddingY: FOUNDATION_THEME.unit[4],
  background: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.red[400], // changed value
      primary: FOUNDATION_THEME.colors.gray[0],
      success: FOUNDATION_THEME.colors.gray[0],
      error: FOUNDATION_THEME.colors.gray[0],
      warning: FOUNDATION_THEME.colors.gray[0],
      purple: FOUNDATION_THEME.colors.gray[0],
    },
    attentive: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[50],
      primary: FOUNDATION_THEME.colors.primary[50],
      success: FOUNDATION_THEME.colors.green[50],
      error: FOUNDATION_THEME.colors.red[50],
      warning: FOUNDATION_THEME.colors.orange[50],
      purple: FOUNDATION_THEME.colors.purple[50],
    },
  },
  text: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[800],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    attentive: {
      neutral: FOUNDATION_THEME.colors.gray[0],
      primary: FOUNDATION_THEME.colors.gray[0],
      success: FOUNDATION_THEME.colors.gray[0],
      error: FOUNDATION_THEME.colors.gray[0],
      warning: FOUNDATION_THEME.colors.gray[0],
      purple: FOUNDATION_THEME.colors.gray[0],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[600],
      purple: FOUNDATION_THEME.colors.purple[600],
    },
  },
  borderWidth: {
    noFill: {
      neutral: "1px",
      primary: "1px",
      success: "1px",
      error: "1px",
      warning: "1px",
      purple: "1px",
    },
    attentive: {
      neutral: "1px",
      primary: "1px",
      success: "1px",
      error: "1px",
      warning: "1px",
      purple: "1px",
    },
    subtle: {
      neutral: "1px",
      primary: "1px",
      success: "1px",
      error: "1px",
      warning: "1px",
      purple: "1px",
    },
  },
  borderColor: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[200],
      primary: FOUNDATION_THEME.colors.primary[100],
      success: FOUNDATION_THEME.colors.green[100],
      error: FOUNDATION_THEME.colors.red[100],
      warning: FOUNDATION_THEME.colors.orange[100],
      purple: FOUNDATION_THEME.colors.purple[100],
    },
    attentive: {
      neutral: "transparent",
      primary: "transparent",
      success: "transparent",
      error: "transparent",
      warning: "transparent",
      purple: "transparent",
    },
  },
  borderRadius: {
    squarical: {
      xs: FOUNDATION_THEME.border.radius[2],
      sm: FOUNDATION_THEME.border.radius[2],
      md: FOUNDATION_THEME.border.radius[2],
      lg: FOUNDATION_THEME.border.radius[2],
    },
    rounded: {
      xs: FOUNDATION_THEME.border.radius.full,
      sm: FOUNDATION_THEME.border.radius.full,
      md: FOUNDATION_THEME.border.radius.full,
      lg: FOUNDATION_THEME.border.radius.full,
    },
  },
  font: {
    xs: {
      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
    },
    sm: {
      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
    },
    md: {
      fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
    },
    lg: {
      fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
    },
  },
  layout: {
    xs: {
      height: "20px",
      gap: "6px",
    },
    sm: {
      height: "22px",
      gap: "6px",
    },
    md: {
      height: "24px",
      gap: "6px",
    },
    lg: {
      height: "28px",
      gap: "6px",
    },
  },
};

export default theme1ComponentsToken;
