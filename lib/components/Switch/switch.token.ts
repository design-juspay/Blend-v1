import { ThemeType } from "../../tokens";
import { CSSObject } from "styled-components";

export type SwitchTokensType = Readonly<{
  root: {
    background: {
      default: {
        active: CSSObject["backgroundColor"];
        inactive: CSSObject["backgroundColor"];
        disabled: CSSObject["backgroundColor"];
      };
    };
    border: {
      radius: CSSObject["borderRadius"];
      focus: {
        color: CSSObject["borderColor"];
      };
    };
    size: {
      sm: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
      md: {
        width: CSSObject["width"];
        height: CSSObject["height"];
      };
    };
    spacing: {
      rightSlot: CSSObject["margin"];
      marginRight: CSSObject["marginRight"];
    };
  };
  thumb: {
    background: {
      default: CSSObject["backgroundColor"];
    };
    border: {
      default: {
        color: CSSObject["borderColor"];
        width: CSSObject["borderWidth"];
      };
    };
    size: {
      sm: {
        width: CSSObject["width"];
        height: CSSObject["height"];
        top: CSSObject["top"];
        offset: {
          active: CSSObject["left"];
          inactive: CSSObject["left"];
        };
      };
      md: {
        width: CSSObject["width"];
        height: CSSObject["height"];
        top: CSSObject["top"];
        offset: {
          active: CSSObject["left"];
          inactive: CSSObject["left"];
        };
      };
    };
  };
  label: {
    color: {
      default: CSSObject["color"];
      disabled: CSSObject["color"];
    };
    font: {
      weight: CSSObject["fontWeight"];
      size: {
        sm: CSSObject["fontSize"];
        md: CSSObject["fontSize"];
      };
    };
  };
  subtext: {
    color: {
      default: CSSObject["color"];
      disabled: CSSObject["color"];
      error: CSSObject["color"];
    };
    font: {
      size: {
        sm: CSSObject["fontSize"];
        md: CSSObject["fontSize"];
      };
    };
    spacing: {
      left: {
        sm: CSSObject["marginLeft"];
        md: CSSObject["marginLeft"];
      };
      top: CSSObject["marginTop"];
    };
  };
  group: {
    label: {
      color: CSSObject["color"];
      font: {
        weight: CSSObject["fontWeight"];
      };
    };
    spacing: CSSObject["margin"];
  };
  required: {
    color: CSSObject["color"];
    spacing: CSSObject["margin"];
  };
  transition: {
    duration: CSSObject["transitionDuration"];
    easing: CSSObject["transitionTimingFunction"];
  };
}>;

export const getSwitchTokens = (foundationToken: ThemeType): SwitchTokensType => {
  return {
    root: {
      background: {
        default: {
          active: foundationToken.colors.primary[500],
          inactive: foundationToken.colors.gray[150],
          disabled: foundationToken.colors.primary[300],
        }
      },
      border: {
        radius: foundationToken.border.radius.full,
        focus: {
          color: foundationToken.colors.primary[200]
        }
      },
      size: {
        sm: {
          width: foundationToken.unit[24],
          height: foundationToken.unit[12]
        },
        md: {
          width: foundationToken.unit[28],
          height: foundationToken.unit[14]
        }
      },
      spacing: {
        rightSlot: foundationToken.unit[6],
        marginRight: foundationToken.unit[8]
      }
    },
    thumb: {
      background: {
        default: foundationToken.colors.gray[25]
      },
      border: {
        default: {
          color: foundationToken.colors.gray[300],
          width: '0.5px'
        }
      },
      size: {
        sm: {
          width: foundationToken.unit[10],
          height: foundationToken.unit[10],
          top: '1px',
          offset: {
            active: foundationToken.unit[12],
            inactive: foundationToken.unit[2]
          }
        },
        md: {
          width: foundationToken.unit[12],
          height: foundationToken.unit[12],
          top: '1px',
          offset: {
            active: foundationToken.unit[14],
            inactive: foundationToken.unit[2]
          }
        }
      }
    },
    label: {
      color: {
        default: foundationToken.colors.gray[700],
        disabled: foundationToken.colors.gray[300]
      },
      font: {
        weight: 500,
        size: {
          sm: `${foundationToken.font.size.body.sm.fontSize}px`,
          md: `${foundationToken.font.size.body.md.fontSize}px`
        }
      }
    },
    subtext: {
      color: {
        default: foundationToken.colors.gray[400],
        disabled: foundationToken.colors.gray[200],
        error: foundationToken.colors.red[600]
      },
      font: {
        size: {
          sm: `${foundationToken.font.size.body.sm.fontSize}px`,
          md: `${foundationToken.font.size.body.md.fontSize}px`
        }
      },
      spacing: {
        left: {
          sm: foundationToken.unit[32],
          md: foundationToken.unit[36]
        },
        top: foundationToken.unit[4]
      }
    },
    group: {
      label: {
        color: foundationToken.colors.gray[700],
        font: {
          weight: 500
        }
      },
      spacing: foundationToken.unit[16]
    },
    required: {
      color: foundationToken.colors.red[600],
      spacing: foundationToken.unit[2]
    },
    transition: {
      duration: '300ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };
}; 