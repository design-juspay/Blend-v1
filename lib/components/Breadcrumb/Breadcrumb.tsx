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
    const processedItems = processBreadcrumbItems(items);

    useClickOutside([dropdownRef, buttonRef], () => {
      setShowDropdown(false);
    });

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

    const renderFullBreadcrumb = () => (
      <StyledBreadcrumbContainer ref={ref}>
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

    const renderTruncatedBreadcrumb = () => {
      const { firstItems, moreItems, lastItems } = splitBreadcrumbItems(processedItems);

      return (
        <StyledBreadcrumbContainer ref={ref}>
          <StyledBreadcrumbList>
            {firstItems.map((item, index) => 
              renderBreadcrumbItem(item, index, false, `first-${index}`)
            )}

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
