import styled, { css } from 'styled-components';
import { useComponentToken } from '../../context/useComponentToken';
import { BreadcrumbTokensType } from './breadcrumb.token'; // Removed BreadcrumbItemInteractionState
// import { foundationToken } from '../../foundationToken'; // No longer needed directly

type StyledProps = {
  $isActive?: boolean;
  $isLast?: boolean;
}

export const StyledBreadcrumbContainer = styled.nav`
  ${() => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: ${tokens.layout.gap};
    `;
  }}
`;

export const StyledBreadcrumbList = styled.ol`
  ${() => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      display: flex;
      align-items: center;
      gap: ${tokens.layout.gap};
      list-style-type: none;
      padding: 0;
    `;
  }}
`;

export const StyledBreadcrumbItem = styled.li`
  ${() => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      display: flex;
      align-items: center;
      gap: ${tokens.layout.gap};
    `;
  }}
`;

export const StyledBreadcrumbLink = styled.a<StyledProps>`
  ${({ $isActive }) => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    const active = $isActive || false;
    return css`
      display: inline-flex;
      align-items: center;
      gap: ${tokens.item.spacing.gap};
      color: ${active ? tokens.item.text.color.active : tokens.item.text.color.default};
      font-weight: ${active ? tokens.item.text.font.weight.active : tokens.item.text.font.weight.default};
      font-size: ${tokens.item.text.font.size};
      cursor: ${active ? 'default' : 'pointer'};
      text-decoration: none;
      transition: color ${tokens.item.transition.duration} ${tokens.item.transition.timingFunction};
      
      &:hover {
        color: ${active ? tokens.item.text.color.active : tokens.item.text.color.hover};
      }
    `;
  }}
`;

export const StyledBreadcrumbSpan = styled.span<StyledProps>`
  ${() => { // Removed $isActive from destructured props as it's not used in this specific block
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    // const active = $isActive || false; // Removed unused variable
    return css`
      display: inline-flex;
      align-items: center;
      gap: ${tokens.item.spacing.gap};
      color: ${tokens.item.text.color.active}; // Span is always for active/current item
      font-weight: ${tokens.item.text.font.weight.active};
      font-size: ${tokens.item.text.font.size};
      cursor: default;
    `;
  }}
`;

export const StyledDivider = styled.span`
  ${() => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      color: ${tokens.divider.color};
    `;
  }}
`;

export const StyledMoreButton = styled.button` // Removed <{ $isActive: boolean }>
  ${() => { // Removed $isActive from props
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${tokens.moreButton.size.width};
      height: ${tokens.moreButton.size.height};
      padding: ${tokens.moreButton.spacing.padding};
      border-radius: ${tokens.moreButton.border.radius};
      font-weight: ${tokens.moreButton.font.weight};
      cursor: pointer;
      transition: all ${tokens.moreButton.transition.duration} ${tokens.moreButton.transition.timingFunction};

      /* Default (closed) state styles */
      color: ${tokens.moreButton.icon.color.default};
      background-color: ${tokens.moreButton.background.color.default};
      border: ${tokens.moreButton.border.width} solid ${tokens.moreButton.border.color.default};
      
      &[data-state="open"] {
        color: ${tokens.moreButton.icon.color.active};
        background-color: ${tokens.moreButton.background.color.active};
        border-color: ${tokens.moreButton.border.color.active};
      }
      
      &:hover:not([data-state="open"]) {
        color: ${tokens.moreButton.icon.color.hover};
        border-color: ${tokens.moreButton.border.color.hover};
        /* background-color for hover can be added if defined in tokens, e.g. tokens.moreButton.background.color.hover */
      }
      /* Ensure focus styles are applied if needed, Radix might handle some of this */
      &:focus-visible {
        /* Example: outline: 2px solid [some_focus_color_token_here]; */
        /* Add appropriate focus styling based on design system,
           e.g., using a token like tokens.moreButton.focus.outlineColor if defined,
           or a foundation token like foundationToken.colors.primary[500]
        */
      }
    `;
  }}
`;

// StyledDropdown, StyledBreadcrumbDropdown, and StyledDropdownItem are no longer used
// as the Menu component is now used for the dropdown functionality.

export const StyledIconSlot = styled.span<{ $position: 'left' | 'right' }>`
  ${() => {
    const tokens = useComponentToken("BREADCRUMB") as BreadcrumbTokensType;
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${tokens.iconSlot.size.width};
      height: ${tokens.iconSlot.size.height};
    `;
  }}
`;
