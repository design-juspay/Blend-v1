import * as React from 'react';
import { SwitchProps, SwitchSize } from './types';
import { generateSwitchId, getSwitchDataState } from './utils';
import { StyledSwitchRoot, StyledSwitchThumb, StyledSwitchLabel } from './StyledSwitch';
import Block from '../Primitives/Block/Block';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import switchTokens from './token';

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      id,
      isChecked,
      defaultChecked = false,
      onChange,
      isDisabled = false,
      size = SwitchSize.MEDIUM,
      label,
      subtext,
      rightSlot,
      className = '',
      name,
      value,
      accessibilityLabel,
    },
    ref
  ) => {
    const [checkedState, setCheckedState] = React.useState<boolean>(defaultChecked);

    const isControlled = isChecked !== undefined;
    const checked = isControlled ? isChecked : checkedState;

    const handleToggle = () => {
      if (isDisabled) return;

      const newChecked = !checked;

      if (!isControlled) {
        setCheckedState(newChecked);
      }

      if (onChange) {
        onChange(newChecked);
      }
    };

    const reactId = React.useId();
    const uniqueId = generateSwitchId(id, value, reactId);

    // Switch element with improved accessibility
    const switchElement = (
      <StyledSwitchRoot
        ref={ref}
        type="button"
        role="switch"
        id={uniqueId}
        aria-checked={checked}
        aria-label={accessibilityLabel}
        aria-labelledby={label ? `${uniqueId}-label` : undefined}
        aria-describedby={subtext ? `${uniqueId}-description` : undefined}
        disabled={isDisabled}
        onClick={handleToggle}
        data-state={getSwitchDataState(checked)}
        size={size}
        $isDisabled={isDisabled}
        $isChecked={checked}
        className={className}
        value={value}
        name={name}
      >
        <StyledSwitchThumb
          size={size}
          $isChecked={checked}
        />
      </StyledSwitchRoot>
    );

    // Label element with PrimitiveText for better typography control
    const labelElement = label && (
      <StyledSwitchLabel
        htmlFor={uniqueId}
        id={`${uniqueId}-label`}
        $isDisabled={isDisabled}
      >
        <PrimitiveText
          as="span"
          fontSize={switchTokens.sizes[size].fontSize}
          fontWeight={switchTokens.label.fontWeight}
        >
          {label}
        </PrimitiveText>
      </StyledSwitchLabel>
    );

    return (
      <Block display="flex" flexDirection="column">
        <Block display="flex" alignItems="center">
          {switchElement}
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
            marginLeft={switchTokens.sizes[size].subtext.marginLeft}
            marginTop={switchTokens.sizes[size].subtext.marginTop}
          >
            <PrimitiveText
              as="span"
              color={isDisabled ? switchTokens.subtext.disabled : switchTokens.subtext.default}
              fontSize={switchTokens.sizes[size].subtext.fontSize}
            >
              {subtext}
            </PrimitiveText>
          </Block>
        )}
      </Block>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
