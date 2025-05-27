import Block from "../Primitives/Block/Block";
import { forwardRef } from "react";

import { FOUNDATION_THEME } from "../../tokens";
import Text from "../Text/Text";
import { TagColor, TagProps, TagShape, TagSize, TagVariant } from "./types";
import tagTokens from "./tag.tokens";

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      text,
      variant = TagVariant.SUBTLE,
      color = TagColor.PRIMARY,
      size = TagSize.SM,
      shape = TagShape.SQUARICAL,
      leadingSlot,
      trailingSlot,
      onClick,
      splitTagPosition,
      ...rest
    },
    ref
  ) => {
    const isSplitTag = splitTagPosition !== undefined;
    let borderRadius = tagTokens.borderRadius[shape][size];
    if (isSplitTag) {
      const radius = tagTokens.borderRadius[shape][size];
      borderRadius =
        splitTagPosition === "left"
          ? `${radius} 0 0 ${radius}`
          : `0 ${radius} ${radius} 0`;
    }

    return (
      <Block
        ref={ref}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={FOUNDATION_THEME.unit[6]}
        height={tagTokens.layout[size].height}
        width="fit-content"
        paddingX={FOUNDATION_THEME.unit[8]}
        paddingY={FOUNDATION_THEME.unit[4]}
        backgroundColor={tagTokens.background[variant][color]}
        color={tagTokens.text[variant][color]}
        border={`1px solid ${tagTokens.border[variant][color]}`}
        borderRadius={borderRadius}
        cursor={onClick ? "pointer" : "default"}
        onClick={onClick}
        {...rest}
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
  }
);

Tag.displayName = "Tag";

export default Tag;
