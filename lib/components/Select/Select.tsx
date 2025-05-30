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
import React from "react";

export enum SelectionTagType {
  COUNT = "count",
  TEXT = "text",
}

type SelectProps = {
  label: string;
  subLabel?: string;
  hintText?: string;
  required?: boolean;
  helpIconText?: string;
  placeholder: string;
  size?: SelectMenuSize;
  items?: SelectMenuGroupType[];
  variant?: SelectMenuVariant;
  selected: string | string[];
  onSelectChange: (value: string | string[]) => void;
  allowMultiSelect?: boolean;
  enableSearch?: boolean;
  selectionTagType?: SelectionTagType;
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
  enableSearch = false,
  selectionTagType = SelectionTagType.COUNT,
}: SelectProps) => {
  const valueLabelMap = map(items);

  const getLabelsForSelectedValues = (values: string[]) => {
    return values.map((val) => valueLabelMap[val] || val);
  };

  const showCancelButton =
    variant === SelectMenuVariant.CONTAINER &&
    allowMultiSelect &&
    selected.length > 0;

  return (
    <Block display="flex" flexDirection="column" gap={8} width="100%">
      <Block display="flex" width={"100%"} alignItems="center" gap={8}>
        {variant === SelectMenuVariant.CONTAINER && (
          <Text
            as="span"
            color={selectTokens.trigger.label.color}
            fontWeight={selectTokens.trigger.label.fontWeight}
            fontSize={selectTokens.trigger.label.fontSize}
          >
            {label}
          </Text>
        )}
        {variant === SelectMenuVariant.CONTAINER && required && (
          <sup style={{ color: FOUNDATION_THEME.colors.red[500] }}>*</sup>
        )}

        {variant === SelectMenuVariant.CONTAINER && helpIconText && (
          <Tooltip content={helpIconText} size={TooltipSize.SMALL}>
            <HelpCircleIcon
              size={14}
              color={FOUNDATION_THEME.colors.gray[400]}
            />
          </Tooltip>
        )}
      </Block>
      <Block display="flex" width={"100%"}>
        <Block width="100%" display="flex" alignItems="center">
          <SelectMenu
            placeholder={placeholder}
            enableSearch={enableSearch}
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
                borderRadius={`8px ${showCancelButton ? 0 : 8}px ${
                  showCancelButton ? 0 : 8
                }px 8px`}
                boxShadow={
                  variant === SelectMenuVariant.CONTAINER
                    ? FOUNDATION_THEME.shadows.xs
                    : undefined
                }
                justifyContent="space-between"
                paddingX={selectTokens.trigger.selectedValue.padding[size].x}
                paddingY={selectTokens.trigger.selectedValue.padding[size].y}
                backgroundColor={FOUNDATION_THEME.colors.gray[0]}
                outline={
                  variant === SelectMenuVariant.CONTAINER
                    ? `1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`
                    : undefined
                }
                _hover={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[50],
                }}
                _focus={{
                  outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                }}
                _active={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[50],
                  outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                }}
              >
                {allowMultiSelect === false && (
                  <Block as="span">
                    {selected ? (
                      <Text
                        variant="body.md"
                        fontWeight={500}
                        color={FOUNDATION_THEME.colors.gray[700]}
                      >
                        {valueLabelMap[selected as string]}
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
                  </Block>
                )}
                {allowMultiSelect && (
                  <Text
                    variant={
                      selectTokens.trigger.selectedValue.font.size[
                        size
                      ] as VariantType
                    }
                    color={selectTokens.trigger.selectedValue.color}
                    truncate
                    style={{
                      display: "flex",
                      gap: 4,
                    }}
                  >
                    <Text
                      as="span"
                      variant={
                        selectTokens.trigger.selectedValue.font.size[
                          size
                        ] as VariantType
                      }
                      fontWeight={500}
                      color={FOUNDATION_THEME.colors.gray[700]}
                    >
                      {placeholder}
                    </Text>
                    {selected.length && (
                      <React.Fragment>
                        {selectionTagType === SelectionTagType.TEXT ? (
                          <Text
                            truncate
                            as="span"
                            color={FOUNDATION_THEME.colors.gray[400]}
                          >
                            {getLabelsForSelectedValues(
                              selected as string[]
                            ).join(", ")}
                          </Text>
                        ) : (
                          <Block
                            as="span"
                            backgroundColor={
                              FOUNDATION_THEME.colors.primary[600]
                            }
                            color={FOUNDATION_THEME.colors.gray[0]}
                            borderRadius={4}
                            paddingX={4}
                            fontSize={12}
                            contentCentered
                          >
                            {selected.length}
                          </Block>
                        )}
                      </React.Fragment>
                    )}
                  </Text>
                )}
                <Block size={20} contentCentered>
                  <ChevronDownIcon
                    size={16}
                    color={FOUNDATION_THEME.colors.gray[400]}
                  />
                </Block>
              </PrimitiveButton>
            }
          />
          {allowMultiSelect && selected.length > 0 && (
            <PrimitiveButton
              borderRadius={`0 8px 8px 0`}
              backgroundColor={FOUNDATION_THEME.colors.gray[0]}
              _hover={{
                backgroundColor: FOUNDATION_THEME.colors.gray[25],
              }}
              _focus={{
                backgroundColor: FOUNDATION_THEME.colors.gray[25],
                outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
              }}
              contentCentered
              height={"100%"}
              style={{ aspectRatio: 1 }}
              onClick={() => onSelectChange([])}
              outline={`1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`}
            >
              <X size={16} color={FOUNDATION_THEME.colors.gray[400]} />
            </PrimitiveButton>
          )}
        </Block>
      </Block>

      {variant === SelectMenuVariant.CONTAINER && hintText && (
        <Text variant="body.md" color={FOUNDATION_THEME.colors.gray[400]}>
          {hintText}
        </Text>
      )}
    </Block>
  );
};

