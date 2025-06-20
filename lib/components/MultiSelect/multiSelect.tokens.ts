import { CSSObject } from "styled-components";
import {
  MultiSelectMenuSize,
  MultiSelectSelectionTagType,
  MultiSelectVariant,
} from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import { FoundationTokenType } from "../../tokens/theme.token";

type TriggerStates = "open" | "closed" | "hover" | "focus";

export type MultiSelectTokensType = {
  trigger: {
    padding: {
      [key in MultiSelectMenuSize]: CSSObject["padding"];
    };
    borderRadius: {
      [key in MultiSelectMenuSize]: CSSObject["borderRadius"];
    };
    boxShadow: {
      [key in MultiSelectVariant]: CSSObject["boxShadow"];
    };
    backgroundColor: {
      container: {
        [key in TriggerStates]: CSSObject["backgroundColor"];
      };
    };
    outline: {
      [key in MultiSelectVariant]: {
        [key in TriggerStates]: CSSObject["outline"];
      };
    };
    selectionTag: {
      container: {
        [key in MultiSelectSelectionTagType]: {
          color: CSSObject["color"];
          backgroundColor: CSSObject["backgroundColor"];
          fontWeight: CSSObject["fontWeight"];
        };
      };
    };
  };
};

export const multiSelectTokens: MultiSelectTokensType = {
  trigger: {
    padding: {
      sm: "6px 14px",
      md: "8px 14px",
      lg: "10px 14px",
    },
    borderRadius: {
      sm: FOUNDATION_THEME.unit[10],
      md: FOUNDATION_THEME.unit[10],
      lg: FOUNDATION_THEME.unit[10],
    },
    boxShadow: {
      container: FOUNDATION_THEME.shadows.sm,
      "no-container": "none",
    },
    backgroundColor: {
      container: {
        open: FOUNDATION_THEME.colors.gray[25],
        closed: FOUNDATION_THEME.colors.gray[0],
        hover: FOUNDATION_THEME.colors.gray[50],
        focus: FOUNDATION_THEME.colors.gray[50],
      },
    },
    outline: {
      container: {
        open: `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`,
        closed: `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`,
        hover: `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`,
        focus: `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`,
      },
      "no-container": {
        open: undefined,
        closed: undefined,
        hover: undefined,
        focus: undefined,
      },
    },
    selectionTag: {
      container: {
        [MultiSelectSelectionTagType.TEXT]: {
          color: FOUNDATION_THEME.colors.gray[700],
          backgroundColor: "transparent",
          fontWeight: 500,
        },
        [MultiSelectSelectionTagType.COUNT]: {
          color: FOUNDATION_THEME.colors.gray[0],
          backgroundColor: FOUNDATION_THEME.colors.primary[600],
          fontWeight: 500,
        },
      },
    },
  },
};

export const getMultiSelectTokens = (foundationToken: FoundationTokenType) => {
  return {
    trigger: {
      padding: {
        sm: "6px 14px",
        md: "8px 14px",
        lg: "10px 14px",
      },
      borderRadius: {
        sm: foundationToken.unit[10],
        md: foundationToken.unit[10],
        lg: foundationToken.unit[10],
      },
      boxShadow: {
        container: foundationToken.shadows.xs,
        "no-container": "none",
      },
      backgroundColor: {
        container: {
          open: foundationToken.colors.gray[25],
          closed: foundationToken.colors.gray[0],
          hover: foundationToken.colors.gray[50],
        },
      },
      outline: {
        container: {
          open: `1px solid ${foundationToken.colors.gray[200]} !important`,
          closed: `1px solid ${foundationToken.colors.gray[200]} !important`,
          hover: `1px solid ${foundationToken.colors.gray[200]} !important`,
          focus: `1px solid ${foundationToken.colors.gray[400]} !important`,
        },
        "no-container": {
          open: undefined,
          closed: undefined,
          hover: undefined,
          focus: undefined,
        },
      },
      selectionTag: {
        container: {
          text: {
            color: foundationToken.colors.gray[400],
            backgroundColor: "transparent",
            fontWeight: 500,
          },
          count: {
            color: foundationToken.colors.gray[0],
            backgroundColor: foundationToken.colors.primary[600],
            fontWeight: 500,
          },
        },
      },
    },
  };
};
