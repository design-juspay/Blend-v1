import styled, { css } from 'styled-components';
import { SwitchSize } from './types';
import { FOUNDATION_THEME } from '../../tokens';
import { useComponentToken } from '../../context';
import { SwitchTokensType } from './switch.token';

export const StyledSwitchRoot = styled.button<{
  size: SwitchSize;
  $isDisabled: boolean;
  $isChecked: boolean;
  $error?: boolean;
}>`
  ${({ size, $isDisabled, $isChecked }) => {
    const tokens = useComponentToken('SWITCH') as SwitchTokensType;
    return css`
      position: relative;
      border-radius: ${tokens.root.border.radius};
      border: none;
      outline: none;
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};
      transition: background-color ${tokens.transition.duration} ${tokens.transition.easing};
      
      /* Reset all margin and padding */
      margin: 0;
      padding: 0;
      margin-right: ${tokens.root.spacing.marginRight};
      
      /* Prevent any inherited spacing */
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      
      width: ${tokens.root.size[size].width};
      height: ${tokens.root.size[size].height};
      
      background-color: ${$isDisabled
        ? ($isChecked ? tokens.root.background.default.disabled : tokens.root.background.default.inactive)
        : ($isChecked ? tokens.root.background.default.active : tokens.root.background.default.inactive)
      };
      
      /* Improved focus styles for better accessibility */
      &:focus-visible {
        outline: ${FOUNDATION_THEME.border.width[2]} solid ${tokens.root.border.focus.color};
        outline-offset: ${FOUNDATION_THEME.unit[2]};
        box-shadow: 0 0 0 ${FOUNDATION_THEME.border.width[2]} rgba(0, 0, 0, ${FOUNDATION_THEME.opacity[10]});
      }
      
      ${$isDisabled && css`opacity: 0.7;`}
      
      ${!$isDisabled && css`
        &:hover {
          opacity: 0.9;
        }
      `}
    `;
  }}
`;

export const StyledSwitchThumb = styled.div<{
  size: SwitchSize;
  $isChecked: boolean;
}>`
  ${({ size, $isChecked }) => {
    const tokens = useComponentToken('SWITCH') as SwitchTokensType;
    return css`
      position: absolute;
      top: ${tokens.thumb.size[size].top};
      border-radius: ${tokens.root.border.radius};
      background-color: ${tokens.thumb.background.default};
      border: ${tokens.thumb.border.default.width} solid ${tokens.thumb.border.default.color};
      transition: transform ${tokens.transition.duration} ${tokens.transition.easing};
      
      width: ${tokens.thumb.size[size].width};
      height: ${tokens.thumb.size[size].height};
      
      transform: translateX(${$isChecked ? tokens.thumb.size[size].offset.active : tokens.thumb.size[size].offset.inactive});
    `;
  }}
`;

export const StyledSwitchLabel = styled.label<{
  $isDisabled: boolean;
  $error?: boolean;
}>`
  ${({ $isDisabled }) => {
    const tokens = useComponentToken('SWITCH') as SwitchTokensType;
    return css`
      color: ${$isDisabled ? tokens.label.color.disabled : tokens.label.color.default};
      font-weight: ${tokens.label.font.weight};
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};
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
  }}
`;

export const StyledSwitchGroupLabel = styled.div`
  ${() => {
    const tokens = useComponentToken('SWITCH') as SwitchTokensType;
    return css`
      color: ${tokens.group.label.color};
      font-weight: ${tokens.group.label.font.weight};
      margin-bottom: ${tokens.group.spacing};
    `;
  }}
`; 