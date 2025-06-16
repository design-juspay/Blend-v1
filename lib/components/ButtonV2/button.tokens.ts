import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import { ButtonSizeV2, ButtonTypeV2 } from "./types";

export type ButtonState = "default" | "hover" | "active" | "disabled";
export type ButtonSubType = "default" | "iconOnly" | "plainIcon";

export type ButtonTokensType = {
  gap: CSSObject["gap"];
  backgroundColor: {
    [key in ButtonTypeV2]: {
      default: CSSObject["background"];
      hover: CSSObject["background"];
      active: CSSObject["background"];
      disabled: CSSObject["background"];
    };
  };
  color: {
    [key in ButtonTypeV2]: {
      [key in ButtonState]: CSSObject["color"];
    };
  };
  borderRadius: {
    // primary: CSSObject["borderRadius"];
    [key in ButtonTypeV2]: {
      [key in ButtonState]: CSSObject["borderRadius"];
    };
  };
  padding: {
    [key in ButtonSizeV2]: CSSObject["padding"];
  };
  border: {
    [key in ButtonTypeV2]: {
      [key in ButtonState]: CSSObject["border"];
    };
  };
  shadow: {
    [key in ButtonTypeV2]: {
      [key in ButtonState]: CSSObject["boxShadow"];
    };
  };
  outline: {
    [key in ButtonTypeV2]: {
      [key in ButtonState]: CSSObject["outline"];
    };
  };
};

const buttonTokens: ButtonTokensType = {
  gap: FOUNDATION_THEME.unit[6],
  backgroundColor: {
    primary: {
      default:
        "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
      hover: FOUNDATION_THEME.colors.primary[500],
      active:
        "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
      disabled: FOUNDATION_THEME.colors.primary[300],
    },
    secondary: {
      default: FOUNDATION_THEME.colors.gray[0],
      hover: FOUNDATION_THEME.colors.gray[50],
      active: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[150],
    },
    danger: {
      default: `linear-gradient(180deg, var(--color-red-600, #E7000B) 0%, var(--color-red-500, #FB2C36) 93.75%)`,
      hover: FOUNDATION_THEME.colors.red[500],
      active: FOUNDATION_THEME.colors.red[500],
      disabled: FOUNDATION_THEME.colors.red[300],
    },
    success: {
      default: `linear-gradient(180deg, var(--color-green-600, #00A63E) 0%, var(--color-green-500, #00C951) 100%)`,
      hover: FOUNDATION_THEME.colors.green[500],
      active: FOUNDATION_THEME.colors.green[600],
      disabled: FOUNDATION_THEME.colors.green[300],
    },
  },
  color: {
    primary: {
      default: FOUNDATION_THEME.colors.gray[0],
      hover: FOUNDATION_THEME.colors.gray[0],
      active: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[0],
    },
    secondary: {
      default: FOUNDATION_THEME.colors.gray[600],
      hover: FOUNDATION_THEME.colors.gray[600],
      active: FOUNDATION_THEME.colors.gray[600],
      disabled: FOUNDATION_THEME.colors.gray[300],
    },
    danger: {
      default: FOUNDATION_THEME.colors.gray[0],
      hover: FOUNDATION_THEME.colors.gray[0],
      active: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[0],
    },
    success: {
      default: FOUNDATION_THEME.colors.gray[0],
      hover: FOUNDATION_THEME.colors.gray[0],
      active: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[0],
    },
  },
  borderRadius: {
    primary: {
      default: FOUNDATION_THEME.border.radius[10],
      hover: FOUNDATION_THEME.border.radius[10],
      active: FOUNDATION_THEME.border.radius[10],
      disabled: FOUNDATION_THEME.border.radius[10],
    },
    secondary: {
      default: FOUNDATION_THEME.border.radius[10],
      hover: FOUNDATION_THEME.border.radius[10],
      active: FOUNDATION_THEME.border.radius[10],
      disabled: FOUNDATION_THEME.border.radius[10],
    },
    danger: {
      default: FOUNDATION_THEME.border.radius[10],
      hover: FOUNDATION_THEME.border.radius[10],
      active: FOUNDATION_THEME.border.radius[10],
      disabled: FOUNDATION_THEME.border.radius[10],
    },
    success: {
      default: FOUNDATION_THEME.border.radius[10],
      hover: FOUNDATION_THEME.border.radius[10],
      active: FOUNDATION_THEME.border.radius[10],
      disabled: FOUNDATION_THEME.border.radius[10],
    },
  },
  padding: {
    [ButtonSizeV2.SMALL]: "6px 16px",
    [ButtonSizeV2.MEDIUM]: "8px 16px",
    [ButtonSizeV2.LARGE]: "10px 16px",
  },
  border: {
    primary: {
      default: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
      hover: `1.5px solid ${FOUNDATION_THEME.colors.primary[500]}`,
      active: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
      disabled: `1.5px solid ${FOUNDATION_THEME.colors.primary[300]}`,
    },
    secondary: {
      default: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      hover: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
      active: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      disabled: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
    },
    danger: {
      default: `1.5px solid ${FOUNDATION_THEME.colors.red[600]}`,
      hover: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
      active: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
      disabled: `1.5px solid ${FOUNDATION_THEME.colors.red[300]}`,
    },
    success: {
      default: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
      hover: `1.5px solid ${FOUNDATION_THEME.colors.green[500]}`,
      active: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
      disabled: `1.5px solid ${FOUNDATION_THEME.colors.green[300]}`,
    },
  },
  shadow: {
    // primary: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
    primary: {
      default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
    },
    secondary: {
      default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      active: "0px 4px 4px 0px rgba(0, 0, 0, 0.10) inset",
      disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
    },
    danger: {
      default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
    },
    success: {
      default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
    },
  },
  outline: {
    primary: {
      default: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
      hover: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
      active: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
      disabled: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
    },
    secondary: {
      default: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      hover: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      active: `3px solid ${FOUNDATION_THEME.colors.gray[100]}`,
      disabled: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
    },
    danger: {
      default: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
      hover: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
      active: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
      disabled: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
    },
    success: {
      default: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
      hover: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
      active: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
      disabled: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
    },
  },
};

export default buttonTokens;
