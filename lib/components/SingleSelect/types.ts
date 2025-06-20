import { SelectMenuAlignment, SelectMenuSide } from "../Select";

import {
  SelectMenuGroupType,
  SelectMenuSize,
  SelectMenuVariant,
} from "../Select";

/**
 * @description A component that allows users to select a single option from a dropdown list.
 * It typically displays the selected value and opens a menu of options when clicked.
 * @feature Selection of a single item from a list.
 * @feature Display of the currently selected value.
 * @feature Customizable appearance and behavior, inheriting options from Select/Menu components.
 * @feature Supports labels, sublabels, hint text, and placeholder.
 * @feature Optional search functionality within the dropdown.
 * @example
 * ```tsx
 * import { SingleSelect } from "./components/SingleSelect"; // Assuming path
 * import { SelectMenuGroupType, SelectMenuSize } from "./components/Select"; // Assuming path
 * import { useState } from "react";
 *
 * const countryOptions: SelectMenuGroupType[] = [
 *   {
 *     items: [
 *       { label: "United States", value: "US" },
 *       { label: "Canada", value: "CA" },
 *       { label: "Mexico", value: "MX" },
 *     ],
 *   },
 * ];
 *
 * function MyCountrySelector() {
 *   const [selectedCountry, setSelectedCountry] = useState<string>("US");
 *
 *   return (
 *     <SingleSelect
 *       label="Country"
 *       selected={selectedCountry}
 *       onSelect={setSelectedCountry}
 *       items={countryOptions}
 *       placeholder="Select a country"
 *       size={SelectMenuSize.MEDIUM}
 *     />
 *   );
 * }
 * ```
 */
export type SingleSelectProps = {
  /**
   * @propCategory Required
   * @description The main label for the single-select field.
   */
  label: string;
  /**
   * @propCategory Content
   * @description An optional sublabel displayed below the main label.
   */
  subLabel?: string;
  /**
   * @propCategory Content
   * @description A hint text displayed below the single-select field.
   */
  hintText?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the single-select field as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed next to the label. (Note: prop name might be `helpIconHintText` based on other inputs)
   */
  helpIconText?: string; // Consider standardizing to helpIconHintText if applicable
  /**
   * @propCategory Required
   * @description Placeholder text displayed in the input area when no item is selected.
   */
  placeholder: string;
  /**
   * @propCategory Appearance
   * @description The size of the single-select input area, inherited from `SelectMenuSize`.
   */
  size?: SelectMenuSize;
  /**
   * @propCategory Required
   * @description An array of `SelectMenuGroupType` objects defining the items and groups available for selection in the dropdown.
   */
  items: SelectMenuGroupType[];
  /**
   * @propCategory Appearance
   * @description The visual variant of the dropdown menu, inherited from `SelectMenuVariant`.
   */
  variant?: SelectMenuVariant;
  /**
   * @propCategory Required
   * @description The `value` of the currently selected item.
   */
  selected: string;
  /**
   * @propCategory Required
   * @description Callback function invoked when an item is selected.
   * @param value The `value` of the newly selected item.
   */
  onSelect: (value: string) => void;
  /**
   * @propCategory Behavior
   * @description If true, enables a search input within the dropdown to filter items.
   * @default false
   */
  enableSearch?: boolean;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered, typically as an icon or element inside the input area.
   */
  slot?: React.ReactNode;
  /**
   * @propCategory State
   * @description If true, disables the single-select field.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input field (if applicable, often hidden).
   */
  name?: string;
  // alignment
  /**
   * @propCategory Appearance
   * @description Alignment of the dropdown menu relative to the input, inherited from `SelectMenuAlignment`.
   */
  alignment?: SelectMenuAlignment;
  /**
   * @propCategory Appearance
   * @description Preferred side for the dropdown menu to open, inherited from `SelectMenuSide`.
   */
  side?: SelectMenuSide;
  /**
   * @propCategory Appearance
   * @description Offset of the dropdown menu from the trigger along the chosen side.
   */
  sideOffset?: number;
  /**
   * @propCategory Appearance
   * @description Offset of the dropdown menu from the trigger along the alignment axis.
   */
  alignOffset?: number;

  // dim
  /**
   * @propCategory Appearance
   * @description Minimum width of the dropdown menu.
   */
  minWidth?: number;
  /**
   * @propCategory Appearance
   * @description Maximum width of the dropdown menu.
   */
  maxWidth?: number;
  /**
   * @propCategory Appearance
   * @description Maximum height of the dropdown menu before scrolling is enabled.
   */
  maxHeight?: number;
};
