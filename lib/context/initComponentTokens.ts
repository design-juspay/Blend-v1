import { getSearchInputTokens } from "../components/Inputs/SearchInput/searchInput.tokens";
import { getTextAreaTokens } from "../components/Inputs/TextArea/textarea.token";
import { getTagTokens } from "../components/Tags/tag.tokens";
import { getRadioTokens } from "../components/Radio/radio.token";
import { getSwitchTokens } from "../components/Switch/switch.token";
import { getCheckboxTokens } from "../components/Checkbox/checkbox.token";
import { ThemeType } from "../tokens";
import { ComponentTokenType } from "./ThemeContext";

const initTokens = (
  componentTokens: ComponentTokenType,
  foundationTokens: ThemeType
): Required<ComponentTokenType> => {
  return {
    TAGS: componentTokens.TAGS ?? getTagTokens(foundationTokens),
    SEARCH_INPUT:
      componentTokens.SEARCH_INPUT ?? getSearchInputTokens(foundationTokens),
    TEXT_AREA:
      componentTokens.TEXT_AREA ?? getTextAreaTokens(foundationTokens),
    RADIO: componentTokens.RADIO ?? getRadioTokens(foundationTokens),
    SWITCH: componentTokens.SWITCH ?? getSwitchTokens(foundationTokens),
    CHECKBOX: componentTokens.CHECKBOX ?? getCheckboxTokens(foundationTokens),
    // add supprort for other components here
  };
};

export default initTokens;
