import { CSSObject } from "styled-components";

/**
 * @description A comprehensive multi-line text input component perfect for collecting longer text content such as comments, descriptions, feedback, and detailed user input.
 * Essential for forms requiring extended text entry with professional styling, validation, and user experience enhancements.
 * @feature Multi-line text input with customizable dimensions and appearance
 * @feature Intelligent resizing controls (none, horizontal, vertical, both) for user flexibility
 * @feature Comprehensive label system with primary labels, sublabels, and help tooltips
 * @feature Advanced validation with error states and descriptive error messaging
 * @feature Accessibility support with proper ARIA attributes and keyboard navigation
 * @feature Auto-focus capability for improved user workflow and experience
 * @feature Configurable row and column sizing for optimal layout integration
 * @feature Professional styling with hover, focus, and disabled state management
 * @example Basic Comment Input
 * ```tsx
 * import { TextArea } from "blend-v1";
 * import { useState } from "react";
 * 
 * function CommentForm() {
 *   const [comment, setComment] = useState("");
 * 
 *   return (
 *     <TextArea
 *       label="Your Comment"
 *       value={comment}
 *       onChange={(e) => setComment(e.target.value)}
 *       placeholder="Share your thoughts..."
 *       rows={4}
 *     />
 *   );
 * }
 * ```
 * @example Intermediate Usage with Error State
 * ```tsx
 * import { TextArea } from "blend-v1";
 * import { useState } from "react";
 * 
 * function FeedbackForm() {
 *   const [feedback, setFeedback] = useState("");
 * 
 *   return (
 *     <TextArea
 *       label="Product Feedback"
 *       sublabel="Help us improve our products"
 *       value={feedback}
 *       onChange={(e) => setFeedback(e.target.value)}
 *       placeholder="Please describe your experience..."
 *       rows={6}
 *       error={feedback.length > 500}
 *       errorMessage="Feedback must be 500 characters or less"
 *       hintText="Share your honest thoughts"
 *       required={true}
 *       resize="vertical"
 *     />
 *   );
 * }
 * ```
 * @example Advanced Usage with All Props
 * ```tsx
 * import { TextArea } from "blend-v1";
 * import { useState } from "react";
 * 
 * function MessageForm() {
 *   const [message, setMessage] = useState("");
 * 
 *   return (
 *     <TextArea
 *       label="Message Content"
 *       sublabel="Compose your message"
 *       value={message}
 *       onChange={(e) => setMessage(e.target.value)}
 *       placeholder="Type your message here..."
 *       rows={8}
 *       cols={50}
 *       autoFocus={true}
 *       hintText="This message will be sent to team members"
 *       helpIconHintText="Click for formatting guidelines"
 *       required={true}
 *       resize="both"
 *       wrap="soft"
 *     />
 *   );
 * }
 * ```
 */
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
