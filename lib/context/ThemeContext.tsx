import { createContext, useContext } from "react"
import { FOUNDATION_THEME, ThemeType } from "../tokens"

export type ComponentTokenType = {
  [componentName: string]: any
}

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