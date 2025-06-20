// Component-level JSDoc (description, features, example) is now in SearchInput.tsx
export type SearchInputProps = {
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the left of the input field (e.g., a search icon).
   */
  leftSlot?: React.ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed in a slot to the right of the input field (e.g., a clear button or voice search icon).
   */
  rightSlot?: React.ReactNode;
  /**
   * @propCategory State
   * @description If true, applies an error style to the input field.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Appearance
   * @description Placeholder text for the search input field.
   */
  placeholder?: string;
  /**
   * @propCategory State
   * @description The controlled value of the search input.
   */
  value?: string;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the search input value changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input element.
   */
  name?: string;
};
