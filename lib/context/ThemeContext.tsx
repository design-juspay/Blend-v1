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
import {
  getOTPInputTokens,
  OTPInputTokensType,
} from "../components/Inputs/OTPInput/otpInput.tokens";
import {
  getTooltipTokens,
  TooltipTokensType,
} from "../components/Tooltip/tooltip.tokens";
import {
  getUnitInputTokens,
  UnitInputTokensType,
} from "../components/Inputs/UnitInput/unitInput.tokens";
import { getMultiValueInputTokens, MultiValueInputTokensType } from "../components/Inputs/MultiValueInput/multiValueInput.tokens";
import {
  DropdownInputTokensType,
  getDropdownInputTokens,
} from "../components/Inputs/DropdownInput/dropdownInput.tokens";
import { CheckboxTokensType, getCheckboxTokens } from "../components/Checkbox/checkbox.token";
import { TabsTokensType, getTabsTokens } from "../components/Tabs/tabs.token"; // Added TABS
import { getBreadcrumbTokens, BreadcrumbTokensType } from "../components/Breadcrumb/breadcrumb.token"; // Renamed import path
import { getAvatarTokens, AvatarTokensType } from "../components/Avatar/avatar.token"; // Added AVATAR
import { getAvatarGroupTokens, AvatarGroupTokensType } from "../components/AvatarGroup/avatarGroup.token"; // Added AVATAR_GROUP

export type ComponentTokenType = {
  TAGS?: TagTokensType;
  SEARCH_INPUT?: SearchInputTokensType;
  TEXT_AREA?: TextAreaTokensType;
  RADIO?: RadioTokensType;
  SWITCH?: SwitchTokensType;
  TEXT_INPUT?: TextInputTokensType;
  NUMBER_INPUT?: NumberInputTokensType;
  ALERT?: AlertTokenType;
  OTP_INPUT?: OTPInputTokensType;
  TOOLTIP?: TooltipTokensType;
  UNIT_INPUT?: UnitInputTokensType;
  MULTI_VALUE_INPUT?: MultiValueInputTokensType;
  DROPDOWN_INPUT?: DropdownInputTokensType;
  CHECKBOX?: CheckboxTokensType;
  TABS?: TabsTokensType; // Added TABS
  BREADCRUMB?: BreadcrumbTokensType;
  AVATAR?: AvatarTokensType; // Added AVATAR
  AVATAR_GROUP?: AvatarGroupTokensType; // Added AVATAR_GROUP
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
    TEXT_INPUT: getTextInputTokens(FOUNDATION_THEME),
    NUMBER_INPUT: getNumberInputTokens(FOUNDATION_THEME),
    ALERT: getAlertTokens(FOUNDATION_THEME),
    OTP_INPUT: getOTPInputTokens(FOUNDATION_THEME),
    TOOLTIP: getTooltipTokens(FOUNDATION_THEME),
    UNIT_INPUT: getUnitInputTokens(FOUNDATION_THEME),
    MULTI_VALUE_INPUT: getMultiValueInputTokens(FOUNDATION_THEME),
    DROPDOWN_INPUT: getDropdownInputTokens(FOUNDATION_THEME),
    CHECKBOX: getCheckboxTokens(FOUNDATION_THEME),
    TABS: getTabsTokens(FOUNDATION_THEME), // Added TABS
    BREADCRUMB: getBreadcrumbTokens(FOUNDATION_THEME),
    AVATAR: getAvatarTokens(FOUNDATION_THEME), // Added AVATAR
    AVATAR_GROUP: getAvatarGroupTokens(FOUNDATION_THEME), // Added AVATAR_GROUP
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
