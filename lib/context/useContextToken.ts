import { SearchInputTokensType } from "../components/Inputs/SearchInput/searchInput.tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { RadioTokensType } from "../components/Radio/radio.token";
import { ComponentTokenType, useTheme } from "./ThemeContext";

// DONT CHANGE TYPES FOR NOW, SIMPLY KEEP ADDING 
// TYPES FOR RETURNS
// WE WILL ADAPT TO BETTER TYPES LATER
export const useComponentToken = (
  component: keyof ComponentTokenType
): SearchInputTokensType | TagTokensType | RadioTokensType => {
  const { componentTokens } = useTheme();
  switch (component) {
    case "TAGS":
      return componentTokens.TAGS;
    case "SEARCH_INPUT":
      return componentTokens.SEARCH_INPUT;
    case "RADIO":
      return componentTokens.RADIO;
  }
};
