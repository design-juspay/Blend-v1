import { TagSize, TagShape } from './types';
import tagTokens from '../Tags/token';

const splitTagTokens = {
  background: tagTokens.background,
  text: tagTokens.text,
  icon: tagTokens.icon,
  border: tagTokens.border,
  sizes: tagTokens.sizes,
  borderRadius: tagTokens.borderRadius,
  font: tagTokens.font,
  
  splitShape: {
    rounded: {
      left: (size: TagSize) => `${tagTokens.borderRadius.rounded[size]} 0 0 ${tagTokens.borderRadius.rounded[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.borderRadius.rounded[size]} ${tagTokens.borderRadius.rounded[size]} 0`
    },
    squarical: {
      left: (size: TagSize) => `${tagTokens.borderRadius.squarical[size]} 0 0 ${tagTokens.borderRadius.squarical[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.borderRadius.squarical[size]} ${tagTokens.borderRadius.squarical[size]} 0`
    }
  },
  
  getBackgroundColor: tagTokens.getBackgroundColor,
  getTextColor: tagTokens.getTextColor,
  getIconColor: tagTokens.getIconColor,
  getBorderColor: tagTokens.getBorderColor,
  getBorderRadius: tagTokens.getBorderRadius,
  
  getSplitBorderRadius: (shape: TagShape, position: 'left' | 'right', size: TagSize): string => {
    if (shape === TagShape.ROUNDED) {
      return position === 'left' 
        ? `${tagTokens.borderRadius.rounded[size]} 0 0 ${tagTokens.borderRadius.rounded[size]}`
        : `0 ${tagTokens.borderRadius.rounded[size]} ${tagTokens.borderRadius.rounded[size]} 0`;
    } else {
      return position === 'left'
        ? `${tagTokens.borderRadius.squarical[size]} 0 0 ${tagTokens.borderRadius.squarical[size]}`
        : `0 ${tagTokens.borderRadius.squarical[size]} ${tagTokens.borderRadius.squarical[size]} 0`;
    }
  }
};

export default splitTagTokens; 