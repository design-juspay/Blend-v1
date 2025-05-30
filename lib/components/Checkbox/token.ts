import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";

type CheckboxTokens = {
  background: {
    default: CSSObject["backgroundColor"];
    hover: CSSObject["backgroundColor"];
    intermediate: CSSObject["backgroundColor"];
    checked: CSSObject["backgroundColor"];
    disabled: CSSObject["backgroundColor"];
    disabledChecked: CSSObject["backgroundColor"];
  };
  icon: {
    default: CSSObject["width"];
    small: CSSObject["width"];
    color: CSSObject["color"];
  };
  label: {
    default: CSSObject["color"];
    disabled: CSSObject["color"];
    fontWeight: CSSObject["fontWeight"];
  };
  subtext: {
    default: CSSObject["color"];
    disabled: CSSObject["color"];
    error: CSSObject["color"];
  };
  required: {
    color: CSSObject["color"];
    spacing: CSSObject["margin"];
  };
  border: {
    width: CSSObject["borderWidth"];
    radius: CSSObject["borderRadius"];
    default: CSSObject["borderColor"];
    hover: CSSObject["borderColor"];
    focus: CSSObject["borderColor"];
  };
  sizes: {
    sm: {
      root: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      indicator: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      icon: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      fontSize: CSSObject["fontSize"];
      subtext: {
        fontSize: CSSObject["fontSize"];
        marginLeft: CSSObject["marginLeft"];
        marginTop: CSSObject["marginTop"];
      };
    };
    md: {
      root: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      indicator: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      icon: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      fontSize: CSSObject["fontSize"];
      subtext: {
        fontSize: CSSObject["fontSize"];
        marginLeft: CSSObject["marginLeft"];
        marginTop: CSSObject["marginTop"];
      };
    };
  };
  spacing: {
    rightSlot: CSSObject["margin"];
    checkboxMarginRight: CSSObject["marginRight"];
  };
};

const checkboxTokens: CheckboxTokens = {
  background: {
    default: FOUNDATION_THEME.colors.gray[0],
    hover: FOUNDATION_THEME.colors.gray[0],
    intermediate: FOUNDATION_THEME.colors.primary[500],
    checked: FOUNDATION_THEME.colors.primary[500],
    disabled: FOUNDATION_THEME.colors.gray[50],
    disabledChecked: FOUNDATION_THEME.colors.primary[200]
  },
  icon: {
    default: FOUNDATION_THEME.unit[24],
    small: FOUNDATION_THEME.unit[16],
    color: FOUNDATION_THEME.colors.gray[0]
  },
  label: {
    default: FOUNDATION_THEME.colors.gray[600],   
    disabled: FOUNDATION_THEME.colors.gray[400],
    fontWeight: 500
  },
  subtext: {
    default: FOUNDATION_THEME.colors.gray[400],
    disabled: FOUNDATION_THEME.colors.gray[200],
    error: FOUNDATION_THEME.colors.red[600]
  },
  required: {
    color: FOUNDATION_THEME.colors.red[600],
    spacing: FOUNDATION_THEME.unit[2]
  },
  border: {
    width: FOUNDATION_THEME.border.width[1],
    radius: FOUNDATION_THEME.border.radius[4],
    default: FOUNDATION_THEME.colors.gray[200],
    hover: FOUNDATION_THEME.colors.primary[600],
    focus: FOUNDATION_THEME.colors.primary[200]
  },
  sizes: {
    sm: {
      root: {
        width: FOUNDATION_THEME.unit[14],
        height: FOUNDATION_THEME.unit[14]
      },
      indicator: {
        width: FOUNDATION_THEME.unit[14],
        height: FOUNDATION_THEME.unit[14]
      },
      icon: {
        width: FOUNDATION_THEME.unit[10],
        height: FOUNDATION_THEME.unit[10]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[20],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    },
    md: {
      root: {
        width: FOUNDATION_THEME.unit[16],
        height: FOUNDATION_THEME.unit[16]
      },
      indicator: {
        width: FOUNDATION_THEME.unit[16], 
        height: FOUNDATION_THEME.unit[16]
      },
      icon: {
        width: FOUNDATION_THEME.unit[12],
        height: FOUNDATION_THEME.unit[12]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[24],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[6],
    checkboxMarginRight: FOUNDATION_THEME.unit[8]
  }
};

export default checkboxTokens; 