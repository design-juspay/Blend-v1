import { CSSObject } from "styled-components"; 
import { TabsVariant, TabsSize } from "./types";
import { TabsTokensType, TabsInteractionState } from "./tabs.token"; 

export const getBaseTabsStyles = (tokens: TabsTokensType): CSSObject => ({
  width: tokens.width || "100%",
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
  display: tokens.list.variant[variant]?.display || "flex",
  width: tokens.list.variant[variant]?.width || "100%",
  alignItems: tokens.list.variant[variant]?.alignItems || "center",
  gap: tokens.list.variant[variant]?.gap,
  border: "none", 
  position: "relative",
  padding: tokens.list.variant[variant]?.padding,
  backgroundColor: tokens.list.variant[variant]?.backgroundColor,
  borderRadius: tokens.list.variant[variant]?.borderRadius,
  borderBottomWidth: tokens.list.variant[variant]?.borderBottomWidth,
  borderBottomColor: tokens.list.variant[variant]?.borderBottomColor,
});


export const getTabsListExpandedStyles = (tokens: TabsTokensType, expanded: boolean): CSSObject => {
  if (!expanded) return {};
  return {
    justifyContent: "space-between",
  };
};

export const getBaseTabsTriggerStyles = (tokens: TabsTokensType, variant: TabsVariant, size: TabsSize, state: TabsInteractionState = 'default'): CSSObject => {
  const colorState: Extract<TabsInteractionState, 'default' | 'hover' | 'active' | 'disabled'> = 
    state === 'focus' ? 'default' : state; 
  const bgState: Extract<TabsInteractionState, 'default' | 'hover' | 'active'> =
    state === 'focus' || state === 'disabled' ? 'default' : state;

  const currentVariantColor = tokens.list.trigger.color[variant];
  const currentFontVariant = tokens.list.trigger.font[variant];
  const currentBgVariant = tokens.list.trigger.background[variant];

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    padding: `0 ${tokens.list.trigger.size[size]?.paddingX || '0px'}`,
    fontSize: tokens.list.trigger.size[size]?.fontSize,
    fontWeight: currentFontVariant?.[state === 'active' ? 'active' : 'default']?.fontWeight,
    color: currentVariantColor?.[colorState],
    backgroundColor: currentBgVariant?.[bgState],
    transition: `all ${tokens.transition?.duration || '0.2s'} ${tokens.transition?.easing || 'ease-in-out'}`,
    outline: "none",
    position: "relative",
    border: "none", 
    borderRadius: tokens.list.trigger.border[variant]?.radius,
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: state === 'disabled' ? tokens.list.trigger.disabledOpacity : 1,    
  };
};

export const getTabsTriggerFocusStyles = (tokens: TabsTokensType): CSSObject => ({
    outline: 'none', // Important to reset default outline
    boxShadow: `0 0 0 ${tokens.list.trigger.focus?.ringWidth || '2px'} ${tokens.list.trigger.focus?.ringColor}`,
});


export const getIconContainerStyles = (tokens: TabsTokensType): CSSObject => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: tokens.list.trigger.iconSpacing?.gap, 
});
