import styled, { css } from 'styled-components';
import { RadioSize } from './types';
import radioTokens from './token';
import { FOUNDATION_THEME } from '../../tokens';

export const StyledRadioInput = styled.input<{
  size: RadioSize;
  $isDisabled: boolean;
  $isChecked: boolean;
  $error?: boolean;
}>`
  appearance: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${radioTokens.border.radius};
  background-color: ${({ $isChecked, $isDisabled }) => {
    if ($isDisabled) {
      return $isChecked 
        ? radioTokens.background.disabledChecked 
        : radioTokens.background.disabled;
    }
    return radioTokens.background.default;
  }};
  border: ${({ $isChecked, $isDisabled }) => {
    if ($isDisabled) {
      return `${radioTokens.border.width} solid ${radioTokens.border.default}`;
    }
    return $isChecked
      ? `${radioTokens.border.width} solid ${radioTokens.background.checked}`
      : `${radioTokens.border.width} solid ${radioTokens.border.default}`;
  }};
  
  ${({ size }) => css`
    width: ${radioTokens.sizes[size].radio.width};
    height: ${radioTokens.sizes[size].radio.height};
  `}
  
  margin-right: ${radioTokens.spacing.radioMarginRight};
  
  /* Inner dot indicator */
  &::after {
    content: '';
    width: ${({ size }) => radioTokens.indicator.size[size]};
    height: ${({ size }) => radioTokens.indicator.size[size]};
    border-radius: ${radioTokens.border.radius};
    background-color: ${({ $isChecked, $isDisabled }) => {
      if (!$isChecked) return 'transparent';
      if ($isDisabled) return radioTokens.background.disabled;
      return radioTokens.background.checked;
    }};
    transform: ${({ $isChecked }) => $isChecked ? 'scale(1)' : 'scale(0)'};
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Improved focus styles for better accessibility */
  &:focus-visible {
    outline: ${FOUNDATION_THEME.border.width[2]} solid ${radioTokens.border.focus};
    outline-offset: ${FOUNDATION_THEME.unit[2]};
    box-shadow: 0 0 0 ${FOUNDATION_THEME.border.width[2]} rgba(0, 0, 0, ${FOUNDATION_THEME.opacity[10]});
  }
  
  &:not(:disabled):hover {
    border-color: ${radioTokens.border.hover};
  }
  
  ${({ $isDisabled }) => $isDisabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  ${({ $isDisabled }) => !$isDisabled && css`
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  `}
`;

export const StyledRadioLabel = styled.label<{
  $isDisabled: boolean;
  $error?: boolean;
}>`
  color: ${({ $isDisabled }) => 
    $isDisabled ? radioTokens.label.disabled : radioTokens.label.default};
  font-weight: ${radioTokens.label.fontWeight};
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
`;

export const StyledRadioGroupLabel = styled.div`
  color: ${radioTokens.groupLabel.color};
  font-weight: ${radioTokens.groupLabel.fontWeight};
  margin-bottom: ${radioTokens.spacing.groupSpacing};
`; 