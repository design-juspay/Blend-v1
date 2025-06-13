import { useEffect, useRef, useState } from "react";
import Block from "../../Primitives/Block/Block";
import InputLabels from "../utils/InputLabels/InputLabels";
import InputFooter from "../utils/InputFooter/InputFooter";
import PrimitiveInput from "../../Primitives/PrimitiveInput/PrimitiveInput";
import textInputTokens from "../TextInput/textInput.tokens";
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

  // @TODO: Reconsider the type of unitTokens in FOUNDATION_THEME
  const paddingX = textInputTokens.input.padding.x[size];
  const paddingY = textInputTokens.input.padding.y[size];
  const GAP = textInputTokens.input.gap;

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
          borderRadius={textInputTokens.input.border.radius}
          boxShadow={FOUNDATION_THEME.shadows.sm}
          border={
            error
              ? `1px solid ${textInputTokens.input.border.color.error}`
              : `1px solid ${textInputTokens.input.border.color.default}`
          }
          outline="none"
          width={"100%"}
          _hover={{
            border: `1px solid ${textInputTokens.input.border.color.hover}`,
          }}
          color={
            disabled
              ? textInputTokens.input.color.disabled
              : textInputTokens.input.color.default
          }
          // @TODO: Confirm use case in v1
          // _focusVisible={{
          //   border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
          //   outline: "none !important",
          // }}
          _focus={{
            border: `1px solid ${textInputTokens.input.border.color.focus} !important`,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: textInputTokens.input.backgroundColor.disabled,
            border: `1px solid ${textInputTokens.input.border.color.disabled}`,
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
