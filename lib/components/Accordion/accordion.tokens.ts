import { CSSObject } from "styled-components";
import { FOUNDATION_THEME, ThemeType } from "../../tokens";
import { AccordionType } from "./types";


export type AccordionState = 'default' | 'disabled' | 'open';

export type AccordionTokensType = Readonly<{
  root: {
    layout: {
      width: CSSObject['width'];
    };
    containerStyling: {
      [key in AccordionType]: {
        display?: CSSObject['display'];
        flexDirection?: CSSObject['flexDirection'];
        gap?: CSSObject['gap'];
        borderRadius?: CSSObject['borderRadius'];
        boxShadow?: CSSObject['boxShadow'];
      };
    };
  };

  item: {
    base: {
      borderBottom?: CSSObject['borderBottom'];
      overflow?: CSSObject['overflow'];
    };
    variantStyling: {
      [key in AccordionType]: {
        border?: CSSObject['border'];
        borderRadius?: CSSObject['borderRadius'];
        borderBottom?: CSSObject['borderBottom'];
        overflow?: CSSObject['overflow'];
      };
    };
    stateStyling: {
      disabled: {
        backgroundColor?: CSSObject['backgroundColor'];
      };
    };
  };

  trigger: {
    base: {
      display: CSSObject['display'];
      width: CSSObject['width'];
      textAlign: CSSObject['textAlign'];
      transition: CSSObject['transition'];
      cursor: CSSObject['cursor'];
      backgroundColor: CSSObject['backgroundColor'];
      border: CSSObject['border'];
      outline: CSSObject['outline'];
    };
    variantStyling: {
      [key in AccordionType]: {
        padding: CSSObject['padding'];
        hover?: { // Nested hover state
          backgroundColor?: CSSObject['backgroundColor'];
        }
      };
    };
    stateStyling: {
      disabled: {
        cursor: CSSObject['cursor'];
        backgroundColor?: CSSObject['backgroundColor'];
      };
      open: {
        backgroundColor?: CSSObject['backgroundColor'];
        borderBottom?: CSSObject['borderBottom'];
      };
    };
    focusVisible: {
        outline: CSSObject['outline'];
        outlineOffset: CSSObject['outlineOffset'];
    };
  };
  
  headerRow: {
    layout: {
        display: CSSObject['display'];
        alignItems: CSSObject['alignItems'];
        width: CSSObject['width'];
        position: CSSObject['position'];
    };
  };

  title: {
    font: {
      size: CSSObject['fontSize'];
      weight: CSSObject['fontWeight'];
    };
    color: {
      default: CSSObject['color'];
      disabled: CSSObject['color'];
    };
  };

  subtext: {
    font: {
      size: CSSObject['fontSize'];
    };
    color: {
      default: CSSObject['color'];
      disabled: CSSObject['color'];
    };
    spacing: {
      marginTop: CSSObject['marginTop'];
      paddingLeft: CSSObject['paddingLeft'];
    };
  };
  
  leftSlot: {
    spacing: {
        marginRight: CSSObject['marginRight'];
    };
    layout: {
        flexShrink: CSSObject['flexShrink'];
        display: CSSObject['display'];
        alignItems: CSSObject['alignItems'];
        justifyContent: CSSObject['justifyContent'];
    };
  };
  
  rightSlot: {
    spacing: {
        marginLeft: CSSObject['marginLeft'];
    };
    layout: {
        flexShrink: CSSObject['flexShrink'];
        display: CSSObject['display'];
        alignItems: CSSObject['alignItems'];
        justifyContent: CSSObject['justifyContent'];
    };
  };

  chevronIcon: {
    dimension: {
      width: CSSObject['width'];
      height: CSSObject['height'];
    };
    color: {
      default: CSSObject['color'];
      disabled: CSSObject['color'];
    };
    layout: {
        rightPosition: {
            position: CSSObject['position'];
            right: CSSObject['right'];
            top: CSSObject['top'];
            height: CSSObject['height'];
            display: CSSObject['display'];
            alignItems: CSSObject['alignItems'];
            justifyContent: CSSObject['justifyContent'];
        };
        leftPosition: {
            marginRight: CSSObject['marginRight'];
            flexShrink: CSSObject['flexShrink'];
            display: CSSObject['display'];
            alignItems: CSSObject['alignItems'];
            justifyContent: CSSObject['justifyContent'];
        };
    };
    transition: CSSObject['transition'];
    transformOrigin: CSSObject['transformOrigin'];
  };

  content: {
    base: {
      overflow: CSSObject['overflow'];
      transition: CSSObject['transition'];
    };
    variantStyling: {
      [key in AccordionType]: {
        padding?: CSSObject['padding'];
      };
    };
  };
  
  contentWrapper: {
    variantStyling: {
        [key in AccordionType]: {
            padding: CSSObject['padding'];
            borderTop?: CSSObject['borderTop'];
        };
    };
  };
}>;

