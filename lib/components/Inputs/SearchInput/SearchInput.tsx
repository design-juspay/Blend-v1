import { useEffect } from "react";
import { useRef, useState } from "react";
import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";

import { SearchInputProps } from "./types";
import { SearchInputTokensType } from "./searchInput.tokens";
import { useComponentToken } from "../../../context/useComponentToken";

/**
 * @description An input field specifically designed for search functionality.
 * It often includes a search icon and a clear button.
 * The props for this component are defined in `SearchInputProps` in `./types.ts`.
 * @feature Text input field optimized for search queries.
 * @feature Optional left and right slots for icons (e.g., search icon, clear button).
 * @feature Supports error state and placeholder text.
 * @feature Controlled component with `value` and `onChange` props.
 * @example
 * ```tsx
 * import { SearchInput } from "./components/Inputs/SearchInput"; // Assuming path
 * import { Search, X } from "lucide-react"; // Assuming lucide-react for icons
 * import { useState } from "react";
 *
 * function MySearchBar() {
 *   const [searchTerm, setSearchTerm] = useState("");
 *
 *   return (
 *     <SearchInput
 *       placeholder="Search items..."
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *       leftSlot={<Search size={16} />}
 *       rightSlot={searchTerm ? <X size={16} onClick={() => setSearchTerm("")} style={{cursor: 'pointer'}} /> : null}
 *     />
 *   );
 * }
 * ```
 */
const toPixels = (value: string | number | undefined): number => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    // Remove 'px' and convert to number
    const numericValue = parseFloat(value.replace("px", ""));
    return isNaN(numericValue) ? 0 : numericValue;
  }

  return 0;
};

const SearchInput = ({
  leftSlot,
  rightSlot,
  error = false,
  placeholder = "Enter",
  value,
  onChange,
  name,
}: SearchInputProps) => {
  const searchInputTokens = useComponentToken(
    "SEARCH_INPUT"
  ) as SearchInputTokensType;

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

  const paddingX = toPixels(searchInputTokens.padding.x);
  const paddingY = toPixels(searchInputTokens.padding.y);
  const GAP = toPixels(searchInputTokens.gap);

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
        height={searchInputTokens.height}
        width={searchInputTokens.width}
        placeholder={placeholder}
        paddingInlineStart={paddingInlineStart}
        paddingInlineEnd={paddingInlineEnd}
        paddingY={paddingY}
        outline={searchInputTokens.outline}
        borderRadius={searchInputTokens.borderRadius}
        borderTop={searchInputTokens.borderTop.default}
        borderLeft={searchInputTokens.borderLeft.default}
        borderRight={searchInputTokens.borderRight.default}
        borderBottom={
          error
            ? searchInputTokens.borderBottom.error
            : searchInputTokens.borderBottom.default
        }
        _hover={{
          borderBottom: searchInputTokens.borderBottom.hover,
        }}
        _focus={{
          borderBottom: searchInputTokens.borderBottom.focus,
        }}
      />
    </Block>
  );
};

export default SearchInput;
