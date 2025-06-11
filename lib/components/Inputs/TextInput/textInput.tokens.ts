import { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../../tokens";

type TextInputSize = "md" | "lg";
type TextInputState = "default" | "hover" | "focus" | "error" | "disabled";

type TextInputTokens = {
  input: {
    gap: CSSObject["gap"];
    borderRadius?: CSSObject["borderRadius"];
    boxShadow: CSSObject["boxShadow"];
    paddingX: {
      [key in TextInputSize]: CSSObject["padding"];
    };
    paddingY: {
      [key in TextInputSize]: CSSObject["padding"];
    };
    border: {
      [key in TextInputState]: CSSObject["border"];
    };
    color: {
      [key in TextInputState]: CSSObject["color"];
    };
    outline: {
      [key in TextInputState]: CSSObject["outline"];
    };
    backgroundColor: {
      default: CSSObject["backgroundColor"];
      disabled: CSSObject["backgroundColor"];
    };
  };
};

const textInputTokens: Readonly<TextInputTokens> = {
  input: {
    gap: FOUNDATION_THEME.unit[8],
    borderRadius: FOUNDATION_THEME.unit[10],
    paddingX: {
      md: FOUNDATION_THEME.unit[12],
      lg: FOUNDATION_THEME.unit[14],
    },
    paddingY: {
      md: FOUNDATION_THEME.unit[8],
      lg: FOUNDATION_THEME.unit[10],
    },
    border: {
      default: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
      hover: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
      focus: `1px solid ${FOUNDATION_THEME.colors.primary[500]}`,
      error: `1px solid ${FOUNDATION_THEME.colors.red[500]}`,
      disabled: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
    },
    outline: {
      default: "none",
      hover: "none",
      focus: "none",
      error: "none",
      disabled: "none",
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
      disabled: FOUNDATION_THEME.colors.gray[50],
    },
    boxShadow: FOUNDATION_THEME.shadows.sm,
  },
};

export default textInputTokens;
