import * as React from 'react';
import { Check, Minus } from 'lucide-react';
import { CheckboxProps, CheckboxSize, CheckboxPosition } from './types';
import { 
  generateCheckboxId, 
  getCheckboxDataState, 
  extractPixelValue
} from './checkboxUtils';
import {
  StyledCheckboxRoot,
  StyledCheckboxIndicator,
  StyledLabel
} from './StyledCheckbox';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import checkboxTokens from './token';

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      value,
      isChecked,
      defaultChecked = false,
      onCheckedChange,
      isDisabled = false,
      required = false,
      className = '',
      indicatorClassName = '',
      checkIconClassName = '',
      size = CheckboxSize.MEDIUM,
      children,
      position = CheckboxPosition.LEFT,
      subtext,
      rightSlot,
    },
    ref
  ) => {
    const [checkedState, setCheckedState] = React.useState<boolean | 'indeterminate'>(
      defaultChecked
    );

    const isControlled = isChecked !== undefined;
    const checked = isControlled ? isChecked : checkedState;
    const isIndeterminate = checked === 'indeterminate';

    const handleChange = (newChecked: boolean | 'indeterminate') => {
      if (isDisabled) return;

      if (!isControlled) {
        setCheckedState(newChecked);
      }

      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    };

    const renderIndicator = () => {
      if (!checked) return null;

      // Extract numeric values from token size strings
      const iconSize = extractPixelValue(checkboxTokens.sizes[size].icon.width);

      if (isIndeterminate) {
        return (
          <Block 
            as="span" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            className={checkIconClassName}
          >
            <Minus 
              size={iconSize}
              color={checkboxTokens.icon.color} 
              strokeWidth={2.5}
            />
          </Block>
        );
      }

      return (
        <Block 
          as="span" 
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          className={checkIconClassName}
        >
          <Check 
            size={iconSize}
            color={checkboxTokens.icon.color} 
            strokeWidth={2.5}
          />
        </Block>
      );
    };

    const reactId = React.useId();
    const uniqueId = generateCheckboxId(id, value, reactId);
    
    // Checkbox element with improved accessibility
    const checkboxElement = (
      <StyledCheckboxRoot
        ref={ref}
        id={uniqueId}
        checked={isIndeterminate ? false : checked}
        onCheckedChange={handleChange}
        disabled={isDisabled}
        required={required}
        value={value}
        className={className}
        data-state={getCheckboxDataState(checked)}
        size={size}
        $isDisabled={isDisabled}
        $checked={checked}
        aria-labelledby={`${uniqueId}-label`}
        aria-describedby={`${uniqueId}-description`}
      >
        <StyledCheckboxIndicator
          className={indicatorClassName}
          forceMount={isIndeterminate ? true : undefined}
          size={size}
        >
          {renderIndicator()}
        </StyledCheckboxIndicator>
      </StyledCheckboxRoot>
    );

    // Label element with PrimitiveText for better typography control
    const labelElement = children && (
      <StyledLabel
        htmlFor={uniqueId}
        id={`${uniqueId}-label`}
        $isDisabled={isDisabled}
      >
        <PrimitiveText
          as="span"
          fontSize={checkboxTokens.sizes[size].fontSize}
          fontWeight={checkboxTokens.label.fontWeight}
        >
          {children}
        </PrimitiveText>
      </StyledLabel>
    );

    return (
      <Block display="flex" flexDirection="column">
        <Block 
          display="flex" 
          alignItems="center"
          flexDirection={position === CheckboxPosition.RIGHT ? 'row-reverse' : 'row'}
        >
          {position === CheckboxPosition.LEFT ? (
            <>
              {checkboxElement}
              <Block display="flex" alignItems="center" justifyContent="space-between" width="100%">
                {labelElement}
                {rightSlot && (
                  <Block as="span" marginLeft="auto">
                    {rightSlot}
                  </Block>
                )}
              </Block>
            </>
          ) : (
            <>
              <Block display="flex" alignItems="center" justifyContent="space-between" width="100%">
                {labelElement}
                {rightSlot && (
                  <Block as="span" marginLeft="auto">
                    {rightSlot}
                  </Block>
                )}
              </Block>
              {checkboxElement}
            </>
          )}
        </Block>

        {subtext && (
          <Block 
            id={`${uniqueId}-description`}
            marginLeft={position === CheckboxPosition.LEFT 
              ? checkboxTokens.sizes[size].subtext.marginLeft 
              : '0'
            }
            marginTop={checkboxTokens.sizes[size].subtext.marginTop}
          >
            <PrimitiveText
              as="span"
              color={isDisabled ? checkboxTokens.subtext.disabled : checkboxTokens.subtext.default}
              fontSize={checkboxTokens.sizes[size].subtext.fontSize}
            >
              {subtext}
            </PrimitiveText>
          </Block>
        )}
      </Block>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
