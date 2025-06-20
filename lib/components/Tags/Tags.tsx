import Block from "../Primitives/Block/Block";
import { forwardRef } from "react";

import Text from "../Text/Text";
import { TagColor, TagProps, TagShape, TagSize, TagVariant } from "./types";
import { useComponentToken } from "../../context/useComponentToken";
import { TagTokensType } from "./tag.tokens";

/**
 * @description A small, label-like element used for displaying keywords, categories, or status indicators.
 * Tags can have different visual styles, colors, sizes, and shapes.
 * The props for this component are defined in `TagProps` in `./types.ts`.
 * @feature Displays text in a compact, styled badge.
 * @feature Multiple variants (noFill, attentive, subtle, filled - derived).
 * @feature Various color schemes (neutral, primary, success, error, etc.).
 * @feature Different sizes and shapes.
 * @feature Optional leading and trailing slots for icons.
 * @feature Clickable with an `onClick` handler.
 * @example
 * ```tsx
 * import { Tag, TagVariant, TagColor, TagSize, TagShape } from "./components/Tags"; // Assuming path
 * import { CheckCircleIcon, XCircleIcon } from "lucide-react"; // Assuming lucide-react
 *
 * <Tag
 *   text="Active"
 *   variant={TagVariant.SUBTLE}
 *   color={TagColor.SUCCESS}
 *   size={TagSize.MD}
 *   shape={TagShape.ROUNDED}
 *   leftSlot={<CheckCircleIcon size={12} />}
 * />
 *
 * <Tag
 *   text="Urgent"
 *   variant={TagVariant.ATTENTIVE} // Or use "filled" logic if variant is not NO_FILL
 *   color={TagColor.ERROR}
 *   onClick={() => console.log("Urgent tag clicked")}
 *   rightSlot={<XCircleIcon size={12} />}
 * />
 * ```
 */
const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      text,
      variant = TagVariant.SUBTLE,
      color = TagColor.PRIMARY,
      size = TagSize.SM,
      shape = TagShape.SQUARICAL,
      leftSlot,
      rightSlot,
      onClick,
      splitTagPosition,
    },
    ref
  ) => {
    const tagTokens = useComponentToken("TAGS") as TagTokensType;

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
        width="fit-content"
        gap={tagTokens.gap[size]}
        height={tagTokens.height[size]}
        padding={tagTokens.padding[size]}
        backgroundColor={tagTokens.background[variant][color]}
        color={tagTokens.color[variant][color]}
        border={`${tagTokens.borderWidth[variant][color]}px solid ${tagTokens.borderColor[variant][color]}`}
        borderRadius={borderRadius}
        cursor={onClick ? "pointer" : "default"}
        onClick={onClick}
      >
        {leftSlot && <Block contentCentered>{leftSlot}</Block>}
        <Text
          fontSize={tagTokens.font[size].fontSize}
          fontWeight={tagTokens.font[size].fontWeight}
        >
          {text}
        </Text>
        {rightSlot && <Block contentCentered>{rightSlot}</Block>}
      </Block>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
