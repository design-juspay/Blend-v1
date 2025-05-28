import SelectMenu from "./SelectMenu";
import React, { useState } from "react";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import { ChevronDownIcon, HelpCircleIcon, X } from "lucide-react";
import {
  dummyMenuItems,
  SelectMenuGroupType,
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
}: SelectProps) => {
  const [selected, setSelected] = useState<string>("");

  React.useEffect(() => {
    console.log(selected, "selected");
  }, [selected]);
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
          onSelect={setSelected}
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
                backgroundColor: FOUNDATION_THEME.colors.gray[50],
                border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
              }}
              _active={{
                backgroundColor: FOUNDATION_THEME.colors.gray[50],
                border: `1px solid ${FOUNDATION_THEME.colors.gray[400]} !important`,
              }}
            >
              {/* <PrimitiveButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                flexGrow={1}
                paddingX={selectTokens.trigger.selectedValue.padding[size].x}
                paddingY={selectTokens.trigger.selectedValue.padding[size].y}
                backgroundColor={FOUNDATION_THEME.colors.gray[0]}
              > */}
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
                {selected || placeholder}
              </Text>

              <Block size={20} contentCentered borderRadius={4}>
                <ChevronDownIcon
                  size={16}
                  color={FOUNDATION_THEME.colors.gray[400]}
                />
              </Block>
            </PrimitiveButton>
            // </PrimitiveButton>
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
