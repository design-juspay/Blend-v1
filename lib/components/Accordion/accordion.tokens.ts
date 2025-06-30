import { CSSObject } from "styled-components";
import { AccordionType } from "./types";
import { FoundationTokenType } from "../../tokens/theme.token";


export type AccordionState = "default" | "hover" | "active" | "disabled" | "open";

export type AccordionTokenType = {
  width: CSSObject["width"];
  display: CSSObject["display"];
  flexDirection: CSSObject["flexDirection"];
  gap: {
    [key in AccordionType]: CSSObject["gap"];
  };
  containerBorderRadius: {
    [key in AccordionType]: CSSObject["borderRadius"];
  };
  
  itemBorder: {
    [key in AccordionType]: CSSObject["border"];
  };
  itemBorderBottom: {
    [key in AccordionType]: CSSObject["borderBottom"];
  };
  itemBorderBottomState: {
    [key in AccordionType]: {
      closed: CSSObject["borderBottom"];
      open: CSSObject["borderBottom"];
    };
  };
  itemBorderRadius: {
    [key in AccordionType]: CSSObject["borderRadius"];
  };
  itemOverflow: {
    [key in AccordionType]: CSSObject["overflow"];
  };
  triggerDisplay: CSSObject["display"];
  triggerWidth: CSSObject["width"];
  triggerTextAlign: CSSObject["textAlign"];
  triggerTransition: CSSObject["transition"];
  triggerCursor: CSSObject["cursor"];
  triggerBorder: CSSObject["border"];
  triggerOutline: CSSObject["outline"];
  triggerPadding: {
    [key in AccordionType]: CSSObject["padding"];
  };
  triggerBackgroundColor: {
    [key in AccordionType]: {
      [key in AccordionState]: CSSObject["backgroundColor"];
    };
  };
  triggerBorderBottomState: {
    [key in AccordionType]: {
      closed: CSSObject["borderBottom"];
      open: CSSObject["borderBottom"];
    };
  };
  triggerFocusOutline: CSSObject["outline"];
  triggerFocusOutlineOffset: CSSObject["outlineOffset"];
  
  contentOverflow: CSSObject["overflow"];
  contentTransition: CSSObject["transition"];
  contentPadding: {
    [key in AccordionType]: CSSObject["padding"];
  };
  
  contentWrapperPadding: {
    [key in AccordionType]: CSSObject["padding"];
  };
  contentWrapperBorderTop: {
    [key in AccordionType]: CSSObject["borderTop"];
  };
  
  titleFontSize: CSSObject["fontSize"];
  titleFontWeight: CSSObject["fontWeight"];
  titleColor: {
    enabled: CSSObject["color"];
    disabled: CSSObject["color"];
  };
  
  subtextFontSize: CSSObject["fontSize"];
  subtextMarginTop: CSSObject["marginTop"];
  subtextPaddingLeft: CSSObject["paddingLeft"];
  subtextColor: {
    enabled: CSSObject["color"];
    disabled: CSSObject["color"];
  };
  
  leftSlotFlexShrink: CSSObject["flexShrink"];
  leftSlotDisplay: CSSObject["display"];
  leftSlotAlignItems: CSSObject["alignItems"];
  leftSlotJustifyContent: CSSObject["justifyContent"];
  
  rightSlotFlexShrink: CSSObject["flexShrink"];
  rightSlotDisplay: CSSObject["display"];
  rightSlotAlignItems: CSSObject["alignItems"];
  rightSlotJustifyContent: CSSObject["justifyContent"];
  
  headerRowDisplay: CSSObject["display"];
  headerRowAlignItems: CSSObject["alignItems"];
  headerRowWidth: CSSObject["width"];
  headerRowPosition: CSSObject["position"];
  headerSlotGap: CSSObject["gap"];
  
  chevronRightPosition: CSSObject["position"];
  chevronRightRight: CSSObject["right"];
  chevronRightTop: CSSObject["top"];
  chevronRightDisplay: CSSObject["display"];
  chevronRightAlignItems: CSSObject["alignItems"];
  chevronRightJustifyContent: CSSObject["justifyContent"];
  chevronRightHeight: CSSObject["height"];
  
  chevronLeftDisplay: CSSObject["display"];
  chevronLeftAlignItems: CSSObject["alignItems"];
  chevronLeftJustifyContent: CSSObject["justifyContent"];
  chevronLeftFlexShrink: CSSObject["flexShrink"];
  
  chevronIconWidth: CSSObject["width"];
  chevronIconHeight: CSSObject["height"];
  chevronIconColor: {
    enabled: CSSObject["color"];
    disabled: CSSObject["color"];
  };
};

