import { ComponentTokenType } from "../../lib/context/ThemeContext";
import { FOUNDATION_THEME } from "../../lib/tokens";

export const HDFC_COMPONENT_TOKENS: ComponentTokenType = {
  TEXT_AREA: {
    fontFamily: "InterDisplay",
    paddingX: FOUNDATION_THEME.unit[14],
    paddingY: FOUNDATION_THEME.unit[10],
    borderRadius: FOUNDATION_THEME.unit[8],
    boxShadow: FOUNDATION_THEME.shadows.sm,
    outline: {
      default: "none",
      hover: "none",
      focus: "none",
      error: "none",
      disabled: "none",
    },
    border: {
      default: `1px solid ${FOUNDATION_THEME.colors.green[200]}`,
      hover: `1px solid ${FOUNDATION_THEME.colors.primary[400]}`,
      focus: `1px solid ${FOUNDATION_THEME.colors.orange[500]}`,
      error: `1px solid ${FOUNDATION_THEME.colors.red[500]}`,
      disabled: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
    },
    color: {
      default: FOUNDATION_THEME.colors.gray[800],
      hover: FOUNDATION_THEME.colors.gray[800],
      focus: FOUNDATION_THEME.colors.gray[800],
      error: FOUNDATION_THEME.colors.red[800],
      disabled: FOUNDATION_THEME.colors.gray[300],
    },
    backgroundColor: {
      default: FOUNDATION_THEME.colors.gray[0],
      hover: FOUNDATION_THEME.colors.gray[0],
      focus: FOUNDATION_THEME.colors.gray[0],
      error: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[50],
    },
  },
  SEARCH_INPUT: {
    width: "100%",
    height: FOUNDATION_THEME.unit[40],
    gap: FOUNDATION_THEME.unit[8],
    padding: {
      x: FOUNDATION_THEME.unit[8],
      y: FOUNDATION_THEME.unit[8],
    },
    borderRadius: FOUNDATION_THEME.unit[0],
    borderTop: {
      default: "none",
      hover: "none",
      focus: "none",
      error: "none",
    },
    borderLeft: {
      default: "none",
      hover: "none",
      focus: "none",
      error: "none",
    },
    borderRight: {
      default: "none",
      hover: "none",
      focus: "none",
      error: "none",
    },
    borderBottom: {
      default: `1px solid ${FOUNDATION_THEME.colors.red[500]} !important`,
      hover: `1px solid ${FOUNDATION_THEME.colors.green[700]} !important`,
      focus: `1px solid ${FOUNDATION_THEME.colors.primary[500]} !important`,
      error: `1px solid ${FOUNDATION_THEME.colors.primary[500]} !important`,
    },
    outline: "none",
    boxShadow: FOUNDATION_THEME.shadows.sm,
  },
  TAGS: {
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
    color: {
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
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[600],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[500],
        purple: FOUNDATION_THEME.colors.purple[500],
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
    borderWidth: {
      noFill: {
        neutral: 1,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
      },
      subtle: {
        neutral: 1,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
      },
      attentive: {
        neutral: 2,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
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
    gap: {
      xs: FOUNDATION_THEME.unit[6],
      sm: FOUNDATION_THEME.unit[6],
      md: FOUNDATION_THEME.unit[6],
      lg: FOUNDATION_THEME.unit[6],
    },
    padding: {
      xs: `${FOUNDATION_THEME.unit[2]} ${FOUNDATION_THEME.unit[6]}`,
      sm: `${FOUNDATION_THEME.unit[3]} ${FOUNDATION_THEME.unit[8]}`,
      md: `${FOUNDATION_THEME.unit[4]} ${FOUNDATION_THEME.unit[10]}`,
      lg: `${FOUNDATION_THEME.unit[6]} ${FOUNDATION_THEME.unit[12]}`,
    },
    height: {
      xs: FOUNDATION_THEME.unit[20],
      sm: FOUNDATION_THEME.unit[22],
      md: FOUNDATION_THEME.unit[24],
      lg: FOUNDATION_THEME.unit[28],
    },
    slot: {
      size: {
        xs: FOUNDATION_THEME.unit[12],
        sm: FOUNDATION_THEME.unit[12],
        md: FOUNDATION_THEME.unit[12],
        lg: FOUNDATION_THEME.unit[12],
      },
    },
  },
  RADIO: {
    height: {
      sm: FOUNDATION_THEME.unit[16],
      md: FOUNDATION_THEME.unit[20],
    },
    gap: FOUNDATION_THEME.unit[8],
    slotGap: FOUNDATION_THEME.unit[8],
    borderWidth: {
      active: {
        default: 2,
        hover: 2,
        disabled: 2,
      },
      inactive: {
        default: 2,
        hover: 2,
        disabled: 2,
      },
    },
    indicator: {
      active: {
        background: {
          default: FOUNDATION_THEME.colors.gray[0],
          hover: FOUNDATION_THEME.colors.gray[50],
          disabled: FOUNDATION_THEME.colors.gray[100],
        },
        border: {
          default: FOUNDATION_THEME.colors.red[500],
          hover: FOUNDATION_THEME.colors.red[600],
          disabled: FOUNDATION_THEME.colors.gray[300],
        },
      },
      inactive: {
        background: {
          default: FOUNDATION_THEME.colors.gray[0],
          hover: FOUNDATION_THEME.colors.gray[50],
          disabled: FOUNDATION_THEME.colors.gray[100],
        },
        border: {
          default: FOUNDATION_THEME.colors.gray[300],
          hover: FOUNDATION_THEME.colors.gray[400],
          disabled: FOUNDATION_THEME.colors.gray[300],
        },
      },
    },
    activeIndicator: {
      active: {
        background: {
          default: FOUNDATION_THEME.colors.red[500],
          disabled: FOUNDATION_THEME.colors.gray[300],
        },
      },
    },
    content: {
      label: {
        color: {
          default: FOUNDATION_THEME.colors.gray[900],
          hover: FOUNDATION_THEME.colors.gray[900],
          disabled: FOUNDATION_THEME.colors.gray[400],
          error: FOUNDATION_THEME.colors.red[500],
        },
        font: {
          sm: {
            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
          md: {
            fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
        },
      },
      sublabel: {
        color: {
          default: FOUNDATION_THEME.colors.gray[600],
          hover: FOUNDATION_THEME.colors.gray[600],
          disabled: FOUNDATION_THEME.colors.gray[400],
          error: FOUNDATION_THEME.colors.red[500],
        },
        font: {
          sm: {
            fontSize: FOUNDATION_THEME.font.size.body.xs.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
          md: {
            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
        },
      },
    },
    slot: {
      size: {
        sm: FOUNDATION_THEME.unit[16],
        md: FOUNDATION_THEME.unit[20],
      },
    },
  },
  SWITCH: {
    root: {
      background: {
        default: {
          active: FOUNDATION_THEME.colors.green[500],
          inactive: FOUNDATION_THEME.colors.gray[200],
          disabled: FOUNDATION_THEME.colors.green[300],
        }
      },
      border: {
        radius: FOUNDATION_THEME.border.radius.full,
        focus: {
          color: FOUNDATION_THEME.colors.green[200]
        }
      },
      size: {
        sm: {
          width: FOUNDATION_THEME.unit[24],
          height: FOUNDATION_THEME.unit[12]
        },
        md: {
          width: FOUNDATION_THEME.unit[28],
          height: FOUNDATION_THEME.unit[14]
        }
      },
      spacing: {
        rightSlot: FOUNDATION_THEME.unit[6],
        marginRight: FOUNDATION_THEME.unit[8]
      }
    },
    thumb: {
      background: {
        default: FOUNDATION_THEME.colors.gray[0]
      },
      border: {
        default: {
          color: FOUNDATION_THEME.colors.gray[300],
          width: '0.5px'
        }
      },
      size: {
        sm: {
          width: FOUNDATION_THEME.unit[10],
          height: FOUNDATION_THEME.unit[10],
          top: '1px',
          offset: {
            active: FOUNDATION_THEME.unit[12],
            inactive: FOUNDATION_THEME.unit[2]
          }
        },
        md: {
          width: FOUNDATION_THEME.unit[12],
          height: FOUNDATION_THEME.unit[12],
          top: '1px',
          offset: {
            active: FOUNDATION_THEME.unit[14],
            inactive: FOUNDATION_THEME.unit[2]
          }
        }
      }
    },
    label: {
      color: {
        default: FOUNDATION_THEME.colors.gray[800],
        disabled: FOUNDATION_THEME.colors.gray[400]
      },
      font: {
        weight: 500,
        size: {
          sm: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
          md: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`
        }
      }
    },
    subtext: {
      color: {
        default: FOUNDATION_THEME.colors.gray[600],
        disabled: FOUNDATION_THEME.colors.gray[300],
        error: FOUNDATION_THEME.colors.red[500]
      },
      font: {
        size: {
          sm: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
          md: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`
        }
      },
      spacing: {
        left: {
          sm: FOUNDATION_THEME.unit[32],
          md: FOUNDATION_THEME.unit[36]
        },
        top: FOUNDATION_THEME.unit[4]
      }
    },
    group: {
      label: {
        color: FOUNDATION_THEME.colors.gray[800],
        font: {
          weight: 600
        }
      },
      spacing: FOUNDATION_THEME.unit[16]
    },
    required: {
      color: FOUNDATION_THEME.colors.red[500],
      spacing: FOUNDATION_THEME.unit[2]
    },
    transition: {
      duration: '300ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
};

export default HDFC_COMPONENT_TOKENS;
