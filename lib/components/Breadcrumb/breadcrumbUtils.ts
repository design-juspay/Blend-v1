import { BreadcrumbItemProps } from './types';

// Define the extended type for processed items
type ProcessedBreadcrumbItem = BreadcrumbItemProps & { isActive: boolean };

/**
 * Processes the breadcrumb items to add additional properties
 * 
 * @param items - The original breadcrumb items
 * @returns Processed breadcrumb items with isActive and other properties
 */
export const processBreadcrumbItems = (items: BreadcrumbItemProps[]): ProcessedBreadcrumbItem[] => {
  return items.map((item, index) => ({
    ...item,
    href: index === items.length - 1 ? undefined : item.href,
    isActive: index === items.length - 1 || item.isActive || false,
  }));
};

/**
 * Splits the breadcrumb items for truncated display
 * 
 * @param items - The processed breadcrumb items
 * @returns An object containing the first, middle, and last items for truncated display
 */
export const splitBreadcrumbItems = (
  items: ProcessedBreadcrumbItem[]
): { 
  firstItems: ProcessedBreadcrumbItem[], 
  moreItems: ProcessedBreadcrumbItem[], 
  lastItems: ProcessedBreadcrumbItem[] 
} => {
  const firstItems = items.slice(0, 1);
  const lastItems = items.slice(-3);
  const moreItems = items.slice(1, -3);

  const resetActiveState = (items: ProcessedBreadcrumbItem[]) => {
    items.forEach(item => (item.isActive = false));
  };
  
  resetActiveState(firstItems);
  resetActiveState(moreItems);
  
  return { firstItems, moreItems, lastItems };
};

/**
 * Determines if the breadcrumb should be truncated based on the number of items and variant
 * 
 * @param itemsCount - The number of breadcrumb items
 * @param isTruncated - Whether the breadcrumb is explicitly set to truncated variant
 * @param maxItems - The maximum number of items before truncation (default: 4)
 * @returns Whether the breadcrumb should be truncated
 */
export const shouldTruncateBreadcrumb = (
  itemsCount: number, 
  isTruncated: boolean, 
  maxItems: number = 4
): boolean => isTruncated || (itemsCount > maxItems); 