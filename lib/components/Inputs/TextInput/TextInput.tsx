import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { useRef, useState, useEffect } from "react";
import { FOUNDATION_THEME } from "../../../tokens";

import textInputTokens from "./textInput.tokens";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import { InputSize, InputProps } from "./types";

const TextInput = ({
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
  required = false,
}: InputProps) => {
  // if (variant === InputVariant.SEARCH) {
  //   return (
  //     <SearchInput
  //       name={name}
  //       leftSlot={leftSlot}
  //       rightSlot={rightSlot}
  //       error={error}
  //       label={label}
  //       placeholder={placeholder}
  //       value={value}
  //       onChange={onChange}
  //     />
  //   );
  // }

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
  const paddingX = textInputTokens.input.padding.x[size];
  const paddingY = textInputTokens.input.padding.y[size];
  const GAP = textInputTokens.input.gap;

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
        required={required}
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
          required={required}
          value={value}
          type="text"
          name={name}
          onChange={onChange}
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          placeholder={placeholder}
          borderRadius={textInputTokens.input.border.radius}
          boxShadow={FOUNDATION_THEME.shadows.sm}
          border={
            error
              ? `1px solid ${textInputTokens.input.border.color.error}`
              : `1px solid ${textInputTokens.input.border.color.default}`
          }
          outline="none"
          width={"100%"}
          _hover={{
            border: `1px solid ${textInputTokens.input.border.color.hover}`,
          }}
          color={
            disabled
              ? textInputTokens.input.color.disabled
              : textInputTokens.input.color.default
          }
          // _focusVisible={{
          //   border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          //   outline: "none !important",
          // }}
          _focus={{
            border: `1px solid ${textInputTokens.input.border.color.focus} !important`,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: textInputTokens.input.backgroundColor.disabled,
            border: `1px solid ${textInputTokens.input.border.color.disabled}`,
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
