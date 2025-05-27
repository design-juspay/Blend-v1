import { RadioSize } from './types';

export const generateRadioId = (id?: string, value?: string, reactId?: string): string => {
  if (id) return id;
  if (value) return `radio-${value}`;
  return `radio-${reactId}`;
};

export const getRadioDataState = (checked: boolean): string => {
  return checked ? 'checked' : 'unchecked';
};

export const extractPixelValue = (tokenValue: string): number => {
  const match = tokenValue.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 16;
};

export const getSpacingBySize = (size: RadioSize): { marginLeft: string; marginTop: string } => {
  const sizeMap = {
    [RadioSize.SMALL]: { marginLeft: '20px', marginTop: '4px' },
    [RadioSize.MEDIUM]: { marginLeft: '24px', marginTop: '4px' }
  };
  
  return sizeMap[size];
};
