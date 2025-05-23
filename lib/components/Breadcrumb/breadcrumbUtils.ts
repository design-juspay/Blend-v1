import { BreadcrumbItemProps } from './types';

// Define the extended type for processed items
type ProcessedBreadcrumbItem = BreadcrumbItemProps & { isActive: boolean };

export const processBreadcrumbItems = (items: BreadcrumbItemProps[]): ProcessedBreadcrumbItem[] => {
  return items.map((item, index) => ({
    ...item,
    href: index === items.length - 1 ? undefined : item.href,
    isActive: index === items.length - 1 || item.isActive || false,
  }));
};

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

export const shouldTruncateBreadcrumb = (
  itemsCount: number, 
  isTruncated: boolean, 
  maxItems: number = 4
): boolean => isTruncated || (itemsCount > maxItems); 