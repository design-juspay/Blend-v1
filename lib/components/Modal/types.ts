import { ReactNode } from "react";
import { ButtonV2Props } from "../ButtonV2";

/**
 * @description Defines the props for action buttons within a Modal, derived from `ButtonV2Props`.
 * Excludes `buttonGroupPosition` as it's not relevant in this context.
 */
type ModalButtonAction = Omit<ButtonV2Props, "buttonGroupPosition">;

/**
 * @description A dialog component that overlays content on the page to focus user attention.
 * Modals are used for critical information, decisions, or tasks that require user interaction.
 * @feature Displays content in a layer above the main page.
 * @feature Controllable open/close state.
 * @feature Optional title, subtitle, header, and footer.
 * @feature Customizable primary and secondary action buttons.
 * @feature Option to close by clicking the backdrop or via a close button.
 * @feature Slots for custom header and footer content.
 * @example
 * ```tsx
 * import { Modal } from "./components/Modal"; // Assuming path
 * import { ButtonV2, ButtonTypeV2 } from "./components/ButtonV2"; // Assuming path
 * import { useState } from "react";
 *
 * function MyComponentWithModal() {
 *   const [isModalOpen, setIsModalOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <ButtonV2 onClick={() => setIsModalOpen(true)}>Open Modal</ButtonV2>
 *       <Modal
 *         isOpen={isModalOpen}
 *         onClose={() => setIsModalOpen(false)}
 *         title="Confirm Action"
 *         subtitle="Are you sure you want to proceed with this action?"
 *         primaryAction={{
 *           text: "Confirm",
 *           buttonType: ButtonTypeV2.PRIMARY,
 *           onClick: () => {
 *             console.log("Confirmed!");
 *             setIsModalOpen(false);
 *           },
 *         }}
 *         secondaryAction={{
 *           text: "Cancel",
 *           onClick: () => setIsModalOpen(false),
 *         }}
 *         showCloseButton={true}
 *       >
 *         <p>This action cannot be undone. Please review carefully.</p>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 */
export type ModalProps = {
  /**
   * @propCategory Required
   * @description Controls whether the modal is open or closed.
   */
  isOpen: boolean;
  /**
   * @propCategory Required
   * @description Callback function invoked when the modal requests to be closed (e.g., by backdrop click or close button).
   */
  onClose: () => void;
  /**
   * @propCategory Content
   * @description Optional title displayed in the modal header.
   */
  title?: string;
  /**
   * @propCategory Content
   * @description Optional subtitle displayed below the title in the modal header.
   */
  subtitle?: string;
  /**
   * @propCategory Required
   * @description The main content of the modal.
   */
  children: ReactNode;
  /**
   * @propCategory Actions
   * @description Props for the primary action button in the modal footer (e.g., "Save", "Confirm").
   * Uses `ButtonV2Props` (excluding `buttonGroupPosition`).
   */
  primaryAction?: ModalButtonAction;
  /**
   * @propCategory Actions
   * @description Props for the secondary action button in the modal footer (e.g., "Cancel").
   * Uses `ButtonV2Props` (excluding `buttonGroupPosition`).
   */
  secondaryAction?: ModalButtonAction;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the modal container.
   */
  className?: string;
  /**
   * @propCategory Behavior
   * @description If true, displays a close button (typically an 'X' icon) in the modal header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * @propCategory Appearance
   * @description If true, displays the modal header (containing title, subtitle, close button).
   * @default true
   */
  showHeader?: boolean;
  /**
   * @propCategory Appearance
   * @description If true, displays the modal footer (containing action buttons).
   * @default true
   */
  showFooter?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, allows closing the modal by clicking on the backdrop overlay.
   * @default true
   */
  closeOnBackdropClick?: boolean;
  /**
   * @propCategory Content Slots
   * @description Optional ReactNode to replace the default header content.
   */
  customHeader?: ReactNode;
  /**
   * @propCategory Content Slots
   * @description Optional ReactNode to replace the default footer content.
   */
  customFooter?: ReactNode;
  /**
   * @propCategory Content Slots
   * @description Optional ReactNode to be placed in the right slot of the default header (e.g., for additional controls).
   */
  headerRightSlot?: ReactNode;
  /**
   * @propCategory Appearance
   * @description If true, shows a divider line below the header.
   * @default true
   */
  showDivider?: boolean;
};
