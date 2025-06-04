import { useState } from "react";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import Block from "../Primitives/Block/Block";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import {
  SelectMenuAlignment,
  SelectMenuGroupType,
  SelectMenuItemType,
  SelectMenuSide,
  SelectMenuSize,
  SelectMenuVariant,
} from "../Select";
import { SelectionTagType } from "../Select/Select";
import Text from "../Text/Text";
import SingleSelectMenu from "./SingleSelectMenu";
import { dummyMenuItems } from "../../../src/demos/Menu/MenuDemo";
import { FOUNDATION_THEME } from "../../tokens";
import selectTokens from "../Select/select.token";
import { ChevronDown } from "lucide-react";

type SingleSelectProps = {
  label: string;
  subLabel?: string;
  hintText?: string;
  required?: boolean;
  helpIconText?: string;
  placeholder: string;
  size?: SelectMenuSize;
  items: SelectMenuGroupType[];
  variant?: SelectMenuVariant;
  selected: string;
  onSelect: (value: string) => void;
  enableSearch?: boolean;
  selectionTagType?: SelectionTagType;
  slot?: React.ReactNode;
  disabled?: boolean;
  name?: string;
  // alignment
  alignment?: SelectMenuAlignment;
  side?: SelectMenuSide;
  sideOffset?: number;
  alignOffset?: number;

  // dim
  minWidth?: number;
  maxWidth?: number;
  maxHeight?: number;
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

const SingleSelect = ({
  label,
  subLabel,
  hintText,
  required,
  helpIconText,
  placeholder,
  size = SelectMenuSize.MEDIUM,
  items = dummyMenuItems,
  name,
  variant = SelectMenuVariant.CONTAINER,
  disabled,
  selected,
  onSelect,
  enableSearch,
  selectionTagType,
  slot,
  alignment,
  side,
  sideOffset,
  alignOffset,
  minWidth,
  maxWidth,
  maxHeight,
}: SingleSelectProps) => {
  const [open, setOpen] = useState(false);
  const valueLabelMap = map(items);
  return (
    <Block
      width="100%"
      display="flex"
      flexDirection="column"
      gap={8}
      maxWidth={"100%"}
    >
      {variant === SelectMenuVariant.CONTAINER && (
        <InputLabels
          label={label}
          sublabel={subLabel}
          disabled={disabled}
          helpIconHintText={helpIconText}
          name={name}
          required={required}
        />
      )}
      <Block
        width={variant === SelectMenuVariant.CONTAINER ? "100%" : "auto"}
        maxWidth={variant === SelectMenuVariant.NO_CONTAINER ? "100%" : "auto"}
        display="flex"
        alignItems="center"
      >
        <SingleSelectMenu
          open={open}
          onOpenChange={setOpen}
          items={items}
          selected={selected}
          onSelect={onSelect}
          minWidth={minWidth}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          alignment={alignment}
          side={side}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          enableSearch={enableSearch}
          trigger={
            <PrimitiveButton
              display="flex"
              width={"100%"}
              alignItems="center"
              overflow="hidden"
              borderRadius={8}
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
              gap={8}
            >
              {slot && <Block contentCentered>{slot}</Block>}
              <Text
                variant="body.md"
                color={
                  selected
                    ? FOUNDATION_THEME.colors.gray[700]
                    : FOUNDATION_THEME.colors.gray[600]
                }
                fontWeight={500}
              >
                {selected ? valueLabelMap[selected] : placeholder}
              </Text>
              <Block contentCentered>
                <ChevronDown
                  size={16}
                  color={FOUNDATION_THEME.colors.gray[500]}
                />
              </Block>
            </PrimitiveButton>
          }
        />
      </Block>
      {variant === SelectMenuVariant.CONTAINER && (
        <InputFooter hintText={hintText} />
      )}
    </Block>
  );
};

export default SingleSelect;
