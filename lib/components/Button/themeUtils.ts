import { css } from 'styled-components';
import type { ButtonSize, ButtonState, ButtonSubType, ButtonType } from './types';
import { tokens } from './token';

type SizeKey = 'sm' | 'md' | 'lg';

// Define default button sizes and properties since they're not in the tokens
const defaultButtonSizes = {
  sm: {
    height: "32px",
    padding: "0 12px",
    fontSize: "12px",
    iconSize: "16px",
    gap: "6px",
  },
  md: {
    height: "36px",
    padding: "0 16px",
    fontSize: "14px",
    iconSize: "16px",
    gap: "8px",
  },
  lg: {
    height: "40px",
    padding: "0 20px",
    fontSize: "16px",
    iconSize: "16px",
    gap: "8px",
  },
};

// Helper function to safely access nested properties
function getNestedValue(obj: Record<string, unknown>, path: string[], fallback: string): string {
  try {
    let current: Record<string, unknown> = obj;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (typeof current[key] !== 'object' || current[key] === null) return fallback;
      current = current[key] as Record<string, unknown>;
    }
    
    const lastKey = path[path.length - 1];
    const value = current[lastKey];
    
    return typeof value === 'string' ? value : fallback;
  } catch {
    return fallback;
  }
}

// Map the button state to the token state
function getTokenState(state: ButtonState): string {
  switch (state) {
    case 'default': return 'default';
    case 'hover': return 'hover';
    case 'active': return 'pressed';
    case 'focussed': return 'focused';
    case 'disabled': return 'disabled';
    default: return 'default';
  }
}

// Get the style type based on subType
function getStyleType(subType: ButtonSubType): string {
  return subType === 'plainIcon' ? 'plainIcon' : subType === 'link' ? 'link' : 'default';
}

export const getButtonPadding = (size: ButtonSize, subType: ButtonSubType) => {
  if (subType === 'iconOnly' || subType === 'plainIcon') {
    // For icon only buttons, use equal padding on all sides
    const sizeKey = size as SizeKey;
    const iconSize = defaultButtonSizes[sizeKey].iconSize;
    const iconSizeNum = parseInt(iconSize, 10);
    const padding = Math.round(iconSizeNum / 4) + 'px';
    
    return css`padding: ${padding};`;
  }

  // Use the padding from default sizes
  const sizeKey = size as SizeKey;
  const paddingValue = defaultButtonSizes[sizeKey].padding;
  return css`padding: ${paddingValue};`;
};

export const getButtonHeight = (size: ButtonSize): string => {
  const sizeKey = size as SizeKey;
  return defaultButtonSizes[sizeKey].height;
};

export const getButtonWidth = (size: ButtonSize, subType: ButtonSubType): string => {
  if (subType === 'iconOnly' || subType === 'plainIcon') {
    // For icon buttons, make them square by using the height
    return getButtonHeight(size);
  }
  return 'auto';
};

export const getButtonBackground = (
  type: ButtonType,
  subType: ButtonSubType,
  state: ButtonState
): string => {
  if (subType === 'link') {
    return 'transparent';
  }
  
  const tokenState = getTokenState(state);
  const styleType = getStyleType(subType);
  
  if (state === 'default' && subType === 'default') {
    if (type === 'primary') {
      return `linear-gradient(to bottom, #0561E2, #2B7FFF)`;
    } else if (type === 'danger') {
      return `linear-gradient(to bottom, #E7000B, #FB2C36)`;
    } else if (type === 'success') {
      return `linear-gradient(to bottom, #00A63E, #00C951)`;
    }
  }
  
  return getNestedValue(tokens.button.background, [type, styleType, tokenState], '#FFFFFF');
};

export const getButtonBorder = (
  type: ButtonType,
  subType: ButtonSubType,
  state: ButtonState
): string => {
  if (subType === 'link') {
    return 'none';
  }
  
  const tokenState = getTokenState(state);
  const styleType = getStyleType(subType);
  
  const borderColor = getNestedValue(tokens.button.border, [type, styleType, tokenState], '#EEEEEE');
  return `1.5px solid ${borderColor}`;
};

export const getButtonTextColor = (
  type: ButtonType,
  subType: ButtonSubType,
  state: ButtonState
): string => {
  const tokenState = getTokenState(state);
  const styleType = getStyleType(subType);
  
  return getNestedValue(tokens.button.text, [type, styleType, tokenState], '#000000');
};

export const getButtonIconColor = (
  type: ButtonType,
  subType: ButtonSubType,
  state: ButtonState
): string => {
  const tokenState = getTokenState(state);
  const styleType = getStyleType(subType);
  
  return getNestedValue(tokens.button.icon, [type, styleType, tokenState], '#000000');
};

export const getButtonBorderRadius = (): string => {
  return '8px';
};

export const getButtonFontSize = (size: ButtonSize): string => {
  const sizeKey = size as SizeKey;
  return defaultButtonSizes[sizeKey].fontSize;
};

export const getButtonIconSize = (size: ButtonSize): string => {
  const sizeKey = size as SizeKey;
  return defaultButtonSizes[sizeKey].iconSize;
};

export const getButtonGap = (size: ButtonSize): string => {
  const sizeKey = size as SizeKey;
  return defaultButtonSizes[sizeKey].gap;
};

export const getFocusOutlineColor = (type: ButtonType): string => {
  switch (type) {
    case 'primary':
      return '#BEDBFF'; // jp-primary-200
    case 'secondary':
      return '#F2F4F8'; // jp-gray-100
    case 'danger':
      return '#FFE2E2'; // jp-red-100
    case 'success':
      return '#DCFCE7'; // jp-green-100
    default:
      return '#F2F4F8'; // jp-gray-100
  }
}; 