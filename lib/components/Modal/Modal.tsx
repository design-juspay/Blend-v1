import { forwardRef, useCallback } from "react";
import { X } from "lucide-react";
import Block from "../Primitives/Block/Block";
import useScrollLock from "../../hooks/useScrollLock";
import { ModalProps } from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import { ModalTokensType } from "./modal.tokens";
import Text from "../Text/Text";
import { ButtonSubTypeV2, ButtonTypeV2, ButtonV2 } from "../ButtonV2";
import { useComponentToken } from "../../context/useComponentToken";

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
  const modalTokens = useComponentToken("MODAL") as ModalTokensType;
  if (!title && !subtitle) return null;

  return (
    <Block
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      padding={modalTokens.headerContainer.padding}
      flexShrink={0}
      overflow="auto"
      maxHeight="20vh"
      gap={FOUNDATION_THEME.unit[16]}
      borderBottom={
        showDivider ? modalTokens.headerContainer.borderBottom : undefined
      }
    >
      <Block
        display="flex"
        flexDirection="column"
        flexGrow={1}
        gap={FOUNDATION_THEME.unit[4]}
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
              color={modalTokens.headerContainer.header.color}
            >
              {title}
            </Text>
          )}
          {headerRightSlot}
        </Block>
        {subtitle && (
          <Text
            variant="code.lg"
            color={modalTokens.headerContainer.subtitle.color}
            fontWeight={400}
          >
            {subtitle}
          </Text>
        )}
      </Block>
      {showCloseButton && (
        <ButtonV2
          subType={ButtonSubTypeV2.INLINE}
          buttonType={ButtonTypeV2.SECONDARY}
          leadingIcon={<X size={16} />}
          onClick={onClose}
          // ariaLabel="Close"
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
  const modalTokens = useComponentToken("MODAL") as ModalTokensType;
  if (!primaryAction && !secondaryAction) return null;

  return (
    <Block
      display="flex"
      backgroundColor={modalTokens.footerContainer.backgroundColor}
      justifyContent={modalTokens.footerContainer.alignItems}
      gap={modalTokens.footerContainer.gap}
      padding={modalTokens.footerContainer.padding}
      flexShrink={0}
      borderTop={
        showDivider ? modalTokens.footerContainer.borderTop : undefined
      }
      borderRadius={modalTokens.footerContainer.borderRadius}
    >
      {secondaryAction && (
        <ButtonV2
          buttonType={secondaryAction.buttonType || ButtonTypeV2.SECONDARY}
          text={secondaryAction.text}
          onClick={secondaryAction.onClick}
          isDisabled={secondaryAction.isDisabled}
          subType={secondaryAction.subType}
          size={secondaryAction.size}
          leadingIcon={secondaryAction.leadingIcon}
          trailingIcon={secondaryAction.trailingIcon}
          loading={secondaryAction.loading}
        />
      )}
      {primaryAction && (
        <ButtonV2
          buttonType={primaryAction.buttonType || ButtonTypeV2.PRIMARY}
          text={primaryAction.text}
          onClick={primaryAction.onClick}
          isDisabled={primaryAction.isDisabled}
          subType={primaryAction.subType}
          size={primaryAction.size}
          leadingIcon={primaryAction.leadingIcon}
          trailingIcon={primaryAction.trailingIcon}
          loading={primaryAction.loading}
        />
      )}
    </Block>
  );
};

/**
 * @description A flexible modal dialog component that overlays content on the page to focus user attention.
 * Provides a complete modal solution with customizable header, footer, and action buttons.
 * @feature Displays content in a layer above the main page with backdrop overlay
 * @feature Controllable open/close state with multiple close options
 * @feature Customizable header with title, subtitle, and optional close button
 * @feature Flexible footer with primary and secondary action buttons
 * @feature Keyboard and backdrop interaction support
 * @feature Automatic scroll locking when modal is open
 * @feature Accessible dialog implementation with proper ARIA attributes
 * @example Basic Usage
 * ```tsx
 * import { Modal } from "blend-v1";
 * import { useState } from "react";
 * 
 * function BasicModalExample() {
 *   const [isOpen, setIsOpen] = useState(false);
 * 
 *   return (
 *     <>
 *       <button onClick={() => setIsOpen(true)}>Open Modal</button>
 *       <Modal
 *         isOpen={isOpen}
 *         onClose={() => setIsOpen(false)}
 *         title="Basic Modal"
 *       >
 *         <p>This is a simple modal with just a title and content.</p>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 * @example Modal with Actions
 * ```tsx
 * import { Modal, ButtonTypeV2 } from "blend-v1";
 * import { useState } from "react";
 * 
 * function ModalWithActions() {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const [loading, setLoading] = useState(false);
 * 
 *   const handleSave = async () => {
 *     setLoading(true);
 *     // Simulate API call
 *     await new Promise(resolve => setTimeout(resolve, 2000));
 *     setLoading(false);
 *     setIsOpen(false);
 *   };
 * 
 *   return (
 *     <>
 *       <button onClick={() => setIsOpen(true)}>Edit Profile</button>
 *       <Modal
 *         isOpen={isOpen}
 *         onClose={() => setIsOpen(false)}
 *         title="Edit Profile"
 *         subtitle="Update your personal information"
 *         primaryAction={{
 *           text: "Save Changes",
 *           buttonType: ButtonTypeV2.PRIMARY,
 *           onClick: handleSave,
 *           loading: loading
 *         }}
 *         secondaryAction={{
 *           text: "Cancel",
 *           buttonType: ButtonTypeV2.SECONDARY,
 *           onClick: () => setIsOpen(false)
 *         }}
 *       >
 *         <div className="space-y-4">
 *           <div>
 *             <label>Full Name</label>
 *             <input type="text" defaultValue="John Doe" />
 *           </div>
 *           <div>
 *             <label>Email</label>
 *             <input type="email" defaultValue="john@example.com" />
 *           </div>
 *         </div>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 * @example Advanced Modal with All Props
 * ```tsx
 * import { 
 *   Modal, 
 *   ButtonTypeV2, 
 *   ButtonSubTypeV2,
 *   ButtonSizeV2
 * } from "blend-v1";
 * import { useState } from "react";
 * import { Trash2, AlertTriangle } from "lucide-react";
 * 
 * function AdvancedModalExample() {
 *   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
 *   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
 *   const [deleting, setDeleting] = useState(false);
 * 
 *   const handleDelete = async () => {
 *     setDeleting(true);
 *     // Simulate API call
 *     await new Promise(resolve => setTimeout(resolve, 1500));
 *     setDeleting(false);
 *     setIsDeleteModalOpen(false);
 *     setIsConfirmModalOpen(true);
 *   };
 * 
 *   const headerRightSlot = (
 *     <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
 *       Destructive Action
 *     </span>
 *   );
 * 
 *   return (
 *     <>
 *       <button onClick={() => setIsDeleteModalOpen(true)}>
 *         Delete Account
 *       </button>
 * 
 *       <Modal
 *         isOpen={isDeleteModalOpen}
 *         onClose={() => setIsDeleteModalOpen(false)}
 *         title="Delete Account"
 *         subtitle="This action cannot be undone. All your data will be permanently removed."
 *         className="modal-destructive"
 *         showCloseButton={true}
 *         closeOnBackdropClick={false}
 *         headerRightSlot={headerRightSlot}
 *         showDivider={true}
 *         primaryAction={{
 *           text: "Delete Account",
 *           buttonType: ButtonTypeV2.DESTRUCTIVE,
 *           subType: ButtonSubTypeV2.FILLED,
 *           size: ButtonSizeV2.MEDIUM,
 *           leadingIcon: <Trash2 size={16} />,
 *           onClick: handleDelete,
 *           loading: deleting,
 *           isDisabled: deleting
 *         }}
 *         secondaryAction={{
 *           text: "Keep Account",
 *           buttonType: ButtonTypeV2.SECONDARY,
 *           subType: ButtonSubTypeV2.OUTLINED,
 *           size: ButtonSizeV2.MEDIUM,
 *           onClick: () => setIsDeleteModalOpen(false),
 *           isDisabled: deleting
 *         }}
 *       >
 *         <div className="space-y-4">
 *           <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
 *             <AlertTriangle className="text-yellow-600" size={20} />
 *             <div>
 *               <p className="text-sm font-medium text-yellow-800">
 *                 Warning: This action is irreversible
 *               </p>
 *               <p className="text-xs text-yellow-700">
 *                 Please type "DELETE" to confirm this action
 *               </p>
 *             </div>
 *           </div>
 *           <input 
 *             type="text" 
 *             placeholder="Type DELETE to confirm"
 *             className="w-full p-2 border rounded"
 *           />
 *           <div className="text-sm text-gray-600">
 *             <p><strong>What will be deleted:</strong></p>
 *             <ul className="list-disc list-inside mt-2 space-y-1">
 *               <li>Your profile and personal information</li>
 *               <li>All projects and associated data</li>
 *               <li>Team memberships and collaborations</li>
 *               <li>Billing history and subscriptions</li>
 *             </ul>
 *           </div>
 *         </div>
 *       </Modal>
 * 
 *       <Modal
 *         isOpen={isConfirmModalOpen}
 *         onClose={() => setIsConfirmModalOpen(false)}
 *         title="Account Deleted"
 *         subtitle="Your account has been successfully deleted."
 *         showCloseButton={false}
 *         closeOnBackdropClick={false}
 *         primaryAction={{
 *           text: "Go to Homepage",
 *           buttonType: ButtonTypeV2.PRIMARY,
 *           onClick: () => {
 *             setIsConfirmModalOpen(false);
 *             // Redirect to homepage
 *           }
 *         }}
 *       >
 *         <p>Thank you for using our service. If you have any feedback, please don't hesitate to contact us.</p>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 */
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
    const modalTokens = useComponentToken("MODAL") as ModalTokensType;
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
          backgroundColor={FOUNDATION_THEME.colors.gray[700]}
          opacity={0.5}
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
          backgroundColor={FOUNDATION_THEME.colors.gray[0]}
          maxWidth="500px"
          maxHeight="500px"
          borderRadius={FOUNDATION_THEME.border.radius[12]}
          boxShadow={FOUNDATION_THEME.shadows.xs}
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
            padding={modalTokens.bodyContainer.padding}
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
