import React, { useState } from 'react';
import { SwitchProps, SwitchSize } from './types';
import { getSwitchDataState } from './utils';
import { StyledSwitchRoot, StyledSwitchThumb, StyledSwitchLabel } from './StyledSwitch';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import { useComponentToken } from '../../context';
import { SwitchTokensType } from './switch.token';

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
  const tokens = useComponentToken('SWITCH') as SwitchTokensType;
  
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
              fontSize={tokens.label.font.size[size]}
              fontWeight={tokens.label.font.weight}
            >
              {children}
              {required && (
                <PrimitiveText
                  as="span"
                  color={tokens.required.color}
                  margin={`0 0 0 ${tokens.required.spacing}`}
                >
                  *
                </PrimitiveText>
              )}
            </PrimitiveText>
          </StyledSwitchLabel>
        )}
        {slot && (
          <Block as="span" marginLeft={tokens.root.spacing.rightSlot}>
            {slot}
          </Block>
        )}
      </Block>

      {subtext && (
        <Block 
          marginLeft={tokens.subtext.spacing.left[size]}
          marginTop={tokens.subtext.spacing.top}
        >
          <PrimitiveText
            as="span"
            color={disabled ? tokens.subtext.color.disabled : 
                   error ? tokens.subtext.color.error : 
                   tokens.subtext.color.default}
            fontSize={tokens.subtext.font.size[size]}
          >
            {subtext}
          </PrimitiveText>
        </Block>
      )}
    </Block>
  );
};

Switch.displayName = 'Switch';
