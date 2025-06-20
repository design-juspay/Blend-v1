import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * @propCategory Enum
 * @description Defines the visual style variant of the Tabs.
 */
export enum TabsVariant {
  /** Tabs with a boxed appearance for triggers. */
  BOXED = 'boxed',
  /** Tabs with a floating or pill-like appearance for triggers. */
  FLOATING = 'floating',
  /** Tabs where the active trigger is indicated by an underline. */
  UNDERLINE = 'underline',
}

/**
 * @propCategory Enum
 * @description Defines the size of the Tabs (triggers and list).
 */
export enum TabsSize {
  /** Medium size (default). */
  MD = 'md',
  /** Large size. */
  LG = 'lg',
}

/**
 * @description Props for the main Tabs root component. This component wraps `TabsList` and `TabsContent`.
 * It's based on Radix UI Tabs Primitive and manages the overall state of the tabs.
 * @feature Organizes content into switchable tabbed sections.
 * @feature Supports different visual variants (boxed, floating, underline).
 * @feature Customizable size.
 * @feature Controlled or uncontrolled active tab.
 * @example
 * ```tsx
 * import { Tabs, TabsList, TabsTrigger, TabsContent, TabsVariant, TabsSize } from "./components/Tabs"; // Assuming path
 *
 * <Tabs defaultValue="tab1" variant={TabsVariant.UNDERLINE} size={TabsSize.MD}>
 *   <TabsList>
 *     <TabsTrigger value="tab1">Account</TabsTrigger>
 *     <TabsTrigger value="tab2">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">
 *     <p>Account settings go here.</p>
 *   </TabsContent>
 *   <TabsContent value="tab2">
 *     <p>Password settings go here.</p>
 *   </TabsContent>
 * </Tabs>
 * ```
 */
export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  /**
   * @propCategory Appearance
   * @description The visual style variant of the tabs.
   * @default TabsVariant.UNDERLINE
   */
  variant?: TabsVariant;
  /**
   * @propCategory Appearance
   * @description The size of the tabs.
   * @default TabsSize.MD
   */
  size?: TabsSize;
};

/**
 * @description Props for the `TabsList` component, which contains the tab triggers.
 * Based on Radix UI Tabs List Primitive.
 */
export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  /**
   * @propCategory Appearance
   * @description The visual style variant, usually inherited from the parent `Tabs` component.
   */
  variant?: TabsVariant;
  /**
   * @propCategory Appearance
   * @description The size, usually inherited from the parent `Tabs` component.
   */
  size?: TabsSize;
  /**
   * @propCategory Layout
   * @description If true, the tabs list will expand to fill available width.
   * @default false
   */
  expanded?: boolean;
};

/**
 * @description Props for the `TabsTrigger` component, which represents an individual tab button.
 * Based on Radix UI Tabs Trigger Primitive.
 */
export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  /**
   * @propCategory Required
   * @description A unique value that associates the trigger with a `TabsContent` panel.
   */
  value: string;
  /**
   * @propCategory Appearance
   * @description The visual style variant, usually inherited from the parent `Tabs` component.
   */
  variant?: TabsVariant;
  /**
   * @propCategory Appearance
   * @description The size, usually inherited from the parent `Tabs` component.
   */
  size?: TabsSize;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the left of the trigger's children.
   */
  leftSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed to the right of the trigger's children.
   */
  rightSlot?: ReactNode;
  /**
   * @propCategory Required
   * @description The content of the tab trigger, typically a string or number.
   */
  children: string | number;
};

/**
 * @description Props for the `TabsContent` component, which contains the content for a tab panel.
 * Based on Radix UI Tabs Content Primitive.
 */
export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

/**
 * @description Internal type for styling, not typically used directly.
 */
export type TabsStyles = {
  list: string;
  trigger: string;
};
