import SelectMenu from "./SelectMenu";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import { ChevronDownIcon, HelpCircleIcon, X } from "lucide-react";
import {
  dummyMenuItems,
  SelectMenuGroupType,
  SelectMenuItemType,
  SelectMenuSize,
  SelectMenuVariant,
} from "./types";
import Text, { VariantType } from "../Text/Text";
import selectTokens from "./select.token";
import { Tooltip, TooltipSize } from "../Tooltip";

type SelectProps = {
  label: string;
  subLabel?: string;
  hintText?: string;
  required?: boolean;
  helpIconText?: string;
  placeholder?: string;
  size?: SelectMenuSize;
  items?: SelectMenuGroupType[];
  variant?: SelectMenuVariant;
  selected: string | string[];
  onSelectChange: (value: string | string[]) => void;
  allowMultiSelect?: boolean;
};

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

const Select = ({
  items = dummyMenuItems,
  variant = SelectMenuVariant.CONTAINER,
  label = "Your favorite color",
  subLabel = "Select an option",
  hintText = "Hint text",
  required = true,
  helpIconText = "Help icon text",
  placeholder = "Select an option",
  size = SelectMenuSize.LARGE,
  selected,
  onSelectChange,
  allowMultiSelect = false,
}: SelectProps) => {


  const valueLabelMap = map(items);

  const getLabelsForSelectedValues = (values: string[]) => {
    return values.map((val) => valueLabelMap[val] || val);
  };

  return (
    <Block display="flex" flexDirection="column" gap={8} width="100%">
      <Block display="flex" width={"100%"} alignItems="center" gap={8}>
        <Text
          as="span"
          color={selectTokens.trigger.label.color}
          fontWeight={selectTokens.trigger.label.fontWeight}
          fontSize={selectTokens.trigger.label.fontSize}
        >
          {label}
        </Text>
        {required && (
          <sup style={{ color: FOUNDATION_THEME.colors.red[500] }}>*</sup>
        )}

        {helpIconText && (
          <Tooltip content={helpIconText} size={TooltipSize.SMALL}>
            <HelpCircleIcon
              size={14}
              color={FOUNDATION_THEME.colors.gray[400]}
            />
          </Tooltip>
        )}
      </Block>
      <Block display="flex" width={"100%"}>
        <SelectMenu
          items={items}
          selected={selected}
          onSelect={onSelectChange}
          allowMultiSelect={allowMultiSelect}
          trigger={
            <PrimitiveButton
              display="flex"
              width="100%"
              flexGrow={1}
              alignItems="center"
              overflow="hidden"
              borderRadius={8}
              boxShadow={FOUNDATION_THEME.shadows.xs}
              justifyContent="space-between"
              paddingX={selectTokens.trigger.selectedValue.padding[size].x}
              paddingY={selectTokens.trigger.selectedValue.padding[size].y}
              backgroundColor={FOUNDATION_THEME.colors.gray[0]}
              border={`1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`}
              _hover={{
                backgroundColor: FOUNDATION_THEME.colors.gray[50],
              }}
              _focus={{
                border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
              }}
              _active={{
                backgroundColor: FOUNDATION_THEME.colors.gray[50],
                border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
              }}
            >
              <Text
                as="span"
                variant={
                  selectTokens.trigger.selectedValue.font.size[
                    size
                  ] as VariantType
                }
                color={selectTokens.trigger.selectedValue.color}
                truncate
              >
                {allowMultiSelect
                  ? Array.isArray(selected) && selected.length > 0
                    ? getLabelsForSelectedValues(selected).join(", ")
                    : placeholder
                  : valueLabelMap[selected as string] || placeholder}
              </Text>

              <Block size={20} contentCentered borderRadius={4}>
                <ChevronDownIcon
                  size={16}
                  color={FOUNDATION_THEME.colors.gray[400]}
                />
              </Block>
            </PrimitiveButton>
          }
        />
      </Block>

      {hintText && (
        <Text variant="body.md" color={FOUNDATION_THEME.colors.gray[400]}>
          {hintText}
        </Text>
      )}
    </Block>
  );
};

export default Select;
