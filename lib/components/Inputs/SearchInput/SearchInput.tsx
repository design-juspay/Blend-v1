import { useEffect } from "react";
import { useRef, useState } from "react";
import { FOUNDATION_THEME } from "../../../tokens";
import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import searchInputTokens from "./searchInput.tokens";
import { SearchInputProps } from "./types";

const SearchInput = ({
  leftSlot,
  rightSlot,
  error = false,
  placeholder = "Enter",
  value,
  onChange,
  name,
}: SearchInputProps) => {
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
  const paddingX = searchInputTokens.input.padding.x;
  const paddingY = searchInputTokens.input.padding.y;
  const GAP = searchInputTokens.input.gap;

  const paddingInlineStart = leftSlot
    ? paddingX + leftSlotWidth + GAP
    : paddingX;
  const paddingInlineEnd = rightSlot
    ? paddingX + rightSlotWidth + GAP
    : paddingX;

  return (
    <Block position="relative" width={"100%"} height={40}>
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
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        paddingInlineStart={paddingInlineStart}
        paddingInlineEnd={paddingInlineEnd}
        paddingY={paddingY}
        border="none"
        outline="none"
        height={40}
        width={"100%"}
        borderBottom={
          error
            ? `1px solid ${searchInputTokens.input.border.color.error} !important`
            : `1px solid ${searchInputTokens.input.border.color.default} !important`
        }
        _hover={{
          borderBottom: `1px solid ${searchInputTokens.input.border.color.hover} !important`,
        }}
        // @TODO: Confirm use case in v1
        // _focusVisible={{
        //   borderBottom: `1px solid ${searchInputTokens.input.border.color.focus} !important`,
        //   outline: "none !important",
        // }}
        _focus={{
          borderBottom: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          outline: "none !important",
        }}
      />
    </Block>
  );
};

export default SearchInput;
