import { CSSObject } from "styled-components";

// Component-level JSDoc (description, features, example) is now in TextArea.tsx
export type TextAreaProps = {
  /**
   * @propCategory Required
   * @description The controlled value of the textarea.
   */
  value: string;
  /**
   * @propCategory Required
   * @description Placeholder text displayed when the textarea is empty.
   */
  placeholder: string;
  /**
   * @propCategory State
   * @description If true, disables the textarea.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, the textarea will automatically focus on mount.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * @propCategory Required
   * @description Callback function invoked when the textarea value changes.
   */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the textarea gains focus.
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the textarea loses focus.
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * @propCategory Appearance
   * @description The visible number of text lines for the textarea.
   * Note: Actual height might be controlled by CSS.
   */
  rows?: number;
  /**
   * @propCategory Appearance
   * @description The visible width of the text area, in average character widths.
   * Note: Actual width might be controlled by CSS.
   */
  cols?: number;
  /**
   * @propCategory Required
   * @description The main label for the textarea.
   */
  label: string;
  /**
   * @propCategory Content
   * @description An optional sublabel displayed below the main label.
   */
  sublabel?: string;
  /**
   * @propCategory Content
   * @description A hint text displayed below the textarea.
   */
  hintText?: string;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed next to the label.
   */
  helpIconHintText?: string;
  /**
   * @propCategory Content
   * @description Text for the help icon itself (if different from hint). Not commonly used.
   */
  helpIconText?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the textarea as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory State
   * @description If true, applies an error style to the textarea.
   * @default false
   */
  error?: boolean;
  /**
   * @propCategory Content
   * @description An error message displayed below the textarea when `error` is true.
   */
  errorMessage?: string;
  /**
   * @propCategory Appearance
   * @description Controls whether the textarea is resizable by the user.
   * Accepts standard CSS `resize` values.
   * @default "none" (or browser default)
   */
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  /**
   * @propCategory Appearance
   * @description Controls the wrapping behavior of text within the textarea.
   * Accepts standard CSS `white-space` values.
   */
  wrap?: CSSObject["whiteSpace"];
};
