import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../../tokens";

type TextInputTokens = {
  input: {
    gap: CSSObject["gap"];
    padding: {
      x: {
        md: CSSObject["padding"];
        lg: CSSObject["padding"];
      };
      y: {
        md: CSSObject["padding"];
        lg: CSSObject["padding"];
      };
    };
  };
};

const textInputTokens: TextInputTokens = {
  input: {
    gap: FOUNDATION_THEME.unit[8],
    padding: {
      x: {
        md: FOUNDATION_THEME.unit[12],
        lg: FOUNDATION_THEME.unit[14],
      },
      y: {
        md: FOUNDATION_THEME.unit[8],
        lg: FOUNDATION_THEME.unit[10],
      },
    },
  },
};

export default textInputTokens;
