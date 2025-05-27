import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";
import { VariantType } from "../Text/Text";

type TooltipToken = {
  background: {
    color: CSSObject["backgroundColor"];
  };
  color: {
    text: CSSObject["color"];
  };
  border: {
    radius: {
      sm: CSSObject["borderRadius"];
      lg: CSSObject["borderRadius"];
    };
  };

  maxWidth: {
    sm: CSSObject["maxWidth"];
    lg: CSSObject["maxWidth"];
  };
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
  size: {
    sm: CSSObject["width"] | CSSObject["height"];
    lg: CSSObject["width"] | CSSObject["height"];
  };
};

const tooltipTokens: TooltipToken = {
  background: {
    color: FOUNDATION_THEME.colors.gray[900],
  },
  color: {
    text: FOUNDATION_THEME.colors.gray[0],
  },
  border: {
    radius: {
      sm: FOUNDATION_THEME.border.radius[6],
      lg: FOUNDATION_THEME.border.radius[8],
    },
  },
  maxWidth: {
    sm: "320px",
    lg: "384px",
  },
  padding: {
    sm: `${FOUNDATION_THEME.unit[4]} ${FOUNDATION_THEME.unit[6]}`,
    lg: `${FOUNDATION_THEME.unit[6]} ${FOUNDATION_THEME.unit[8]}`,
  },
  font: {
    size: {
      sm: "body.xs",
      lg: "body.sm",
    },
  },
  size: {
    sm: FOUNDATION_THEME.unit[14],
    lg: FOUNDATION_THEME.unit[18],
  },
};

export default tooltipTokens;
