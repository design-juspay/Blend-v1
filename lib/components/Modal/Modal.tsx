import { forwardRef, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import { Button, ButtonType, ButtonSubType } from "../Button";
import Block from "../Primitives/Block/Block";
import useScrollLock from "./useScrollLock";
import { ModalProps } from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import modalTokens from "./modal.tokens";
import Text from "../Text/Text";

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      subtitle,
      children,
      primaryButtonText,
      secondaryButtonText,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      primaryButtonDisabled = false,
      secondaryButtonDisabled = false,
      className,
      showCloseButton = true,
      closeOnBackdropClick = true,
      primaryButtonType = ButtonType.PRIMARY,
      secondaryButtonType = ButtonType.SECONDARY,
      headerRightSlot,
      showDivider = true,
    },
    ref
  ) => {
    const { lockScroll, unlockScroll } = useScrollLock();

    const handleBackdropClick = useCallback(() => {
      if (closeOnBackdropClick) {
        onClose();
      }
    }, [closeOnBackdropClick, onClose]);

    useEffect(() => {
      if (isOpen) {
        lockScroll();
      } else {
        unlockScroll();
      }
    }, [isOpen, lockScroll, unlockScroll]);

    if (!isOpen) return null;

    const renderHeader = () => {
      if (!title && !subtitle) return null;

      return (
        <Block
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          padding={modalTokens.padding.header}
          flexShrink={0}
          overflow="auto"
          maxHeight="20vh"
          borderBottom={
            showDivider ? `1px solid ${modalTokens.dividerColor}` : undefined
          }
        >
          <Block
            flexGrow={1}
            minWidth="0"
            paddingRight={FOUNDATION_THEME.unit[16]}
          >
            <Block
              display="flex"
              alignItems="center"
              gap={FOUNDATION_THEME.unit[8]}
            >
              {title && (
                <Text
                  variant="heading.sm"
                  fontWeight={600}
                  color={modalTokens.titleColor}
                >
                  {title}
                </Text>
              )}
              {headerRightSlot}
            </Block>
            {subtitle && (
              <Text
                variant="code.lg"
                color={modalTokens.subtitleColor}
                fontWeight={400}
              >
                {subtitle}
              </Text>
            )}
          </Block>
          {showCloseButton && (
            <Button
              subType={ButtonSubType.PLAIN_ICON}
              buttonType={ButtonType.SECONDARY}
              leadingIcon={X}
              onClick={onClose}
              ariaLabel="Close"
            />
          )}
        </Block>
      );
    };

    const renderFooter = () => {
      if (!primaryButtonText && !secondaryButtonText) return null;

      return (
        <Block
          display="flex"
          justifyContent="flex-end"
          gap={FOUNDATION_THEME.unit[12]}
          padding={modalTokens.padding.footer.y}
          flexShrink={0}
          borderTop={
            showDivider ? `1px solid ${modalTokens.dividerColor}` : undefined
          }
        >
          {secondaryButtonText && (
            <Button
              buttonType={secondaryButtonType}
              text={secondaryButtonText}
              onClick={onSecondaryButtonClick}
              isDisabled={secondaryButtonDisabled}
            />
          )}
          {primaryButtonText && (
            <Button
              buttonType={primaryButtonType}
              text={primaryButtonText}
              onClick={onPrimaryButtonClick}
              isDisabled={primaryButtonDisabled}
            />
          )}
        </Block>
      );
    };

    return (
      <Block
        position="fixed"
        inset={0}
        zIndex={modalTokens.zIndex}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="auto"
        padding={FOUNDATION_THEME.unit[16]}
      >
        <Block
          onClick={handleBackdropClick}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          inset={0}
          backgroundColor={modalTokens.backdropColor}
          opacity={modalTokens.backdropOpacity}
          pointerEvents="auto"
          role="presentation"
          aria-hidden="true"
        />

        <Block
          ref={ref}
          className={className}
          display="flex"
          flexDirection="column"
          position="relative"
          backgroundColor={modalTokens.backgroundColor}
          maxWidth={modalTokens.maxWidth}
          maxHeight={modalTokens.maxHeight}
          borderRadius={modalTokens.borderRadius}
          boxShadow={modalTokens.boxShadow}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {renderHeader()}

          <Block
            padding={modalTokens.padding.body}
            overflow="auto"
            flexGrow={1}
          >
            {children}
          </Block>

          {renderFooter()}
        </Block>
      </Block>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;