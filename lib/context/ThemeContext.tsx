import { createContext, useContext } from "react"
import { FOUNDATION_THEME, ThemeType } from "../tokens"
import { TagTokensType } from "../components/Tags/tag.tokens";

export type ComponentTokenType = {
  TAGS?: TagTokensType;
};

type ThemeContextType = {
  foundationTokens: ThemeType,
  componentTokens: ComponentTokenType,
}

const ThemeContext = createContext<ThemeContextType>({
  foundationTokens: FOUNDATION_THEME,
  componentTokens: {},
})

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;