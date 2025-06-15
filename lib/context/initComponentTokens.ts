import { getAlertTokens } from "../components/Alert/alert.tokens";
import { getNumberInputTokens } from "../components/Inputs/NumberInput/numberInput.tokens";
import { getSearchInputTokens } from "../components/Inputs/SearchInput/searchInput.tokens";
import { getTextAreaTokens } from "../components/Inputs/TextArea/textarea.token";
import { getTextInputTokens } from "../components/Inputs/TextInput/textInput.tokens";
import { getTagTokens } from "../components/Tags/tag.tokens";
import { getRadioTokens } from "../components/Radio/radio.token";
import { getSwitchTokens } from "../components/Switch/switch.token";
import { getCheckboxTokens } from "../components/Checkbox/checkbox.token";
import { getTabsTokens } from "../components/Tabs/tabs.token";
import { getAccordionTokens } from "../components/Accordion/accordion.tokens";
import { ThemeType } from "../tokens";
import { ComponentTokenType } from "./ThemeContext";
import { getOTPInputTokens } from "../components/Inputs/OTPInput/otpInput.tokens";
import { getTooltipTokens } from "../components/Tooltip/tooltip.tokens";
import { getUnitInputTokens } from "../components/Inputs/UnitInput/unitInput.tokens";
import { getMultiValueInputTokens } from "../components/Inputs/MultiValueInput/multiValueInput.tokens";
import { getDropdownInputTokens } from "../components/Inputs/DropdownInput/dropdownInput.tokens";

const initTokens = (
  componentTokens: ComponentTokenType,
  foundationTokens: ThemeType
): Required<ComponentTokenType> => {
  return {
    TAGS: componentTokens.TAGS ?? getTagTokens(foundationTokens),
    SEARCH_INPUT:
      componentTokens.SEARCH_INPUT ?? getSearchInputTokens(foundationTokens),
    TEXT_AREA: componentTokens.TEXT_AREA ?? getTextAreaTokens(foundationTokens),
    RADIO: componentTokens.RADIO ?? getRadioTokens(foundationTokens),
    SWITCH: componentTokens.SWITCH ?? getSwitchTokens(foundationTokens),
    TEXT_INPUT:
      componentTokens.TEXT_INPUT ?? getTextInputTokens(foundationTokens),
    NUMBER_INPUT:
      componentTokens.NUMBER_INPUT ?? getNumberInputTokens(foundationTokens),
    ALERT: componentTokens.ALERT ?? getAlertTokens(foundationTokens),
    OTP_INPUT: componentTokens.OTP_INPUT ?? getOTPInputTokens(foundationTokens),
    TOOLTIP: componentTokens.TOOLTIP ?? getTooltipTokens(foundationTokens),
    UNIT_INPUT:
      componentTokens.UNIT_INPUT ?? getUnitInputTokens(foundationTokens),
    MULTI_VALUE_INPUT:
      componentTokens.MULTI_VALUE_INPUT ??
      getMultiValueInputTokens(foundationTokens),
    DROPDOWN_INPUT:
      componentTokens.DROPDOWN_INPUT ??
      getDropdownInputTokens(foundationTokens),
    CHECKBOX: componentTokens.CHECKBOX ?? getCheckboxTokens(foundationTokens),
    TABS: componentTokens.TABS ?? getTabsTokens(foundationTokens),
    ACCORDION: componentTokens.ACCORDION ?? getAccordionTokens(foundationTokens),
    // add supprort for other components here
  };
};

export default initTokens;
