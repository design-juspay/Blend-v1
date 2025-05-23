import { forwardRef } from 'react';
import { TabsTriggerProps, TabsVariant, TabsSize } from './types';
import { StyledTabsTrigger, IconContainer } from './StyledTabs';
import tabsTokens from './tabs-token';

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