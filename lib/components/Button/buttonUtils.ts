import { ButtonType, ButtonSize, ButtonSubType } from "./types";
import buttonTokens from "./token";
import { css } from "styled-components";

// Size configurations for button and icons
export const buttonSizes = {
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

// Get button size styles
export const getButtonSizeStyles = (
  size: ButtonSize,
  subType: ButtonSubType
) => {
  if (subType === ButtonSubType.ICON_ONLY) {
    return css`
      width: ${buttonSizes[size].height};
      height: ${buttonSizes[size].height};
      padding: 0;
    `;
  }

  return css`
    height: ${buttonSizes[size].height};
    padding: ${buttonSizes[size].padding};
    font-size: ${buttonSizes[size].fontSize};
  `;
};

// Get button type key
export const getButtonTypeKey = (
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

// Get button type styles
export const getButtonTypeStyles = (
  buttonType: ButtonType,
  subType: ButtonSubType
) => {
  const typeKey = getButtonTypeKey(buttonType);

  if (subType === ButtonSubType.LINK) {
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
};

// Get loading styles
export const getLoadingStyles = (isLoading: boolean) => {
  if (!isLoading) return css``;

  return css`
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
  `;
};

// Get base button styles
export const getBaseButtonStyles = () => css`
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
`;
