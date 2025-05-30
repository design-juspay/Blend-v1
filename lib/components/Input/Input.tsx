import Block from "../Primitives/Block/Block";
import PrimitiveInput from "../Primitives/PrimitiveInput/PrimitiveInput";
import { useRef, useState, useEffect } from "react";
import { FOUNDATION_THEME } from "../../tokens";
import Text from "../Text/Text";
import { TooltipSize } from "../Tooltip/types";
import { Tooltip } from "../Tooltip";
import { File, HelpCircleIcon, Search } from "lucide-react";
import { Tag, TagSize, TagShape } from "../Tags";

enum InputSize {
  MEDIUM = "medium",
  LARGE = "large",
}

export enum InputVariant {
  SEARCH = "search",
  TEXT = "text",
}

type InputProps = {
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
};

const SearchInput = ({
  size = InputSize.MEDIUM,
  leftSlot,
  rightSlot,
  error = false,
  errorMessage = "This is an error message",
  hintText = "This is a hint text to help user.",
  helpIconHintText = "This is a help icon hint text to help user.",
  disabled = false,
  label,
  placeholder = "Enter",
  sublabel,
  value,
  onChange,
}: Omit<InputProps, "variant">) => {
  return (
    <Block position="relative" width={"100%"} height={40}>
      <PrimitiveInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        paddingX={12}
        paddingY={8}
        border="none"
        outline="none"
        height={40}
        width={"100%"}
        borderBottom={
          error
            ? `1px solid ${FOUNDATION_THEME.colors.red[500]} !important`
            : `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`
        }
        _hover={{
          borderBottom: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
        }}
        _focusVisible={{
          borderBottom: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          outline: "none !important",
        }}
        _focus={{
          borderBottom: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          outline: "none !important",
        }}
      />
    </Block>
  );
};

const Input = ({
  variant = InputVariant.TEXT,
  size = InputSize.MEDIUM,
  leftSlot,
  rightSlot,
  error = false,
  errorMessage,
  hintText,
  helpIconHintText,
  disabled = false,
  label,
  placeholder = "Enter",
  sublabel,
  value,
  onChange,
}: InputProps) => {
  if (variant === InputVariant.SEARCH) {
    return (
      <SearchInput
        size={size}
        leftSlot={leftSlot}
        rightSlot={rightSlot}
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        helpIconHintText={helpIconHintText}
        disabled={disabled}
        label={label}
        placeholder={placeholder}
        sublabel={sublabel}
        value={value}
        onChange={onChange}
      />
    );
  }

  const leftSlotRef = useRef<HTMLDivElement>(null);
  const rightSlotRef = useRef<HTMLDivElement>(null);

  const [leftSlotWidth, setLeftSlotWidth] = useState(0);
  const [rightSlotWidth, setRightSlotWidth] = useState(0);

  useEffect(() => {
    if (leftSlotRef.current) {
      setLeftSlotWidth(leftSlotRef.current.offsetWidth);
    } else {
      setLeftSlotWidth(0);
    }
    if (rightSlotRef.current) {
      setRightSlotWidth(rightSlotRef.current.offsetWidth);
    } else {
      setRightSlotWidth(0);
    }
  }, [leftSlot, rightSlot]);

  const paddingX = size === InputSize.MEDIUM ? 12 : 14;
  const paddingY = size === InputSize.MEDIUM ? 8 : 10;

  const paddingInlineStart = leftSlot ? paddingX + leftSlotWidth + 8 : paddingX;
  const paddingInlineEnd = rightSlot ? paddingX + rightSlotWidth + 8 : paddingX;
  return (
    <Block display="flex" flexDirection="column" gap={8} width={"100%"}>
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
            (optional)
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
      <Block position="relative" width={"100%"}>
        {leftSlot && (
          <Block
            ref={leftSlotRef}
            position="absolute"
            top={paddingY}
            left={paddingX}
            bottom={paddingY}
            contentCentered
          >
            {leftSlot}
          </Block>
        )}
        {rightSlot && (
          <Block
            ref={rightSlotRef}
            position="absolute"
            top={paddingY}
            right={paddingX}
            bottom={paddingY}
            contentCentered
          >
            {rightSlot}
          </Block>
        )}
        <PrimitiveInput
          value={value}
          onChange={onChange}
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          placeholder={placeholder}
          borderRadius={8}
          boxShadow={FOUNDATION_THEME.shadows.sm}
          border={
            error
              ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
              : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
          }
          outline="none"
          width={"100%"}
          _hover={{
            border: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
          }}
          color={FOUNDATION_THEME.colors.gray[800]}
          _focusVisible={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          _focus={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: FOUNDATION_THEME.colors.gray[200],
            border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            cursor: "not-allowed",
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

export default Input;
