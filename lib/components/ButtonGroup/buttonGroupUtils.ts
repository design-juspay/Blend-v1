import { ButtonSize, ButtonType, ButtonProps } from '../Button/types';
import buttonGroupTokens from './token';
import { ReactElement } from 'react';
import { ButtonGroupMode } from './types';

/**
 * Get spacing between buttons based on size
 */
export const getButtonGroupSpacing = (size: ButtonSize): string => {
  return buttonGroupTokens.spacing[size];
};

/**
 * Determine position of a button in a group (first, middle, last)
 */
export const getButtonPosition = (index: number, total: number): 'first' | 'middle' | 'last' => {
  if (index === 0) return 'first';
  if (index === total - 1) return 'last';
  return 'middle';
};

/**
 * Find the first non-secondary button index
 */
export const findPrimaryButtonIndex = (
  children: ReactElement[]
): number => {
  let primaryIndex = -1;
  
  children.forEach((child, index) => {
    if (!child || typeof child.props !== 'object') return;
    
    const childProps = child.props as Partial<ButtonProps>;
    const buttonType = childProps.buttonType;
    
    if (buttonType && buttonType !== ButtonType.SECONDARY && primaryIndex === -1) {
      primaryIndex = index;
    }
  });
  
  return primaryIndex;
};

/**
 * Apply button type transformation based on group mode
 */
export const getTransformedButtonType = (
  originalType: ButtonType | undefined,
  mode: ButtonGroupMode,
  index: number,
  primaryIndex: number
): ButtonType => {
  if (mode === ButtonGroupMode.ALL_SECONDARY) {
    return ButtonType.SECONDARY;
  }
  
  if (mode === ButtonGroupMode.SINGLE_PRIMARY && primaryIndex !== -1) {
    return index === primaryIndex ? (originalType || ButtonType.PRIMARY) : ButtonType.SECONDARY;
  }
  
  // Default: return original type or PRIMARY if undefined
  return originalType || ButtonType.PRIMARY;
}; 