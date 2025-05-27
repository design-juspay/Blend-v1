import { CSSObject } from "styled-components";
import { VariantType } from "../Text/Text";
import { FOUNDATION_THEME } from "../../tokens";

type TooltipToken = Readonly<{
  padding: {
    sm: CSSObject["padding"];
    lg: CSSObject["padding"];
  };
  font: {
    size: {
      sm: VariantType;
      lg: VariantType;
    };
  };
  border: {
    radius: {
      sm: CSSObject["borderRadius"];
      lg: CSSObject["borderRadius"];
    };
  };
  size: {
    sm: CSSObject["width"] | CSSObject["height"];
    lg: CSSObject["width"] | CSSObject["height"];
  };
}>;

const tooltipTokens: TooltipToken = {
  padding: {
    sm: "4px 6px",
    lg: "6px 8px",
  },
  font: {
    size: {
      sm: "body.xs",
      lg: "body.md",
    },
  },
  border: {
    radius: {
      sm: FOUNDATION_THEME.border.radius[6],
      lg: FOUNDATION_THEME.border.radius[8],
    },
  },
  size: {
    sm: 14,
    lg: 18,
  },
};

export default tooltipTokens;
