"use client";

import * as React from 'react';
import { ButtonProps, ButtonSize } from '../Button/types';
import { ButtonGroupProps, ButtonGroupMode } from './types';
import { 
  getButtonPosition, 
  findPrimaryButtonIndex,
  getTransformedButtonType
} from './buttonGroupUtils';
import { 
  StyledButtonGroupContainer, 
  StyledButtonWrapper 
} from './StyledButtonGroup';

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      size = ButtonSize.MEDIUM,
      isStacked = true,
      mode = ButtonGroupMode.SINGLE_PRIMARY,
      children,
      ...props
    },
    ref
  ) => {
    // Get React children as array and validate
    const childrenArray = React.Children.toArray(children)
      .filter(React.isValidElement) as React.ReactElement[];
    const totalChildren = childrenArray.length;

    // Find the first primary/success/danger button (for singlePrimary mode)
    // Only calculate if we're in SINGLE_PRIMARY mode
    const primaryButtonIndex = mode === ButtonGroupMode.SINGLE_PRIMARY 
      ? findPrimaryButtonIndex(childrenArray) 
      : -1;

    return (
      <StyledButtonGroupContainer
        ref={ref}
        $isStacked={isStacked}
        $size={size}
        role="group"
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          // Type checking for Button component
          const childProps = child.props as Partial<ButtonProps>;
          
          // Apply button type transformation
          const finalButtonType = getTransformedButtonType(
            childProps.buttonType, 
            mode, 
            index, 
            primaryButtonIndex
          );

          // Get position in the group (first, middle, last)
          const position = getButtonPosition(index, totalChildren);
          
          // Create the button with appropriate props
          const buttonElement = React.cloneElement(child, {
            ...childProps,
            buttonType: finalButtonType,
            size: size, // Ensure consistent size
          } as React.HTMLAttributes<HTMLElement>);
          
          // If stacked, wrap the button in a styled container
          if (isStacked) {
            return (
              <StyledButtonWrapper $position={position} $isStacked={isStacked}>
                {buttonElement}
              </StyledButtonWrapper>
            );
          }

          // For non-stacked, just return the button
          return buttonElement;
        })}
      </StyledButtonGroupContainer>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
