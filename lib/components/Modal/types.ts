import { ButtonType } from "../Button/types";
import { ReactNode } from "react";

export type ModalButtonAction = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: ButtonType;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  primaryAction?: ModalButtonAction;
  secondaryAction?: ModalButtonAction;
  className?: string;
  showCloseButton?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  closeOnBackdropClick?: boolean;
  customHeader?: ReactNode;
  customFooter?: ReactNode;
  headerRightSlot?: ReactNode;
  showDivider?: boolean;
};
