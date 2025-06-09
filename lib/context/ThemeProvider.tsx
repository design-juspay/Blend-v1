import { getSearchInputTokens } from "../components/Inputs/SearchInput/searchInput.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";
import { FOUNDATION_THEME, ThemeType } from "../tokens";
import ThemeContext, { ComponentTokenType } from "./ThemeContext";

type ThemeProviderProps = {
  foundationTokens?: ThemeType;
  componentTokens?: ComponentTokenType;
  children: React.ReactNode;
};

const initTokens = (
  componentTokens: ComponentTokenType,
  foundationTokens: ThemeType
): Required<ComponentTokenType> => {
  return {
    TAGS: componentTokens.TAGS ?? getTagTokens(foundationTokens),
    SEARCH_INPUT:
      componentTokens.SEARCH_INPUT ?? getSearchInputTokens(foundationTokens),
    // add supprort for other components here
  };
};

const ThemeProvider = ({
  foundationTokens = FOUNDATION_THEME,
  componentTokens = {},
  children,
}: ThemeProviderProps) => {
  const defaultThemeContextValue = {
    foundationTokens,
    componentTokens: initTokens(componentTokens, foundationTokens),
  };
  return (
    <ThemeContext.Provider value={defaultThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
