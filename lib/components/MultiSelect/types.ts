import { SelectMenuGroupType } from "../Select";

export enum MultiSelectVariant {
  CONTAINER = "container",
  NO_CONTAINER = "no-container",
}

export enum MultiSelectMenuAlignment {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum MultiSelectMenuSide {
  TOP = "top",
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
}

export enum MultiSelectMenuSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export enum MultiSelectSelectionTagType {
  COUNT = "count",
  TEXT = "text",
}

export type MultiSelectProps = {
  selectedValues: string[];
  onChange: (selectedValue: string) => void;
  items: SelectMenuGroupType[];

  // labels
  label: string;
  sublabel?: string;
  disabled?: boolean;
  helpIconHintText?: string;
  name?: string;
  required?: boolean;
  variant?: MultiSelectVariant;
  selectionTagType?: MultiSelectSelectionTagType;
  slot?: React.ReactNode;
  hintText?: string;
  placeholder: string;
  size?: MultiSelectMenuSize;

  // dim
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;

  // alignment
  alignment?: MultiSelectMenuAlignment;
  side?: MultiSelectMenuSide;
  sideOffset?: number;
  alignOffset?: number;
};

export type MultiSelectMenuProps = {
  items: SelectMenuGroupType[];
  selected: string[];
  onSelect: (value: string) => void;
  trigger: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;

  // alignment
  alignment?: MultiSelectMenuAlignment;
  side?: MultiSelectMenuSide;
  sideOffset?: number;
  alignOffset?: number;

  // open
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
