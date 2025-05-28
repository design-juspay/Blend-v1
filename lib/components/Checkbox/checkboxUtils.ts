import { CheckboxSize } from './types';
import checkboxTokens from './token';
import { FOUNDATION_THEME } from '../../tokens';

export const getCheckboxDataState = (checked: boolean | 'indeterminate'): string => {
  if (checked === 'indeterminate') return 'indeterminate';
  return checked ? 'checked' : 'unchecked';
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
  // Use foundation tokens for consistent spacing
  const margin = size === CheckboxSize.SMALL ? String(FOUNDATION_THEME.unit[4]) : String(FOUNDATION_THEME.unit[6]);
  const padding = String(FOUNDATION_THEME.unit[2]); // Consistent padding for both sizes
  
  return { margin, padding };
};

export const getFocusRingStyles = (isFocusVisible: boolean): string => {
  if (!isFocusVisible) return '';
  
  return `
    outline: ${FOUNDATION_THEME.border.width[2]} solid ${checkboxTokens.border.focus};
    outline-offset: ${FOUNDATION_THEME.unit[2]};
    box-shadow: 0 0 0 ${FOUNDATION_THEME.border.width[4]} rgba(0, 0, 0, ${FOUNDATION_THEME.opacity[10]});
  `;
}; 