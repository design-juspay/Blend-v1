import { css } from "styled-components";
import { TagSize, TagStatus, TagShape, TagVariant, TagBaseProps } from "./types";
import tagTokens from "./token";

/**
 * Common hook for handling default tag props and computed values
 * This centralizes prop handling for both Tag and SplitTag components
 */
export const useTagProps = <T extends TagBaseProps>(props: T) => {
  const {
    variant = TagVariant.SUBTLE,
    status = TagStatus.NEUTRAL,
    size = TagSize.MD,
    shape = TagShape.ROUNDED,
  } = props;

  return {
    shape,
    variant,
    status,
    size
  };
};

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

export const getSplitTagStyles = (
  shape: TagShape = TagShape.ROUNDED,
  position: 'left' | 'right',
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${tagTokens.getSplitBorderRadius(shape, position, size)};
`;

export const getBaseTagStyles = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-family: ${tagTokens.font.family};
  letter-spacing: ${tagTokens.font.letterSpacing};
  box-sizing: border-box;
`; 