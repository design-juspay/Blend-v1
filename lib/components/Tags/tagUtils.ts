import { css } from "styled-components";
import { TagSize, TagStatus, TagStyle, TagVariant } from "./types";
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
  const statusKey = getTagStatusKey(status);
  
  return css`
    background-color: ${tagTokens.background[variant][statusKey]};
    color: ${tagTokens.text[variant][statusKey]};
    
    /* Apply consistent border approach for all variants */
    border: 1.5px solid ${tagTokens.border[variant][statusKey]};
    
    svg {
      color: ${tagTokens.icon[variant][statusKey]};
    }
  `;
};

export const getTagStyleStyles = (
  style: TagStyle = TagStyle.ROUNDED,
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${tagTokens.style[style][size]};
`;

export const getSplitTagStyles = (
  style: TagStyle = TagStyle.ROUNDED,
  position: 'left' | 'right',
  size: TagSize = TagSize.MD
) => css`
  border-radius: ${tagTokens.splitStyle[style][position](size)};
`;

export const getTagStatusKey = (
  status: TagStatus
): "neutral" | "primary" | "success" | "error" | "warning" | "purple" => {
  switch (status) {
    case TagStatus.NEUTRAL: return "neutral";
    case TagStatus.PRIMARY: return "primary";
    case TagStatus.SUCCESS: return "success";
    case TagStatus.ERROR: return "error";
    case TagStatus.WARNING: return "warning";
    case TagStatus.PURPLE: return "purple";
    default: return "neutral";
  }
};

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