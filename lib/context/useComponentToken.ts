import { NumberInputTokensType } from "../components/Inputs/NumberInput/numberInput.tokens";
import { SearchInputTokensType } from "../components/Inputs/SearchInput/searchInput.tokens";
import { TextAreaTokensType } from "../components/Inputs/TextArea/textarea.token";
import { TextInputTokensType } from "../components/Inputs/TextInput/textInput.tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { ComponentTokenType, useTheme } from "./ThemeContext";

// DONT CHANGE TYPES FOR NOW, SIMPLY KEEP ADDING
// TYPES FOR RETURNS
// WE WILL ADAPT TO BETTER TYPES LATER
export const useComponentToken = (
  component: keyof ComponentTokenType
):
  | SearchInputTokensType
  | TagTokensType
  | TextAreaTokensType
  | TextInputTokensType
  | NumberInputTokensType => {
  const { componentTokens } = useTheme();
  switch (component) {
    case "TAGS":
      return componentTokens.TAGS;
    case "SEARCH_INPUT":
      return componentTokens.SEARCH_INPUT;
    case "TEXT_AREA":
      return componentTokens.TEXT_AREA;
    case "TEXT_INPUT":
      return componentTokens.TEXT_INPUT;
    case "NUMBER_INPUT":
      return componentTokens.NUMBER_INPUT;
  }
};
