import styled, { css } from 'styled-components';
import { StyledAvatarGroupContainerProps, StyledAvatarWrapperProps, StyledOverflowCounterProps } from './types'; // Removed AvatarGroupOverflowCounterState
import { useComponentToken } from '../../context/useComponentToken';
import { AvatarGroupTokensType } from './avatarGroup.token';
import { foundationToken } from '../../foundationToken';

export const StyledAvatarGroupContainer = styled.div<StyledAvatarGroupContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledAvatarWrapper = styled.div<StyledAvatarWrapperProps>`
  ${({ $size, $index, $total, $isSelected }) => {
    const tokens = useComponentToken("AVATAR_GROUP") as AvatarGroupTokensType;
    return css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: ${tokens.container.spacing[$size]}; /* Will be negative */
      z-index: ${(tokens.avatar.stacking.zIndex as number) + ($total - $index)};
      
      ${$index === 0 && `
        margin-left: 0;
      `}
      
      & > div { /* Assuming the direct child is the Avatar component's root */
        border: ${tokens.avatar.border.width} solid ${tokens.avatar.border.color};
      }
      
      ${$isSelected && `
        & > div {
          box-shadow: 0 0 0 ${tokens.avatar.selected.ringWidth} ${tokens.avatar.selected.ringColor};
          /* The 'outline' part might need to be a boxShadow too or a separate token if it's a true outline */
          /* For now, keeping foundationToken for the outline color as it was */
          outline: ${tokens.avatar.selected.ringOffset} solid ${foundationToken.colors.gray[0]};
        }
      `}
      
      &:focus-visible {
        outline: 2px solid ${foundationToken.colors.primary[500]}; /* Kept foundationToken, consider tokenizing */
        outline-offset: 2px;
      }
    `;
  }}
`;

export const StyledOverflowCounter = styled.button<StyledOverflowCounterProps>`
  ${({ $size, $shape, $isOpen }) => {
    const tokens = useComponentToken("AVATAR_GROUP") as AvatarGroupTokensType;
    return css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: ${tokens.container.spacing[$size]}; /* Will be negative */
      
      width: ${tokens.overflowCounter.dimension[$size].width};
      height: ${tokens.overflowCounter.dimension[$size].height};
      font-size: ${tokens.overflowCounter.dimension[$size].fontSize};
      font-weight: ${tokens.overflowCounter.font.weight};
      
      color: ${tokens.overflowCounter.text.color};
      background-color: ${$isOpen 
        ? tokens.overflowCounter.background.isOpen 
        : tokens.overflowCounter.background.default};
      
      border-radius: ${tokens.overflowCounter.shape[$shape].borderRadius};
      border: ${tokens.overflowCounter.border.width} solid ${tokens.overflowCounter.border.color};
      
      transition: ${tokens.overflowCounter.transition};
      z-index: ${tokens.avatar.stacking.zIndex}; /* Should this be menu zIndex or avatar stacking? */
                                                /* Original was avatar.stacking.zIndex */
      
      &:hover {
        background-color: ${tokens.overflowCounter.background.hover};
      }
      
      &:focus-visible {
        outline: 2px solid ${foundationToken.colors.primary[500]}; /* Kept foundationToken, consider tokenizing */
        outline-offset: 2px;
      }
      
      ${$isOpen && `
        box-shadow: 0 0 0 ${tokens.avatar.selected.ringWidth} ${tokens.avatar.selected.ringColor};
        /* The 'outline' part might need to be a boxShadow too or a separate token if it's a true outline */
        outline: ${tokens.avatar.selected.ringOffset} solid ${foundationToken.colors.gray[0]};
      `}
    `;
  }}
`;

export const StyledMenuContainer = styled.div`
  ${() => {
    const tokens = useComponentToken("AVATAR_GROUP") as AvatarGroupTokensType;
    return css`
      position: fixed; /* This is set by util, but good to have base */
      z-index: ${tokens.menu.zIndex};
      margin-top: ${tokens.menu.spacing.marginTop};
    `;
  }}
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
