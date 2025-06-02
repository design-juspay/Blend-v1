import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../../tokens";

type SearchInputTokens = {
  input: {
    gap: number;
    padding: {
      x: number;
      y: number;
    };
    border: {
      radius: number;
      color: {
        default: CSSObject["borderColor"];
        hover: CSSObject["borderColor"];
        focus: CSSObject["borderColor"];
        error: CSSObject["borderColor"];
        disabled: CSSObject["borderColor"];
      };
    };
    boxShadow: CSSObject["boxShadow"];
    color: {
      default: CSSObject["color"];
      disabled: CSSObject["color"];
    };
    backgroundColor: {
      default: CSSObject["backgroundColor"];
      disabled: CSSObject["backgroundColor"];
    };
  };
};

// @TODO: Replace with FOUNDATION_THEME Token
// Not dont yet because of some issue with type of unit tokens
// Ignored for now due to potential breaking changes to other components
const searchInputTokens: Readonly<SearchInputTokens> = {
  input: {
    gap: 8,
    padding: {
      x: 8,
      y: 10,
    },
    border: {
      radius: 8,
      color: {
        default: FOUNDATION_THEME.colors.gray[200],
        hover: FOUNDATION_THEME.colors.gray[400],
        focus: FOUNDATION_THEME.colors.primary[500],
        error: FOUNDATION_THEME.colors.red[500],
        disabled: FOUNDATION_THEME.colors.gray[200],
      },
    },
    color: {
      default: FOUNDATION_THEME.colors.gray[800],
      disabled: FOUNDATION_THEME.colors.gray[300],
    },
    backgroundColor: {
      default: FOUNDATION_THEME.colors.gray[0],
      disabled: FOUNDATION_THEME.colors.gray[50],
    },
    boxShadow: FOUNDATION_THEME.shadows.sm,
  },
};

export default searchInputTokens;
