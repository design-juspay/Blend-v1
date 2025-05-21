import React, { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import type {
  ButtonProps,
  ButtonSize,
  ButtonState,
  ButtonSubType,
  ButtonType,
} from "./types";
import {
  getButtonBackground,
  getButtonBorder,
  getButtonBorderRadius,
  getButtonFontSize,
  getButtonGap,
  getButtonHeight,
  getButtonIconColor,
  getButtonIconSize,
  getButtonPadding,
  getButtonTextColor,
  getButtonWidth,
  getFocusOutlineColor,
} from "./themeUtils";

interface StyledButtonProps {
  $type: ButtonType;
  $subType: ButtonSubType;
  $size: ButtonSize;
  $state: ButtonState;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => getButtonGap(props.$size)};
  border-radius: ${getButtonBorderRadius};
  font-family: sans-serif;
  font-weight: 600;
  cursor: ${(props) =>
    props.$state === "disabled" ? "not-allowed" : "pointer"};
  transition: all 0.2s ease-in-out;
  outline: none;
  white-space: nowrap;
  height: ${(props) => getButtonHeight(props.$size)};
  width: ${(props) => getButtonWidth(props.$size, props.$subType)};
  ${(props) => getButtonPadding(props.$size, props.$subType)};
  background: ${(props) =>
    getButtonBackground(props.$type, props.$subType, props.$state)};
  border: ${(props) =>
    getButtonBorder(props.$type, props.$subType, props.$state)};
  color: ${(props) =>
    getButtonTextColor(props.$type, props.$subType, props.$state)};
  font-size: ${(props) => getButtonFontSize(props.$size)};

  /* Handle disabled state */
  ${(props) =>
    props.$state === "disabled" &&
    css`
      pointer-events: none;
      opacity: ${props.$type === "secondary" ? "1" : "0.8"};
    `}

  ${(props) =>
    props.$subType === "link" &&
    css`
      padding: 0;
      height: auto;
      background: transparent;
      border: none;
      text-decoration: ${props.$state === "hover" || props.$state === "focussed"
        ? "underline"
        : "none"};
    `}

  &:hover {
    ${(props) =>
      props.$state === "default" &&
      css`
        background: ${getButtonBackground(
          props.$type,
          props.$subType,
          "hover"
        )};
        border: ${getButtonBorder(props.$type, props.$subType, "hover")};
        color: ${getButtonTextColor(props.$type, props.$subType, "hover")};
      `}
  }

  &:active {
    ${(props) =>
      props.$state === "default" &&
      css`
        background: ${getButtonBackground(
          props.$type,
          props.$subType,
          "active"
        )};
        border: ${getButtonBorder(props.$type, props.$subType, "active")};
        color: ${getButtonTextColor(props.$type, props.$subType, "active")};
        box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      `}
  }

  &:focus-visible {
    ${(props) =>
      props.$state === "default" &&
      css`
        outline: 2px solid ${getFocusOutlineColor(props.$type)};
        outline-offset: 1px;
      `}
  }
`;

const ButtonText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconWrapper = styled.span<{
  $size: ButtonSize;
  $type: ButtonType;
  $subType: ButtonSubType;
  $state: ButtonState;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => getButtonIconSize(props.$size)};
  height: ${(props) => getButtonIconSize(props.$size)};
  color: ${(props) =>
    getButtonIconColor(props.$type, props.$subType, props.$state)};
  flex-shrink: 0;
`;

const LoadingSpinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid currentColor;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "primary",
      subType = "default",
      size = "md",
      leftIcon,
      rightIcon,
      isDisabled = false,
      isLoading = false,
      className,
      buttonType,
      ...props
    },
    ref
  ) => {
    const [hoverState, setHoverState] = useState<ButtonState>(
      isDisabled ? "disabled" : "default"
    );

    const handleMouseEnter = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("hover");
      }
    };

    const handleMouseLeave = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("default");
      }
    };

    const handleMouseDown = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("active");
      }
    };

    const handleMouseUp = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("hover");
      }
    };

    const handleFocus = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("focussed");
      }
    };

    const handleBlur = () => {
      if (!isDisabled && !isLoading) {
        setHoverState("default");
      }
    };

    const hasLeftIcon = Boolean(leftIcon || isLoading);
    const hasRightIcon = Boolean(rightIcon);

    return (
      <StyledButton
        ref={ref}
        $type={type}
        $subType={subType}
        $size={size}
        $state={isDisabled ? "disabled" : hoverState}
        $hasLeftIcon={hasLeftIcon}
        $hasRightIcon={hasRightIcon}
        disabled={isDisabled || isLoading}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={buttonType}
        {...props}
      >
        {hasLeftIcon && (
          <IconWrapper
            $size={size}
            $type={type}
            $subType={subType}
            $state={isDisabled ? "disabled" : hoverState}
          >
            {isLoading ? <LoadingSpinner /> : leftIcon}
          </IconWrapper>
        )}
        {subType !== "iconOnly" && children && (
          <ButtonText>{children}</ButtonText>
        )}
        {hasRightIcon && !isLoading && (
          <IconWrapper
            $size={size}
            $type={type}
            $subType={subType}
            $state={isDisabled ? "disabled" : hoverState}
          >
            {rightIcon}
          </IconWrapper>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
