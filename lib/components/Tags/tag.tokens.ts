import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";

/**
 * @todo: Should we hardcode the keys for the tokens?
 */
export type TagTokensType = Readonly<{
  background: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  text: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  border: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  borderRadius: {
    [key: string]: {
      [key: string]: CSSObject["borderRadius"];
    };
  };
  font: {
    [key: string]: {
      [key: string]: CSSObject["fontSize"];
    };
  };
  layout: {
    [key: string]: {
      [key: string]: CSSObject["height"];
    };
  };
}>;

const tagTokens: TagTokensType = {
  background: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[0],
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
  border: {
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
      xs: FOUNDATION_THEME.border.radius[6],
      sm: FOUNDATION_THEME.border.radius[6],
      md: FOUNDATION_THEME.border.radius[6],
      lg: FOUNDATION_THEME.border.radius[8],
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
      padding: "2px 6px",
      iconSize: "12px",
      gap: "6px",
    },
    sm: {
      height: "22px",
      padding: "3px 8px",
      iconSize: "12px",
      gap: "6px",
    },
    md: {
      height: "24px",
      padding: "4px 10px",
      iconSize: "12px",
      gap: "6px",
    },
    lg: {
      height: "28px",
      padding: "6px 12px",
      iconSize: "12px",
      gap: "6px",
    },
  },
};

export default tagTokens;
