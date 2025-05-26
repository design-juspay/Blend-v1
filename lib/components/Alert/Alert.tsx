import { X } from "lucide-react";
import Block from "../Primitives/Block/Block";
import { FOUNDATION_THEME } from "../../tokens";
import { foundationToken } from "../../foundationToken";
import { styled } from "styled-components";
import {
  AlertActionPlacement,
  AlertProps,
  AlertStyle,
  AlertVariant,
} from "./types";
import alertTokens from "./alert.tokens";
import Text from "../Text/Text";
import { forwardRef } from "react";

const AlertCloseButton = styled.button<{ variant: AlertVariant }>((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    outline: "none",
    height: FOUNDATION_THEME.unit[20],
    aspectRatio: "1/1",
    borderRadius: FOUNDATION_THEME.border.radius[2],
    cursor: "pointer",

    "&:focus-visible": {
      outline: `1px solid ${alertTokens.button[props.variant]}`,
    },
  };
});

const AlertActionButton = styled.button<{ variant: AlertVariant }>((props) => {
  return {
    border: "none",
    background: "none",
    cursor: "pointer",
    height: FOUNDATION_THEME.unit[20],
    color: alertTokens.button[props.variant],
    fontWeight: 600,
    fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
    width: "fit-content",
    whiteSpace: "nowrap",

    "&:focus-visible, &:hover": {
      textDecoration: "underline",
      textUnderlineOffset: 2,
      outline: "none",
      border: "none",
    },
  };
});

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  heading,
  description,
  variant = AlertVariant.PRIMARY,
  style = AlertStyle.SUBTLE,
  primaryAction,
  secondaryAction,
  onClose,
  icon,
  actionPlacement = AlertActionPlacement.RIGHT,
}, ref) => {
  // this is to make sure that the close button is always visible if there is an onClose prop
  // but no primary or secondary actions are provided
  if (onClose && primaryAction === undefined && secondaryAction === undefined) {
    actionPlacement = AlertActionPlacement.BOTTOM;
  }
  return (
    <Block
      ref={ref}
      maxWidth={900}
      backgroundColor={alertTokens.backgroundColor[variant][style]}
      padding={FOUNDATION_THEME.unit[16]}
      borderRadius={FOUNDATION_THEME.border.radius[8]}
      display="flex"
      flexDirection="column"
      gap={FOUNDATION_THEME.unit[8]}
      border={`1px solid ${alertTokens.border[variant]}`}
    >
      <Block
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={FOUNDATION_THEME.unit[8]}
      >
        <Block display="flex" contentCentered gap={FOUNDATION_THEME.unit[8]}>
          {icon && (
            <Block size={FOUNDATION_THEME.unit[16]} contentCentered>
              {icon}
            </Block>
          )}
          <Text
            variant="body.md"
            color={foundationToken.colors.gray[700]}
            fontWeight={600}
          >
            {heading}
          </Text>
        </Block>
        {onClose && actionPlacement === AlertActionPlacement.BOTTOM && (
          <AlertCloseButton onClick={onClose} variant={variant}>
            <X size={16} color={foundationToken.colors.gray[800]} />
          </AlertCloseButton>
        )}
      </Block>
      <Block
        paddingLeft={icon ? FOUNDATION_THEME.unit[24] : 0}
        display="flex"
        flexDirection={
          actionPlacement === AlertActionPlacement.BOTTOM ? "column" : "row"
        }
        alignItems="flex-start"
        justifyContent="space-between"
        gap={FOUNDATION_THEME.unit[18]}
      >
        <Text variant="body.md" color={foundationToken.colors.gray[600]}>
          {description}
        </Text>
        {(primaryAction || secondaryAction) && (
          <Block display="flex" gap={FOUNDATION_THEME.unit[16]}>
            {(primaryAction || secondaryAction) && (
              <Block as="span" display="flex" gap={FOUNDATION_THEME.unit[20]}>
                {primaryAction && (
                  <AlertActionButton
                    onClick={primaryAction.onClick}
                    variant={variant}
                  >
                    {primaryAction.label}
                  </AlertActionButton>
                )}
                {secondaryAction && (
                  <AlertActionButton
                    onClick={secondaryAction.onClick}
                    variant={variant}
                  >
                    {secondaryAction.label}
                  </AlertActionButton>
                )}
              </Block>
            )}
            {onClose && actionPlacement === AlertActionPlacement.RIGHT && (
              <>
                <Block
                  as="span"
                  aria-hidden="true"
                  width={"1px"}
                  height={FOUNDATION_THEME.unit[20]}
                  backgroundColor={foundationToken.colors.gray[300]}
                />
                <AlertCloseButton onClick={onClose} variant={variant}>
                  <X size={16} color={foundationToken.colors.gray[800]} />
                </AlertCloseButton>
              </>
            )}
          </Block>
        )}
      </Block>
    </Block>
  );
});

Alert.displayName = "Alert";

export default Alert;
