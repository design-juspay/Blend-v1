import React from 'react';
import { RadioProps, RadioSize } from './types';
import { getRadioDataState } from './utils';
import { StyledRadioInput, StyledRadioLabel } from './StyledRadio';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import radioTokens from './token';

export const Radio = ({
  id,
  value,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  required = false,
  error = false,
  size = RadioSize.MEDIUM,
  children,
  subtext,
  slot,
  name,
}: RadioProps) => {
  const generatedId = React.useId();
  const uniqueId = id || generatedId;
  
  // Determine if this is a controlled component
  const isControlled = checked !== undefined;
  
  // For controlled components, use checked; for uncontrolled, use defaultChecked
  const inputProps = isControlled 
    ? { checked: checked } 
    : { defaultChecked: defaultChecked };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  // Get the current checked state for styling purposes
  const currentChecked = isControlled ? checked : defaultChecked;

  return (
    <Block display="flex" flexDirection="column">
      <Block display="flex" alignItems="center">
        <StyledRadioInput
          type="radio"
          id={uniqueId}
          name={name}
          value={value}
          {...inputProps}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          data-state={getRadioDataState(currentChecked || false)}
          size={size}
          $isDisabled={disabled}
          $isChecked={currentChecked || false}
          $error={error}
        />
        
        {children && (
          <StyledRadioLabel
            htmlFor={uniqueId}
            $isDisabled={disabled}
            $error={error}
          >
            <PrimitiveText
              as="span"
              fontSize={radioTokens.sizes[size].fontSize}
              fontWeight={radioTokens.label.fontWeight}
            >
              {children}
              {required && (
                <PrimitiveText
                  as="span"
                  color={radioTokens.required.color}
                  margin={`0 0 0 ${radioTokens.required.spacing}`}
                >
                  *
                </PrimitiveText>
              )}
            </PrimitiveText>
          </StyledRadioLabel>
        )}
        {slot && (
          <Block as="span" marginLeft={radioTokens.spacing.rightSlot}>
            {slot}
          </Block>
        )}
      </Block>

      {subtext && (
        <Block 
          marginLeft={radioTokens.sizes[size].subtext.marginLeft}
          marginTop={radioTokens.sizes[size].subtext.marginTop}
        >
          <PrimitiveText
            as="span"
            color={disabled ? radioTokens.subtext.disabled : 
                   error ? radioTokens.subtext.error : 
                   radioTokens.subtext.default}
            fontSize={radioTokens.sizes[size].subtext.fontSize}
          >
            {subtext}
          </PrimitiveText>
        </Block>
      )}
    </Block>
  );
};

Radio.displayName = 'Radio';

export default Radio;
