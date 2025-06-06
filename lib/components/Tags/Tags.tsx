import Block from "../Primitives/Block/Block";
import { forwardRef } from "react";
import Text from "../Text/Text";
import { TagColor, TagProps, TagShape, TagSize, TagVariant } from "./types";
import tagTokens from "./tag.tokens";
import { useTheme } from "../../context";

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
    },
    ref
  ) => {
    const { foundationTokens, componentTokens } = useTheme();

    if (componentTokens.TAGS === undefined) {
      componentTokens.TAGS = tagTokens;
    }

    // console.log(
    //   "foundationToken.colors.primary[50]",
    //   foundationTokens.colors.primary[50]
    // );
    // console.log(
    //   "componentToken.TAGS?.background.noFill.neutral",
    //   componentTokens.TAGS?.background.noFill.neutral
    // );

    // console.log("--------------------------------");

    const tokens = componentTokens.TAGS;
    console.log("tokens", tokens.background.noFill.neutral);
    console.log(tokens.background[variant][color]);

    const isSplitTag = splitTagPosition !== undefined;
    let borderRadius = tokens.borderRadius[shape][size];
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
        gap={tagTokens.gap}
        width="fit-content"
        height={tagTokens.layout[size].height}
        paddingX={tagTokens.paddingX}
        paddingY={tagTokens.paddingY}
        backgroundColor={tokens.background[variant][color]}
        color={tagTokens.text[variant][color]}
        border={`${tagTokens.borderWidth[variant][color]} solid ${tagTokens.borderColor[variant][color]}`}
        borderRadius={borderRadius}
        cursor={onClick ? "pointer" : "default"}
        onClick={onClick}
      >
        {leadingSlot && <Block contentCentered>{leadingSlot}</Block>}
        <Text
          fontSize={tagTokens.font[size].fontSize}
          fontWeight={tagTokens.font[size].fontWeight}
        >
          {text}
        </Text>
        {trailingSlot && <Block contentCentered>{trailingSlot}</Block>}
      </Block>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
