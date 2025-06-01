import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import PrimitiveTextarea from "../Primitives/PrimitiveTextArea";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import { TextAreaProps } from "./types";

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
        borderRadius={8}
        resize={resize}
        padding={"10px 14px"}
        boxShadow={FOUNDATION_THEME.shadows.sm}
        border={
          error
            ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
            : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
        }
        outline="none"
        _hover={{
          border: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
        }}
        color={
          disabled
            ? FOUNDATION_THEME.colors.gray[300]
            : FOUNDATION_THEME.colors.gray[800]
        }
        _focusVisible={{
          border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          outline: "none !important",
        }}
        _focus={{
          border: `1px solid ${FOUNDATION_THEME.colors.primary[500]} !important`,
          outline: "none !important",
        }}
        disabled={disabled}
        _disabled={{
          backgroundColor: FOUNDATION_THEME.colors.gray[50],
          border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
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
