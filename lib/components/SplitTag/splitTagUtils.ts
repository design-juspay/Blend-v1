import { css } from "styled-components";
import { TagSize, TagShape } from "./types";
import splitTagTokens from "./token";

// Import utilities from Tags
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles
} from "../Tags/tagUtils";

// Re-export utilities from Tags
export {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles
};

// SplitTag specific utility
export const getSplitTagStyles = (
  shape: TagShape = TagShape.ROUNDED,
  position: 'left' | 'right',
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${splitTagTokens.getSplitBorderRadius(shape, position, size)};
`; 