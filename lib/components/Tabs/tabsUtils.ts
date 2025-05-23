import { css } from "styled-components";
import { TabsVariant, TabsSize } from "./types";
import tabsTokens from "./tabs-token";
import { foundationToken } from "../../foundationToken";

export const getBaseTabsStyles = () => css`
  width: ${tabsTokens.layout.root.width};
`;

export const getBaseTabsContentStyles = () => css`
  width: 100%;
  outline: none;
  will-change: none;
  position: relative;
`;

export const getBaseTabsListStyles = () => css`
  display: ${tabsTokens.layout.list.display};
  width: ${tabsTokens.layout.list.width};
  align-items: ${tabsTokens.layout.list.alignItems};
  gap: ${tabsTokens.layout.list.gap};
  border: none;
  position: relative;
`;

export const getTabsListVariantStyles = (variant: TabsVariant) => {
  switch(variant) {
    case TabsVariant.BOXED:
      return css`
        background-color: ${tabsTokens.background.boxed.list};
        padding: ${foundationToken.spacing[4]};
        border-radius: ${tabsTokens.border.boxed.radius};
        border: none;
      `;
    case TabsVariant.FLOATING:
      return css`
        gap: ${foundationToken.spacing[8]};
        border: none;
      `;
    case TabsVariant.UNDERLINE:
    default:
      return css`
        border-bottom: ${foundationToken.borderWidth[1]} solid ${tabsTokens.border.list.bottom};
        z-index: 0;
      `;
  }
};

export const getTabsListExpandedStyles = (expanded: boolean) => {
  if (!expanded) return css``;
  
  return css`
    justify-content: ${tabsTokens.layout.expanded.justifyContent};
    
    & > * {
      flex: 1;
      text-align: center;
    }
  `;
};

export const getBaseTabsTriggerStyles = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 ${foundationToken.spacing[12]};
  font-size: ${tabsTokens.font.size};
  font-weight: ${tabsTokens.font.weight.default};
  transition: all 0.2s ease-in-out;
  outline: none;
  position: relative;
  background: transparent;
  border: none;
`;

export const getTabsTriggerSizeStyles = (size: TabsSize) => css`
  height: ${tabsTokens.sizes[size].triggerHeight};
  &:hover {
    cursor: pointer;
  }
`;

export const getTabsTriggerFocusStyles = () => css`
  &:focus-visible {
    outline: none;
    ring: ${foundationToken.borderWidth[2]} solid ${foundationToken.colors.primary[500]};
    ring-offset: ${foundationToken.spacing[2]};
  }
`;

export const getTabsTriggerDisabledStyles = () => css`
  &:disabled {
    opacity: ${foundationToken.opacity[50]};
    pointer-events: none;
  }
`;

export const getTabsTriggerVariantStyles = (variant: TabsVariant) => {
  switch(variant) {
    case TabsVariant.BOXED:
      return css`
        color: ${tabsTokens.text.boxed.default};
        border-radius: ${tabsTokens.border.boxed.radius};
        border: none;
        
        &:hover:not([data-state="active"]) {
          background-color: ${tabsTokens.background.boxed.hover};
          color: ${tabsTokens.text.boxed.hover};
        }
        
        &[data-state="active"] {
          background-color: ${tabsTokens.background.boxed.active};
          color: ${tabsTokens.text.boxed.active};
          font-weight: ${tabsTokens.font.weight.active};
          box-shadow: ${tabsTokens.shadow.boxed};
        }
      `;
    case TabsVariant.FLOATING:
      return css`
        color: ${tabsTokens.text.floating.default};
        border-radius: ${tabsTokens.border.floating.radius};
        border: none;
        
        &:hover:not([data-state="active"]) {
          color: ${tabsTokens.text.floating.hover};
        }
        
        &[data-state="active"] {
          background-color: ${tabsTokens.background.floating.active};
          color: ${tabsTokens.text.floating.active};
          font-weight: ${tabsTokens.font.weight.active};
        }
      `;
    case TabsVariant.UNDERLINE:
    default:
      return css`
        color: ${tabsTokens.text.underline.default};
        border: none;
        background: transparent;
        position: relative;
        
        &:hover:not([data-state="active"]) {
          color: ${tabsTokens.text.underline.hover};
        }
        
        &[data-state="active"] {
          color: ${tabsTokens.text.underline.active};
          font-weight: ${tabsTokens.font.weight.active};
          z-index: 1;
          
          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1px;
            height: ${tabsTokens.border.underline.width};
            background-color: ${tabsTokens.border.underline.active};
            z-index: 2;
          }
        }
      `;
  }
};

export const getIconContainerStyles = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`; 