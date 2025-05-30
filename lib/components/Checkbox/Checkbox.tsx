import React from 'react';
import { Check, Minus } from 'lucide-react';
import { CheckboxProps, CheckboxSize } from './types';
import { 
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

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id,
      value,
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      required = false,
      error = false,

      size = CheckboxSize.MEDIUM,
      children,
      subtext,
      slot,
    },
    ref
  ) => {
    // TODO: This is a temporary fix to avoid the warning about useId.
    // We need to find a better solution to handle the id.
    const generatedId = React.useId();
    const uniqueId = id || generatedId;
    
    // Determine if this is a controlled component
    const isControlled = checked !== undefined;
    
    // For controlled components, use checked; for uncontrolled, use defaultChecked
    const inputProps = isControlled 
      ? { checked: checked === 'indeterminate' ? false : checked } 
      : { defaultChecked: defaultChecked };

    // Get the current checked state for styling and data purposes
    const currentChecked = isControlled ? checked : defaultChecked;

    return (
      <Block display="flex" flexDirection="column">
        <Block display="flex" alignItems="center">
          <StyledCheckboxRoot
            ref={ref}
            id={uniqueId}
            {...inputProps}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={required}
            value={value}
            data-state={getCheckboxDataState(currentChecked || false)}
            data-error={error}
            size={size}
            $isDisabled={disabled}
            $checked={currentChecked || false}
            $error={error}
          >
            <StyledCheckboxIndicator
              forceMount={checked === 'indeterminate' ? true : undefined}
              size={size}
            >
              {currentChecked && (
                <Block 
                  as="span" 
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                >
                  {currentChecked === 'indeterminate' ? (
                    <Minus 
                      size={extractPixelValue(checkboxTokens.sizes[size].icon.width)}
                      color={checkboxTokens.icon.color} 
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Check 
                      size={extractPixelValue(checkboxTokens.sizes[size].icon.width)}
                      color={checkboxTokens.icon.color} 
                      strokeWidth={2.5}
                    />
                  )}
                </Block>
              )}
            </StyledCheckboxIndicator>
          </StyledCheckboxRoot>
          
          {children && (
            <StyledLabel
              htmlFor={uniqueId}
              $isDisabled={disabled}
              $error={error}
            >
              <PrimitiveText
                as="span"
                fontSize={checkboxTokens.sizes[size].fontSize}
                fontWeight={checkboxTokens.label.fontWeight}
              >
                {children}
                {required && (
                  <PrimitiveText
                    as="span"
                    color={checkboxTokens.required.color}
                    margin={`0 0 0 ${checkboxTokens.required.spacing}`}
                  >
                    *
                  </PrimitiveText>
                )}
              </PrimitiveText>
            </StyledLabel>
          )}
          {slot && (
            <Block as="span" marginLeft={checkboxTokens.spacing.rightSlot}>
              {slot}
            </Block>
          )}
        </Block>

        {subtext && (
          <Block 
            marginLeft={checkboxTokens.sizes[size].subtext.marginLeft}
            marginTop={checkboxTokens.sizes[size].subtext.marginTop}
          >
            <PrimitiveText
              as="span"
              color={disabled ? checkboxTokens.subtext.disabled : 
                     error ? checkboxTokens.subtext.error : 
                     checkboxTokens.subtext.default}
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
