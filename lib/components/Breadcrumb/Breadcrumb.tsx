import { forwardRef, useState, useRef } from 'react';
import {
  BreadcrumbProps,
  BreadcrumbVariant,
  BreadcrumbItemInternalProps
} from './types';
import { BreadcrumbItem } from './BreadcrumbItem';
import {
  StyledBreadcrumbContainer,
  StyledBreadcrumbList,
  StyledBreadcrumbItem,
  StyledDivider,
  StyledMoreButton,
  StyledBreadcrumbDropdown,
  StyledDropdownItem
} from './StyledBreadcrumb';
import {
  processBreadcrumbItems,
  splitBreadcrumbItems,
  shouldTruncateBreadcrumb
} from './breadcrumbUtils';
import { useClickOutside } from '../../hooks';

const MAX_ITEMS = 4;

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    items, 
    variant = BreadcrumbVariant.DEFAULT
  }, ref) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Process items to add isActive and other properties
    const processedItems = processBreadcrumbItems(items);

    // Use the useClickOutside hook to handle closing the dropdown
    useClickOutside([dropdownRef, buttonRef], () => {
      setShowDropdown(false);
    });

    // Render a single breadcrumb item with divider
    const renderBreadcrumbItem = (
      item: BreadcrumbItemInternalProps, 
      _index: number, 
      isLast: boolean, 
      key: string
    ) => (
      <StyledBreadcrumbItem key={key}>
        <BreadcrumbItem 
          {...item} 
          isLast={isLast}
        />
        {!isLast && <StyledDivider>/</StyledDivider>}
      </StyledBreadcrumbItem>
    );

    // Render full breadcrumb when not truncated
    const renderFullBreadcrumb = () => (
      <StyledBreadcrumbContainer ref={ref as any}>
        <StyledBreadcrumbList>
          {processedItems.map((item, index) => 
            renderBreadcrumbItem(
              item, 
              index, 
              index === processedItems.length - 1, 
              `item-${index}`
            )
          )}
        </StyledBreadcrumbList>
      </StyledBreadcrumbContainer>
    );

    // Render truncated breadcrumb with dropdown for middle items
    const renderTruncatedBreadcrumb = () => {
      const { firstItems, moreItems, lastItems } = splitBreadcrumbItems(processedItems);

      return (
        <StyledBreadcrumbContainer ref={ref as any}>
          <StyledBreadcrumbList>
            {/* First item */}
            {firstItems.map((item, index) => 
              renderBreadcrumbItem(item, index, false, `first-${index}`)
            )}

            {/* More button with dropdown */}
            <StyledBreadcrumbItem key="dropdown">
              <StyledMoreButton
                ref={buttonRef}
                $isActive={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                aria-label="Show more breadcrumbs"
                aria-expanded={showDropdown}
                aria-haspopup="menu"
                type="button"
              >
                ...
              </StyledMoreButton>

              {/* Dropdown menu */}
              {showDropdown && (
                <StyledBreadcrumbDropdown ref={dropdownRef} role="menu">
                  {moreItems.map((item, index) => (
                    <StyledDropdownItem key={index} role="menuitem">
                      <BreadcrumbItem
                        {...item}
                        isLast={false}
                        onClick={() => {
                          if (item.onClick) item.onClick();
                          setShowDropdown(false);
                        }}
                      />
                    </StyledDropdownItem>
                  ))}
                </StyledBreadcrumbDropdown>
              )}

              <StyledDivider>/</StyledDivider>
            </StyledBreadcrumbItem>

            {/* Last items */}
            {lastItems.map((item, index) => {
              const isLastItem = index === lastItems.length - 1;
              return renderBreadcrumbItem(item, index, isLastItem, `last-${index}`);
            })}
          </StyledBreadcrumbList>
        </StyledBreadcrumbContainer>
      );
    };

    const shouldTruncate = shouldTruncateBreadcrumb(
      processedItems.length,
      variant === BreadcrumbVariant.TRUNCATED
    );

    return processedItems.length > MAX_ITEMS && shouldTruncate
      ? renderTruncatedBreadcrumb()
      : renderFullBreadcrumb();
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
