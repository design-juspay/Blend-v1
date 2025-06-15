import { forwardRef } from 'react'; // Removed useState, useRef
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
  StyledMoreButton
  // StyledBreadcrumbDropdown, // Removed
  // StyledDropdownItem // Removed
} from './StyledBreadcrumb';
import {
  processBreadcrumbItems,
  splitBreadcrumbItems,
  shouldTruncateBreadcrumb
} from './breadcrumbUtils';
// import { useClickOutside } from '../../hooks'; // Removed
import Menu from '../Menu/Menu';
import { MenuV2GroupType, MenuItemV2Type, MenuItemV2Variant, MenuSide, MenuAlignment } from '../Menu/types';


const MAX_ITEMS = 4;

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    items, 
    variant = BreadcrumbVariant.DEFAULT
  }, ref) => {
    // const [showDropdown, setShowDropdown] = useState(false); // Removed
    // const dropdownRef = useRef<HTMLDivElement>(null); // Removed
    // const buttonRef = useRef<HTMLButtonElement>(null); // Radix Menu handles trigger ref internally
    const processedItems = processBreadcrumbItems(items);

    // useClickOutside([dropdownRef, buttonRef], () => { // Removed
    //   setShowDropdown(false);
    // });

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
              <Menu
                trigger={
                  <StyledMoreButton
                    // ref={buttonRef} // Radix Menu handles trigger ref internally via asChild
                    // $isActive prop might not be relevant as Menu controls its own open state.
                    // Or, if needed for styling when open, Menu would need to provide an open state back.
                    // For now, assuming StyledMoreButton's $isActive is for visual feedback when dropdown is open,
                    // which Menu will handle.
                    aria-label="Show more breadcrumbs"
                    // aria-expanded and aria-haspopup are handled by Radix Menu Trigger
                    type="button"
                  >
                    ...
                  </StyledMoreButton>
                }
                items={
                  [{
                    items: moreItems.map((item): MenuItemV2Type => ({
                      label: item.label,
                      onClick: () => {
                        if (item.onClick) item.onClick();
                        // Menu closes on item click by default
                      },
                      slot1: item.leftSlot, // Map leftSlot to slot1
                      // slot2: item.rightSlot, // If Menu item supports multiple slots
                      variant: MenuItemV2Variant.DEFAULT,
                      // Ensure other MenuItemV2Type props are handled if necessary
                    })),
                  }] as MenuV2GroupType[]
                }
                side={MenuSide.BOTTOM}
                alignment={MenuAlignment.START}
                sideOffset={4}
                enableSearch={false} // Added to disable search input
              />
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
