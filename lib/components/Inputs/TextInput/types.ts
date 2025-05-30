export enum InputSize {
  MEDIUM = "md",
  LARGE = "lg",
}

export enum InputVariant {
  SEARCH = "search",
  TEXT = "text",
}

export type InputProps = {
  required?: boolean;
  variant?: InputVariant;
  label: string;
  sublabel?: string;
  hintText?: string;
  helpIconHintText?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  size?: InputSize;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};
