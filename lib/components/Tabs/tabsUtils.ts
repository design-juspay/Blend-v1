import { CSSObject } from "styled-components"; 
import { TabsVariant, TabsSize } from "./types";
import { TabsTokensType, TabsInteractionState } from "./tabs.token"; 

export const getBaseTabsStyles = (tokens: TabsTokensType): CSSObject => ({
  width: tokens.rootLayout?.width || "100%",
});

export const getBaseTabsContentStyles = (tokens: TabsTokensType): CSSObject => ({
  width: "100%",
  outline: "none",
  position: "relative",
  padding: tokens.content?.padding,
  marginTop: tokens.content?.marginTop,
  animationDuration: tokens.content?.animation?.duration,
  animationTimingFunction: tokens.content?.animation?.timingFunction,
});

export const getBaseTabsListStyles = (tokens: TabsTokensType, variant: TabsVariant): CSSObject => ({
  display: tokens.list.layout[variant]?.display || "flex",
  width: tokens.list.layout[variant]?.width || "100%",
  alignItems: tokens.list.layout[variant]?.alignItems || "center",
  gap: tokens.list.layout[variant]?.gap,
  border: "none", 
  position: "relative",
  padding: tokens.list.layout[variant]?.padding,
  backgroundColor: tokens.list.layout[variant]?.backgroundColor,
  borderRadius: tokens.list.layout[variant]?.borderRadius,
  borderBottomWidth: tokens.list.layout[variant]?.borderBottomWidth,
  borderBottomColor: tokens.list.layout[variant]?.borderBottomColor,
});


export const getTabsListExpandedStyles = (tokens: TabsTokensType, expanded: boolean): CSSObject => {
  if (!expanded) return {};
  return {
    justifyContent: tokens.list.expandedLayout?.justifyContent || "space-between",
  };
};

export const getBaseTabsTriggerStyles = (tokens: TabsTokensType, variant: TabsVariant, size: TabsSize, state: TabsInteractionState = 'default'): CSSObject => {
  const colorState: Extract<TabsInteractionState, 'default' | 'hover' | 'active' | 'disabled'> = 
    state === 'focus' ? 'default' : state; 
  const bgState: Extract<TabsInteractionState, 'default' | 'hover' | 'active'> =
    state === 'focus' || state === 'disabled' ? 'default' : state;

  const currentVariantColor = tokens.trigger.color[variant];
  const currentFontVariant = tokens.trigger.font[variant];
  const currentBgVariant = tokens.trigger.background[variant];

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    padding: `0 ${tokens.trigger.size[size]?.paddingX || '0px'}`,
    fontSize: tokens.trigger.size[size]?.fontSize,
    fontWeight: currentFontVariant?.[state === 'active' ? 'active' : 'default']?.fontWeight,
    color: currentVariantColor?.[colorState],
    backgroundColor: currentBgVariant?.[bgState],
    transition: `all ${tokens.transition?.duration || '0.2s'} ${tokens.transition?.easing || 'ease-in-out'}`,
    outline: "none",
    position: "relative",
    border: "none", 
    borderRadius: tokens.trigger.border[variant]?.radius,
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: state === 'disabled' ? tokens.trigger.disabledOpacity : 1,    
  };
};

export const getTabsTriggerFocusStyles = (tokens: TabsTokensType): CSSObject => ({
    outline: 'none', // Important to reset default outline
    boxShadow: `0 0 0 ${tokens.trigger.focus?.ringWidth || '2px'} ${tokens.trigger.focus?.ringColor}`,
});


export const getIconContainerStyles = (tokens: TabsTokensType): CSSObject => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: tokens.trigger.iconSpacing?.gap, 
});
