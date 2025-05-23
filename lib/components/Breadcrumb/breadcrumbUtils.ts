import { BreadcrumbItemProps } from './types';

/**
 * Processes the breadcrumb items to add additional properties
 * 
 * @param items - The original breadcrumb items
 * @returns Processed breadcrumb items with isActive and other properties
 */
export const processBreadcrumbItems = (items: BreadcrumbItemProps[]): (BreadcrumbItemProps & { isActive: boolean })[] => {
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
  items: (BreadcrumbItemProps & { isActive: boolean })[]
): { 
  firstItems: (BreadcrumbItemProps & { isActive: boolean })[], 
  moreItems: (BreadcrumbItemProps & { isActive: boolean })[], 
  lastItems: (BreadcrumbItemProps & { isActive: boolean })[] 
} => {
  const firstItems = items.slice(0, 1);
  const lastItems = items.slice(-3);
  const moreItems = items.slice(1, -3);

  // Update isActive flags
  firstItems.forEach(item => (item.isActive = false));
  moreItems.forEach(item => (item.isActive = false));
  
  return {
    firstItems,
    moreItems,
    lastItems,
  };
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
): boolean => {
  return isTruncated || (itemsCount > maxItems);
}; 