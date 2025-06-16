import { forwardRef } from "react";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import Block from "../Primitives/Block/Block";
import {
  ButtonProps,
  ButtonSizeV2,
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "./types";
import buttonTokens from "./button.tokens";
import Text from "../Text/Text";

const ButtonV2 = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonType = ButtonTypeV2.PRIMARY,
      size = ButtonSizeV2.SMALL,
      subType = ButtonSubTypeV2.DEFAULT,
      text,
      leadingIcon,
      trailingIcon,
      disabled,
    },
    ref
  ) => {
    return (
      <PrimitiveButton
        display="flex"
        alignItems="center"
        justifyContent="center"
        ref={ref}
        gap={buttonTokens.gap}
        background={buttonTokens.backgroundColor[buttonType].default}
        disabled={disabled}
        color={buttonTokens.color[buttonType].default}
        borderRadius={buttonTokens.borderRadius[buttonType].default}
        padding={buttonTokens.padding[size]}
        border={buttonTokens.border[buttonType].default}
        _active={
          !disabled
            ? {
                background: buttonTokens.backgroundColor[buttonType].active,
                border: buttonTokens.border[buttonType].active,
                boxShadow: buttonTokens.shadow[buttonType].active,
              }
            : undefined
        }
        _hover={{
          border: buttonTokens.border[buttonType].hover,
          background: buttonTokens.backgroundColor[buttonType].hover,
        }}
        _focusVisible={{
          border: buttonTokens.border[buttonType].default,
          outline: buttonTokens.outline[buttonType].active,
        }}
        cursor={disabled ? "not-allowed" : "pointer"}
        _disabled={{
          background: buttonTokens.backgroundColor[buttonType].disabled,
          border: buttonTokens.border[buttonType].disabled,
        }}
      >
        {leadingIcon && (
          <Block as="span" contentCentered>
            {leadingIcon}
          </Block>
        )}
        {text && (
          <Text
            style={{
              fontWeight: 500,
            }}
            variant="body.md"
            as="span"
            color="inherit"
          >
            {text}
          </Text>
        )}
        {trailingIcon && (
          <Block as="span" contentCentered>
            {trailingIcon}
          </Block>
        )}
      </PrimitiveButton>
    );
  }
);

export default ButtonV2;
