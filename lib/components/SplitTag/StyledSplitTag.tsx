import styled, { css } from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles,
  getSplitTagStyles,
} from "./splitTagUtils";

// Common props interface for styled components
interface TagStyledProps {
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagShape?: TagShape;
}

// Common styles that apply to both regular tags and split tag sections
const commonTagStyles = css<TagStyledProps>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
`;

// Common typography styles
const commonTypographyStyles = css`
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const StyledSplitTagContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  white-space: nowrap;
  cursor: pointer;
  width: fit-content;
  box-sizing: border-box;
  overflow: hidden; /* Ensures no overflow from inner elements */
`;

export const StyledSplitTagSection = styled.div<TagStyledProps & {
  $position: 'left' | 'right';
}>`
  ${commonTagStyles}
  ${({ $tagShape, $position, $size }) => $tagShape && getSplitTagStyles($tagShape, $position, $size)}
  
  display: flex;
  align-items: center;
  justify-content: center;
  ${commonTypographyStyles}
  
  /* Improved border handling */
  ${({ $position }) => $position === 'left' ? `
    border-right: none !important;
  ` : `
    border-left: none !important;
    position: relative; /* Creates stacking context */
    margin-left: -1px; /* Clean connection between sections */
    z-index: 1; /* Ensures proper layering */
  `}
`; 