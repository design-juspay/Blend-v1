import Block from "../Primitives/Block/Block";

import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";
import Text from "../Text/Text";
import { TagV2Color, TagV2Props, TagV2Shape, TagV2Size, TagV2Variant } from "./types";



type TagV2Tokens = Readonly<{
  background: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  text: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  border: {
    [key: string]: {
      [key: string]: CSSObject["color"];
    };
  };
  borderRadius: {
    [key: string]: {
      [key: string]: CSSObject["borderRadius"];
    };
  };
  font: {
    [key: string]: {
      [key: string]: CSSObject["fontSize"];
    };
  };
  layout: {
    [key: string]: {
      [key: string]: CSSObject["height"];
    };
  };
}>;

const tagTokens: TagV2Tokens = {
  background: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[0],
      primary: FOUNDATION_THEME.colors.gray[0],
      success: FOUNDATION_THEME.colors.gray[0],
      error: FOUNDATION_THEME.colors.gray[0],
      warning: FOUNDATION_THEME.colors.gray[0],
      purple: FOUNDATION_THEME.colors.gray[0],
    },
    attentive: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[50],
      primary: FOUNDATION_THEME.colors.primary[50],
      success: FOUNDATION_THEME.colors.green[50],
      error: FOUNDATION_THEME.colors.red[50],
      warning: FOUNDATION_THEME.colors.orange[50],
      purple: FOUNDATION_THEME.colors.purple[50],
    },
  },
  text: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[800],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    attentive: {
      neutral: FOUNDATION_THEME.colors.gray[0],
      primary: FOUNDATION_THEME.colors.gray[0],
      success: FOUNDATION_THEME.colors.gray[0],
      error: FOUNDATION_THEME.colors.gray[0],
      warning: FOUNDATION_THEME.colors.gray[0],
      purple: FOUNDATION_THEME.colors.gray[0],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[600],
      purple: FOUNDATION_THEME.colors.purple[600],
    },
  },
  border: {
    noFill: {
      neutral: FOUNDATION_THEME.colors.gray[950],
      primary: FOUNDATION_THEME.colors.primary[600],
      success: FOUNDATION_THEME.colors.green[600],
      error: FOUNDATION_THEME.colors.red[600],
      warning: FOUNDATION_THEME.colors.orange[500],
      purple: FOUNDATION_THEME.colors.purple[500],
    },
    subtle: {
      neutral: FOUNDATION_THEME.colors.gray[200],
      primary: FOUNDATION_THEME.colors.primary[100],
      success: FOUNDATION_THEME.colors.green[100],
      error: FOUNDATION_THEME.colors.red[100],
      warning: FOUNDATION_THEME.colors.orange[100],
      purple: FOUNDATION_THEME.colors.purple[100],
    },
    attentive: {
      neutral: "transparent",
      primary: "transparent",
      success: "transparent",
      error: "transparent",
      warning: "transparent",
      purple: "transparent",
    },
  },
  borderRadius: {
    squarical: {
      xs: "6px",
      sm: "6px",
      md: "6px",
      lg: "8px",
    },
    rounded: {
      xs: "100px",
      sm: "100px",
      md: "100px",
      lg: "100px",
    },
  },
  font: {
    xs: {
      fontSize: "12px",
      fontWeight: "600",
    },
    sm: {
      fontSize: "12px",
      fontWeight: "600",
    },
    md: {
      fontSize: "14px",
      fontWeight: "600",
    },
    lg: {
      fontSize: "14px",
      fontWeight: "600",
    },
  },
  layout: {
    xs: {
      height: "20px",
      padding: "2px 6px",
      iconSize: "12px",
      gap: "6px",
    },
    sm: {
      height: "22px",
      padding: "3px 8px",
      iconSize: "12px",
      gap: "6px",
    },
    md: {
      height: "24px",
      padding: "4px 10px",
      iconSize: "12px",
      gap: "6px",
    },
    lg: {
      height: "28px",
      padding: "6px 12px",
      iconSize: "12px",
      gap: "6px",
    },
  },
};

const Tag = ({
  text,
  variant = TagV2Variant.SUBTLE,
  color = TagV2Color.PRIMARY,
  size = TagV2Size.SM,
  shape = TagV2Shape.SQUARICAL,
  leadingSlot,
  trailingSlot,
  onClick,
  splitTagPosition,
}: TagV2Props) => {
  const isSplitTag = splitTagPosition !== undefined;
  let borderRadius = tagTokens.borderRadius[shape][size];
  if (isSplitTag) {
    borderRadius =
      splitTagPosition === "left"
        ? `${tagTokens.borderRadius[shape][size]} 0 0 ${tagTokens.borderRadius[shape][size]}`
        : `0 ${tagTokens.borderRadius[shape][size]} ${tagTokens.borderRadius[shape][size]} 0`;
  }
  
  return (
    <Block
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={FOUNDATION_THEME.spacing[6]}
      height={tagTokens.layout[size].height}
      width="fit-content"
      paddingX={FOUNDATION_THEME.spacing[8]}
      paddingY={FOUNDATION_THEME.spacing[4]}
      backgroundColor={tagTokens.background[variant][color]}
      color={tagTokens.text[variant][color]}
      border={`1px solid ${tagTokens.border[variant][color]}`}
      borderRadius={borderRadius}
      cursor={onClick ? "pointer" : "default"}
      onClick={onClick}
    >
      {leadingSlot && (
        <Block contentCentered size={tagTokens.layout[size].iconSize}>
          {leadingSlot}
        </Block>
      )}
      <Text
        fontSize={tagTokens.font[size].fontSize}
        fontWeight={tagTokens.font[size].fontWeight}
      >
        {text}
      </Text>
      {trailingSlot && (
        <Block contentCentered size={tagTokens.layout[size].iconSize}>
          {trailingSlot}
        </Block>
      )}
    </Block>
  );
};

export default Tag;
