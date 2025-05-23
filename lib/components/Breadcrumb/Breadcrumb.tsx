import { forwardRef, useState, useRef, useEffect } from 'react';
import {
  BreadcrumbProps,
  BreadcrumbVariant
} from './types';
import { BreadcrumbItem } from './BreadcrumbItem';
import {
  StyledBreadcrumbContainer,
  StyledBreadcrumbList,
  StyledBreadcrumbItem,
  StyledDivider,
  StyledMoreButton,
  StyledDropdown,
  StyledDropdownItem
} from './StyledBreadcrumb';
import {
  processBreadcrumbItems,
  splitBreadcrumbItems,
  shouldTruncateBreadcrumb
} from './breadcrumbUtils';

const MAX_ITEMS = 4; // Maximum items before truncation

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

    // Handle clicks outside the dropdown to close it
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          buttonRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setShowDropdown(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // Render full breadcrumb when not truncated
    const renderFullBreadcrumb = () => (
      <StyledBreadcrumbContainer ref={ref as any}>
        <StyledBreadcrumbList>
          {processedItems.map((item, index) => (
            <StyledBreadcrumbItem key={index}>
              <BreadcrumbItem 
                {...item} 
                isLast={index === processedItems.length - 1}
              />
              {index < processedItems.length - 1 && (
                <StyledDivider>/</StyledDivider>
              )}
            </StyledBreadcrumbItem>
          ))}
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
            {firstItems.map((item, index) => (
              <StyledBreadcrumbItem key={`first-${index}`}>
                <BreadcrumbItem 
                  {...item} 
                  isLast={false}
                />
                <StyledDivider>/</StyledDivider>
              </StyledBreadcrumbItem>
            ))}

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
                <StyledDropdown ref={dropdownRef} role="menu">
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
                </StyledDropdown>
              )}

              <StyledDivider>/</StyledDivider>
            </StyledBreadcrumbItem>

            {/* Last items */}
            {lastItems.map((item, index) => {
              const isLastItem = index === lastItems.length - 1;
              return (
                <StyledBreadcrumbItem key={`last-${index}`}>
                  <BreadcrumbItem 
                    {...item} 
                    isLast={isLastItem}
                  />
                  {!isLastItem && <StyledDivider>/</StyledDivider>}
                </StyledBreadcrumbItem>
              );
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
