import { FOUNDATION_THEME } from "../../tokens";
import { VariantType } from "../Text/Text";
import { PopoverSize } from "./types";
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
    [PopoverSize.SM]: CSSObject["padding"];
    [PopoverSize.MD]: CSSObject["padding"];
  };
  gap: {
    content: CSSObject["gap"];
    header: CSSObject["gap"];
  };
  width: {
    [PopoverSize.SM]: CSSObject["width"];
    [PopoverSize.MD]: CSSObject["width"];
  };
  color: {
    heading: CSSObject["color"];
    description: CSSObject["color"];
    closeIcon: CSSObject["color"];
  };
  font: {
    size: {
      [PopoverSize.SM]: VariantType;
      [PopoverSize.MD]: VariantType;
      heading: {
        [PopoverSize.SM]: VariantType;
        [PopoverSize.MD]: VariantType;
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
    width: "1px",
    color: FOUNDATION_THEME.colors.gray[200] as string,
    radius: FOUNDATION_THEME.border.radius[8],
  },
  shadow: FOUNDATION_THEME.shadows.md,
  padding: {
    [PopoverSize.SM]: FOUNDATION_THEME.unit[12],
    [PopoverSize.MD]: FOUNDATION_THEME.unit[16],
  },
  gap: {
    content: FOUNDATION_THEME.unit[16],
    header: FOUNDATION_THEME.unit[8],
  },
  width: {
    [PopoverSize.SM]: "280px",
    [PopoverSize.MD]: "320px",
  },
  color: {
    heading: FOUNDATION_THEME.colors.gray[900] as string,
    description: FOUNDATION_THEME.colors.gray[500] as string,
    closeIcon: FOUNDATION_THEME.colors.gray[500] as string,
  },
  font: {
    size: {
      [PopoverSize.SM]: "body.xs",
      [PopoverSize.MD]: "body.sm",
      heading: {
        [PopoverSize.SM]: "body.md",
        [PopoverSize.MD]: "body.lg",
      },
    },
    weight: {
      heading: 600,
    },
  },
  icon: {
    close: {
      size: 16,
    },
  },
};

export default popoverTokens;
