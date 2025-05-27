import * as React from 'react';
import { RadioProps, RadioSize } from './types';
import { generateRadioId, getRadioDataState } from './utils';
import { StyledRadioInput, StyledRadioLabel } from './StyledRadio';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import radioTokens from './token';

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      value,
      isChecked,
      defaultChecked = false,
      onChange,
      isDisabled = false,
      size = RadioSize.MEDIUM,
      children,
      subtext,
      rightSlot,
      className = '',
      name,
      accessibilityLabel,
    },
    ref
  ) => {
    const [checkedState, setCheckedState] = React.useState<boolean>(defaultChecked);

    const isControlled = isChecked !== undefined;
    const checked = isControlled ? isChecked : checkedState;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) return;

      const newChecked = e.target.checked;

      if (!isControlled) {
        setCheckedState(newChecked);
      }

      if (onChange) {
        onChange(newChecked);
      }
    };

    const reactId = React.useId();
    const uniqueId = generateRadioId(id, value, reactId);

    // Radio input element with improved accessibility
    const radioElement = (
      <StyledRadioInput
        ref={ref}
        type="radio"
        id={uniqueId}
        name={name}
        value={value}
        checked={checked}
        disabled={isDisabled}
        onChange={handleChange}
        aria-label={accessibilityLabel}
        aria-labelledby={children ? `${uniqueId}-label` : undefined}
        aria-describedby={subtext ? `${uniqueId}-description` : undefined}
        data-state={getRadioDataState(checked)}
        size={size}
        $isDisabled={isDisabled}
        $isChecked={checked}
        className={className}
      />
    );

    // Label element with PrimitiveText for better typography control
    const labelElement = children && (
      <StyledRadioLabel
        htmlFor={uniqueId}
        id={`${uniqueId}-label`}
        $isDisabled={isDisabled}
      >
        <PrimitiveText
          as="span"
          fontSize={radioTokens.sizes[size].fontSize}
          fontWeight={radioTokens.label.fontWeight}
        >
          {children}
        </PrimitiveText>
      </StyledRadioLabel>
    );

    return (
      <Block display="flex" flexDirection="column">
        <Block display="flex" alignItems="center">
          {radioElement}
          <Block display="flex" alignItems="center" justifyContent="space-between" width="100%">
            {labelElement}
            {rightSlot && (
              <Block as="span" marginLeft="auto">
                {rightSlot}
              </Block>
            )}
          </Block>
        </Block>

        {subtext && (
          <Block 
            id={`${uniqueId}-description`}
            marginLeft={radioTokens.sizes[size].subtext.marginLeft}
            marginTop={radioTokens.sizes[size].subtext.marginTop}
          >
            <PrimitiveText
              as="span"
              color={isDisabled ? radioTokens.subtext.disabled : radioTokens.subtext.default}
              fontSize={radioTokens.sizes[size].subtext.fontSize}
            >
              {subtext}
            </PrimitiveText>
          </Block>
        )}
      </Block>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
