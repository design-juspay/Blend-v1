import { CSSObject } from "styled-components";
import { AccordionType } from "./types";
import { FoundationTokenType } from "../../tokens/theme.token";

export type AccordionState = "default" | "hover" | "active" | "disabled" | "open" | "closed";

export type AccordionTokenType = {
  gap: {
    [key in AccordionType]: CSSObject["gap"];
  };
  borderRadius: {
    [key in AccordionType]: CSSObject["borderRadius"];
  };
  
  border: {
    [key in AccordionType]: {
      default: {
        [key in AccordionState]?: CSSObject["border"];
      };
    };
  };
  
  padding: {
    [key in AccordionType]: CSSObject["padding"];
  };
  backgroundColor: {
    [key in AccordionType]: {
      default: {
        [key in AccordionState]?: CSSObject["backgroundColor"];
      };
    };
  };
  
  focusOutline: CSSObject["outline"];
  focusOutlineOffset: CSSObject["outlineOffset"];
  
  contentPadding: {
    [key in AccordionType]: CSSObject["padding"];
  };
  
  fontSize: CSSObject["fontSize"];
  fontWeight: CSSObject["fontWeight"];
  color: {
    default: {
      enabled: CSSObject["color"];
      disabled: CSSObject["color"];
    };
  };
  subtextFontSize: CSSObject["fontSize"];
  subtextGap: CSSObject["gap"];
  subtextColor: {
    default: {
      enabled: CSSObject["color"];
      disabled: CSSObject["color"];
    };
  };
  
  chevronIconWidth: CSSObject["width"];
  chevronIconHeight: CSSObject["height"];
  chevronIconColor: {
    default: {
      enabled: CSSObject["color"];
      disabled: CSSObject["color"];
    };
  };
  
  separatorColor: {
    [key in AccordionType]: CSSObject["color"];
  };
  separatorHeight: CSSObject["height"];
};

export const getAccordionToken = (foundationToken: FoundationTokenType): AccordionTokenType => {
  return {
    gap: {
      [AccordionType.BORDER]: foundationToken.unit[24],
      [AccordionType.NO_BORDER]: foundationToken.unit[8],
    },
    borderRadius: {
      [AccordionType.BORDER]: foundationToken.border.radius[8],
      [AccordionType.NO_BORDER]: foundationToken.border.radius[8],
    },
    
    border: {
      [AccordionType.BORDER]: {
        default: {
          default: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
        },
      },
      [AccordionType.NO_BORDER]: {
        default: {
          default: "none",
        },
      },
    },
    
    padding: {
      [AccordionType.BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[16]}`,
      [AccordionType.NO_BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[12]}`,
    },
    backgroundColor: {
      [AccordionType.BORDER]: {
        default: {
          default: "transparent",
          hover: foundationToken.colors.gray[50],
          active: foundationToken.colors.gray[50],
          disabled: foundationToken.colors.gray[50],
          open: foundationToken.colors.gray[50],
        },
      },
      [AccordionType.NO_BORDER]: {
        default: {
          default: "transparent",
          hover: foundationToken.colors.gray[50],
          active: foundationToken.colors.gray[50],
          disabled: foundationToken.colors.gray[50],
          open: "transparent",
        },
      },
    },
    
    focusOutline: `${foundationToken.border.width[2]} solid ${foundationToken.colors.primary[500]}`,
    focusOutlineOffset: foundationToken.unit[2],
    
    contentPadding: {
      [AccordionType.BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[16]}`,
      [AccordionType.NO_BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[12]}`,
    },
    
    fontSize: foundationToken.font.size.body.md.fontSize,
    fontWeight: foundationToken.font.weight[600],
    color: {
      default: {
        enabled: foundationToken.colors.gray[800],
        disabled: foundationToken.colors.gray[500],
      },
    },
    subtextFontSize: foundationToken.font.size.body.md.fontSize,
    subtextGap: foundationToken.unit[4],
    subtextColor: {
      default: {
        enabled: foundationToken.colors.gray[600],
        disabled: foundationToken.colors.gray[300],
      },
    },
    
    chevronIconWidth: foundationToken.unit[16],
    chevronIconHeight: foundationToken.unit[16],
    chevronIconColor: {
      default: {
        enabled: foundationToken.colors.gray[500],
        disabled: foundationToken.colors.gray[300],
      },
    },
    
    separatorColor: {
      [AccordionType.BORDER]: foundationToken.colors.gray[200],
      [AccordionType.NO_BORDER]: foundationToken.colors.gray[200],
    },
    separatorHeight: foundationToken.border.width[1],
  };
};