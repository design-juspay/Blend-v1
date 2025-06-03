import React, { useState } from "react";
import Block from "../Primitives/Block/Block";
import {
  SelectMenuAlignment,
  SelectMenuGroupType,
  SelectMenuItemType,
  SelectMenuSide,
  SelectMenuSize,
  SelectMenuVariant,
} from "../Select";
import { dummyMenuItems } from "../../../src/demos/Menu/MenuDemo";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import { SelectionTagType } from "../Select/Select";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import MultiSelectMenu from "./MultiSelectMenu";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { FOUNDATION_THEME } from "../../tokens";
import Text from "../Text/Text";
import { ChevronDown, User, X } from "lucide-react";
import selectTokens from "../Select/select.token";

type MultiSelectProps = {
  selectedValues: string[];
  onChange: (selectedValue: string) => void;
  items: SelectMenuGroupType[];

  // labels
  label: string;
  sublabel?: string;
  disabled?: boolean;
  helpIconHintText?: string;
  name?: string;
  required?: boolean;
  variant?: SelectMenuVariant;
  selectionTagType?: SelectionTagType;
  slot?: React.ReactNode;
  hintText?: string;
  placeholder: string;
  size?: SelectMenuSize;

  // dim
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;

  // alignment
  alignment?: SelectMenuAlignment;
  side?: SelectMenuSide;
  sideOffset?: number;
  alignOffset?: number;
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

const MultiSelect = ({
  selectedValues,
  onChange,
  items = dummyMenuItems,
  label,
  sublabel,
  disabled,
  helpIconHintText,
  name,
  required,
  variant = SelectMenuVariant.CONTAINER,
  selectionTagType = SelectionTagType.COUNT,
  slot = <User size={13} />,
  hintText,
  placeholder,
  size = SelectMenuSize.MEDIUM,
  // dim
  minWidth,
  maxWidth,
  maxHeight,

  // alignment
  alignment,
  side,
  sideOffset,
  alignOffset,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const valueLabelMap = map(items);

  const showCancelButton =
    variant === SelectMenuVariant.CONTAINER && selectedValues.length > 0;

  return (
    <Block
      className="debug"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={8}
      maxWidth={"100%"}
    >
      {variant === SelectMenuVariant.CONTAINER && (
        <InputLabels
          label={label}
          sublabel={sublabel}
          disabled={disabled}
          helpIconHintText={helpIconHintText}
          name={name}
          required={required}
        />
      )}
      <Block display="flex">
        <Block
          width={
            variant === SelectMenuVariant.CONTAINER ? "100%" : "auto"
          }
          maxWidth={variant === SelectMenuVariant.NO_CONTAINER ? "100%" : "auto"}
          display="flex"
          alignItems="center"
        >
          <MultiSelectMenu
            items={items}
            selected={selectedValues}
            onSelect={onChange}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            alignment={alignment}
            side={side}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            open={open}
            onOpenChange={setOpen}
            trigger={
              <PrimitiveButton
                display="flex"
                width={"100%"}
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
                backgroundColor={
                  open
                    ? FOUNDATION_THEME.colors.gray[25]
                    : FOUNDATION_THEME.colors.gray[0]
                }
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
                // _active={{
                //   backgroundColor: FOUNDATION_THEME.colors.gray[50],
                //   outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                // }}
              >
                <Block as="span" display="flex" alignItems="center" gap={8}>
                  {slot && <Block contentCentered>{slot}</Block>}
                  <Block
                    as="span"
                    display="flex"
                    alignItems="center"
                    gap={4}
                    flexGrow={1}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    <Text
                      color={
                        selectedValues.length > 0
                          ? FOUNDATION_THEME.colors.gray[700]
                          : FOUNDATION_THEME.colors.gray[600]
                      }
                      variant="body.md"
                      style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                      fontWeight={500}
                    >
                      {selectedValues.length > 0
                        ? selectedValues.map((v) => valueLabelMap[v]).join(", ")
                        : placeholder}
                    </Text>
                  </Block>
                </Block>
                <Block
                  as="span"
                  display="flex"
                  alignItems="center"
                  gap={4}
                  size={20}
                >
                  <ChevronDown size={16} />
                </Block>
              </PrimitiveButton>
            }
          />
          {variant === SelectMenuVariant.CONTAINER &&
            selectedValues.length > 0 && (
              <PrimitiveButton
                borderRadius={`0 8px 8px 0`}
                backgroundColor={FOUNDATION_THEME.colors.gray[0]}
                contentCentered
                height={"100%"}
                style={{ aspectRatio: 1 }}
                onClick={() => onChange("")}
                outline={`1px solid ${FOUNDATION_THEME.colors.gray[200]} !important`}
                _hover={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[25],
                }}
                _focus={{
                  backgroundColor: FOUNDATION_THEME.colors.gray[25],
                  outline: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
                }}
              >
                <X size={16} color={FOUNDATION_THEME.colors.gray[400]} />
              </PrimitiveButton>
            )}
        </Block>
      </Block>
      {variant === SelectMenuVariant.CONTAINER && (
        <InputFooter hintText={hintText} />
      )}
    </Block>
  );
};

export default MultiSelect;
