import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components';
import { TabsTriggerProps, TabsVariant, TabsSize } from './types';
import tabsTokens from './tabs-token';
import { foundationToken } from '../../foundationToken';

interface StyledTabsTriggerProps {
  $variant: TabsVariant;
  $size: TabsSize;
}

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)<StyledTabsTriggerProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 12px; /* px-3 */
  font-size: ${tabsTokens.font.size};
  font-weight: ${tabsTokens.font.weight.default};
  transition: all 0.2s ease-in-out;
  outline: none;
  position: relative;
  background: transparent;
  border: none;
  height: ${props => tabsTokens.sizes[props.$size].triggerHeight};

  /* Focus styles */
  &:focus-visible {
    outline: none;
    ring: 2px solid ${foundationToken.colors.primary[500]};
    ring-offset: 2px;
  }

  /* Disabled styles */
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  /* Variant-specific styles */
  ${props => {
    switch(props.$variant) {
      case 'boxed':
        return css`
          color: ${tabsTokens.text.boxed.default};
          border-radius: ${tabsTokens.border.boxed.radius};
          border: none;
          
          &:hover:not([data-state="active"]) {
            background-color: ${tabsTokens.background.boxed.trigger.hover};
            color: ${tabsTokens.text.boxed.hover};
          }
          
          &[data-state="active"] {
            background-color: ${tabsTokens.background.boxed.trigger.active};
            color: ${tabsTokens.text.boxed.active};
            font-weight: ${tabsTokens.font.weight.active};
            box-shadow: ${tabsTokens.shadow.boxed};
          }
        `;
      case 'floating':
        return css`
          color: ${tabsTokens.text.floating.default};
          border-radius: ${tabsTokens.border.floating.radius};
          border: none;
          
          &:hover:not([data-state="active"]) {
            color: ${tabsTokens.text.floating.hover};
          }
          
          &[data-state="active"] {
            background-color: ${tabsTokens.background.floating.trigger.active};
            color: ${tabsTokens.text.floating.active};
            font-weight: ${tabsTokens.font.weight.active};
          }
        `;
      case 'underline':
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
              bottom: -5px;
              height: ${tabsTokens.border.underline.width};
              background-color: ${tabsTokens.border.underline.active};
              z-index: 2;
            }
          }
        `;
    }
  }}
`;

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    {
      className,
      value,
      variant = TabsVariant.UNDERLINE,
      size = TabsSize.MD,
      children,
      leftSlot,
      rightSlot,
      ...props
    },
    ref
  ) => {
    return (
      <StyledTabsTrigger
        ref={ref}
        value={value}
        $variant={variant}
        $size={size}
        className={className}
        {...props}
      >
        {leftSlot && <IconContainer style={{ marginRight: tabsTokens.spacing.icon }}>{leftSlot}</IconContainer>}
        {children}
        {rightSlot && <IconContainer style={{ marginLeft: tabsTokens.spacing.icon }}>{rightSlot}</IconContainer>}
      </StyledTabsTrigger>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

export default TabsTrigger;