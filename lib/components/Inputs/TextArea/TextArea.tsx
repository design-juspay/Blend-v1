import Block from "../../Primitives/Block/Block";
import PrimitiveTextarea from "../../Primitives/PrimitiveTextArea";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import { TextAreaProps } from "./types";
import { useComponentToken } from "../../../context/useComponentToken";
import { TextAreaTokensType } from "./textarea.token";

/**
 * @description A multi-line text input field, allowing users to enter and edit larger blocks of text.
 * The props for this component are defined in `TextAreaProps` in `./types.ts`.
 * @feature Multi-line text input.
 * @feature Customizable rows and columns (though styling might override).
 * @feature Control over resizing behavior (none, both, horizontal, vertical).
 * @feature Supports labels, sublabels, hint text, and error messages.
 * @feature Standard input events like `onChange`, `onFocus`, `onBlur`.
 * @example
 * ```tsx
 * import { TextArea } from "./components/Inputs/TextArea"; // Assuming path
 * import { useState } from "react";
 *
 * function MyCommentForm() {
 *   const [comment, setComment] = useState("");
 *
 *   return (
 *     <TextArea
 *       label="Your Comment"
 *       value={comment}
 *       onChange={(e) => setComment(e.target.value)}
 *       placeholder="Enter your comment here..."
 *       rows={4}
 *       hintText="Max 500 characters."
 *     />
 *   );
 * }
 * ```
 */
const TextArea = ({
  value,
  placeholder,
  disabled,
  autoFocus,
  onChange,
  onFocus,
  onBlur,
  rows = 3,
  cols,
  label,
  sublabel,
  hintText,
  helpIconHintText,
  required,
  error,
  errorMessage,
  wrap,
  resize = "none",
}: TextAreaProps) => {
  const textAreaTokens = useComponentToken("TEXT_AREA") as TextAreaTokensType;
  return (
    <Block display="flex" flexDirection="column" gap={8} width="100%">
      <InputLabels
        label={label}
        sublabel={sublabel}
        disabled={disabled}
        helpIconHintText={helpIconHintText}
        required={required}
      />
      <PrimitiveTextarea
        width={"100%"}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={rows}
        required={required}
        cols={cols}
        wrap={wrap}
        borderRadius={textAreaTokens.borderRadius}
        resize={resize}
        paddingX={textAreaTokens.paddingX}
        paddingY={textAreaTokens.paddingY}
        boxShadow={textAreaTokens.boxShadow}
        fontFamily={textAreaTokens.fontFamily}
        border={textAreaTokens.border[error ? "error" : "default"]}
        outline={textAreaTokens.outline[error ? "error" : "default"]}
        _hover={{
          border: textAreaTokens.border.hover,
        }}
        color={textAreaTokens.color[disabled ? "disabled" : "default"]}
        _focus={{
          border: textAreaTokens.border.focus,
          outline: textAreaTokens.outline.focus,
        }}
        disabled={disabled}
        _disabled={{
          backgroundColor: textAreaTokens.backgroundColor.disabled,
          border: textAreaTokens.border.disabled,
          cursor: "not-allowed",
        }}
      />
      <InputFooter
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        disabled={disabled}
      />
    </Block>
  );
};

export default TextArea;
