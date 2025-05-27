import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";

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
    sm: CSSObject["fontSize"];
    lg: CSSObject["fontSize"];
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
    sm: FOUNDATION_THEME.font.size.body.xs.fontSize,
    lg: FOUNDATION_THEME.font.size.body.sm.fontSize,
  },
  size: {
    sm: FOUNDATION_THEME.unit[14],
    lg: FOUNDATION_THEME.unit[18],
  },
};

export default tooltipTokens;
