import React, { useState } from 'react';
import { SwitchProps, SwitchSize } from './types';
import { getSwitchDataState } from './utils';
import { StyledSwitchRoot, StyledSwitchThumb, StyledSwitchLabel } from './StyledSwitch';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import switchTokens from './token';

export const Switch = ({
  id,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  required = false,
  error = false,
  size = SwitchSize.MEDIUM,
  children,
  subtext,
  slot,
  name,
  value,
}: SwitchProps) => {
  // TODO: This is a temporary fix to avoid the warning about useId.
  // We need to find a better solution to handle the id.
  const generatedId = React.useId();
  const uniqueId = id || generatedId;

  // Determine if this is a controlled component
  const isControlled = checked !== undefined;
  
  // Internal state for uncontrolled mode
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  
  // Get the current checked state
  const currentChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    
    const newChecked = !currentChecked;
    
    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    // Call onChange callback
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <Block display="flex" flexDirection="column">
      <Block display="flex" alignItems="center">
        <StyledSwitchRoot
          type="button"
          role="switch"
          id={uniqueId}
          aria-checked={currentChecked}
          disabled={disabled}
          onClick={handleToggle}
          data-state={getSwitchDataState(currentChecked || false)}
          size={size}
          $isDisabled={disabled}
          $isChecked={currentChecked || false}
          $error={error}
          value={value}
          name={name}
        >
          <StyledSwitchThumb
            size={size}
            $isChecked={currentChecked || false}
          />
        </StyledSwitchRoot>
        
        {children && (
          <StyledSwitchLabel
            htmlFor={uniqueId}
            $isDisabled={disabled}
            $error={error}
          >
            <PrimitiveText
              as="span"
              fontSize={switchTokens.sizes[size].fontSize}
              fontWeight={switchTokens.label.fontWeight}
            >
              {children}
              {required && (
                <PrimitiveText
                  as="span"
                  color={switchTokens.required.color}
                  margin={`0 0 0 ${switchTokens.required.spacing}`}
                >
                  *
                </PrimitiveText>
              )}
            </PrimitiveText>
          </StyledSwitchLabel>
        )}
        {slot && (
          <Block as="span" marginLeft={switchTokens.spacing.rightSlot}>
            {slot}
          </Block>
        )}
      </Block>

      {subtext && (
        <Block 
          marginLeft={switchTokens.sizes[size].subtext.marginLeft}
          marginTop={switchTokens.sizes[size].subtext.marginTop}
        >
          <PrimitiveText
            as="span"
            color={disabled ? switchTokens.subtext.disabled : 
                   error ? switchTokens.subtext.error : 
                   switchTokens.subtext.default}
            fontSize={switchTokens.sizes[size].subtext.fontSize}
          >
            {subtext}
          </PrimitiveText>
        </Block>
      )}
    </Block>
  );
};

Switch.displayName = 'Switch';
