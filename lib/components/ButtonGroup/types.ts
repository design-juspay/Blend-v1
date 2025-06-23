import { ReactNode } from 'react';
import { ButtonSize } from '../Button/types'; // Assuming ButtonSize is also applicable here or a similar ButtonGroupSize is intended.

/**
 * @propCategory Enum
 * @description Defines the size of the buttons within the ButtonGroup.
 * Note: The original code uses `ButtonSize` from `../Button/types` for the `size` prop,
 * but also defines a `ButtonGroupSize` enum which is not currently used in `ButtonGroupProps`.
 * This JSDoc assumes `ButtonSize` is the intended enum for controlling button sizes in the group.
 */
export enum ButtonGroupSize {
  /** Small sized buttons in the group. */
  SMALL = 'sm',
  /** Medium sized buttons in the group. */
  MEDIUM = 'md',
  /** Large sized buttons in the group. */
  LARGE = 'lg',
}

/**
 * @propCategory Enum
 * @description Defines the styling and behavior mode of the ButtonGroup.
 */
export enum ButtonGroupMode {
  /** Styles the first button as primary and subsequent buttons as secondary. */
  SINGLE_PRIMARY = 'singlePrimary',
  /** Styles all buttons in the group as secondary. */
  ALL_SECONDARY = 'allSecondary',
  /** Applies no specific style transformation to the buttons; they retain their individual styling. */
  NO_TRANSFORM = 'noTransform',
}

/**
 * @description A versatile button grouping component that organizes multiple buttons with consistent styling and layout controls.
 * Perfect for toolbars, action bars, form controls, and navigation elements where multiple related actions need to be presented together.
 * @feature Flexible horizontal and vertical layout options for different UI patterns
 * @feature Multiple styling modes including single primary, all secondary, and no transform
 * @feature Consistent sizing across all grouped buttons for visual harmony
 * @feature Support for any button content including icons, text, and complex elements
 * @feature Seamless integration with existing Button components
 * @feature Responsive design patterns for mobile and desktop layouts
 * @feature Accessible keyboard navigation and screen reader support
 * @feature Customizable spacing and alignment for different design systems
 * @example Basic Button Group
 * ```tsx
 * import { ButtonGroup, Button, ButtonGroupMode } from "blend-v1";
 * 
 * <ButtonGroup mode={ButtonGroupMode.SINGLE_PRIMARY}>
 *   <Button text="Save" />
 *   <Button text="Cancel" />
 *   <Button text="Delete" />
 * </ButtonGroup>
 * ```
 * @example Vertical Button Group with Icons
 * ```tsx
 * import { ButtonGroup, Button, ButtonSize } from "blend-v1";
 * import { Save, Edit, Trash, Share } from "lucide-react";
 * 
 * <ButtonGroup 
 *   isStacked={true} 
 *   size={ButtonSize.MEDIUM}
 *   mode={ButtonGroupMode.ALL_SECONDARY}
 * >
 *   <Button text="Save Document" leftSlot={<Save size={16} />} />
 *   <Button text="Edit Document" leftSlot={<Edit size={16} />} />
 *   <Button text="Share Document" leftSlot={<Share size={16} />} />
 *   <Button text="Delete Document" leftSlot={<Trash size={16} />} />
 * </ButtonGroup>
 * ```
 * @example Advanced Action Toolbar
 * ```tsx
 * import { ButtonGroup, Button, ButtonSize, ButtonGroupMode } from "blend-v1";
 * import { 
 *   Bold, Italic, Underline, AlignLeft, 
 *   AlignCenter, AlignRight, List, ListOrdered 
 * } from "lucide-react";
 * 
 * function TextEditorToolbar() {
 *   return (
 *     <div style={{ display: 'flex', gap: '16px', padding: '8px' }}>
 *       <ButtonGroup 
 *         size={ButtonSize.SMALL} 
 *         mode={ButtonGroupMode.NO_TRANSFORM}
 *       >
 *         <Button leftSlot={<Bold size={14} />} />
 *         <Button leftSlot={<Italic size={14} />} />
 *         <Button leftSlot={<Underline size={14} />} />
 *       </ButtonGroup>
 *       
 *       <ButtonGroup 
 *         size={ButtonSize.SMALL}
 *         mode={ButtonGroupMode.ALL_SECONDARY}
 *       >
 *         <Button leftSlot={<AlignLeft size={14} />} />
 *         <Button leftSlot={<AlignCenter size={14} />} />
 *         <Button leftSlot={<AlignRight size={14} />} />
 *       </ButtonGroup>
 *       
 *       <ButtonGroup 
 *         size={ButtonSize.SMALL}
 *         mode={ButtonGroupMode.SINGLE_PRIMARY}
 *       >
 *         <Button leftSlot={<List size={14} />} />
 *         <Button leftSlot={<ListOrdered size={14} />} />
 *       </ButtonGroup>
 *     </div>
 *   );
 * }
 * ```
 */
export interface ButtonGroupProps {
  /**
   * @propCategory Appearance
   * @description The size of the buttons within the group. Uses `ButtonSize` enum from `../Button/types`.
   * @default ButtonSize.MEDIUM
   */
  size?: ButtonSize;
  /**
   * @propCategory Layout
   * @description If true, stacks the buttons vertically. Otherwise, they are arranged horizontally.
   * @default false
   */
  isStacked?: boolean;
  /**
   * @propCategory Appearance
   * @description Defines the styling mode for buttons within the group.
   * @default ButtonGroupMode.NO_TRANSFORM
   */
  mode?: ButtonGroupMode;
  /**
   * @propCategory Required
   * @description The Button components to be rendered within the group.
   */
  children: ReactNode;
}
