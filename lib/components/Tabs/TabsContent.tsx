import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { TabsContentProps } from './types';

const StyledTabsContent = styled(TabsPrimitive.Content)`
  width: 100%;
  outline: none;
  will-change: none;
  position: relative;
`;

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, children, ...props }, ref) => (
    <StyledTabsContent 
      ref={ref} 
      className={className} 
      {...props}
    >
      {children}
    </StyledTabsContent>
  )
);

TabsContent.displayName = 'TabsContent';

export default TabsContent;