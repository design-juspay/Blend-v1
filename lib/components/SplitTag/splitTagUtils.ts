import { css } from "styled-components";
import { TagSize, TagShape } from "./types";
import splitTagTokens from "./token";

import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles
} from "../Tags/tagUtils";

export {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles
};

export const getSplitTagStyles = (
  shape: TagShape = TagShape.ROUNDED,
  position: 'left' | 'right',
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${splitTagTokens.getSplitBorderRadius(shape, position, size)};
`; 