import React from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';
import { SnackbarProps, SnackbarType, SnackbarPosition } from './types';
import {
  getSnackbarStyles,
  getPositionStyles,
  getBaseStyles,
  getLayoutStyles,
  getIconComponentType,
  useSnackbarLogic,
} from './utils';

const StyledContainer = styled.div<{ $type: SnackbarType; $position: SnackbarPosition }>`
  ${({ $position }) => {
    const positionStyles = getPositionStyles($position);
    return Object.entries(positionStyles).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
  
  ${({ $type }) => {
    const baseStyles = getBaseStyles();
    const typeStyles = getSnackbarStyles($type);
    
    return `
      ${Object.entries(baseStyles.container).map(([key, value]) => `${key}: ${value};`).join('\n')}
      background-color: ${typeStyles.backgroundColor};
      color: ${typeStyles.textColor};
    `;
  }}
`;

const HeaderContainer = styled.div`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.headerContainer).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
`;

const HeaderContent = styled.div`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.headerContent).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
`;

const IconWrapper = styled.div<{ $type: SnackbarType }>`
  ${() => {
    const baseStyles = getBaseStyles();
    return Object.entries(baseStyles.icon).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
  
  color: ${({ $type }) => getSnackbarStyles($type).iconColor};
`;

const Heading = styled.h3`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.heading).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
`;

const CloseButton = styled.button<{ $type: SnackbarType }>`
  ${() => {
    const baseStyles = getBaseStyles();
    return Object.entries(baseStyles.closeButton).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
  
  color: ${({ $type }) => getSnackbarStyles($type).textColor};
  
  &:hover {
    opacity: 0.8;
  }
`;

const MessageContainer = styled.div`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.messageContainer).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
`;

const Message = styled.p<{ $type: SnackbarType }>`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.message).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
  
  color: ${({ $type }) => getSnackbarStyles($type).textColor};
`;

const ActionButton = styled.button<{ $type: SnackbarType }>`
  ${() => {
    const layoutStyles = getLayoutStyles();
    return Object.entries(layoutStyles.actionMessage).map(([key, value]) => `${key}: ${value};`).join('\n');
  }}
  
  color: ${({ $type }) => getSnackbarStyles($type).textColor};
  
  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
  
  &:focus {
    opacity: 0.9;
  }
  
  &:active {
    opacity: 0.9;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      type = 'info',
      heading,
      message,
      actionMessage,
      showIcon = true,
      autoClose = true,
      position = 'topRight',
      onClose,
      onActionClick,
      className,
    },
    ref
  ) => {
    const { visible, handleClose } = useSnackbarLogic(autoClose, onClose);

    const IconComponent = getIconComponentType(type);
    const iconElement = IconComponent ? <IconComponent size={20} /> : null;

    if (!visible) {
      return null;
    }

    return (
      <StyledContainer
        ref={ref}
        $type={type}
        $position={position}
        className={className}
        role="alert"
        aria-live="assertive"
      >
        <HeaderContainer>
          <HeaderContent>
            {showIcon && iconElement && (
              <IconWrapper $type={type}>{iconElement}</IconWrapper>
            )}
            {heading && <Heading>{heading}</Heading>}
          </HeaderContent>
          {!autoClose && (
            <CloseButton 
              $type={type}
              onClick={handleClose} 
              aria-label="Close"
              type="button"
            >
              <X size={16} />
            </CloseButton>
          )}
        </HeaderContainer>

        {(message || actionMessage) && (
          <MessageContainer>
            {message && <Message $type={type}>{message}</Message>}
            {actionMessage && (
              <ActionContainer>
                <ActionButton 
                  $type={type}
                  onClick={onActionClick || handleClose}
                  type="button"
                >
                  {actionMessage}
                </ActionButton>
              </ActionContainer>
            )}
          </MessageContainer>
        )}
      </StyledContainer>
    );
  }
);

Snackbar.displayName = 'Snackbar';

export default Snackbar; 