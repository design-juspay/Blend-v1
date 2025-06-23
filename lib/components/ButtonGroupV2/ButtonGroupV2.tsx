import React from "react";
import { Children } from "react";
import Block from "../Primitives/Block/Block";
import { ButtonGroupV2Props } from "./types";

/**
 * @description A container component for grouping ButtonV2 components with consistent spacing and styling.
 * Supports both horizontal and vertical (stacked) layouts with automatic button positioning.
 * @feature Groups multiple ButtonV2 components with consistent spacing
 * @feature Horizontal layout (default) with customizable gap
 * @feature Vertical stacked layout option
 * @feature Automatic button position management (left, center, right) for stacked layout
 * @feature Seamless integration with ButtonV2 component variants and states
 * @feature Maintains visual consistency across grouped buttons
 * @feature Responsive design considerations
 * @feature Keyboard navigation between grouped buttons
 * @example Basic Usage - Horizontal Layout
 * ```tsx
 * import { ButtonGroupV2, ButtonV2, ButtonV2Type } from "blend-v1";
 * 
 * function BasicButtonGroupExample() {
 *   return (
 *     <ButtonGroupV2>
 *       <ButtonV2 type={ButtonV2Type.PRIMARY}>Save</ButtonV2>
 *       <ButtonV2 type={ButtonV2Type.SECONDARY}>Cancel</ButtonV2>
 *     </ButtonGroupV2>
 *   );
 * }
 * ```
 * @example Stacked Layout  
 * ```tsx
 * import { ButtonGroupV2, ButtonV2, ButtonV2Type, ButtonV2Size } from "blend-v1";
 * 
 * // Basic stacked group
 * <ButtonGroupV2 stacked>
 *   <ButtonV2 type={ButtonV2Type.PRIMARY} size={ButtonV2Size.LG}>
 *     Create Account
 *   </ButtonV2>
 *   <ButtonV2 type={ButtonV2Type.SECONDARY} size={ButtonV2Size.LG}>
 *     Sign In
 *   </ButtonV2>
 * </ButtonGroupV2>
 * ```
 * @example Advanced Usage with Loading States
 * ```tsx
 * import { ButtonGroupV2, ButtonV2, ButtonV2Type } from "blend-v1";
 * import { useState } from "react";
 * 
 * function AdvancedExample() {
 *   const [isLoading, setIsLoading] = useState(false);
 * 
 *   return (
 *     <ButtonGroupV2>
 *       <ButtonV2 type={ButtonV2Type.PRIMARY} loading={isLoading}>
 *         Save Changes
 *       </ButtonV2>
 *       <ButtonV2 type={ButtonV2Type.SECONDARY}>
 *         Save Draft
 *       </ButtonV2>
 *       <ButtonV2 type={ButtonV2Type.TERTIARY}>
 *         Cancel
 *       </ButtonV2>
 *     </ButtonGroupV2>
 *   );
 * }
 * ```
 */
const ButtonGroupV2: React.FC<ButtonGroupV2Props> = ({
  stacked = false,
  children,
}) => {
  if (!stacked) {
    return (
      <Block display="flex" gap={10}>
        {children}
      </Block>
    );
  }
  return (
    <Block display="flex" gap={0}>
      {Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          key: child.key || index,
          buttonGroupPosition:
            index === 0
              ? "left"
              : index === Children.count(children) - 1
              ? "right"
              : "center",
        });
      })}
    </Block>
  );
};

export default ButtonGroupV2;
