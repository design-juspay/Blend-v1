import { CheckboxSize } from './types';
import checkboxTokens from './token';

/**
 * Determines the data state attribute based on the checked state
 * Used for styling and accessibility
 * 
 * @param checked The current checked state
 * @returns The data-state attribute value
 */
export const getCheckboxDataState = (checked: boolean | 'indeterminate'): string => {
  if (checked === 'indeterminate') return 'indeterminate';
  return checked ? 'checked' : 'unchecked';
};

/**
 * Generates a unique ID for the checkbox
 * 
 * @param id Optional ID provided by the user
 * @param value Optional value that can be used as part of the ID
 * @param generatedId React useId generated ID
 * @returns A unique ID for the checkbox
 */
export const generateCheckboxId = (
  id: string | undefined,
  value: string | undefined,
  generatedId: string
): string => {
  return id || (value ? `checkbox-${value}` : `checkbox-${generatedId}`);
};

/**
 * Extracts the pixel value from a token string
 * 
 * @param tokenValue The token value (e.g. "16px")
 * @returns The numeric value extracted from the token
 */
export const extractPixelValue = (tokenValue: string): number => {
  return parseInt(tokenValue.replace('px', ''));
};

/**
 * Gets the accessibility attributes for the checkbox
 * 
 * @param uniqueId The unique ID for the checkbox
 * @param isIndeterminate Whether the checkbox is in an indeterminate state
 * @returns An object containing accessibility attributes
 */
export const getAccessibilityAttributes = (uniqueId: string, isIndeterminate: boolean) => {
  return {
    role: "checkbox",
    "aria-checked": isIndeterminate ? "mixed" : undefined,
    "aria-labelledby": `${uniqueId}-label`,
    "aria-describedby": `${uniqueId}-description`
  };
};

/**
 * Gets the appropriate icon size based on the checkbox size
 * @param size The size of the checkbox
 * @returns The width and height values for the icon
 */
export const getIconSize = (size: CheckboxSize): { width: string; height: string } => {
  return {
    width: checkboxTokens.sizes[size].icon.width,
    height: checkboxTokens.sizes[size].icon.height
  };
};

/**
 * Calculates proper spacing based on checkbox size
 * 
 * @param size The size of the checkbox
 * @returns An object containing margin and padding values
 */
export const getSpacingBySize = (size: CheckboxSize): { margin: string; padding: string } => {
  // Base margin on checkbox size for better visual hierarchy
  const margin = size === CheckboxSize.SMALL ? '4px' : '6px';
  // Base padding on checkbox size for proper spacing
  const padding = size === CheckboxSize.SMALL ? '2px' : '3px';
  
  return { margin, padding };
};

/**
 * Determines whether to show a visual focus indicator
 * Based on keyboard navigation state
 * 
 * @param isFocusVisible Whether the focus is visible (keyboard navigation)
 * @returns CSS for focus styling
 */
export const getFocusRingStyles = (isFocusVisible: boolean): string => {
  if (!isFocusVisible) return '';
  
  return `
    outline: 2px solid ${checkboxTokens.border.focus};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  `;
}; 