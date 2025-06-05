import { FOUNDATION_THEME, ThemeType } from "../tokens";
import ThemeContext, { ComponentTokenType } from "./ThemeContext";

type ThemeProviderProps = {
  foundationTokens?: ThemeType;
  componentTokens?: ComponentTokenType;
  children: React.ReactNode;
};

const ThemeProvider = ({
  foundationTokens = FOUNDATION_THEME,
  componentTokens = {},
  children,
}: ThemeProviderProps) => {
  const themeContextValue = {
    foundationTokens,
    componentTokens,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
