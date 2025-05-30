import styled, { css } from 'styled-components';
import { SwitchSize } from './types';
import switchTokens from './token';
import { FOUNDATION_THEME } from '../../tokens';

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
  
  /* Reset all margin and padding */
  margin: 0;
  padding: 0;
  margin-right: ${switchTokens.spacing.switchMarginRight};
  
  /* Prevent any inherited spacing */
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  
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
  
  /* Improved focus styles for better accessibility */
  &:focus-visible {
    outline: ${FOUNDATION_THEME.border.width[2]} solid ${switchTokens.border.focus};
    outline-offset: ${FOUNDATION_THEME.unit[2]};
    box-shadow: 0 0 0 ${FOUNDATION_THEME.border.width[2]} rgba(0, 0, 0, ${FOUNDATION_THEME.opacity[10]});
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
  margin: 0;
  padding: 0;
  
  /* Reset any inherited spacing that could affect alignment */
  & > span {
    line-height: 1;
    display: block;
    margin: 0;
    padding: 0;
  }
  
  /* Reset any nested spans as well */
  & span {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

export const StyledSwitchGroupLabel = styled.div`
  color: ${switchTokens.groupLabel.color};
  font-weight: ${switchTokens.groupLabel.fontWeight};
  margin-bottom: ${switchTokens.spacing.groupSpacing};
`; 