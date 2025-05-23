import styled from 'styled-components';
import breadcrumbTokens from './token';
import { foundationToken } from '../../foundationToken';

type StyledProps = {
  $isActive?: boolean;
  $isLast?: boolean;
}

export const StyledBreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${breadcrumbTokens.spacing.gap};
`;

export const StyledBreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: ${breadcrumbTokens.spacing.gap};
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledBreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${breadcrumbTokens.spacing.gap};
`;

export const StyledBreadcrumbLink = styled.a<StyledProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ $isActive }) => breadcrumbTokens.getTextColor($isActive || false)};
  font-weight: ${({ $isActive }) => breadcrumbTokens.getFontWeight($isActive || false)};
  font-size: ${breadcrumbTokens.fontSize.md};
  cursor: ${({ $isActive }) => $isActive ? 'default' : 'pointer'};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ $isActive }) => $isActive ? breadcrumbTokens.text.active : breadcrumbTokens.text.hover};
  }
`;

export const StyledBreadcrumbSpan = styled.span<StyledProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ $isActive }) => breadcrumbTokens.getTextColor($isActive || false)};
  font-weight: ${({ $isActive }) => breadcrumbTokens.getFontWeight($isActive || false)};
  font-size: ${breadcrumbTokens.fontSize.md};
  cursor: default;
`;

export const StyledDivider = styled.span`
  color: ${breadcrumbTokens.background.separator.default};
`;

export const StyledMoreButton = styled.button<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${breadcrumbTokens.spacing.moreButtonSize};
  height: ${breadcrumbTokens.spacing.moreButtonSize};
  padding: ${breadcrumbTokens.spacing.dropdownPadding};
  border-radius: ${breadcrumbTokens.borderRadius.moreButton};
  color: ${({ $isActive }) => 
    $isActive ? breadcrumbTokens.icon.more.active : breadcrumbTokens.icon.more.default};
  background-color: ${({ $isActive }) => 
    breadcrumbTokens.getMoreButtonBgColor($isActive)};
  border: 1px solid ${({ $isActive }) => 
    breadcrumbTokens.getMoreButtonBorderColor($isActive)};
  font-weight: ${breadcrumbTokens.fontWeight.default};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${breadcrumbTokens.icon.more.hover};
    border-color: ${breadcrumbTokens.border.more.hover};
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 50;
  transform: translateY(4px);
  min-width: 192px; // 48 * 4px
  padding: ${breadcrumbTokens.spacing.dropdownPadding} 0;
  background-color: ${breadcrumbTokens.background.dropdown.default};
  border: 1px solid ${breadcrumbTokens.border.dropdown.default};
  border-radius: ${breadcrumbTokens.borderRadius.dropdown};
  box-shadow: ${breadcrumbTokens.shadow.dropdown};
`;

export const StyledBreadcrumbDropdown = StyledDropdown;

export const StyledDropdownItem = styled.div`
  padding: ${breadcrumbTokens.spacing.itemPadding};
  
  &:hover {
    background-color: ${foundationToken.colors.gray[50]};
  }
`;

export const StyledIconSlot = styled.span<{ $position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${breadcrumbTokens.spacing.iconSlotSize};
  height: ${breadcrumbTokens.spacing.iconSlotSize};
`;