import styled from "styled-components";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagStyleStyles,
  getTagVariantStyles,
  getSplitTagStyles,
} from "./tagUtils";

// Base styled tag container
export const StyledTagContainer = styled.div<{
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagStyle?: TagStyle;
}>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $tagStyle, $size }) => $tagStyle && getTagStyleStyles($tagStyle, $size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
  width: fit-content;
  font-family: var(--font-family-primary);
`;

// Base styled tag content
export const StyledTagContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

// Split tag container
export const StyledSplitTagContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  white-space: nowrap;
  cursor: pointer;
  width: fit-content;
  font-family: var(--font-family-primary);
  box-sizing: border-box;
`;

// Split tag left section
export const StyledSplitTagLeftSection = styled.div<{
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagStyle?: TagStyle;
}>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
  ${({ $tagStyle, $size }) => $tagStyle && getSplitTagStyles($tagStyle, 'left', $size)}
  
  border-right: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

// Split tag right section
export const StyledSplitTagRightSection = styled.div<{
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagStyle?: TagStyle;
}>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
  ${({ $tagStyle, $size }) => $tagStyle && getSplitTagStyles($tagStyle, 'right', $size)}
  
  border-left: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1px; /* Ensure clean connection */
  font-weight: 600;
  letter-spacing: -0.01em;
`; 