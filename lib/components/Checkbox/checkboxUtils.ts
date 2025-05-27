import { CheckboxSize } from './types';
import checkboxTokens from './token';

export const getCheckboxDataState = (checked: boolean | 'indeterminate'): string => {
  if (checked === 'indeterminate') return 'indeterminate';
  return checked ? 'checked' : 'unchecked';
};

export const generateCheckboxId = (
  id: string | undefined,
  value: string | undefined,
  generatedId: string
): string => {
  return id || (value ? `checkbox-${value}` : `checkbox-${generatedId}`);
};

export const extractPixelValue = (tokenValue: string | number | undefined): number => {
  if (typeof tokenValue === 'number') return tokenValue;
  if (typeof tokenValue === 'string') return parseInt(tokenValue.replace('px', ''));
  return 0; // fallback for undefined
};

export const getAccessibilityAttributes = (uniqueId: string, isIndeterminate: boolean) => {
  return {
    role: "checkbox",
    "aria-checked": isIndeterminate ? "mixed" : undefined,
    "aria-labelledby": `${uniqueId}-label`,
    "aria-describedby": `${uniqueId}-description`
  };
};

export const getIconSize = (size: CheckboxSize): { width: string; height: string } => {
  return {
    width: String(checkboxTokens.sizes[size].icon.width || '0px'),
    height: String(checkboxTokens.sizes[size].icon.height || '0px')
  };
};

export const getSpacingBySize = (size: CheckboxSize): { margin: string; padding: string } => {
  // Base margin on checkbox size for better visual hierarchy
  const margin = size === CheckboxSize.SMALL ? '4px' : '6px';
  // Base padding on checkbox size for proper spacing
  const padding = size === CheckboxSize.SMALL ? '2px' : '3px';
  
  return { margin, padding };
};

export const getFocusRingStyles = (isFocusVisible: boolean): string => {
  if (!isFocusVisible) return '';
  
  return `
    outline: 2px solid ${checkboxTokens.border.focus};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  `;
}; 