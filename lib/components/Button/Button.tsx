"use client";

import { forwardRef } from "react";
import styled, { css } from "styled-components";
import {
  ButtonType,
  ButtonSize,
  ButtonSubType,
  type ButtonProps,
} from "./types";
import buttonTokens from "./token";

// Styled button component
const StyledButton = styled.button<{
  $buttonType: ButtonType;
  $size: ButtonSize;
  $subType: ButtonSubType;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $isLoading: boolean;
}>`
  /* ------------------------------------------------------------
    Button Layout
  ------------------------------------------------------------ */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  /* Size styles */
  ${({ $size, $subType }) => {
    const sizes = {
      [ButtonSize.SMALL]: {
        padding: "6px 16px",
        fontSize: "14px",
        height: "32px",
        iconSize: "16px",
      },
      [ButtonSize.MEDIUM]: {
        padding: "8px 16px",
        fontSize: "14px",
        height: "40px",
        iconSize: "18px",
      },
      [ButtonSize.LARGE]: {
        padding: "10px 20px",
        fontSize: "16px",
        height: "48px",
        iconSize: "20px",
      },
    };

    if ($subType === ButtonSubType.ICON_ONLY) {
      return css`
        width: ${sizes[$size].height};
        height: ${sizes[$size].height};
        padding: 0;
      `;
    }
    return css`
      height: ${sizes[$size].height};
      padding: ${sizes[$size].padding};
      font-size: ${sizes[$size].fontSize};
    `;
  }}

  /* Button type styles */
  ${({ $buttonType, $subType }) => {
    const getButtonTypeKey = (
      type: ButtonType
    ): "primary" | "secondary" | "danger" | "success" => {
      switch (type) {
        case ButtonType.PRIMARY:
          return "primary";
        case ButtonType.SECONDARY:
          return "secondary";
        case ButtonType.DANGER:
          return "danger";
        case ButtonType.SUCCESS:
          return "success";
        default:
          return "primary";
      }
    };

    const typeKey = getButtonTypeKey($buttonType);

    if ($subType === ButtonSubType.LINK) {
      return css`
        background-color: transparent;
        color: ${buttonTokens.link[typeKey]};
        border: none;
        padding-left: 0;
        padding-right: 0;

        &:hover:not(:disabled) {
          text-decoration: underline;
        }

        &:disabled {
          color: ${buttonTokens.text[typeKey].disabled};
          opacity: 0.7;
        }
      `;
    }

    return css`
      background: ${buttonTokens.background[typeKey].default};
      color: ${buttonTokens.text[typeKey].default};
      border: 1px solid ${buttonTokens.border[typeKey].default};

      &:hover:not(:disabled) {
        background: ${buttonTokens.background[typeKey].hover};
      }

      &:disabled {
        background: ${buttonTokens.background[typeKey].disabled};
        border-color: ${buttonTokens.border[typeKey].disabled};
        color: ${buttonTokens.text[typeKey].disabled};
        opacity: 0.7;
      }
    `;
  }}
  


  ${({ $isLoading }) =>
    $isLoading &&
    css`
      color: transparent;
      pointer-events: none;

      &::after {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-top-color: transparent;
        animation: spin 0.7s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

// Icon container styles
const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// Define size configurations
const sizes = {
  [ButtonSize.SMALL]: {
    padding: "6px 12px",
    fontSize: "14px",
    height: "32px",
    iconSize: "16px",
  },
  [ButtonSize.MEDIUM]: {
    padding: "8px 16px",
    fontSize: "14px",
    height: "40px",
    iconSize: "18px",
  },
  [ButtonSize.LARGE]: {
    padding: "10px 20px",
    fontSize: "16px",
    height: "48px",
    iconSize: "20px",
  },
};

// Button component
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      buttonType = ButtonType.PRIMARY,
      size = ButtonSize.MEDIUM,
      subType = ButtonSubType.DEFAULT,
      text,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      isLoading = false,
      isDisabled = false,
      ariaLabel,
      ariaExpanded,
      ariaControls,
      ariaPressed,
      ariaHasPopup,
      ...props
    },
    ref
  ) => {
    const hasLeadingIcon = !!LeadingIcon;
    const hasTrailingIcon = !!TrailingIcon;
    const isIconOnly = subType === ButtonSubType.ICON_ONLY;

    return (
      <StyledButton
        ref={ref}
        $buttonType={buttonType}
        $size={size}
        $subType={subType}
        $hasLeadingIcon={hasLeadingIcon}
        $hasTrailingIcon={hasTrailingIcon}
        $isLoading={isLoading}
        disabled={isDisabled || isLoading}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-pressed={ariaPressed}
        aria-haspopup={ariaHasPopup}
        {...props}
      >
        {isLoading ? null : (
          <>
            {hasLeadingIcon && (
              <IconContainer>
                <LeadingIcon size={sizes[size].iconSize} />
              </IconContainer>
            )}
            {(!isIconOnly || subType !== ButtonSubType.ICON_ONLY) && text}
            {hasTrailingIcon && (
              <IconContainer>
                <TrailingIcon size={sizes[size].iconSize} />
              </IconContainer>
            )}
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
