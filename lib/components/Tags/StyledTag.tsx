import styled from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles,
  getSplitTagStyles,
} from "./tagUtils";

export const StyledTagContainer = styled.div<{
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagShape?: TagShape;
}>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $tagShape, $size }) => $tagShape && getTagShapeStyles($tagShape, $size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
  width: fit-content;
  font-family: var(--font-family-primary);
`;

export const StyledTagContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const StyledSplitTagContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  white-space: nowrap;
  cursor: pointer;
  width: fit-content;
  font-family: var(--font-family-primary);
  box-sizing: border-box;
  overflow: hidden; /* Ensures no overflow from inner elements */
`;

export const StyledSplitTagSection = styled.div<{
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagShape?: TagShape;
  $position: 'left' | 'right';
}>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
  ${({ $tagShape, $position, $size }) => $tagShape && getSplitTagStyles($tagShape, $position, $size)}
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: -0.01em;
  
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