import { getAlertTokens } from "../components/Alert/alert.tokens";
import { getNumberInputTokens } from "../components/Inputs/NumberInput/numberInput.tokens";
import { getSearchInputTokens } from "../components/Inputs/SearchInput/searchInput.tokens";
import { getTextAreaTokens } from "../components/Inputs/TextArea/textarea.token";
import { getTextInputTokens } from "../components/Inputs/TextInput/textInput.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";
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
    TEXT_AREA: componentTokens.TEXT_AREA ?? getTextAreaTokens(foundationTokens),
    TEXT_INPUT:
      componentTokens.TEXT_INPUT ?? getTextInputTokens(foundationTokens),
    NUMBER_INPUT:
      componentTokens.NUMBER_INPUT ?? getNumberInputTokens(foundationTokens),
    ALERT: componentTokens.ALERT ?? getAlertTokens(foundationTokens),
    // add supprort for other components here
  };
};

export default initTokens;
