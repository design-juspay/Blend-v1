import { KeyboardEvent, useRef, useState } from "react";
import Block from "../../Primitives/Block/Block";
import { Tag, TagShape, TagSize } from "../../Tags";
import InputFooter from "../utils/InputFooter/InputFooter";
import InputLabels from "../utils/InputLabels/InputLabels";
import textInputTokens from "../TextInput/textInput.tokens";
import { InputSize } from "../TextInput/types";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { MultiValueInputProps } from "./types";

const MultiValueInput = ({
  label,
  sublabel,
  disabled,
  required,
  error,
  errorMessage,
  hintText,
  tags,
  onTagAdd,
  onTagRemove,
  size = InputSize.MEDIUM,
}: MultiValueInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue && !tags.includes(trimmedValue)) {
      onTagAdd?.(trimmedValue);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagRemove?.(tagToRemove);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const paddingX = textInputTokens.input.padding.x[size];
  const paddingY = textInputTokens.input.padding.y[size];
  return (
    <Block display="flex" flexDirection="column" gap={8}>
      <InputLabels
        label={label}
        sublabel={sublabel}
        disabled={disabled}
        required={required}
      />
      <Block
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        gap={8}
        borderRadius={8}
        paddingX={paddingX}
        paddingY={paddingY}
        onClick={handleContainerClick}
        border={
          error
            ? `1px solid ${textInputTokens.input.border.color.error}`
            : isFocused
            ? `1px solid ${textInputTokens.input.border.color.focus}`
            : `1px solid ${textInputTokens.input.border.color.default}`
        }
        _hover={{
          border: `1px solid ${textInputTokens.input.border.color.hover}`,
        }}
        overflow="clip"
      >
        {tags?.map((tag) => (
          <Tag
            key={tag}
            text={tag}
            size={TagSize.XS}
            shape={TagShape.ROUNDED}
          />
        ))}
        <PrimitiveInput
          ref={inputRef}
          paddingInlineStart={2}
          paddingInlineEnd={paddingX}
          borderRadius={textInputTokens.input.border.radius}
          outline="none"
          border="none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
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

export default MultiValueInput;
