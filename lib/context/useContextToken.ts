import { SearchInputTokensType } from "../components/Inputs/SearchInput/searchInput.tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { ComponentTokenType, useTheme } from "./ThemeContext";

// DONT CHANGE TYPES FOR NOW, SIMPLY KEEP ADDING 
// TYPES FOR RETURNS
// WE WILL ADAPT TO BETTER TYPES LATER
export const useComponentToken = (
  component: keyof ComponentTokenType
): SearchInputTokensType | TagTokensType => {
  const { componentTokens } = useTheme();
  switch (component) {
    case "TAGS":
      return componentTokens.TAGS;
    case "SEARCH_INPUT":
      return componentTokens.SEARCH_INPUT;
  }
};
