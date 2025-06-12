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
    gap: FOUNDATION_THEME.unit[8],
    slotGap: FOUNDATION_THEME.unit[6],

    height: {
      sm: FOUNDATION_THEME.unit[12],
      md: FOUNDATION_THEME.unit[16]
    },
    width: {
      sm: FOUNDATION_THEME.unit[24],
      md: FOUNDATION_THEME.unit[32]
    },

    borderRadius: {
      base: FOUNDATION_THEME.border.radius.full,
      thumb: FOUNDATION_THEME.border.radius.full
    },

    indicator: {
      active: {
        background: {
          default: FOUNDATION_THEME.colors.green[500],
          hover: FOUNDATION_THEME.colors.green[600],
          disabled: FOUNDATION_THEME.colors.green[300]
        },
        border: {
          default: FOUNDATION_THEME.colors.green[500],
          hover: FOUNDATION_THEME.colors.green[600],
          disabled: FOUNDATION_THEME.colors.green[300]
        }
      },
      inactive: {
        background: {
          default: FOUNDATION_THEME.colors.gray[200],
          hover: FOUNDATION_THEME.colors.gray[300],
          disabled: FOUNDATION_THEME.colors.gray[100]
        },
        border: {
          default: FOUNDATION_THEME.colors.gray[200],
          hover: FOUNDATION_THEME.colors.gray[300],
          disabled: FOUNDATION_THEME.colors.gray[100]
        }
      }
    },

    thumb: {
      background: FOUNDATION_THEME.colors.gray[0],
      border: {
        color: FOUNDATION_THEME.colors.gray[300],
        width: '0.5px'
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
          width: FOUNDATION_THEME.unit[14],
          height: FOUNDATION_THEME.unit[14],
          top: '1px',
          offset: {
            active: FOUNDATION_THEME.unit[16],
            inactive: FOUNDATION_THEME.unit[2]
          }
        }
      }
    },

    content: {
      label: {
        color: {
          default: FOUNDATION_THEME.colors.gray[800],
          hover: FOUNDATION_THEME.colors.gray[900],
          disabled: FOUNDATION_THEME.colors.gray[400],
          error: FOUNDATION_THEME.colors.red[500]
        },
        font: {
          sm: {
            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[500]
          },
          md: {
            fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[500]
          }
        }
      },
      sublabel: {
        color: {
          default: FOUNDATION_THEME.colors.gray[600],
          hover: FOUNDATION_THEME.colors.gray[700],
          disabled: FOUNDATION_THEME.colors.gray[300],
          error: FOUNDATION_THEME.colors.red[500]
        },
        font: {
          sm: {
            fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400]
          },
          md: {
            fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
            fontWeight: FOUNDATION_THEME.font.weight[400]
          }
        },
        spacing: {
          left: {
            sm: FOUNDATION_THEME.unit[32],
            md: FOUNDATION_THEME.unit[36]
          },
          top: FOUNDATION_THEME.unit[4]
        }
      }
    },

    borderWidth: {
      inactive: {
        default: 1,
        hover: 1,
        disabled: 1
      },
      active: {
        default: 2,
        hover: 2,
        disabled: 1
      }
    },

    focus: {
      outline: {
        width: FOUNDATION_THEME.border.width[2],
        color: FOUNDATION_THEME.colors.green[200],
        offset: FOUNDATION_THEME.unit[2]
      }
    },

    slot: {
      size: {
        sm: FOUNDATION_THEME.unit[12],
        md: FOUNDATION_THEME.unit[12]
      },
      spacing: FOUNDATION_THEME.unit[6]
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
  CHECKBOX: {
    gap: FOUNDATION_THEME.unit[8],
    slotGap: FOUNDATION_THEME.unit[6],
    checkboxMarginRight: FOUNDATION_THEME.unit[10], // HDFC specific margin

    indicator: { // Was 'root'
      size: {
        sm: {
          width: FOUNDATION_THEME.unit[16], // Slightly larger for HDFC
          height: FOUNDATION_THEME.unit[16],
        },
        md: {
          width: FOUNDATION_THEME.unit[20], // Slightly larger for HDFC
          height: FOUNDATION_THEME.unit[20],
        },
      },
      background: {
        unchecked: {
          default: FOUNDATION_THEME.colors.gray[0],
          hover: FOUNDATION_THEME.colors.gray[50],
          disabled: FOUNDATION_THEME.colors.gray[100],
          error: FOUNDATION_THEME.colors.gray[0],
        },
        checked: {
          default: FOUNDATION_THEME.colors.red[600], // HDFC Red for checked
          hover: FOUNDATION_THEME.colors.red[700],   // Darker HDFC Red
          disabled: FOUNDATION_THEME.colors.red[200], // Lighter HDFC Red
          error: FOUNDATION_THEME.colors.red[600],
        },
        indeterminate: {
          default: FOUNDATION_THEME.colors.red[600], // HDFC Red for indeterminate
          hover: FOUNDATION_THEME.colors.red[700],
          disabled: FOUNDATION_THEME.colors.red[200],
          error: FOUNDATION_THEME.colors.red[600],
        },
      },
      border: {
        radius: FOUNDATION_THEME.border.radius[2], // Sharper radius for HDFC
        width: FOUNDATION_THEME.border.width[2], // Thicker border for HDFC
        color: {
          unchecked: {
            default: FOUNDATION_THEME.colors.gray[400], // Darker border for HDFC
            hover: FOUNDATION_THEME.colors.red[700],   // HDFC Red on hover
            disabled: FOUNDATION_THEME.colors.gray[200],
            error: FOUNDATION_THEME.colors.orange[500], // Orange for error border
          },
          checked: {
            default: 'transparent',
            hover: 'transparent',
            disabled: 'transparent',
            error: FOUNDATION_THEME.colors.orange[500],
          },
          indeterminate: {
            default: 'transparent',
            hover: 'transparent',
            disabled: 'transparent',
            error: FOUNDATION_THEME.colors.orange[500],
          },
        },
      },
      focus: {
        outlineColor: FOUNDATION_THEME.colors.red[300], // HDFC Red focus outline
        outlineWidth: FOUNDATION_THEME.border.width[2],
        outlineOffset: FOUNDATION_THEME.unit[1],
        boxShadow: `0 0 0 3px ${FOUNDATION_THEME.colors.red[100]}`,
      },
    },

    icon: { // Was 'indicator'
      color: { // Was 'iconColor'
        checked: {
          default: FOUNDATION_THEME.colors.gray[0],
          disabled: FOUNDATION_THEME.colors.gray[0],
        },
        indeterminate: {
          default: FOUNDATION_THEME.colors.gray[0],
          disabled: FOUNDATION_THEME.colors.gray[0],
        },
      },
      size: { // Was 'iconSize', HDFC might prefer slightly different icon emphasis
        sm: {
          width: FOUNDATION_THEME.unit[10],
          height: FOUNDATION_THEME.unit[10],
          strokeWidth: 3, // Thicker stroke
        },
        md: {
          width: FOUNDATION_THEME.unit[12],
          height: FOUNDATION_THEME.unit[12],
          strokeWidth: 3, // Thicker stroke
        },
      },
    },

    content: { // New parent
      label: {
        color: {
          default: FOUNDATION_THEME.colors.gray[700], // HDFC label color
          disabled: FOUNDATION_THEME.colors.gray[400],
          error: FOUNDATION_THEME.colors.orange[700], // Orange for error label
        },
        font: { // HDFC might use specific font weights or sizes
          sm: {
            fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
            fontWeight: FOUNDATION_THEME.font.weight[600], // Bolder label
          },
          md: {
            fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
            fontWeight: FOUNDATION_THEME.font.weight[600], // Bolder label
          },
        },
      },
      subtext: {
        color: {
          default: FOUNDATION_THEME.colors.gray[500], // HDFC subtext color
          disabled: FOUNDATION_THEME.colors.gray[300],
          error: FOUNDATION_THEME.colors.orange[600], // Orange for error subtext
        },
        font: {
          sm: {
            fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
          md: {
            fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // Smaller subtext for md
            fontWeight: FOUNDATION_THEME.font.weight[400],
          },
        },
        spacing: {
          left: {
            sm: FOUNDATION_THEME.unit[8], // Reduced indent for HDFC subtext
            md: FOUNDATION_THEME.unit[8], // Reduced indent for HDFC subtext
          },
          top: FOUNDATION_THEME.unit[2], // Less top spacing
        },
      },
    },

    required: {
      color: FOUNDATION_THEME.colors.orange[600], // Orange for required
      spacing: FOUNDATION_THEME.unit[4], // More spacing for required
    },

    transition: {
      duration: '200ms', // Slightly different transition
      easing: 'ease-in-out',
    },
  },
  TABS: { // Added HDFC overrides for TABS
    rootLayout: {
      width: "100%",
    },
    list: {
      layout: {
        underline: {
          // HDFC might want a different gap or no bottom border initially
          gap: FOUNDATION_THEME.unit[16],
          borderBottomWidth: FOUNDATION_THEME.border.width[1],
          borderBottomColor: FOUNDATION_THEME.colors.gray[300], // Slightly darker for HDFC
        },
        boxed: {
          backgroundColor: FOUNDATION_THEME.colors.red[50], // HDFC subtle red bg
          padding: FOUNDATION_THEME.unit[6],
          borderRadius: FOUNDATION_THEME.border.radius[6], // Sharper radius
          gap: FOUNDATION_THEME.unit[2],
        },
        floating: {
          gap: FOUNDATION_THEME.unit[10],
        },
      },
      expandedLayout: {
        justifyContent: "space-around", // HDFC might prefer space-around
      },
      size: {
        lg: { height: FOUNDATION_THEME.unit[52] } 
      }
    },
    trigger: {
      size: {
        md: {
          height: FOUNDATION_THEME.unit[40], // Taller triggers for HDFC
          paddingX: FOUNDATION_THEME.unit[16],
          fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
        },
        lg: {
          height: FOUNDATION_THEME.unit[48], // Taller triggers for HDFC
          paddingX: FOUNDATION_THEME.unit[20],
          fontSize: FOUNDATION_THEME.font.size.body.lg.fontSize,
        },
      },
      font: { // HDFC might use brand font or different weights
        underline: {
          default: { fontWeight: FOUNDATION_THEME.font.weight[500] },
          active: { fontWeight: FOUNDATION_THEME.font.weight[700] }, // Bolder active
        },
        boxed: {
          default: { fontWeight: FOUNDATION_THEME.font.weight[500] },
          active: { fontWeight: FOUNDATION_THEME.font.weight[700] },
        },
        floating: {
          default: { fontWeight: FOUNDATION_THEME.font.weight[500] },
          active: { fontWeight: FOUNDATION_THEME.font.weight[700] },
        },
      },
      color: { // HDFC brand colors
        underline: {
          default: FOUNDATION_THEME.colors.gray[600],
          hover: FOUNDATION_THEME.colors.red[700],
          active: FOUNDATION_THEME.colors.red[600],
          disabled: FOUNDATION_THEME.colors.gray[300],
        },
        boxed: {
          default: FOUNDATION_THEME.colors.red[700],
          hover: FOUNDATION_THEME.colors.red[800],
          active: FOUNDATION_THEME.colors.gray[0], // White text on active red bg
          disabled: FOUNDATION_THEME.colors.red[200],
        },
        floating: {
          default: FOUNDATION_THEME.colors.gray[600],
          hover: FOUNDATION_THEME.colors.red[700],
          active: FOUNDATION_THEME.colors.red[600],
          disabled: FOUNDATION_THEME.colors.gray[300],
        },
      },
      background: {
        underline: {
          // default, hover, active usually transparent for underline
        },
        boxed: {
          default: "transparent",
          hover: FOUNDATION_THEME.colors.red[100], // Light red hover
          active: FOUNDATION_THEME.colors.red[600], // HDFC red active bg
        },
        floating: {
          default: "transparent",
          hover: FOUNDATION_THEME.colors.red[50],
          active: FOUNDATION_THEME.colors.red[100], // Subtle red active for floating
        },
      },
      border: {
        underline: {
          underlineHeight: FOUNDATION_THEME.border.width[2],
          underlineColor: FOUNDATION_THEME.colors.red[600], // HDFC red underline
        },
        boxed: {
          radius: FOUNDATION_THEME.border.radius[6],
        },
        floating: {
          radius: FOUNDATION_THEME.border.radius[6],
        },
      },
      shadow: {
        boxed: {
          active: FOUNDATION_THEME.shadows.md, // Slightly more prominent shadow
        },
      },
      iconSpacing: {
        gap: FOUNDATION_THEME.unit[6], // Tighter icon spacing
      },
      focus: {
        ringWidth: "3px",
        ringColor: FOUNDATION_THEME.colors.red[300], // HDFC red focus ring
        ringOffset: FOUNDATION_THEME.unit[1],
      },
      disabledOpacity: FOUNDATION_THEME.opacity[40], // More opaque disabled state
    },
    content: {
      padding: FOUNDATION_THEME.unit[20],
      marginTop: FOUNDATION_THEME.unit[20],
    },
    transition: {
      duration: "0.15s", // Faster transitions for HDFC
      easing: "ease-out",
    }
  }
};

export default HDFC_COMPONENT_TOKENS;
