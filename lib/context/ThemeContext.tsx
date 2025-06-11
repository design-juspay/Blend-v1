import { createContext, useContext } from "react";
import { FOUNDATION_THEME, ThemeType } from "../tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";
import {
  getSearchInputTokens,
  SearchInputTokensType,
} from "../components/Inputs/SearchInput/searchInput.tokens";
import {
  getTextAreaTokens,
  TextAreaTokensType,
} from "../components/Inputs/TextArea/textarea.token";
import {
  getTextInputTokens,
  TextInputTokensType,
} from "../components/Inputs/TextInput/textInput.tokens";
import {
  getNumberInputTokens,
  NumberInputTokensType,
} from "../components/Inputs/NumberInput/numberInput.tokens";
import {
  AlertTokenType,
  getAlertTokens,
} from "../components/Alert/alert.tokens";

export type ComponentTokenType = {
  TAGS?: TagTokensType;
  SEARCH_INPUT?: SearchInputTokensType;
  TEXT_AREA?: TextAreaTokensType;
  TEXT_INPUT?: TextInputTokensType;
  NUMBER_INPUT?: NumberInputTokensType;
  ALERT?: AlertTokenType;
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
    TEXT_AREA: getTextAreaTokens(FOUNDATION_THEME),
    TEXT_INPUT: getTextInputTokens(FOUNDATION_THEME),
    NUMBER_INPUT: getNumberInputTokens(FOUNDATION_THEME),
    ALERT: getAlertTokens(FOUNDATION_THEME),
  },
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};



export default ThemeContext;