// type TriggerProps = {
//   size?: SelectMenuSize;
//   allowMultiSelect?: boolean;
//   selected: string | string[];
//   onSelectChange: (value: string | string[]) => void;
//   placeholder: string;
//   valueLabelMap: Record<string, string>;
//   getLabelsForSelectedValues: (values: string[]) => string[];
// };

// const Trigger = ({
//   size = SelectMenuSize.LARGE,
//   allowMultiSelect = false,
//   selected,
//   onSelectChange,
//   placeholder,
//   valueLabelMap,
//   getLabelsForSelectedValues,
// }: TriggerProps) => {
//   return (
//     <PrimitiveButton
//       display="flex"
//       width="100%"
//       flexGrow={1}
//       alignItems="center"
//       overflow="hidden"
//       borderRadius={8}
//       boxShadow={FOUNDATION_THEME.shadows.xs}
//       justifyContent="space-between"
//       paddingX={selectTokens.trigger.selectedValue.padding[size].x}
//       paddingY={selectTokens.trigger.selectedValue.padding[size].y}
//       backgroundColor={FOUNDATION_THEME.colors.gray[0]}
//       border={`1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`}
//       _hover={{
//         backgroundColor: FOUNDATION_THEME.colors.gray[50],
//       }}
//       _focus={{
//         border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
//       }}
//       _active={{
//         backgroundColor: FOUNDATION_THEME.colors.gray[50],
//         border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
//       }}
//     >
//       <Text
//         as="span"
//         variant={
//           selectTokens.trigger.selectedValue.font.size[size] as VariantType
//         }
//         color={selectTokens.trigger.selectedValue.color}
//         truncate
//       >
//         {allowMultiSelect
//           ? Array.isArray(selected) && selected.length > 0
//             ? getLabelsForSelectedValues(selected).join(", ")
//             : placeholder
//           : valueLabelMap[selected as string] || placeholder}
//       </Text>

//       <Block size={20} contentCentered borderRadius={4}>
//         <ChevronDownIcon size={16} color={FOUNDATION_THEME.colors.gray[400]} />
//       </Block>
//     </PrimitiveButton>
//   );
// };

export default Select;
