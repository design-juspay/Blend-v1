import React, { forwardRef, useState } from 'react';
import { RadioGroupProps, RadioProps } from './types';
import { StyledRadioGroupLabel } from './StyledRadio';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import Radio from './Radio';
import radioTokens from './token';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      id,
      label,
      name,
      defaultValue,
      value: controlledValue,
      children,
      onChange,
      className,
      isDisabled = false,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const isRadioElement = (child: React.ReactElement): child is React.ReactElement<RadioProps> => {
      return child.type === Radio;
    };

    const enhancedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;

      if (isRadioElement(child)) {
        const childValue = child.props.value;

        if (!childValue) return child;

        return React.cloneElement(child, {
          isChecked: value === childValue,
          onChange: (checked: boolean) => {
            if (checked) {
              if (!isControlled) {
                setInternalValue(childValue);
              }

              if (child.props.onChange) {
                child.props.onChange(checked);
              }

              if (onChange) {
                onChange(childValue);
              }
            }
          },
          name,
          isDisabled: isDisabled || child.props.isDisabled,
        });
      }

      return child;
    });

    return (
      <Block 
        ref={ref} 
        role="radiogroup" 
        id={id}
        display="flex"
        flexDirection="column"
        gap={radioTokens.spacing.groupSpacing}
        className={className}
      >
        {label && (
          <StyledRadioGroupLabel>
            <PrimitiveText
              as="span"
              fontSize={radioTokens.sizes.md.fontSize}
              fontWeight={radioTokens.groupLabel.fontWeight}
            >
              {label}
            </PrimitiveText>
          </StyledRadioGroupLabel>
        )}
        <Block display="flex" flexDirection="column" gap={radioTokens.spacing.groupSpacing}>
          {enhancedChildren}
        </Block>
      </Block>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
