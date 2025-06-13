import { AlertTokenType } from "../components/Alert/alert.tokens";
import { NumberInputTokensType } from "../components/Inputs/NumberInput/numberInput.tokens";
import { SearchInputTokensType } from "../components/Inputs/SearchInput/searchInput.tokens";
import { TextAreaTokensType } from "../components/Inputs/TextArea/textarea.token";
import { TextInputTokensType } from "../components/Inputs/TextInput/textInput.tokens";
import { TagTokensType } from "../components/Tags/tag.tokens";
import { RadioTokensType } from "../components/Radio/radio.token";
import { ComponentTokenType, useTheme } from "./ThemeContext";
import { OTPInputTokensType } from "../components/Inputs/OTPInput/otpInput.tokens";
import { TooltipTokensType } from "../components/Tooltip/tooltip.tokens";
import { UnitInputTokensType } from "../components/Inputs/UnitInput/unitInput.tokens";
import { MultiValueInputTokensType } from "../components/Inputs/MultiValueInput/multiValueInput.tokens";

// DONT CHANGE TYPES FOR NOW, SIMPLY KEEP ADDING
// TYPES FOR RETURNS
// WE WILL ADAPT TO BETTER TYPES LATER
export const useComponentToken = (
  component: keyof ComponentTokenType
):
  | SearchInputTokensType
  | TagTokensType
  | TextAreaTokensType
  | TextInputTokensType
  | NumberInputTokensType
  | AlertTokenType
  | RadioTokensType
  | OTPInputTokensType
  | TooltipTokensType
  | UnitInputTokensType
  | MultiValueInputTokensType => {
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
    case "TEXT_INPUT":
      return componentTokens.TEXT_INPUT;
    case "NUMBER_INPUT":
      return componentTokens.NUMBER_INPUT;
    case "ALERT":
      return componentTokens.ALERT;
    case "OTP_INPUT":
      return componentTokens.OTP_INPUT;
    case "TOOLTIP":
      return componentTokens.TOOLTIP;
    case "UNIT_INPUT":
      return componentTokens.UNIT_INPUT;
    case "MULTI_VALUE_INPUT":
      return componentTokens.MULTI_VALUE_INPUT;
  }
};
