import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import { MultiSelectMenuItemType } from "./types";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
import { Checkbox } from "../Checkbox";
import MultiSelectSubMenu from "./MultiSelectSubMenu";

const MenuItemSlot = ({ slot }: { slot: React.ReactNode }) => {
  return (
    <Block flexShrink={0} height="auto" contentCentered>
      {slot}
    </Block>
  );
};

const MultiSelectMenuItem = ({
  item,
  onSelect,
  selected,
}: {
  item: MultiSelectMenuItemType;
  onSelect: (value: string) => void;
  selected: string[];
}) => {
  if (item.subMenu) {
    return (
      <MultiSelectSubMenu item={item} onSelect={onSelect} selected={selected} />
    );
  }
  const handleClick = (e: React.MouseEvent) => {
    if (item.disabled) return;

    e.preventDefault();
    e.stopPropagation();
    onSelect(item.value);
  };

  const isSelected = selected.includes(item.value);
  return (
    <RadixMenu.Item asChild onClick={handleClick} data-disabled={item.disabled}>
      <Block
        margin="0px 6px"
        padding="8px 6px"
        display="flex"
        flexDirection="column"
        gap={4}
        borderRadius={4}
        outline="none"
        border="none"
        backgroundColor={
          isSelected ? FOUNDATION_THEME.colors.gray[50] : "transparent"
        }
        _hover={{
          backgroundColor: FOUNDATION_THEME.colors.gray[50],
        }}
        _active={{
          backgroundColor: FOUNDATION_THEME.colors.gray[100],
        }}
        cursor={item.disabled ? "not-allowed" : "pointer"}
      >
        <Block
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          maxWidth="100%"
          gap={8}
        >
          <Block as="div" display="flex" alignItems="center" gap={8}>
            {item.slot1 && <MenuItemSlot slot={item.slot1} />}
            <Block flexGrow={1} display="flex" overflow="hidden">
              <PrimitiveText
                fontSize={14}
                fontWeight={500}
                color={
                  isSelected
                    ? FOUNDATION_THEME.colors.gray[700]
                    : FOUNDATION_THEME.colors.gray[600]
                }
                truncate
              >
                {item.label}
              </PrimitiveText>
            </Block>
          </Block>
          <Block as="div" display="flex" alignItems="center" gap={4}>
            {item.slot2 && <MenuItemSlot slot={item.slot2} />}
            {item.slot3 && <MenuItemSlot slot={item.slot3} />}
            {item.slot4 && <MenuItemSlot slot={item.slot4} />}
            <Block as="span" display="flex" alignItems="center" flexShrink={0}>
              <Checkbox disabled={item.disabled} checked={isSelected} />
            </Block>
          </Block>
        </Block>
        {item.subLabel && (
          <Block>
            <PrimitiveText
              fontSize={12}
              color={FOUNDATION_THEME.colors.gray[400]}
            >
              {item.subLabel}
            </PrimitiveText>
          </Block>
        )}
      </Block>
    </RadixMenu.Item>
  );
};

MultiSelectMenuItem.displayName = "MultiSelectMenuItem";

export default MultiSelectMenuItem;
