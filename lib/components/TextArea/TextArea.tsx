import { HelpCircleIcon } from "lucide-react";
import { TooltipSize } from "../Tooltip/types";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { Tooltip } from "../Tooltip";
import PrimitiveTextarea from "../Primitives/PrimitiveTextArea";
import { CSSObject } from "styled-components";

type TextAreaProps = {
  value: string;
  placeholder: string;
  disabled?: boolean;
  maxCharacters?: number;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  lines?: number;
  rows?: number;
  cols?: number;
  label: string;
  sublabel?: string;
  hintText?: string;
  helpIconHintText?: string;
  helpIconText?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  resize?: "none" | "both" | "horizontal" | "vertical" | "block" | "inline";
  wrap?: CSSObject["whiteSpace"];
};

const TextArea = ({
  value,
  placeholder,
  disabled,
  maxCharacters,
  autoFocus,
  onChange,
  onFocus,
  onBlur,
  lines,
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
      <Block display="flex" alignItems="center" gap={4}>
        <Text
          as="label"
          variant="body.md"
          fontWeight={500}
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[400]
              : FOUNDATION_THEME.colors.gray[700]
          }
          style={{ margin: 0, padding: 0 }}
        >
          {label}
        </Text>
        {sublabel && (
          <Text
            variant="body.md"
            fontWeight={400}
            color={
              disabled
                ? FOUNDATION_THEME.colors.gray[300]
                : FOUNDATION_THEME.colors.gray[400]
            }
            margin={0}
          >
            ({sublabel})
          </Text>
        )}
        {helpIconHintText && (
          <Block contentCentered size={16}>
            <Tooltip content={helpIconHintText} size={TooltipSize.SMALL}>
              <HelpCircleIcon
                size={14}
                color={FOUNDATION_THEME.colors.gray[400]}
              />
            </Tooltip>
          </Block>
        )}
      </Block>
      <Block>
        <PrimitiveTextarea
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={rows}
          cols={cols}
          wrap={wrap}
          borderRadius={8}
          resize={resize}
          boxShadow={FOUNDATION_THEME.shadows.sm}
          border={
            error
              ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
              : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
          }
          _hover={{
            border: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
          }}
          color={FOUNDATION_THEME.colors.gray[800]}
          _focusVisible={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          _disabled={{
            backgroundColor: FOUNDATION_THEME.colors.gray[200],
            border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            cursor: "not-allowed",
          }}
          placeholderStyles={{
            fontFamily: "inherit",
            color: "red",
          }}
        />
      </Block>
      {error && errorMessage && (
        <Text variant="body.md" color={FOUNDATION_THEME.colors.red[500]}>
          {errorMessage}
        </Text>
      )}
      {hintText && !error && (
        <Text
          variant="body.md"
          fontWeight={400}
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[300]
              : FOUNDATION_THEME.colors.gray[500]
          }
        >
          {hintText}
        </Text>
      )}
    </Block>
  );
};

export default TextArea;
