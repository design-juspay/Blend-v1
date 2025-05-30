import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";

type RadioTokens = {
  background: {
    default: CSSObject["backgroundColor"];
    checked: CSSObject["backgroundColor"];
    disabled: CSSObject["backgroundColor"];
    disabledChecked: CSSObject["backgroundColor"];
  };
  border: {
    width: CSSObject["borderWidth"];
    radius: CSSObject["borderRadius"];
    default: CSSObject["borderColor"];
    hover: CSSObject["borderColor"];
    focus: CSSObject["borderColor"];
  };
  indicator: {
    color: CSSObject["color"];
    size: {
      sm: CSSObject["width"];
      md: CSSObject["width"];
    };
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
  groupLabel: {
    color: CSSObject["color"];
    fontWeight: CSSObject["fontWeight"];
  };
  sizes: {
    sm: {
      radio: {
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
      radio: {
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
    radioMarginRight: CSSObject["marginRight"];
    groupSpacing: CSSObject["margin"];
  };
};

const radioTokens: RadioTokens = {
  background: {
    default: FOUNDATION_THEME.colors.gray[0], 
    checked: FOUNDATION_THEME.colors.primary[500],
    disabled: FOUNDATION_THEME.colors.gray[50],
    disabledChecked: FOUNDATION_THEME.colors.primary[200]
  },
  border: {
    width: FOUNDATION_THEME.border.width[1],
    radius: FOUNDATION_THEME.border.radius.full,
    default: FOUNDATION_THEME.colors.gray[300],
    hover: FOUNDATION_THEME.colors.primary[600],
    focus: FOUNDATION_THEME.colors.primary[200]
  },
  indicator: {
    color: FOUNDATION_THEME.colors.gray[0],
    size: {
      sm: FOUNDATION_THEME.unit[6],
      md: FOUNDATION_THEME.unit[8]
    }
  },
  label: {
    default: FOUNDATION_THEME.colors.gray[700],
    disabled: FOUNDATION_THEME.colors.gray[300],
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
  groupLabel: {
    color: FOUNDATION_THEME.colors.gray[700],       
    fontWeight: 500
  },
  sizes: {
    sm: {
      radio: {
        width: FOUNDATION_THEME.unit[14],
        height: FOUNDATION_THEME.unit[14]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[20],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    },
    md: {
      radio: {
        width: FOUNDATION_THEME.unit[16],
        height: FOUNDATION_THEME.unit[16]
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
    radioMarginRight: FOUNDATION_THEME.unit[8], 
    groupSpacing: FOUNDATION_THEME.unit[16] 
  }
};

export default radioTokens; 