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
      checked,

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
    },
    ref
  ) => {
    const reactId = React.useId();
    const uniqueId = generateSwitchId(id, value, reactId);

    const handleToggle = () => {
      if (disabled) return;
      if (onChange) {
        onChange(!checked);
      }
    };

    return (
      <Block display="flex" flexDirection="column">
        <Block display="flex" alignItems="center">
          <StyledSwitchRoot
            ref={ref}
            type="button"
            role="switch"
            id={uniqueId}
            aria-checked={checked}
            disabled={disabled}
            onClick={handleToggle}
            data-state={getSwitchDataState(checked || false)}
            size={size}
            $isDisabled={disabled}
            $isChecked={checked || false}
            $error={error}
            value={value}
            name={name}
          >
            <StyledSwitchThumb
              size={size}
              $isChecked={checked || false}
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
  }
);

Switch.displayName = 'Switch';

export default Switch;
