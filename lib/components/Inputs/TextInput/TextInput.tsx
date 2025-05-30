import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { useRef, useState, useEffect } from "react";
import { FOUNDATION_THEME } from "../../../tokens";

import textInputTokens from "./textInput.tokens";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import { InputSize, InputVariant, InputProps } from "./types";

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

const TextInput = ({
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
  name,
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

  // @TODO: Reconsider the type of unitTokens in FOUNDATION_THEME
  const paddingX = textInputTokens.input.padding.x[size] as number;
  const paddingY = textInputTokens.input.padding.y[size] as number;
  const GAP = textInputTokens.input.gap as number;

  const paddingInlineStart = leftSlot
    ? paddingX + leftSlotWidth + GAP
    : paddingX;
  const paddingInlineEnd = rightSlot
    ? paddingX + rightSlotWidth + GAP
    : paddingX;

  return (
    <Block display="flex" flexDirection="column" gap={8} width={"100%"}>
      <InputLabels
        label={label}
        sublabel={sublabel}
        helpIconHintText={helpIconHintText}
        disabled={disabled}
        name={name}
      />
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

        <PrimitiveInput
          value={value}
          type="text"
          name={name}
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
      </Block>
      <InputFooter
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        disabled={disabled}
      />
    </Block>
  );
};

export default TextInput;
