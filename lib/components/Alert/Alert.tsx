import { ReactNode } from "react";
import { X } from "lucide-react";
import Block from "../Primitives/Block/Block";
import PrimitiveText from "../Primitives/Text/Text";
import { FOUNDATION_THEME } from "../../tokens";
import { foundationToken } from "../../foundationToken";
import { styled } from "styled-components";

export enum AlertVariant {
  PRIMARY = "primary",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  PURPLE = "purple",
  ORANGE = "orange",
  NEUTRAL = "neutral",
}

export enum AlertActionPlacement {
  BOTTOM = "bottom",
  RIGHT = "right",
}

export enum AlertStyle {
  SUBTLE = "subtle",
  NO_FILL = "noFill",
}

export interface AlertAction {
  label: string;
  onClick: () => void;
}

export interface AlertProps {
  heading: string;
  description: string;
  variant?: AlertVariant;
  style?: AlertStyle;
  primaryAction?: AlertAction;
  secondaryAction?: AlertAction;
  onClose?: () => void;
  icon?: ReactNode;
  actionPlacement?: AlertActionPlacement;
}

const alertTokens = {
  backgroundColor: {
    primary: {
      subtle: foundationToken.colors.primary[50],
      noFill: foundationToken.colors.gray[0],
    },
    warning: {
      subtle: foundationToken.colors.yellow[50],
      noFill: foundationToken.colors.gray[0],
    },
    success: {
      subtle: foundationToken.colors.green[50],
      noFill: foundationToken.colors.gray[0],
    },
    purple: {
      subtle: foundationToken.colors.purple[50],
      noFill: foundationToken.colors.gray[0],
    },
    neutral: {
      subtle: foundationToken.colors.gray[50],
      noFill: foundationToken.colors.gray[0],
    },
    error: {
      subtle: foundationToken.colors.red[50],
      noFill: foundationToken.colors.gray[0],
    },
    orange: {
      subtle: foundationToken.colors.orange[50],
      noFill: foundationToken.colors.gray[0],
    },
  },
  border: {
    primary: foundationToken.colors.primary[500],
    warning: foundationToken.colors.yellow[500],
    success: foundationToken.colors.green[500],
    purple: foundationToken.colors.purple[500],
    neutral: foundationToken.colors.gray[500],
    error: foundationToken.colors.red[500],
    orange: foundationToken.colors.orange[500],
  },
  button: {
    primary: foundationToken.colors.primary[700],
    warning: foundationToken.colors.yellow[700],
    success: foundationToken.colors.green[700],
    purple: foundationToken.colors.purple[700],
    neutral: foundationToken.colors.gray[700],
    error: foundationToken.colors.red[700],
    orange: foundationToken.colors.orange[700],
  },
};

const AlertCloseButton = styled.button<{ variant: AlertVariant }>((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    outline: "none",
    height: FOUNDATION_THEME.spacing[20],
    aspectRatio: "1/1",
    borderRadius: FOUNDATION_THEME.border.radius[2],
    cursor: "pointer",

    "&:focus-visible, &:hover": {
      outline: `1px solid ${alertTokens.button[props.variant]}`,
    },
  };
});

const AlertActionButton = styled.button<{ variant: AlertVariant }>((props) => {
  return {
    border: "none",
    background: "none",
    cursor: "pointer",
    height: FOUNDATION_THEME.spacing[20],
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

const Alert: React.FC<AlertProps> = ({
  heading,
  description,
  variant = AlertVariant.PRIMARY,
  style = AlertStyle.SUBTLE,
  primaryAction,
  secondaryAction,
  onClose,
  icon,
  actionPlacement = AlertActionPlacement.RIGHT,
}) => {
  return (
    <Block
      maxWidth={900}
      backgroundColor={alertTokens.backgroundColor[variant][style] as string}
      padding={FOUNDATION_THEME.spacing[16]}
      borderRadius={FOUNDATION_THEME.border.radius[8]}
      display="flex"
      flexDirection="column"
      gap={FOUNDATION_THEME.spacing[8]}
      border={`1px solid ${alertTokens.border[variant]}`}
    >
      <Block
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={FOUNDATION_THEME.spacing[8]}
      >
        <Block display="flex" contentCentered gap={FOUNDATION_THEME.spacing[8]}>
          {icon && (
            <Block size={FOUNDATION_THEME.spacing[16]} contentCentered>
              {icon}
            </Block>
          )}
          <PrimitiveText
            variant="body.md"
            color={foundationToken.colors.gray[700]}
            weight={600}
          >
            {heading}
          </PrimitiveText>
        </Block>
        {onClose && actionPlacement === AlertActionPlacement.BOTTOM && (
          <AlertCloseButton onClick={onClose} variant={variant}>
            <X size={16} color={foundationToken.colors.gray[800]} />
          </AlertCloseButton>
        )}
      </Block>
      <Block
        paddingLeft={icon ? FOUNDATION_THEME.spacing[24] : 0}
        display="flex"
        flexDirection={
          actionPlacement === AlertActionPlacement.BOTTOM ? "column" : "row"
        }
        alignItems="flex-start"
        justifyContent="space-between"
        gap={FOUNDATION_THEME.spacing[18]}
      >
        <PrimitiveText
          variant="body.md"
          color={foundationToken.colors.gray[600]}
        >
          {description}
        </PrimitiveText>
        <Block display="flex" gap={FOUNDATION_THEME.spacing[16]}>
          <Block display="flex" gap={FOUNDATION_THEME.spacing[20]}>
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
          {onClose && actionPlacement === AlertActionPlacement.RIGHT && (
            <Block
              as="span"
              aria-hidden="true"
              width={"1px"}
              height={FOUNDATION_THEME.spacing[20]}
              backgroundColor={foundationToken.colors.gray[300]}
            />
          )}
          {onClose && actionPlacement === AlertActionPlacement.RIGHT && (
            <AlertCloseButton onClick={onClose} variant={variant}>
              <X size={16} color={foundationToken.colors.gray[800]} />
            </AlertCloseButton>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default Alert;
