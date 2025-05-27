import { RadioSize } from './types';

/**
 * Generates a unique ID for radio components
 */
export const generateRadioId = (id?: string, value?: string, reactId?: string): string => {
  if (id) return id;
  if (value) return `radio-${value}`;
  return `radio-${reactId}`;
};

/**
 * Gets the data state for radio component
 */
export const getRadioDataState = (checked: boolean): string => {
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
 * Gets spacing values based on radio size
 */
export const getSpacingBySize = (size: RadioSize): { marginLeft: string; marginTop: string } => {
  const sizeMap = {
    [RadioSize.SMALL]: { marginLeft: '20px', marginTop: '4px' },
    [RadioSize.MEDIUM]: { marginLeft: '24px', marginTop: '4px' }
  };
  
  return sizeMap[size];
};
