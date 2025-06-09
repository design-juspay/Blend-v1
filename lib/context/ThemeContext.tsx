import { createContext, useContext } from "react";
import { FOUNDATION_THEME, ThemeType } from "../tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";

export type ComponentTokenType = {
  TAGS?: TagTokensType;
};

type ThemeContextType = {
  foundationTokens: ThemeType;
  componentTokens: Required<ComponentTokenType>;
};

const ThemeContext = createContext<ThemeContextType>({
  foundationTokens: FOUNDATION_THEME,
  componentTokens: {
    TAGS: getTagTokens(FOUNDATION_THEME),
  },
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useComponentToken = (component: "TAGS") => {
  const { componentTokens } = useTheme();
  switch (component) {
    case "TAGS":
      return componentTokens.TAGS;
  }
};

export default ThemeContext;