export const getAccordionToken = (foundationToken: FoundationTokenType): AccordionTokenType => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: {
      [AccordionType.BORDER]: foundationToken.unit[24],
      [AccordionType.NO_BORDER]: foundationToken.unit[0],
    },
    containerBorderRadius: {
      [AccordionType.BORDER]: foundationToken.border.radius[8],
      [AccordionType.NO_BORDER]: foundationToken.unit[0],
    },
    
    itemBorder: {
      [AccordionType.BORDER]: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
      [AccordionType.NO_BORDER]: "none",
    },
    itemBorderBottom: {
      [AccordionType.BORDER]: "none",
      [AccordionType.NO_BORDER]: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
    },
    itemBorderBottomState: {
      [AccordionType.BORDER]: {
        closed: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
        open: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
      },
      [AccordionType.NO_BORDER]: {
        closed: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
        open: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
      },
    },
    itemBorderRadius: {
      [AccordionType.BORDER]: foundationToken.border.radius[8],
      [AccordionType.NO_BORDER]: foundationToken.unit[0],
    },
    itemOverflow: {
      [AccordionType.BORDER]: "hidden",
      [AccordionType.NO_BORDER]: "visible",
    },
    
    triggerDisplay: "flex",
    triggerWidth: "100%",
    triggerTextAlign: "left",
    triggerTransition: "all 0.2s ease",
    triggerCursor: "pointer",
    triggerBorder: "none",
    triggerOutline: "none",
    triggerPadding: {
      [AccordionType.BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[16]}`,
      [AccordionType.NO_BORDER]: `${foundationToken.unit[16]} ${foundationToken.unit[12]}`,
    },
    triggerBackgroundColor: {
      [AccordionType.BORDER]: {
        default: "transparent",
        hover: foundationToken.colors.gray[50],
        active: foundationToken.colors.gray[50],
        disabled: foundationToken.colors.gray[50],
        open: foundationToken.colors.gray[50],
      },
      [AccordionType.NO_BORDER]: {
        default: "transparent",
        hover: foundationToken.colors.gray[50],
        active: foundationToken.colors.gray[50],
        disabled: foundationToken.colors.gray[50],
        open: "transparent",
      },
    },
    triggerBorderBottomState: {
      [AccordionType.BORDER]: {
        closed: "none",
        open: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
      },
      [AccordionType.NO_BORDER]: {
        closed: "none",
        open: "none",
      },
    },
    triggerFocusOutline: `${foundationToken.border.width[2]} solid ${foundationToken.colors.primary[500]}`,
    triggerFocusOutlineOffset: foundationToken.unit[2],
    
    contentOverflow: "hidden",
    contentTransition: "all 0.2s ease",
    contentPadding: {
      [AccordionType.BORDER]: `${foundationToken.unit[2]} 0`,
      [AccordionType.NO_BORDER]: foundationToken.unit[0],
    },
    
    contentWrapperPadding: {
      [AccordionType.BORDER]: `${foundationToken.unit[12]} ${foundationToken.unit[12]}`,
      [AccordionType.NO_BORDER]: `${foundationToken.unit[12]} ${foundationToken.unit[12]}`,
    },
    contentWrapperBorderTop: {
      [AccordionType.BORDER]: "none",
      [AccordionType.NO_BORDER]: `${foundationToken.border.width[1]} solid ${foundationToken.colors.gray[200]}`,
    },
    
    titleFontSize: foundationToken.font.size.body.md.fontSize,
    titleFontWeight: foundationToken.font.weight[600],
    titleColor: {
      enabled: foundationToken.colors.gray[800],
      disabled: foundationToken.colors.gray[500],
    },
    
    subtextFontSize: foundationToken.font.size.body.md.fontSize,
    subtextMarginTop: foundationToken.unit[4],
    subtextPaddingLeft: foundationToken.unit[20],
    subtextColor: {
      enabled: foundationToken.colors.gray[600],
      disabled: foundationToken.colors.gray[300],
    },
    
    leftSlotFlexShrink: 0,
    leftSlotDisplay: "flex",
    leftSlotAlignItems: "center",
    leftSlotJustifyContent: "center",
    
    rightSlotFlexShrink: 0,
    rightSlotDisplay: "flex",
    rightSlotAlignItems: "center",
    rightSlotJustifyContent: "center",
    
    headerRowDisplay: "flex",
    headerRowAlignItems: "flex-start",
    headerRowWidth: "100%",
    headerRowPosition: "relative",
    headerSlotGap: foundationToken.unit[8],
    chevronRightPosition: "absolute",
    chevronRightRight: 0,
    chevronRightTop: 0,
    chevronRightDisplay: "flex",
    chevronRightAlignItems: "center",
    chevronRightJustifyContent: "center",
    chevronRightHeight: "100%",
    
    chevronLeftDisplay: "flex",
    chevronLeftAlignItems: "center",
    chevronLeftJustifyContent: "center",
    chevronLeftFlexShrink: 0,
    chevronIconWidth: foundationToken.unit[16],
    chevronIconHeight: foundationToken.unit[16],
    chevronIconColor: {
      enabled: foundationToken.colors.gray[500],
      disabled: foundationToken.colors.gray[300],
    },
  };
};