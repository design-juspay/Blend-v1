import { InputSize } from "../TextInput/types";

export type MultiValueInputProps = {
  label: string;
  sublabel?: string;
  helpIconHintText?: string;
  name?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  hintText?: string;
  disabled?: boolean;
  tags: string[];
  onTagAdd: (tag: string) => void;
  onTagRemove: (tag: string) => void;
  size?: InputSize;
};
