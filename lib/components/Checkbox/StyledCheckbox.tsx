import styled, { css } from 'styled-components';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckboxSize } from './types';
import checkboxTokens from './token';

export const StyledCheckboxRoot = styled(CheckboxPrimitive.Root)<{
  size: CheckboxSize;
  $isDisabled: boolean;
  $checked: boolean | 'indeterminate';
}>`
  all: unset; /* Reset all styles for better cross-browser consistency */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${checkboxTokens.border.radius};
  background-color: ${({ $checked, $isDisabled }) => {
    if ($isDisabled) {
      return $checked 
        ? checkboxTokens.background.disabledChecked 
        : checkboxTokens.background.disabled;
    }
    return $checked === true || $checked === 'indeterminate'
      ? checkboxTokens.background.checked
      : checkboxTokens.background.default;
  }};
  border: ${({ $checked, $isDisabled }) => {
    if ($isDisabled) {
      return $checked 
        ? 'none' 
        : `${checkboxTokens.border.width} solid ${checkboxTokens.border.default}`;
    }
    return $checked === true || $checked === 'indeterminate'
      ? 'none'
      : `${checkboxTokens.border.width} solid ${checkboxTokens.border.default}`;
  }};
  
  ${({ size }) => css`
    width: ${checkboxTokens.sizes[size].root.width};
    height: ${checkboxTokens.sizes[size].root.height};
  `}
  
  margin-right: ${checkboxTokens.spacing.checkboxMarginRight};
  
  /* Improved focus styles for better accessibility */
  &:focus-visible {
    outline: 2px solid ${checkboxTokens.border.focus};
    outline-offset: 2px;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
  
  &:not([disabled]):hover {
    ${({ $checked }) => $checked === true || $checked === 'indeterminate'
      ? css`background-color: ${checkboxTokens.background.hover};`
      : css`border-color: ${checkboxTokens.border.hover};`
    }
  }
  
  ${({ $isDisabled }) => $isDisabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  ${({ $isDisabled, $checked }) => !$isDisabled && css`
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &[data-state=checked], &[data-state=indeterminate] {
      background-color: ${checkboxTokens.background.checked};
      border: none;
      
      &:hover {
        background-color: ${checkboxTokens.border.hover};
      }
    }
  `}
`;

export const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)<{
  size: CheckboxSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${checkboxTokens.icon.color};
  
  /* Smooth animation for indicator */
  &[data-state="checked"], &[data-state="indeterminate"] {
    animation: scale-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &[data-state="unchecked"] {
    animation: scale-out 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  @keyframes scale-in {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes scale-out {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  }
`;

export const StyledLabel = styled.label<{
  $isDisabled: boolean;
}>`
  color: ${({ $isDisabled }) => 
    $isDisabled ? checkboxTokens.label.disabled : checkboxTokens.label.default};
  font-weight: ${checkboxTokens.label.fontWeight};
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
`; 