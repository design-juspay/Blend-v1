import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled, { keyframes } from 'styled-components';
import { TabsContentProps } from './types';
import tabsTokens from './tabs-token';
import { foundationToken } from '../../foundationToken';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const StyledTabsContent = styled(TabsPrimitive.Content)`
  /* Base styles */
  margin-top: 8px; /* mt-2 */
  width: 100%;
  
  /* Focus styles */
  &:focus-visible {
    outline: none;
    ring: 2px solid ${foundationToken.colors.primary[500]};
    ring-offset: 2px;
  }
  
  /* Animation styles */
  &[data-state="active"] {
    animation: ${fadeIn} ${tabsTokens.content.animation.duration} ${tabsTokens.content.animation.timing};
  }
  
  &[data-state="inactive"] {
    animation: ${fadeOut} ${tabsTokens.content.animation.duration} ${tabsTokens.content.animation.timing};
    opacity: 0;
  }
`;

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => (
    <StyledTabsContent
      ref={ref}
      className={className}
      {...props}
    />
  )
);

TabsContent.displayName = 'TabsContent';

export default TabsContent;