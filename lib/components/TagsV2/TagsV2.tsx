import type { ReactNode, MouseEventHandler } from "react";
import Block from "../Primitives/Block/Block";
import Text from "../Primitives/Text/Text";
import { FOUNDATION_THEME } from "../../tokens";

export enum TagV2Variant {
  NO_FILL = "noFill",
  ATTENTIVE = "attentive",
  SUBTLE = "subtle",
}

export enum TagV2Style {
  NEUTRAL = "neutral",
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  PURPLE = "purple",
}

export enum TagV2Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum TagV2Shape {
  ROUNDED = "rounded",
  SQUARICAL = "squarical",
}

export type TagV2Props = {
  text: string;
  variant?: TagV2Variant;
  style?: TagV2Style;
  size?: TagV2Size;
  shape?: TagV2Shape;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const tagTokens = {
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
};

const Tag = ({
  text,
  variant = TagV2Variant.SUBTLE,
  style = TagV2Style.PRIMARY,
  size = TagV2Size.SM,
  shape = TagV2Shape.SQUARICAL,
  leadingSlot,
  trailingSlot,
  onClick,
}: TagV2Props) => {
  return (
    <Block
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={FOUNDATION_THEME.spacing[6]}
      width="fit-content"
      paddingX={FOUNDATION_THEME.spacing[8]}
      paddingY={FOUNDATION_THEME.spacing[4]}
      backgroundColor={tagTokens.background[variant][style]}
      color={tagTokens.text[variant][style]}
      border={`1px solid ${tagTokens.border[variant][style]}`}
      borderRadius={tagTokens.borderRadius[shape][size]}
      cursor={onClick ? "pointer" : "default"}
      onClick={onClick}
    >
      {leadingSlot}
      <Text variant="body.md">{text}</Text>
      {trailingSlot}
    </Block>
  );
};

export default Tag;
