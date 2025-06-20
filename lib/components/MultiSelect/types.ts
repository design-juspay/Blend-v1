import { SelectMenuAlignment, SelectMenuGroupType, SelectMenuSide, SelectMenuSize, SelectMenuVariant } from "../Select";
import { SelectionTagType } from "../Select/Select"; // Assuming this type defines how selected items are displayed (e.g., as tags)

/**
 * @description A component that allows users to select multiple options from a dropdown list.
 * Selected items are often displayed as tags within the input area.
 * @feature Selection of multiple items from a list.
 * @feature Display of selected items, often as tags.
 * @feature Customizable appearance and behavior, inheriting options from Select/Menu components.
 * @feature Supports labels, sublabels, hint text, and placeholder.
 * @example
 * ```tsx
 * import { MultiSelect } from "./components/MultiSelect"; // Assuming path
 * import { SelectMenuGroupType } from "./components/Select"; // Assuming path
 * import { useState } from "react";
 *
 * const options: SelectMenuGroupType[] = [
 *   {
 *     label: "Fruits",
 *     items: [
 *       { label: "Apple", value: "apple" },
 *       { label: "Banana", value: "banana" },
 *       { label: "Orange", value: "orange" },
 *     ],
 *   },
 *   {
 *     label: "Vegetables",
 *     items: [
 *       { label: "Carrot", value: "carrot" },
 *       { label: "Broccoli", value: "broccoli" },
 *     ],
 *   },
 * ];
 *
 * function MyMultiSelectForm() {
 *   const [selected, setSelected] = useState<string[]>(["apple", "carrot"]);
 *
 *   const handleChange = (value: string) => {
 *     setSelected(prev =>
 *       prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
 *     );
 *   };
 *
 *   return (
 *     <MultiSelect
 *       label="Select Produce"
 *       selectedValues={selected}
 *       onChange={handleChange}
 *       items={options}
 *       placeholder="Choose items..."
 *     />
 *   );
 * }
 * ```
 */
export type MultiSelectProps = {
  /**
   * @propCategory Required
   * @description An array of strings representing the values of the currently selected items.
   */
  selectedValues: string[];
  /**
   * @propCategory Required
   * @description Callback function invoked when an item is selected or deselected.
   * Receives the `value` of the item whose selection state changed.
   */
  onChange: (selectedValue: string) => void;
  /**
   * @propCategory Required
   * @description An array of `SelectMenuGroupType` objects defining the items and groups available for selection in the dropdown.
   */
  items: SelectMenuGroupType[];

  // labels
  /**
   * @propCategory Required
   * @description The main label for the multi-select field.
   */
  label: string;
  /**
   * @propCategory Content
   * @description An optional sublabel displayed below the main label.
   */
  sublabel?: string;
  /**
   * @propCategory State
   * @description If true, disables the multi-select field.
   * @default false
   */
  disabled?: boolean;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed next to the label.
   */
  helpIconHintText?: string;
  /**
   * @propCategory DOM Attributes
   * @description The name attribute for the input field (if applicable, often hidden).
   */
  name?: string;
  /**
   * @propCategory Validation
   * @description If true, marks the multi-select field as required.
   * @default false
   */
  required?: boolean;
  /**
   * @propCategory Appearance
   * @description The visual variant of the dropdown menu, inherited from `SelectMenuVariant`.
   */
  variant?: SelectMenuVariant;
  /**
   * @propCategory Appearance
   * @description Defines how selected items are displayed (e.g., as tags). Inherited from `SelectionTagType`.
   */
  selectionTagType?: SelectionTagType;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be rendered, typically as an icon or element inside the input area.
   */
  slot?: React.ReactNode;
  /**
   * @propCategory Content
   * @description A hint text displayed below the multi-select field.
   */
  hintText?: string;
  /**
   * @propCategory Required
   * @description Placeholder text displayed in the input area when no items are selected.
   */
  placeholder: string;
  /**
   * @propCategory Appearance
   * @description The size of the multi-select input area, inherited from `SelectMenuSize`.
   */
  size?: SelectMenuSize;

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
};
