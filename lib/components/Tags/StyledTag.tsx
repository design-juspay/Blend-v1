import styled, { css } from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import {
  getBaseTagStyles,
  getTagSizeStyles,
  getTagShapeStyles,
  getTagVariantStyles,
} from "./tagUtils";

type TagStyledProps = {
  $variant?: TagVariant;
  $status?: TagStatus;
  $size?: TagSize;
  $tagShape?: TagShape;
}

const commonTagStyles = css<TagStyledProps>`
  ${getBaseTagStyles()}
  ${({ $size }) => getTagSizeStyles($size)}
  ${({ $variant, $status }) => getTagVariantStyles($variant, $status)}
`;

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