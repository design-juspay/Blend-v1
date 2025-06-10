import { getSearchInputTokens } from "../components/Inputs/SearchInput/searchInput.tokens";
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
    // add supprort for other components here
  };
};

export default initTokens;