export const getAccordionTokens = (foundationToken: ThemeType): AccordionTokensType => {
  const { colors, unit, font, border, shadows } = foundationToken;

  return {
    root: {
      layout: {
        width: "100%",
      },
      containerStyling: {
        [AccordionType.BORDER]: {
          display: "flex",
          flexDirection: "column",
          gap: unit[24],
          borderRadius: border.radius[8],
          boxShadow: shadows.xs,
        },
        [AccordionType.NO_BORDER]: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    item: {
      base: {
        borderBottom: `${border.width[1]} solid ${colors.gray[200]}`,
      },
      variantStyling: {
        [AccordionType.BORDER]: {
          border: `${border.width[1]} solid ${colors.gray[200]}`,
          borderRadius: border.radius[8],
          overflow: "hidden",
        },
        [AccordionType.NO_BORDER]: {
        },
      },
      stateStyling: {
        disabled: {
          backgroundColor: colors.gray[50],
        },
      },
    },
    trigger: {
      base: {
        display: "flex",
        width: "100%",
        textAlign: "left",
        transition: "all 0.2s ease",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      },
      variantStyling: {
        [AccordionType.BORDER]: {
          padding: `${unit[16]} ${unit[16]}`,
          hover: {
            backgroundColor: colors.gray[50],
          }
        },
        [AccordionType.NO_BORDER]: {
          padding: `${unit[16]} ${unit[12]}`,
          hover: {
            backgroundColor: colors.gray[50],
          }
        },
      },
      stateStyling: {
        disabled: {
          cursor: "not-allowed",
          backgroundColor: colors.gray[50],
        },
        open: {
          backgroundColor: colors.gray[50],
          borderBottom: `${border.width[1]} solid ${colors.gray[200]}`,
        },
      },
      focusVisible: {
        outline: `${border.width[2]} solid ${colors.primary[500]}`,
        outlineOffset: unit[2],
      },
    },
    headerRow: {
        layout: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "relative",
        }
    },
    title: {
      font: {
        size: font.size.body.md.fontSize,
        weight: font.weight[600],
      },
      color: {
        default: colors.gray[800],
        disabled: colors.gray[500],
      },
    },
    subtext: {
      font: {
        size: font.size.body.md.fontSize,
      },
      color: {
        default: colors.gray[600],
        disabled: colors.gray[300],
      },
      spacing: {
        marginTop: unit[4],
        paddingLeft: unit[20],
      },
    },
    leftSlot: {
        spacing: {
            marginRight: unit[8],
        },
        layout: {
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
    },
    rightSlot: {
        spacing: {
            marginLeft: unit[8],
        },
        layout: {
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
    },
    chevronIcon: {
      dimension: {
        width: unit[16],
        height: unit[16],
      },
      color: {
        default: colors.gray[500],
        disabled: colors.gray[300],
      },
      layout: {
        rightPosition: {
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        leftPosition: {
            marginRight: unit[6],
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
      },
      transition: 'transform 200ms ease',
      transformOrigin: 'center',
    },
    content: {
      base: {
        overflow: "hidden",
        transition: "all 0.2s ease",
      },
      variantStyling: {
        [AccordionType.BORDER]: {
          padding: `${unit[2]} 0`,
        },
        [AccordionType.NO_BORDER]: {
          padding: "0",
        },
      },
    },
    contentWrapper: {
        variantStyling: {
            [AccordionType.BORDER]: {
                padding: `${unit[12]} ${unit[12]}`,
            },
            [AccordionType.NO_BORDER]: {
                borderTop: `${border.width[1]} solid ${colors.gray[200]}`,
                padding: `${unit[12]} ${unit[12]}`,
            }
        }
    }
  };
};

const accordionTokens: AccordionTokensType = getAccordionTokens(FOUNDATION_THEME);

export default accordionTokens;
