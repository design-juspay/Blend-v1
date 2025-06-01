import { FOUNDATION_THEME } from "../../../tokens";
import Block from "../../Primitives/Block/Block";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import searchInputTokens from "./searchInput.tokens";

type SearchInputProps = {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  error?: boolean;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

const SearchInput = ({
  leftSlot,
  rightSlot,
  error = false,
  label,
  placeholder = "Enter",
  value,
  onChange,
  name,
}: SearchInputProps) => {
  return (
    <Block position="relative" width={"100%"} height={40}>
      <PrimitiveInput
        name={name}
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
            ? `1px solid ${searchInputTokens.input.border.color.error} !important`
            : `1px solid ${searchInputTokens.input.border.color.default} !important`
        }
        _hover={{
          borderBottom: `1px solid ${searchInputTokens.input.border.color.hover} !important`,
        }}
        _focusVisible={{
          borderBottom: `1px solid ${searchInputTokens.input.border.color.focus} !important`,
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

export default SearchInput;
