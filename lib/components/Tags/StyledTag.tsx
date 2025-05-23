import styled, { css } from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles,
} from "./tagUtils";

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

export const StyledTagContainer = styled.div<TagStyledProps>`
  ${commonTagStyles}
  ${({ $tagShape, $size }) => $tagShape && getTagShapeStyles($tagShape, $size)}
  width: fit-content;
`;

export const StyledTagContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${commonTypographyStyles}
`; 