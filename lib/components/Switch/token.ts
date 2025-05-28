import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";

type SwitchTokens = {
  background: {
    enabled: CSSObject["backgroundColor"];
    disabled: CSSObject["backgroundColor"];
    inactive: CSSObject["backgroundColor"];
  };
  thumb: {
    background: CSSObject["backgroundColor"];
    border: {
      color: CSSObject["borderColor"];
      width: CSSObject["borderWidth"];
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
  border: {
    radius: CSSObject["borderRadius"];
    focus: CSSObject["borderColor"];
  };
  sizes: {
    sm: {
      root: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      thumb: {
        width: CSSObject["width"];
        height: CSSObject["height"];
        top: CSSObject["top"];
      };
      thumbOn: CSSObject["left"];
      thumbOff: CSSObject["left"];
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
      thumb: {
        width: CSSObject["width"];
        height: CSSObject["height"];
        top: CSSObject["top"];
      };
      thumbOn: CSSObject["left"];
      thumbOff: CSSObject["left"];
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
    switchMarginRight: CSSObject["marginRight"];
    groupSpacing: CSSObject["margin"];
  };
  transition: {
    duration: CSSObject["transitionDuration"];
    easing: CSSObject["transitionTimingFunction"];
  };
};

const switchTokens: SwitchTokens = {
  background: {
    enabled: FOUNDATION_THEME.colors.primary[500],
    disabled: FOUNDATION_THEME.colors.primary[300],
    inactive: FOUNDATION_THEME.colors.gray[150],
  },
  thumb: {
    background: FOUNDATION_THEME.colors.gray[25],
    border: {
      color: FOUNDATION_THEME.colors.gray[300],
      width: '0.5px'
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
  border: {
    radius: FOUNDATION_THEME.border.radius.full,
    focus: FOUNDATION_THEME.colors.primary[200]
  },
  sizes: {
    sm: {
      root: {
        width: FOUNDATION_THEME.unit[24],
        height: FOUNDATION_THEME.unit[12]
      },
      thumb: {
        width: FOUNDATION_THEME.unit[10],
        height: FOUNDATION_THEME.unit[10],
        top: '1px'
      },
      thumbOn: FOUNDATION_THEME.unit[12],
      thumbOff: FOUNDATION_THEME.unit[2],
      fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[32],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    },
    md: {
      root: {
        width: FOUNDATION_THEME.unit[28],
        height: FOUNDATION_THEME.unit[14]
      },
      thumb: {
        width: FOUNDATION_THEME.unit[12],
        height: FOUNDATION_THEME.unit[12],
        top: '1px'
      },
      thumbOn: FOUNDATION_THEME.unit[14],
      thumbOff: FOUNDATION_THEME.unit[2],
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[36],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[6],
    switchMarginRight: FOUNDATION_THEME.unit[8],
    groupSpacing: FOUNDATION_THEME.unit[16]
  },
  transition: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

export default switchTokens; 