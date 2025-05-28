import { ButtonType, ButtonSubType } from "../Button/types";
import { ReactNode } from "react";

export enum PopoverSize {
  SM = "sm",
  MD = "md",
}

export type PopoverActionType = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  type?: ButtonType;
  subType?: ButtonSubType;
};

export type PopoverProps = {
  heading?: string;
  description?: string;
  trigger: ReactNode;
  children: ReactNode;
  showCloseButton?: boolean;
  primaryAction?: PopoverActionType;
  secondaryAction?: PopoverActionType;
  className?: string;
  size?: PopoverSize;
};
