import { forwardRef } from 'react';
import { BreadcrumbItemInternalProps } from './types';
import {
  StyledBreadcrumbLink,
  StyledBreadcrumbSpan,
  StyledIconSlot
} from './StyledBreadcrumb';

/**
 * BreadcrumbItem component renders individual items in a breadcrumb trail
 * It renders as a link when href is provided, a button when onClick is provided,
 * or a plain span when it's the last/active item
 */
export const BreadcrumbItem = forwardRef<HTMLElement, BreadcrumbItemInternalProps>(
  (
    {
      label,
      href,
      onClick,
      leftSlot,
      rightSlot,
      isLast = false,
      isActive = false,
    },
    ref
  ) => {
    // Use either isActive or isLast to determine if this is the active item
    const isActiveItem = isActive || isLast;

    const renderContent = () => (
      <>
        {leftSlot && <StyledIconSlot $position="left">{leftSlot}</StyledIconSlot>}
        <span>{label}</span>
        {rightSlot && <StyledIconSlot $position="right">{rightSlot}</StyledIconSlot>}
      </>
    );

    if (isActiveItem) {
      return (
        <StyledBreadcrumbSpan
          ref={ref as any}
          $isActive={true}
          aria-current="page"
        >
          {renderContent()}
        </StyledBreadcrumbSpan>
      );
    }

    if (href) {
      return (
        <StyledBreadcrumbLink
          ref={ref as any}
          href={href}
          $isActive={false}
        >
          {renderContent()}
        </StyledBreadcrumbLink>
      );
    }

    // For clickable items without href
    return (
      <StyledBreadcrumbLink
        ref={ref as any}
        as="button"
        onClick={onClick}
        $isActive={false}
        type="button"
      >
        {renderContent()}
      </StyledBreadcrumbLink>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
