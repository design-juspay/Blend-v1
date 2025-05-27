import { FOUNDATION_THEME } from "../../tokens";
import { VariantType } from "../Text/Text";
import { CSSObject } from "styled-components";

type PopoverToken = {
  background: {
    color: CSSObject["backgroundColor"];
  };
  border: {
    width: CSSObject["borderWidth"];
    color: CSSObject["borderColor"];
    radius: CSSObject["borderRadius"];
  };
  shadow: CSSObject["boxShadow"];
  padding: {
    sm: CSSObject["padding"];
    md: CSSObject["padding"];
  };
  gap: {
    content: CSSObject["gap"];
    header: CSSObject["gap"];
  };
  width: {
    sm: CSSObject["width"];
    md: CSSObject["width"];
  };
  color: {
    heading: CSSObject["color"];
    description: CSSObject["color"];
    closeIcon: CSSObject["color"];
  };
  font: {
    size: {
      sm: VariantType;
      md: VariantType;
      heading: {
        sm: VariantType;
        md: VariantType;
      };
    };
    weight: {
      heading: CSSObject["fontWeight"];
    };
  };
  icon: {
    close: {
      size: CSSObject["width"];
    };
  };
};

const popoverTokens: PopoverToken = {
  background: {
    color: FOUNDATION_THEME.colors.gray[0],
  },
  border: {
    width: FOUNDATION_THEME.border.width[1],
    color: FOUNDATION_THEME.colors.gray[150],
    radius: FOUNDATION_THEME.border.radius[12],
  },
  shadow: FOUNDATION_THEME.shadows.md,
  padding: {
    sm: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[16]}`,
    md: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[16]}`,
  },
  gap: {
    content: FOUNDATION_THEME.unit[12],
    header: FOUNDATION_THEME.unit[8],
  },
  width: {
    sm: "280px",
    md: "320px",
  },
  color: {
    heading: FOUNDATION_THEME.colors.gray[900],
    description: FOUNDATION_THEME.colors.gray[500],
    closeIcon: FOUNDATION_THEME.colors.gray[500],
  },
  font: {
    size: {
      sm: "body.sm",
      md: "body.md",
      heading: {
        sm: "body.md",
        md: "body.lg",
      },
    },
    weight: {
      heading: 600,
    },
  },
  icon: {
    close: {
      size: FOUNDATION_THEME.unit[16],
    },
  },
};

export default popoverTokens;
