import { CSSObject } from "styled-components";
import { PopoverSize } from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import { FoundationTokenType } from "../../tokens/theme.token";

export type PopoverTokenType = {
  background: CSSObject["backgroundColor"];
  border: CSSObject["border"];
  shadow: CSSObject["boxShadow"];
  padding: CSSObject["padding"];
  gap: CSSObject["gap"];
  zIndex: CSSObject["zIndex"];
  borderRadius: CSSObject["borderRadius"];
  headerContainer: {
    heading: {
      fontSize: {
        [key in PopoverSize]: CSSObject["fontSize"];
      };
      fontWeight: {
        [key in PopoverSize]: CSSObject["fontWeight"];
      };
      color: {
        [key in PopoverSize]: CSSObject["color"];
      };
    };
    description: {
      fontSize: {
        [key in PopoverSize]: CSSObject["fontSize"];
      };
      color: {
        [key in PopoverSize]: CSSObject["color"];
      };
      fontWeight: {
        [key in PopoverSize]: CSSObject["fontWeight"];
      };
    };
  };
  footer: {
    justifyContent: CSSObject["justifyContent"];
    gap: CSSObject["gap"];
  };
};

const popoverTokens: PopoverTokenType = {
  background: FOUNDATION_THEME.colors.gray[0],
  border: FOUNDATION_THEME.border.radius[8],
  shadow: FOUNDATION_THEME.shadows.md,
  padding: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[16]}`,
  gap: FOUNDATION_THEME.unit[12],
  zIndex: 1000,
  borderRadius: FOUNDATION_THEME.border.radius[8],
  headerContainer: {
    heading: {
      fontSize: {
        small: "14px",
        medium: "16px",
      },
      fontWeight: {
        small: 600,
        medium: 600,
      },
      color: {
        small: FOUNDATION_THEME.colors.gray[900],
        medium: FOUNDATION_THEME.colors.gray[900],
      },
    },
    description: {
      fontSize: {
        small: "12px",
        medium: "14px",
      },
      fontWeight: {
        small: 400,
        medium: 400,
      },
      color: {
        small: FOUNDATION_THEME.colors.gray[500],
        medium: FOUNDATION_THEME.colors.gray[500],
      },
    },
  },
  footer: {
    justifyContent: "flex-end",
    gap: FOUNDATION_THEME.unit[12],
  },
};

export const getPopoverTokens = (
  foundationTokens: FoundationTokenType
): PopoverTokenType => {
  return {
    background: foundationTokens.colors.gray[0],
    border: foundationTokens.border.radius[8],
    shadow: foundationTokens.shadows.md,
    padding: `${foundationTokens.unit[12]} ${foundationTokens.unit[16]}`,
    gap: foundationTokens.unit[12],
    zIndex: 1000,
    borderRadius: foundationTokens.border.radius[8],
    headerContainer: {
      heading: {
        fontSize: {
          small: "14px",
          medium: "16px",
        },
        fontWeight: {
          small: 600,
          medium: 600,
        },
        color: {
          small: foundationTokens.colors.gray[900],
          medium: foundationTokens.colors.gray[900],
        },
      },
      description: {
        fontSize: {
          small: "12px",
          medium: "14px",
        },
        fontWeight: {
          small: 400,
          medium: 400,
        },
        color: {
          small: foundationTokens.colors.gray[500],
          medium: foundationTokens.colors.gray[500],
        },
      },
    },
    footer: {
      justifyContent: "flex-end",
      gap: foundationTokens.unit[12],
    },
  };
};

export default popoverTokens;
