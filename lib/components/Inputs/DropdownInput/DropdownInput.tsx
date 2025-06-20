import { useEffect, useRef, useState } from "react";
import Block from "../../Primitives/Block/Block";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import { TextInputSize } from "../TextInput/types";
import { FOUNDATION_THEME } from "../../../tokens";
import { ChevronDown } from "lucide-react";
import SelectMenu from "../../Select/SelectMenu";
import {
  SelectMenuAlignment,
  SelectMenuGroupType,
  SelectMenuItemType,
} from "../../Select/types";
import PrimitiveButton from "../../Primitives/PrimitiveButton/PrimitiveButton";
import Text from "../../Text/Text";
import { DropdownInputProps } from "./types";
import { DropdownInputTokensType } from "./dropdownInput.tokens";
import { useComponentToken } from "../../../context/useComponentToken";

const map = function getValueLabelMap(
  groups: SelectMenuGroupType[]
): Record<string, string> {
  const map: Record<string, string> = {};

  function traverse(items: SelectMenuItemType[]) {
    for (const item of items) {
      map[item.value] = item.label;
      if (item.subMenu) {
        traverse(item.subMenu);
      }
    }
  }

  for (const group of groups) {
    traverse(group.items);
  }

  return map;
};

const toPixels = (value: string | number | undefined): number => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    // Remove 'px' and convert to number
    const numericValue = parseFloat(value.replace("px", ""));
    return isNaN(numericValue) ? 0 : numericValue;
  }

  return 0;
};

/**
 * @description A component that combines a text input field with a dropdown selector.
 * Users can type into the input or select an option from the associated dropdown menu.
 * This is useful for scenarios like selecting a unit or category alongside a numerical input.
 * The props for this component are defined in `DropdownInputProps` in `./types.ts`.
 * @feature Combines text input with a dropdown menu.
 * @feature Supports labels, sublabels, hint text, and error messages.
 * @feature Customizable size and placeholder for the text input.
 * @feature Dropdown items can be grouped.
 * @example
 * ```tsx
 * import { DropdownInput } from "./components/Inputs/DropdownInput"; // Assuming path
 * import { SelectMenuGroupType } from "./components/Select/types"; // Assuming path
 * import { useState } from "react";
 *
 * const unitItems: SelectMenuGroupType[] = [
 *   {
 *     items: [
 *       { label: "Kilograms", value: "kg" },
 *       { label: "Grams", value: "g" },
 *       { label: "Pounds", value: "lb" },
 *     ]
 *   }
 * ];
 *
 * function WeightInput() {
 *   const [textValue, setTextValue] = useState("");
 *   const [dropdownValue, setDropdownValue] = useState("kg");
 *
 *   return (
 *     <DropdownInput
 *       label="Weight"
 *       value={textValue}
 *       onChange={(e) => setTextValue(e.target.value)}
 *       placeholder="Enter weight"
 *       dropDownValue={dropdownValue}
 *       onDropDownChange={setDropdownValue}
 *       dropDownItems={unitItems}
 *       size="md"
 *     />
 *   );
 * }
 * ```
 */
const DropdownInput = ({
  label,
  sublabel,
  disabled,
  helpIconHintText,
  name,
  required,
  error,
  errorMessage,
  hintText,
  value,
  onChange,
  slot,
  size = TextInputSize.MEDIUM,
  placeholder,
  dropDownValue,
  onDropDownChange,
  dropDownItems,
}: DropdownInputProps) => {
  const dropdownInputTokens = useComponentToken(
    "DROPDOWN_INPUT"
  ) as DropdownInputTokensType;
  const slotRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const valueLabelMap = map(dropDownItems);

  const [slotWidth, setSlotWidth] = useState<number>(0);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  useEffect(() => {
    if (slotRef.current) {
      setSlotWidth(slotRef.current.offsetWidth);
    } else {
      setSlotWidth(0);
    }

    if (dropdownRef.current) {
      setDropdownWidth(dropdownRef.current.offsetWidth);
    } else {
      setDropdownWidth(0);
    }
  }, [slot, dropDownValue]);

  const paddingX = toPixels(dropdownInputTokens.input.paddingX[size]);
  const paddingY = toPixels(dropdownInputTokens.input.paddingY[size]);
  const GAP = toPixels(dropdownInputTokens.input.gap);

  const paddingInlineStart = paddingX + (slotWidth ? slotWidth + GAP : 0);
  const paddingInlineEnd =
    paddingX + (dropdownWidth ? dropdownWidth + 2 * GAP : 0);

  return (
    <Block display="flex" flexDirection="column" gap={8} width={"100%"}>
      <InputLabels
        label={label}
        sublabel={sublabel}
        disabled={disabled}
        helpIconHintText={helpIconHintText}
        name={name}
        required={required}
      />
      <Block position="relative" width={"100%"}>
        {slot && (
          <Block
            ref={slotRef}
            position="absolute"
            top={paddingY}
            left={paddingX}
            bottom={paddingY}
            contentCentered
          >
            {slot}
          </Block>
        )}
        <PrimitiveInput
          required={required}
          value={value}
          type="text"
          name={name}
          onChange={onChange}
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          placeholder={placeholder}
          borderRadius={dropdownInputTokens.input.borderRadius}
          boxShadow={dropdownInputTokens.input.boxShadow}
          border={
            error
              ? dropdownInputTokens.input.border.error
              : dropdownInputTokens.input.border.default
          }
          outline="none"
          width={"100%"}
          _hover={{
            border: dropdownInputTokens.input.border.hover,
          }}
          color={
            disabled
              ? dropdownInputTokens.input.color.disabled
              : dropdownInputTokens.input.color.default
          }
          _focus={{
            border: dropdownInputTokens.input.border.focus,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: dropdownInputTokens.input.backgroundColor.disabled,
            border: dropdownInputTokens.input.border.disabled,
            cursor: "not-allowed",
          }}
        />
        <Block
          ref={dropdownRef}
          position="absolute"
          right={14}
          top={paddingX}
          bottom={paddingX}
          width={"fit-content"}
          contentCentered
        >
          <SelectMenu
            items={dropDownItems}
            enableSearch={false}
            alignment={SelectMenuAlignment.END}
            alignOffset={-(paddingX + 2)}
            sideOffset={paddingX}
            selected={dropDownValue}
            onSelect={(value) =>
              onDropDownChange?.(Array.isArray(value) ? value[0] : value)
            }
            trigger={
              <PrimitiveButton
                disabled={disabled}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={4}
                backgroundColor={"transparent"}
              >
                {dropDownValue ? (
                  <Text
                    variant="body.md"
                    fontWeight={500}
                    color={FOUNDATION_THEME.colors.gray[700]}
                  >
                    {valueLabelMap[dropDownValue as string]}
                  </Text>
                ) : (
                  <Text
                    variant="body.md"
                    fontWeight={500}
                    color={FOUNDATION_THEME.colors.gray[600]}
                  >
                    {placeholder}
                  </Text>
                )}
                <ChevronDown
                  size={12}
                  color={FOUNDATION_THEME.colors.gray[500]}
                />
              </PrimitiveButton>
            }
          ></SelectMenu>
        </Block>
      </Block>
      <InputFooter
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        disabled={disabled}
      />
    </Block>
  );
};

export default DropdownInput;
