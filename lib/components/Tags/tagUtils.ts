import { css } from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant } from "./types";
import tagTokens from "./token";

export const getTagSizeStyles = (size: TagSize = TagSize.MD) => {
  const sizeToken = tagTokens.sizes[size];
  
  return css`
    height: ${sizeToken.height};
    padding: ${sizeToken.padding};
    font-size: ${sizeToken.fontSize};
    font-weight: ${sizeToken.fontWeight};
    gap: ${sizeToken.gap};
  `;
};

export const getTagVariantStyles = (
  variant: TagVariant = TagVariant.SUBTLE,
  status: TagStatus = TagStatus.NEUTRAL
) => {
  return css`
    background-color: ${tagTokens.getBackgroundColor(variant, status)};
    color: ${tagTokens.getTextColor(variant, status)};
    
    /* Apply consistent border approach for all variants */
    border: 1.5px solid ${tagTokens.getBorderColor(variant, status)};
    
    svg {
      color: ${tagTokens.getIconColor(variant, status)};
    }
  `;
};

export const getTagShapeStyles = (
  shape: TagShape = TagShape.ROUNDED,
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${tagTokens.getBorderRadius(shape, size)};
`;

export const getBaseTagStyles = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: ${tagTokens.font.letterSpacing};
  box-sizing: border-box;
`; 