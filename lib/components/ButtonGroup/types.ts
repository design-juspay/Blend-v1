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
 * @description A component to group multiple buttons together, either horizontally or vertically.
 * It can control the size and styling mode of the enclosed buttons.
 * @feature Groups multiple buttons.
 * @feature Supports horizontal (default) and vertical (stacked) layouts.
 * @feature Different modes for button styling within the group (e.g., single primary, all secondary).
 * @feature Consistent sizing for all buttons in the group.
 * @example
 * ```tsx
 * import { ButtonGroup, ButtonGroupMode } from "./components/ButtonGroup";
 * import { Button, ButtonSize } from "./components/Button"; // Assuming Button component is used as children
 *
 * <ButtonGroup mode={ButtonGroupMode.SINGLE_PRIMARY} size={ButtonSize.MEDIUM}>
 *   <Button text="Save" />
 *   <Button text="Cancel" />
 *   <Button text="Help" />
 * </ButtonGroup>
 *
 * <ButtonGroup isStacked={true} size={ButtonSize.SMALL}>
 *   <Button text="Option A" />
 *   <Button text="Option B" />
 * </ButtonGroup>
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
