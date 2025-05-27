import styled, { css } from 'styled-components';
import { SwitchSize } from './types';
import switchTokens from './token';

export const StyledSwitchRoot = styled.button<{
  size: SwitchSize;
  $isDisabled: boolean;
  $isChecked: boolean;
  $error?: boolean;
}>`
  position: relative;
  border-radius: ${switchTokens.border.radius};
  border: none;
  outline: none;
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
  transition: background-color ${switchTokens.transition.duration} ${switchTokens.transition.easing};
  
  ${({ size }) => css`
    width: ${switchTokens.sizes[size].root.width};
    height: ${switchTokens.sizes[size].root.height};
  `}
  
  background-color: ${({ $isChecked, $isDisabled }) => {
    if ($isDisabled) {
      return $isChecked 
        ? switchTokens.background.disabled 
        : switchTokens.background.inactive;
    }
    return $isChecked 
      ? switchTokens.background.enabled 
      : switchTokens.background.inactive;
  }};
  
  margin-right: ${switchTokens.spacing.switchMarginRight};
  
  /* Improved focus styles for better accessibility */
  &:focus-visible {
    outline: 2px solid ${switchTokens.border.focus};
    outline-offset: 2px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  
  ${({ $isDisabled }) => $isDisabled && css`
    opacity: 0.7;
  `}
  
  ${({ $isDisabled }) => !$isDisabled && css`
    &:hover {
      opacity: 0.9;
    }
  `}
`;

export const StyledSwitchThumb = styled.div<{
  size: SwitchSize;
  $isChecked: boolean;
}>`
  position: absolute;
  top: ${({ size }) => switchTokens.sizes[size].thumb.top};
  border-radius: ${switchTokens.border.radius};
  background-color: ${switchTokens.thumb.background};
  border: ${switchTokens.thumb.border.width} solid ${switchTokens.thumb.border.color};
  transition: transform ${switchTokens.transition.duration} ${switchTokens.transition.easing};
  
  ${({ size }) => css`
    width: ${switchTokens.sizes[size].thumb.width};
    height: ${switchTokens.sizes[size].thumb.height};
  `}
  
  transform: translateX(${({ size, $isChecked }) => 
    $isChecked ? switchTokens.sizes[size].thumbOn : switchTokens.sizes[size].thumbOff
  });
`;

export const StyledSwitchLabel = styled.label<{
  $isDisabled: boolean;
  $error?: boolean;
}>`
  color: ${({ $isDisabled }) => 
    $isDisabled ? switchTokens.label.disabled : switchTokens.label.default};
  font-weight: ${switchTokens.label.fontWeight};
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
`;

export const StyledSwitchGroupLabel = styled.div`
  color: ${switchTokens.groupLabel.color};
  font-weight: ${switchTokens.groupLabel.fontWeight};
  margin-bottom: ${switchTokens.spacing.groupSpacing};
`; 