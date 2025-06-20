/**
 * @description Represents an individual item within a Breadcrumb trail.
 * Each item typically consists of a label and a link (href).
 * @feature Optional slots for icons or other elements to the left or right of the label.
 */
export type BreadcrumbItemType = {
  /**
   * @propCategory Content
   * @description Optional React node to be displayed to the left of the breadcrumb item's label (e.g., an icon).
   */
  leftSlot?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional React node to be displayed to the right of the breadcrumb item's label.
   */
  rightSlot?: React.ReactNode;
  /**
   * @propCategory Required
   * @description The text label for the breadcrumb item.
   */
  label: string;
  /**
   * @propCategory Required
   * @description The URL or path that the breadcrumb item links to.
   */
  href: string;
};

/**
 * @description A navigation aid that helps users understand their current location within a website or application.
 * Breadcrumbs provide a trail of links to parent pages or sections.
 * @feature Displays a hierarchical navigation path.
 * @feature Customizable separator between items.
 * @feature Each item is a clickable link.
 * @example
 * ```tsx
 * import { Breadcrumb } from "./components/Breadcrumb";
 * import { BreadcrumbItemType } from "./components/Breadcrumb/types";
 *
 * const items: BreadcrumbItemType[] = [
 *   { label: "Home", href: "/" },
 *   { label: "Products", href: "/products" },
 *   { label: "Electronics", href: "/products/electronics" },
 * ];
 *
 * <Breadcrumb items={items} />
 * ```
 */
// The JSDoc for Breadcrumb component, its features, and example are defined above,
// associated with the BreadcrumbProps type.
export type BreadcrumbProps = {
  /**
   * @propCategory Required
   * @description An array of `BreadcrumbItemType` objects, each representing an item in the breadcrumb trail.
   */
  items: BreadcrumbItemType[];
  /**
   * @propCategory Appearance
   * @description Optional custom separator to be displayed between breadcrumb items. Defaults to '/'.
   */
  separator?: React.ReactNode;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the breadcrumb container.
   */
  className?: string;
};
