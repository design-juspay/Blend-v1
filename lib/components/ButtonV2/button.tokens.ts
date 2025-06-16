import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import { ButtonSizeV2, ButtonSubTypeV2, ButtonTypeV2 } from "./types";

export type ButtonState = "default" | "hover" | "active" | "disabled";

export type ButtonTokensType = {
  gap: CSSObject["gap"];
  backgroundColor: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["background"];
      };
    };
  };
  color: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["color"];
      };
    };
  };
  borderRadius: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["borderRadius"];
      };
    };
  };
  padding: {
    [key in ButtonSizeV2]: {
      [key in ButtonSubTypeV2]: CSSObject["padding"];
    };
  };
  border: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["border"];
      };
    };
  };
  shadow: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["boxShadow"];
      };
    };
  };
  outline: {
    [key in ButtonTypeV2]: {
      [key in ButtonSubTypeV2]: {
        [key in ButtonState]: CSSObject["outline"];
      };
    };
  };
};

const buttonTokens: ButtonTokensType = {
  gap: FOUNDATION_THEME.unit[6],
  backgroundColor: {
    primary: {
      default: {
        default:
          "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
        hover: FOUNDATION_THEME.colors.primary[500],
        active:
          "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
        disabled: FOUNDATION_THEME.colors.primary[300],
      },
      iconOnly: {
        default:
          "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
        hover: FOUNDATION_THEME.colors.primary[500],
        active:
          "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
        disabled: FOUNDATION_THEME.colors.primary[300],
      },
      inline: {
        default: "none",
        hover: "none",
        active: "none",
        disabled: "none",
      },
    },
    secondary: {
      default: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[50],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[150],
      },
      iconOnly: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[50],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[150],
      },
      inline: {
        default: "none",
        hover: "none",
        active: "none",
        disabled: "none",
      },
    },
    danger: {
      default: {
        default: `linear-gradient(180deg, var(--color-red-600, #E7000B) 0%, var(--color-red-500, #FB2C36) 93.75%)`,
        hover: FOUNDATION_THEME.colors.red[500],
        active: FOUNDATION_THEME.colors.red[500],
        disabled: FOUNDATION_THEME.colors.red[300],
      },
      iconOnly: {
        default: `linear-gradient(180deg, var(--color-red-600, #E7000B) 0%, var(--color-red-500, #FB2C36) 93.75%)`,
        hover: FOUNDATION_THEME.colors.red[500],
        active: FOUNDATION_THEME.colors.red[500],
        disabled: FOUNDATION_THEME.colors.red[300],
      },
      inline: {
        default: "none",
        hover: "none",
        active: "none",
        disabled: "none",
      },
    },
    success: {
      default: {
        default: `linear-gradient(180deg, var(--color-green-600, #00A63E) 0%, var(--color-green-500, #00C951) 100%)`,
        hover: FOUNDATION_THEME.colors.green[500],
        active: FOUNDATION_THEME.colors.green[600],
        disabled: FOUNDATION_THEME.colors.green[300],
      },
      iconOnly: {
        default: `linear-gradient(180deg, var(--color-green-600, #00A63E) 0%, var(--color-green-500, #00C951) 100%)`,
        hover: FOUNDATION_THEME.colors.green[500],
        active: FOUNDATION_THEME.colors.green[600],
        disabled: FOUNDATION_THEME.colors.green[300],
      },
      inline: {
        default: "none",
        hover: "none",
        active: "none",
        disabled: "none",
      },
    },
  },
  color: {
    primary: {
      default: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      iconOnly: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      inline: {
        default: FOUNDATION_THEME.colors.primary[600],
        hover: FOUNDATION_THEME.colors.primary[600],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.primary[300],
      },
    },
    secondary: {
      default: {
        default: FOUNDATION_THEME.colors.gray[600],
        hover: FOUNDATION_THEME.colors.gray[600],
        active: FOUNDATION_THEME.colors.gray[600],
        disabled: FOUNDATION_THEME.colors.gray[300],
      },
      iconOnly: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      inline: {
        default: FOUNDATION_THEME.colors.gray[600],
        hover: FOUNDATION_THEME.colors.gray[600],
        active: FOUNDATION_THEME.colors.gray[600],
        disabled: FOUNDATION_THEME.colors.gray[400],
      },
    },
    danger: {
      default: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      iconOnly: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      inline: {
        default: FOUNDATION_THEME.colors.red[600],
        hover: FOUNDATION_THEME.colors.red[600],
        active: FOUNDATION_THEME.colors.red[600],
        disabled: FOUNDATION_THEME.colors.red[400],
      },
    },
    success: {
      default: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      iconOnly: {
        default: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[0],
        active: FOUNDATION_THEME.colors.gray[0],
        disabled: FOUNDATION_THEME.colors.gray[0],
      },
      inline: {
        default: FOUNDATION_THEME.colors.green[600],
        hover: FOUNDATION_THEME.colors.green[600],
        active: FOUNDATION_THEME.colors.green[600],
        disabled: FOUNDATION_THEME.colors.green[400],
      },
    },
  },
  borderRadius: {
    primary: {
      default: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      iconOnly: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      inline: {
        default: FOUNDATION_THEME.border.radius[6],
        hover: FOUNDATION_THEME.border.radius[6],
        active: FOUNDATION_THEME.border.radius[6],
        disabled: FOUNDATION_THEME.border.radius[6],
      },
    },
    secondary: {
      default: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      iconOnly: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      inline: {
        default: FOUNDATION_THEME.border.radius[6],
        hover: FOUNDATION_THEME.border.radius[6],
        active: FOUNDATION_THEME.border.radius[6],
        disabled: FOUNDATION_THEME.border.radius[6],
      },
    },
    danger: {
      default: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      iconOnly: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      inline: {
        default: FOUNDATION_THEME.border.radius[6],
        hover: FOUNDATION_THEME.border.radius[6],
        active: FOUNDATION_THEME.border.radius[6],
        disabled: FOUNDATION_THEME.border.radius[6],
      },
    },
    success: {
      default: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      iconOnly: {
        default: FOUNDATION_THEME.border.radius[10],
        hover: FOUNDATION_THEME.border.radius[10],
        active: FOUNDATION_THEME.border.radius[10],
        disabled: FOUNDATION_THEME.border.radius[10],
      },
      inline: {
        default: FOUNDATION_THEME.border.radius[6],
        hover: FOUNDATION_THEME.border.radius[6],
        active: FOUNDATION_THEME.border.radius[6],
        disabled: FOUNDATION_THEME.border.radius[6],
      },
    },
  },
  padding: {
    sm: {
      default: "6px 16px",
      iconOnly: "6px 16px",
      inline: `${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[0]}`,
    },
    md: {
      default: "8px 16px",
      iconOnly: "8px 16px",
      inline: `${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[0]}`,
    },
    lg: {
      default: "10px 16px",
      iconOnly: "10px 16px",
      inline: `${FOUNDATION_THEME.unit[0]} ${FOUNDATION_THEME.unit[0]}`,
    },
  },
  border: {
    primary: {
      default: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.primary[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.primary[300]}`,
      },
      iconOnly: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.primary[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.primary[600]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.primary[300]}`,
      },
      inline: {
        default: `none`,
        hover: `none`,
        active: `none`,
        disabled: `none`,
      },
    },
    secondary: {
      default: {
        default: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        hover: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
        active: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        disabled: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
      },
      iconOnly: {
        default: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        hover: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
        active: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        disabled: `1px solid ${FOUNDATION_THEME.colors.gray[150]}`,
      },
      inline: {
        default: `none`,
        hover: `none`,
        active: `none`,
        disabled: `none`,
      },
    },
    danger: {
      default: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.red[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.red[300]}`,
      },
      iconOnly: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.red[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.red[500]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.red[300]}`,
      },
      inline: {
        default: `none`,
        hover: `none`,
        active: `none`,
        disabled: `none`,
      },
    },
    success: {
      default: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.green[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.green[300]}`,
      },
      iconOnly: {
        default: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
        hover: `1.5px solid ${FOUNDATION_THEME.colors.green[500]}`,
        active: `1.5px solid ${FOUNDATION_THEME.colors.green[600]}`,
        disabled: `1.5px solid ${FOUNDATION_THEME.colors.green[300]}`,
      },
      inline: {
        default: `none`,
        hover: `none`,
        active: `none`,
        disabled: `none`,
      },
    },
  },
  shadow: {
    primary: {
      default: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      iconOnly: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      inline: {
        default: "none",
        hover: "none",
        active: "none",
        disabled: "none",
      },
    },
    secondary: {
      default: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.10) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      iconOnly: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      inline: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
    },
    danger: {
      default: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      iconOnly: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      inline: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
    },
    success: {
      default: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      iconOnly: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
      inline: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        hover: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        active: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
        disabled: "0px 4px 4px 0px rgba(0, 0, 0, 0.15) inset",
      },
    },
  },
  outline: {
    primary: {
      default: {
        default: `none`,
        hover: `none`,
        active: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
        disabled: `none`,
      },
      iconOnly: {
        default: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.primary[200]}`,
      },
      inline: {
        default: `none`,
        hover: `none`,
        active: `1px solid ${FOUNDATION_THEME.colors.primary[500]}`,
        disabled: `none`,
      },
    },
    secondary: {
      default: {
        default: `none`,
        hover: `none`,
        active: `3px solid ${FOUNDATION_THEME.colors.gray[100]}`,
        disabled: `none`,
      },
      iconOnly: {
        default: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.gray[100]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      },
      inline: {
        default: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.gray[100]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      },
    },
    danger: {
      default: {
        default: `none`,
        hover: `none`,
        active: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        disabled: `none`,
      },
      iconOnly: {
        default: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
      },
      inline: {
        default: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.red[200]}`,
      },
    },
    success: {
      default: {
        default: `none`,
        hover: `none`,
        active: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        disabled: `none`,
      },
      iconOnly: {
        default: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
      },
      inline: {
        default: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        hover: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        active: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
        disabled: `3px solid ${FOUNDATION_THEME.colors.green[200]}`,
      },
    },
  },
};

export default buttonTokens;
