import styled, { css } from 'styled-components';
import { RadioSize } from './types';
import { useComponentToken } from '../../context/ThemeContext';
import { RadioTokensType } from './radio.token';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';

export const StyledRadioInput = styled.input<{
  size: RadioSize;
  $isDisabled: boolean;
  $isChecked: boolean;
  $error?: boolean;
}>`
  appearance: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  
  ${({ size, $isChecked, $isDisabled }) => {
    const radioTokens = useComponentToken("RADIO") as RadioTokensType;
    const state = $isDisabled ? 'disabled' : 'default';
    const indicatorState = $isChecked ? 'active' : 'inactive';
    
    return css`
      background-color: ${radioTokens.indicator[indicatorState].background[state]};
      border: ${radioTokens.borderWidth[indicatorState][state]}px solid ${radioTokens.indicator[indicatorState].border[state]};
      width: ${radioTokens.height[size]};
      height: ${radioTokens.height[size]};
      
      &::after {
        content: '';
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background-color: ${$isChecked ? radioTokens.activeIndicator.active.background[state] : 'transparent'};
        transform: ${$isChecked ? 'scale(1)' : 'scale(0)'};
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      &:focus-visible {
        outline: 2px solid ${radioTokens.indicator[indicatorState].border[state]};
        outline-offset: 2px;
      }
      
      &:not(:disabled):hover {
        background-color: ${radioTokens.indicator[indicatorState].background.hover};
        border-color: ${radioTokens.indicator[indicatorState].border.hover};
      }
      
      ${$isDisabled && css`
        cursor: not-allowed;
      `}
      
      ${!$isDisabled && css`
        cursor: pointer;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      `}
    `;
  }}
`;

export const StyledRadioLabel = styled.label<{
  $isDisabled: boolean;
  $error?: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer'};
`;

export const StyledRadioText = styled(PrimitiveText)<{
  $isDisabled?: boolean;
  $error?: boolean;
  $isSubtext?: boolean;
}>`
  ${({ $isDisabled, $error, $isSubtext }) => {
    const radioTokens = useComponentToken("RADIO") as RadioTokensType;
    const state = $isDisabled ? 'disabled' : $error ? 'error' : 'default';
    
    return css`
      line-height: 1;
      display: block;
      margin: 0;
      padding: 0;
      color: ${$isSubtext ? radioTokens.content.sublabel.color[state] : radioTokens.content.label.color[state]};
    `;
  }}
`;

export const StyledRadioGroupLabel = styled(PrimitiveText).attrs({ as: 'p' })`
  ${({ theme }) => {
    const radioTokens = useComponentToken("RADIO") as RadioTokensType;
    
    return css`
      color: ${radioTokens.content.label.color.default};
      margin-bottom: ${radioTokens.gap};
    `;
  }}
`; 