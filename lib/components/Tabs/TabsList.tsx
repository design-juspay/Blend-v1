import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components';
import { TabsListProps, TabsSize, TabsVariant } from './types';
import tabsTokens from './tabs-token';

type StyledTabsListProps = {
  $variant: TabsVariant;
  $size: TabsSize;
  $expanded: boolean;
}

const StyledTabsList = styled(TabsPrimitive.List)<StyledTabsListProps>`
  /* Base styles */
  display: ${tabsTokens.layout.list.display};
  width: ${tabsTokens.layout.list.width};
  align-items: ${tabsTokens.layout.list.alignItems};
  gap: ${tabsTokens.layout.list.gap};
  border: none;
  position: relative;

  /* Expanded styles */
  ${props => 
    props.$expanded && 
    css`
      justify-content: ${tabsTokens.layout.expanded.justifyContent};
      
      & > * {
        flex: 1;
        text-align: center;
      }
    `
  }

  /* Variant styles */
  ${props => {
    switch(props.$variant) {
      case 'boxed':
        return css`
          background-color: ${tabsTokens.background.boxed.list};
          padding: 4px; /* p-1 */
          border-radius: ${tabsTokens.border.boxed.radius};
          border: none;
        `;
      case 'floating':
        return css`
          gap: 8px; /* gap-2 */
          border: none;
        `;
      case 'underline':
      default:
        return css`
          border-bottom: 1px solid ${tabsTokens.border.list.bottom};
          z-index: 0;
        `;
    }
  }}
`;

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = TabsVariant.UNDERLINE, size = TabsSize.MD, expanded = false, ...props }, ref) => {
    return (
      <StyledTabsList
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $expanded={expanded}
        {...props}
      />
    );
  }
);

TabsList.displayName = 'TabsList';

export default TabsList;