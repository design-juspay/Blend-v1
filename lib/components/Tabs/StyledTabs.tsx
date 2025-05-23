import styled from "styled-components";
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { TabsVariant, TabsSize } from "./types";
import {
  getBaseTabsStyles,
  getBaseTabsContentStyles,
  getBaseTabsListStyles,
  getTabsListVariantStyles,
  getTabsListExpandedStyles,
  getBaseTabsTriggerStyles,
  getTabsTriggerSizeStyles,
  getTabsTriggerFocusStyles,
  getTabsTriggerDisabledStyles,
  getTabsTriggerVariantStyles,
  getIconContainerStyles,
} from "./tabsUtils";

export const StyledTabs = styled(TabsPrimitive.Root)`
  ${getBaseTabsStyles}
`;

export const StyledTabsContent = styled(TabsPrimitive.Content)`
  ${getBaseTabsContentStyles}
`;

export const StyledTabsList = styled(TabsPrimitive.List)<{
  $variant: TabsVariant;
  $size: TabsSize;
  $expanded: boolean;
}>`
  ${getBaseTabsListStyles}
  ${({ $variant }) => getTabsListVariantStyles($variant)}
  ${({ $expanded }) => getTabsListExpandedStyles($expanded)}
`;

export const StyledTabsTrigger = styled(TabsPrimitive.Trigger)<{
  $variant: TabsVariant;
  $size: TabsSize;
}>`
  ${getBaseTabsTriggerStyles}
  ${({ $size }) => getTabsTriggerSizeStyles($size)}
  ${getTabsTriggerFocusStyles}
  ${getTabsTriggerDisabledStyles}
  ${({ $variant }) => getTabsTriggerVariantStyles($variant)}
`;

export const IconContainer = styled.span`
  ${getIconContainerStyles}
`; 