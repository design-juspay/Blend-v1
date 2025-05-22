import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { TabsProps } from './types';
import tabsTokens from './tabs-token';

const StyledTabs = styled(TabsPrimitive.Root)`
  width: ${tabsTokens.layout.root.width};
`;

const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ className, ...props }, ref) => (
  <StyledTabs {...props} ref={ref} className={className} />
));

Tabs.displayName = 'Tabs';

export default Tabs;