"use client";

import React, {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import {
  ButtonType,
  ButtonSize,
  ButtonSubType,
  type ButtonProps,
} from "./types";

// Define color palette based on the reference image
const colors = {
  [ButtonType.PRIMARY]: {
    background: "#1b85ff",
    hover: "#166acc",
    text: "#ffffff",
    border: "#1b85ff",
    light: "#a4ceff",
    lightBg: "#eff6ff",
  },
  [ButtonType.SECONDARY]: {
    background: "#ffffff",
    hover: "#f5f7fa",
    text: "#1b85ff",
    border: "#e1e4ea",
    light: "#e1e4ea",
    lightBg: "#f5f7fa",
  },
  [ButtonType.DANGER]: {
    background: "#fb2c36",
    hover: "#e7000b",
    text: "#ffffff",
    border: "#fb2c36",
    light: "#ffa2a2",
    lightBg: "#fff1f1",
  },
  [ButtonType.SUCCESS]: {
    background: "#00c951",
    hover: "#00a63e",
    text: "#ffffff",
    border: "#00c951",
    light: "#b9f8cf",
    lightBg: "#f0fff5",
  },
};

// Define size configurations based on the reference image
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

// Styled button component
const StyledButton = styled.button<{
  $buttonType: ButtonType;
  $size: ButtonSize;
  $subType: ButtonSubType;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  position: relative;




  /* Size styles */
  ${({ $size, $subType }) => {
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
    const typeColors = colors[$buttonType];

    if ($subType === ButtonSubType.LINK) {
      return css`
        background-color: transparent;
        color: ${typeColors.background};
        border: none;
        padding-left: 0;
        padding-right: 0;

        &:hover:not(:disabled) {
          text-decoration: underline;
        }

        &:disabled {
          color: ${typeColors.light};
          opacity: 0.7;
        }
      `;
    }

    switch ($buttonType) {
      case ButtonType.PRIMARY:
        return css`
          background-color: ${typeColors.background};
          color: ${typeColors.text};
          border: 1px solid ${typeColors.border};

          &:hover:not(:disabled) {
            background-color: ${typeColors.hover};
          }

          &:disabled {
            background-color: ${typeColors.light};
            border-color: ${typeColors.light};
            color: white;
            opacity: 0.7;
          }
        `;
      case ButtonType.SECONDARY:
        return css`
          background-color: ${typeColors.background};
          color: ${colors[ButtonType.PRIMARY].background};
          border: 1px solid ${typeColors.border};

          &:hover:not(:disabled) {
            background-color: ${typeColors.hover};
          }

          &:disabled {
            color: ${colors[ButtonType.PRIMARY].light};
            border-color: ${typeColors.light};
            opacity: 0.7;
          }
        `;
      case ButtonType.DANGER:
        return css`
          background-color: ${typeColors.background};
          color: ${typeColors.text};
          border: 1px solid ${typeColors.border};

          &:hover:not(:disabled) {
            background-color: ${typeColors.hover};
          }

          &:disabled {
            background-color: ${typeColors.light};
            border-color: ${typeColors.light};
            color: white;
            opacity: 0.7;
          }
        `;
      case ButtonType.SUCCESS:
        return css`
          background-color: ${typeColors.background};
          color: ${typeColors.text};
          border: 1px solid ${typeColors.border};

          &:hover:not(:disabled) {
            background-color: ${typeColors.hover};
          }

          &:disabled {
            background-color: ${typeColors.light};
            border-color: ${typeColors.light};
            color: white;
            opacity: 0.7;
          }
        `;
      default:
        return css`
          background-color: ${colors[ButtonType.PRIMARY].background};
          color: ${colors[ButtonType.PRIMARY].text};
          border: 1px solid ${colors[ButtonType.PRIMARY].border};

          &:hover:not(:disabled) {
            background-color: ${colors[ButtonType.PRIMARY].hover};
          }

          &:disabled {
            background-color: ${colors[ButtonType.PRIMARY].light};
            border-color: ${colors[ButtonType.PRIMARY].light};
            color: white;
            opacity: 0.7;
          }
        `;
    }
  }}
  
  &:disabled {
    cursor: not-allowed;
  }

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
