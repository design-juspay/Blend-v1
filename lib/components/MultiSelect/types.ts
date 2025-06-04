import { SelectMenuAlignment, SelectMenuGroupType, SelectMenuSide, SelectMenuSize, SelectMenuVariant } from "../Select";
import { SelectionTagType } from "../Select/Select";

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
  variant?: SelectMenuVariant;
  selectionTagType?: SelectionTagType;
  slot?: React.ReactNode;
  hintText?: string;
  placeholder: string;
  size?: SelectMenuSize;

  // dim
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;

  // alignment
  alignment?: SelectMenuAlignment;
  side?: SelectMenuSide;
  sideOffset?: number;
  alignOffset?: number;
};
