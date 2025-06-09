import { createContext, useContext } from "react";
import { FOUNDATION_THEME, ThemeType } from "../tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";
import {
  getSearchInputTokens,
  SearchInputTokensType,
} from "../components/Inputs/SearchInput/searchInput.tokens";

export type ComponentTokenType = {
  TAGS?: TagTokensType;
  SEARCH_INPUT?: SearchInputTokensType;
  // add supprort for other components here
};

type ThemeContextType = {
  foundationTokens: ThemeType;
  componentTokens: Required<ComponentTokenType>;
};

const ThemeContext = createContext<ThemeContextType>({
  foundationTokens: FOUNDATION_THEME,
  componentTokens: {
    TAGS: getTagTokens(FOUNDATION_THEME),
    SEARCH_INPUT: getSearchInputTokens(FOUNDATION_THEME),
  },
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// @todo
// add better type for this function, return type etc
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

export default ThemeContext;
