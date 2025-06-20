import { KeyboardEvent, useRef, useState } from "react";
import Block from "../../Primitives/Block/Block";
import { Tag, TagShape, TagSize } from "../../Tags";
import InputFooter from "../utils/InputFooter/InputFooter";
import InputLabels from "../utils/InputLabels/InputLabels";
import { TextInputSize } from "../TextInput/types";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { MultiValueInputProps } from "./types";
import { useComponentToken } from "../../../context/useComponentToken";
import { MultiValueInputTokensType } from "./multiValueInput.tokens";

/**
 * @description A component that allows users to input multiple string values, typically displayed as "tags".
 * Users can add new tags by typing and pressing Enter, and remove existing tags.
 * The props for this component are defined in `MultiValueInputProps` in `./types.ts`.
 * @feature Input field for entering multiple string values (tags).
 * @feature Displays entered values as dismissible tags.
 * @feature Supports labels, sublabels, hint text, and error messages.
 * @feature Customizable input size.
 * @example
 * ```tsx
 * import { MultiValueInput } from "./components/Inputs/MultiValueInput"; // Assuming path
 * import { useState } from "react";
 *
 * function MyTagsInput() {
 *   const [tags, setTags] = useState<string[]>(["initial-tag"]);
 *
 *   const handleAddTag = (tag: string) => {
 *     if (tag && !tags.includes(tag)) {
 *       setTags([...tags, tag]);
 *     }
 *   };
 *
 *   const handleRemoveTag = (tagToRemove: string) => {
 *     setTags(tags.filter(tag => tag !== tagToRemove));
 *   };
 *
 *   return (
 *     <MultiValueInput
 *       label="Keywords"
 *       tags={tags}
 *       onTagAdd={handleAddTag}
 *       onTagRemove={handleRemoveTag}
 *       hintText="Press Enter to add a keyword."
 *       size="md"
 *     />
 *   );
 * }
 * ```
 */
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
  size = TextInputSize.MEDIUM,
}: MultiValueInputProps) => {
  const multiValueInputTokens = useComponentToken(
    "MULTI_VALUE_INPUT"
  ) as MultiValueInputTokensType;
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

  const paddingX = multiValueInputTokens.input.paddingX[size];
  const paddingY = multiValueInputTokens.input.paddingY[size];
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
        boxShadow={multiValueInputTokens.input.boxShadow}
        border={
          error
            ? multiValueInputTokens.input.border.error
            : isFocused
            ? multiValueInputTokens.input.border.focus
            : multiValueInputTokens.input.border.default
        }
        _hover={{
          border: multiValueInputTokens.input.border.hover,
        }}
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
          borderRadius={multiValueInputTokens.input.borderRadius}
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
