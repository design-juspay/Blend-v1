import styled, { css } from 'styled-components';
import { StyledAvatarContainerProps, StyledAvatarIndicatorProps } from './types';
import { useComponentToken } from '../../context/useComponentToken';
import { AvatarTokensType } from './avatar.token';
import { foundationToken } from '../../foundationToken'; // Keep for slots if not tokenized yet

export const StyledAvatarContainer = styled.div<StyledAvatarContainerProps>`
  ${({ $size, $shape, $hasImage }) => {
    const tokens = useComponentToken("AVATAR") as AvatarTokensType;
    return css`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      background-color: ${$hasImage ? 'transparent' : tokens.container.background.default};
      border: ${tokens.container.border.width} solid ${$hasImage ? tokens.container.border.color.withImage : tokens.container.border.color.withoutImage};
      width: ${tokens.container.dimension[$size].width};
      height: ${tokens.container.dimension[$size].height};
      border-radius: ${tokens.container.shape[$shape].borderRadius};
      /* Fallback text font styles are applied directly to the text content in Avatar.tsx */
    `;
  }}
`;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; /* Ensures image respects container's border-radius */
`;

export const StyledAvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  border-radius: inherit; /* Ensures fallback respects container's border-radius */
  overflow: hidden; /* Clip text/content if it overflows */
  ${() => { // Removed unused theme prop
    const tokens = useComponentToken("AVATAR") as AvatarTokensType;
    // Font size and weight for fallback text are applied in Avatar.tsx using tokens.fallbackText.font[$size]
    // This color is for the text rendered by renderFallback()
    return css`
      color: ${tokens.fallbackText.color.default};
    `;
  }}
`;

export const StyledAvatarIndicator = styled.span<StyledAvatarIndicatorProps>`
  ${({ $size }) => {
    const tokens = useComponentToken("AVATAR") as AvatarTokensType;
    return css`
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: ${tokens.indicator.dimension[$size].size};
      height: ${tokens.indicator.dimension[$size].size};
      background-color: ${tokens.indicator.background.default};
      border-radius: ${tokens.indicator.shape.borderRadius}; /* Indicator is always circular */
      border: ${tokens.indicator.ring.width[$size]} solid ${tokens.indicator.ring.color.default};
      transform: translate(30%, -30%); /* This could be tokenized if it needs to vary */
      z-index: 1;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.8); /* Consider tokenizing this shadow */
    `;
  }}
`;

export const StyledAvatarWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

// These slots currently use foundationToken directly.
// If they need to be themed as part of Avatar, they should use Avatar tokens.
export const StyledAvatarLeadingSlot = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${foundationToken.spacing[8]}; 
  color: ${foundationToken.colors.gray[700]};
`;

export const StyledAvatarTrailingSlot = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${foundationToken.spacing[8]};
  color: ${foundationToken.colors.gray[700]};
`;
