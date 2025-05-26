import Block from "../Primitives/Block/Block";
import { Tag, TagV2Variant } from "../TagsV2";
import { SplitTagProps } from "./types";

const SplitTag = ({ primaryTag, secondaryTag, size, shape }: SplitTagProps) => {
  return (
    <Block display="flex" width="fit-content" flexWrap="nowrap">
      {primaryTag ? (
        <Tag
          {...primaryTag}
          splitTagPosition="left"
          variant={TagV2Variant.NO_FILL}
          size={size}
          shape={shape}
        />
      ) : null}
      {secondaryTag ? (
        <Tag
          {...secondaryTag}
          splitTagPosition="right"
          variant={TagV2Variant.ATTENTIVE}
          size={size}
          shape={shape}
        />
      ) : null}
    </Block>
  );
};

export default SplitTag;

