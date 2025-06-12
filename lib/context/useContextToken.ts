import { SearchInputTokensType } from "../components/Inputs/SearchInput/searchInput.tokens";
import { TextAreaTokensType } from "../components/Inputs/TextArea/textarea.token";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { RadioTokensType } from "../components/Radio/radio.token";
import { SwitchTokensType } from "../components/Switch/switch.token";
import { CheckboxTokensType } from "../components/Checkbox/checkbox.token"; // Added and path corrected
import { ComponentTokenType, useTheme } from "./ThemeContext";

// DONT CHANGE TYPES FOR NOW, SIMPLY KEEP ADDING
// TYPES FOR RETURNS
// WE WILL ADAPT TO BETTER TYPES LATER
export const useComponentToken = (
  component: keyof ComponentTokenType
): SearchInputTokensType | TagTokensType | TextAreaTokensType | RadioTokensType | SwitchTokensType | CheckboxTokensType => { // Added CheckboxTokensType
  const { componentTokens } = useTheme();
  switch (component) {
    case "TAGS":
      return componentTokens.TAGS;
    case "SEARCH_INPUT":
      return componentTokens.SEARCH_INPUT;
    case "TEXT_AREA":
      return componentTokens.TEXT_AREA;
    case "RADIO":
      return componentTokens.RADIO;
    case "SWITCH":
      return componentTokens.SWITCH;
    case "CHECKBOX": // Added
      return componentTokens.CHECKBOX; // Added
    default:
      throw new Error(`Unknown component token: ${component}`);
  }
};
