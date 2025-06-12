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
import { RadioTokensType, getRadioTokens } from "../components/Radio/radio.token";
import { SwitchTokensType, getSwitchTokens } from "../components/Switch/switch.token";
import { CheckboxTokensType, getCheckboxTokens } from "../components/Checkbox/checkbox.token";

export type ComponentTokenType = {
  TAGS?: TagTokensType;
  SEARCH_INPUT?: SearchInputTokensType;
  TEXT_AREA?: TextAreaTokensType;
  RADIO?: RadioTokensType;
  SWITCH?: SwitchTokensType;
  CHECKBOX?: CheckboxTokensType;
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
    RADIO: getRadioTokens(FOUNDATION_THEME),
    SWITCH: getSwitchTokens(FOUNDATION_THEME),
    CHECKBOX: getCheckboxTokens(FOUNDATION_THEME),
  },
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useComponentToken = (componentName: keyof ComponentTokenType) => {
  const { componentTokens } = useTheme();
  return componentTokens[componentName];
};

export default ThemeContext;
