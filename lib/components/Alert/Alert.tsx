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
import { CSSObject } from "styled-components";
import { AlertTokenType } from "./alert.tokens";
import Text from "../Text/Text";
import { forwardRef } from "react";
import { useComponentToken } from "../../context/useComponentToken";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";

/**
 * @description A prominent message component that displays important information to users, supporting various visual states and interactive actions.
 * Alert components are essential for communicating status, warnings, errors, or success messages with clear call-to-action options.
 * @feature Multiple visual variants (primary, success, warning, error, purple, orange, neutral)
 * @feature Two visual styles (subtle, no-fill) for different emphasis levels
 * @feature Primary and secondary action buttons for user interaction
 * @feature Optional close functionality with customizable placement
 * @feature Icon support for enhanced visual communication
 * @feature Flexible action button placement (right or bottom)
 * @example Basic Success Alert
 * ```tsx
 * import { Alert, AlertVariant } from "blend-v1";
 * import { CheckCircle } from "lucide-react";
 *
 * <Alert
 *   variant={AlertVariant.SUCCESS}
 *   heading="Profile Updated Successfully"
 *   description="Your profile information has been saved and is now live."
 *   icon={<CheckCircle size={16} />}
 *   onClose={() => console.log("Alert dismissed")}
 * />
 * ```
 * @example Intermediate Warning Alert with Actions
 * ```tsx
 * import { Alert, AlertVariant, AlertStyle, AlertActionPlacement } from "blend-v1";
 * import { AlertTriangle } from "lucide-react";
 *
 * <Alert
 *   variant={AlertVariant.WARNING}
 *   style={AlertStyle.NO_FILL}
 *   heading="Storage Almost Full"
 *   description="You're using 90% of your storage space. Consider upgrading your plan or removing unused files."
 *   icon={<AlertTriangle size={16} />}
 *   primaryAction={{
 *     label: "Upgrade Plan",
 *     onClick: () => console.log("Navigating to upgrade")
 *   }}
 *   secondaryAction={{
 *     label: "Manage Files",
 *     onClick: () => console.log("Opening file manager")
 *   }}
 *   actionPlacement={AlertActionPlacement.BOTTOM}
 * />
 * ```
 * @example Advanced Error Alert with All Props
 * ```tsx
 * import { 
 *   Alert, 
 *   AlertVariant, 
 *   AlertStyle, 
 *   AlertActionPlacement 
 * } from "blend-v1";
 * import { XCircle } from "lucide-react";
 *
 * const handleRetry = () => {
 *   console.log("Retrying operation...");
 * };
 *
 * const handleSupport = () => {
 *   console.log("Contacting support...");
 * };
 *
 * const handleDismiss = () => {
 *   console.log("Error dismissed");
 * };
 *
 * <Alert
 *   variant={AlertVariant.ERROR}
 *   style={AlertStyle.SUBTLE}
 *   heading="Payment Processing Failed"
 *   description="We couldn't process your payment. Please check your payment method and try again, or contact support if the issue persists."
 *   icon={<XCircle size={16} />}
 *   primaryAction={{
 *     label: "Retry Payment",
 *     onClick: handleRetry
 *   }}
 *   secondaryAction={{
 *     label: "Contact Support",
 *     onClick: handleSupport
 *   }}
 *   onClose={handleDismiss}
 *   actionPlacement={AlertActionPlacement.RIGHT}
 * />
 * ```
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      heading,
      description,
      variant = AlertVariant.PRIMARY,
      style = AlertStyle.SUBTLE,
      primaryAction,
      secondaryAction,
      onClose,
      icon,
      actionPlacement = AlertActionPlacement.RIGHT,
    },
    ref
  ) => {
    const alertTokens = useComponentToken("ALERT") as AlertTokenType;

    // this is to make sure that the close button is always visible if there is an onClose prop
    // but no primary or secondary actions are provided
    if (
      onClose &&
      primaryAction === undefined &&
      secondaryAction === undefined
    ) {
      actionPlacement = AlertActionPlacement.BOTTOM;
    }
    return (
      <Block
        ref={ref}
        maxWidth={900}
        backgroundColor={alertTokens.background[variant][style]}
        padding={alertTokens.padding}
        borderRadius={alertTokens.borderRadius}
        display="flex"
        flexDirection="column"
        gap={FOUNDATION_THEME.unit[8]}
        border={alertTokens.border[variant]}
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
            // <AlertCloseButton onClick={onClose} variant={variant}>
            //   <X size={16} color={foundationToken.colors.gray[800]} />
            // </AlertCloseButton>
            <AlertCloseButton
              onClick={onClose}
              $color={alertTokens.button[variant]}
            >
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
                      $variant={variant}
                      $alertTokens={alertTokens}
                    >
                      {primaryAction.label}
                    </AlertActionButton>
                  )}
                  {secondaryAction && (
                    <AlertActionButton
                      onClick={secondaryAction.onClick}
                      $variant={variant}
                      $alertTokens={alertTokens}
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
                  <AlertCloseButton
                    onClick={onClose}
                    $color={alertTokens.button[variant]}
                  >
                    <X size={16} color={foundationToken.colors.gray[800]} />
                  </AlertCloseButton>
                </>
              )}
            </Block>
          )}
        </Block>
      </Block>
    );
  }
);

const AlertCloseButton = ({
  $color,
  children,
  onClick,
}: {
  $color: CSSObject["color"];
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <PrimitiveButton
      border={"none"}
      backgroundColor={"transparent"}
      className="debug"
      color={$color}
      contentCentered
      _focusVisible={{
        outline: `1px solid ${$color}`,
      }}
      onClick={onClick}
    >
      {children}
    </PrimitiveButton>
  );
};

const AlertActionButton = styled.button<{
  $variant: AlertVariant;
  $alertTokens: AlertTokenType;
}>(({ $variant, $alertTokens }) => {
  return {
    border: "none",
    background: "none",
    cursor: "pointer",
    height: FOUNDATION_THEME.unit[20],
    color: $alertTokens.button[$variant],
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


Alert.displayName = "Alert";

export default Alert;
