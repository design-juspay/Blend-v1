import { forwardRef } from "react";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import Block from "../Primitives/Block/Block";
import {
  ButtonProps,
  ButtonSizeV2,
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "./types";
import { ButtonTokensType } from "./button.tokens";
import Text from "../Text/Text";
import { useComponentToken } from "../../context/useComponentToken";

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
      onClick,
    },
    ref
  ) => {
    const buttonTokens = useComponentToken("BUTTON") as ButtonTokensType;
    return (
      <PrimitiveButton
        onClick={onClick}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={subType === ButtonSubTypeV2.INLINE ? "fit-content" : "auto"}
        ref={ref}
        gap={buttonTokens.gap}
        background={buttonTokens.backgroundColor[buttonType][subType].default}
        disabled={disabled}
        color={buttonTokens.color[buttonType][subType].default}
        borderRadius={buttonTokens.borderRadius[buttonType][subType].default}
        padding={buttonTokens.padding[size][subType]}
        border={buttonTokens.border[buttonType][subType].default}
        outline={buttonTokens.outline[buttonType][subType].default}
        _active={
          !disabled
            ? {
                background:
                  buttonTokens.backgroundColor[buttonType][subType].active,
                border: buttonTokens.border[buttonType][subType].active,
                boxShadow: buttonTokens.shadow[buttonType][subType].active,
              }
            : undefined
        }
        _hover={{
          border: buttonTokens.border[buttonType][subType].hover,
          background: buttonTokens.backgroundColor[buttonType][subType].hover,
          outline: buttonTokens.outline[buttonType][subType].hover,
          color: buttonTokens.color[buttonType][subType].hover,
        }}
        _focusVisible={{
          border: buttonTokens.border[buttonType][subType].default,
          outline: buttonTokens.outline[buttonType][subType].active,
        }}
        cursor={disabled ? "not-allowed" : "pointer"}
        _disabled={{
          background:
            buttonTokens.backgroundColor[buttonType][subType].disabled,
          border: buttonTokens.border[buttonType][subType].disabled,
          color: buttonTokens.color[buttonType][subType].disabled,
        }}
      >
        {leadingIcon && (
          <Block as="span" contentCentered>
            {leadingIcon}
          </Block>
        )}
        {text && (
          <Text
            fontFamily="InterDisplay"
            variant="body.md"
            style={{
              fontWeight: 500,
            }}
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
