import { ReactElement } from "react";
import { ButtonV2Props } from "../ButtonV2"; // Assuming ButtonV2Props is defined in ButtonV2/types.ts or similar

/**
 * @description A container for grouping `ButtonV2` components.
 * It allows buttons to be arranged horizontally or vertically (stacked).
 * This version is specifically designed to work with `ButtonV2` components.
 * @feature Groups multiple `ButtonV2` components.
 * @feature Supports horizontal (default) and vertical (stacked) layouts.
 * @feature Ensures consistent spacing and styling for grouped `ButtonV2` instances.
 * @example
 * ```tsx
 * import { ButtonGroupV2 } from "./components/ButtonGroupV2";
 * import { ButtonV2 } from "./components/ButtonV2"; // Assuming ButtonV2 component
 *
 * <ButtonGroupV2>
 *   <ButtonV2 variant="primary">Button 1</ButtonV2>
 *   <ButtonV2 variant="secondary">Button 2</ButtonV2>
 * </ButtonGroupV2>
 *
 * <ButtonGroupV2 stacked={true}>
 *   <ButtonV2 variant="primary">Stacked Button 1</ButtonV2>
 *   <ButtonV2 variant="secondary">Stacked Button 2</ButtonV2>
 * </ButtonGroupV2>
 * ```
 */
export type ButtonGroupV2Props = {
  /**
   * @propCategory Layout
   * @description If true, stacks the `ButtonV2` components vertically. Otherwise, they are arranged horizontally.
   * @default false
   */
  stacked?: boolean;
  /**
   * @propCategory Required
   * @description One or more `ButtonV2` React elements to be grouped.
   */
  children: ReactElement<ButtonV2Props> | ReactElement<ButtonV2Props>[];
};
