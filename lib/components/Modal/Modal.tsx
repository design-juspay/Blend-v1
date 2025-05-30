import { forwardRef, useCallback } from "react";
import { X } from "lucide-react";
import { Button, ButtonType, ButtonSubType } from "../Button";
import Block from "../Primitives/Block/Block";
import useScrollLock from "../../hooks/useScrollLock";
import { ModalProps } from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import modalTokens from "./modal.tokens";
import Text from "../Text/Text";

const ModalHeader = ({
  title,
  subtitle,
  onClose,
  showCloseButton,
  headerRightSlot,
  showDivider,
}: {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  showCloseButton?: boolean;
  headerRightSlot?: React.ReactNode;
  showDivider?: boolean;
}) => {
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
        showDivider ? `1px solid ${modalTokens.border.divider}` : undefined
      }
    >
      <Block
        display="flex"
        flexDirection="column"
        flexGrow={1}
        minWidth="0"
        paddingRight={FOUNDATION_THEME.unit[16]}
        gap={FOUNDATION_THEME.unit[8]}
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
              color={modalTokens.color.title}
            >
              {title}
            </Text>
          )}
          {headerRightSlot}
        </Block>
        {subtitle && (
          <Text
            variant="code.lg"
            color={modalTokens.color.subtitle}
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

const ModalFooter = ({
  primaryAction,
  secondaryAction,
  showDivider,
}: {
  primaryAction?: ModalProps["primaryAction"];
  secondaryAction?: ModalProps["secondaryAction"];
  showDivider?: boolean;
}) => {
  if (!primaryAction && !secondaryAction) return null;

  return (
    <Block
      display="flex"
      justifyContent="flex-end"
      gap={FOUNDATION_THEME.unit[12]}
      padding={modalTokens.padding.footerY}
      flexShrink={0}
      borderTop={
        showDivider ? `1px solid ${modalTokens.border.divider}` : undefined
      }
    >
      {secondaryAction && (
        <Button
          buttonType={secondaryAction.type || ButtonType.SECONDARY}
          text={secondaryAction.label}
          onClick={secondaryAction.onClick}
          isDisabled={secondaryAction.isDisabled}
        />
      )}
      {primaryAction && (
        <Button
          buttonType={primaryAction.type || ButtonType.PRIMARY}
          text={primaryAction.label}
          onClick={primaryAction.onClick}
          isDisabled={primaryAction.isDisabled}
        />
      )}
    </Block>
  );
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      subtitle,
      children,
      primaryAction,
      secondaryAction,
      className,
      showCloseButton = true,
      closeOnBackdropClick = true,
      headerRightSlot,
      showDivider = true,
    },
    ref
  ) => {
    useScrollLock(isOpen);

    const handleBackdropClick = useCallback(() => {
      if (closeOnBackdropClick) {
        onClose();
      }
    }, [closeOnBackdropClick, onClose]);

    if (!isOpen) return null;

    return (
      <Block
        position="fixed"
        inset={0}
        zIndex={modalTokens.z.index}
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
          backgroundColor={modalTokens.background.backdrop}
          opacity={modalTokens.opacity.backdrop}
          pointerEvents={modalTokens.interaction.pointerEvents}
          role="presentation"
          aria-hidden="true"
        />

        <Block
          ref={ref}
          className={className}
          display="flex"
          flexDirection="column"
          position="relative"
          backgroundColor={modalTokens.background.modal}
          maxWidth={modalTokens.size.maxWidth}
          maxHeight={modalTokens.size.maxHeight}
          borderRadius={modalTokens.border.radius}
          boxShadow={modalTokens.shadow.box}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <ModalHeader
            title={title}
            subtitle={subtitle}
            onClose={onClose}
            showCloseButton={showCloseButton}
            headerRightSlot={headerRightSlot}
            showDivider={showDivider}
          />

          <Block
            padding={modalTokens.padding.body}
            overflow="auto"
            flexGrow={1}
          >
            {children}
          </Block>

          <ModalFooter
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
            showDivider={showDivider}
          />
        </Block>
      </Block>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
