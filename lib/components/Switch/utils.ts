import { SwitchSize } from './types';

/**
 * Generates a unique ID for switch components
 */
export const generateSwitchId = (id?: string, value?: string, reactId?: string): string => {
  if (id) return id;
  if (value) return `switch-${value}`;
  return `switch-${reactId}`;
};

/**
 * Gets the data state for switch component
 */
export const getSwitchDataState = (checked: boolean): string => {
  return checked ? 'checked' : 'unchecked';
};

/**
 * Extracts pixel value from token strings
 */
export const extractPixelValue = (tokenValue: string): number => {
  const match = tokenValue.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 16;
};

/**
 * Gets spacing values based on switch size
 */
export const getSpacingBySize = (size: SwitchSize): { marginLeft: string; marginTop: string } => {
  const sizeMap = {
    [SwitchSize.SMALL]: { marginLeft: '32px', marginTop: '4px' },
    [SwitchSize.MEDIUM]: { marginLeft: '36px', marginTop: '4px' }
  };
  
  return sizeMap[size];
};
