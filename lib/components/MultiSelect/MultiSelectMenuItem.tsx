import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import { Checkbox } from "../Checkbox";
import Text from "../Text/Text";
import { ChevronRight } from "lucide-react";
import { MultiSelectMenuItemType } from "./types";

const MenuItemSlot = ({ slot }: { slot: React.ReactNode }) => {
  return (
    <Block flexShrink={0} height="auto" contentCentered>
      {slot}
    </Block>
  );
};

const SubMenu = ({
  item,
  onSelect,
  selected,
}: {
  item: MultiSelectMenuItemType;
  onSelect: (value: string) => void;
  selected: string[];
}) => {
  return (
    <RadixMenu.Sub>
      <RadixMenu.SubTrigger asChild>
        <Block
          alignItems="center"
          padding="8px 6px"
          margin="0px 6px"
          borderRadius={4}
          outline="none"
          border="none"
          _hover={{
            backgroundColor: FOUNDATION_THEME.colors.gray[50],
          }}
        >
          <Block
            display="flex"
            alignItems="center"
            gap={8}
            justifyContent="space-between"
          >
            <Block
              as="span"
              display="flex"
              alignItems="center"
              gap={8}
              flexGrow={1}
            >
              {item.slot1 && <MenuItemSlot slot={item.slot1} />}
              <Text
                variant="body.md"
                color={FOUNDATION_THEME.colors.gray[600]}
                fontWeight={500}
                truncate
              >
                {item.label}
              </Text>
            </Block>
            {item.slot2 && <MenuItemSlot slot={item.slot2} />}
            {item.slot3 && <MenuItemSlot slot={item.slot3} />}
            {item.slot4 && <MenuItemSlot slot={item.slot4} />}
            <Block flexShrink={0} size={20} contentCentered>
              <ChevronRight
                size={16}
                color={FOUNDATION_THEME.colors.gray[400]}
              />
            </Block>
          </Block>
        </Block>
      </RadixMenu.SubTrigger>
      <RadixMenu.SubContent avoidCollisions sideOffset={8} asChild>
        <Block
          backgroundColor="white"
          borderRadius={8}
          padding="8px 0px"
          boxShadow={FOUNDATION_THEME.shadows.lg}
          border={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}
        >
          {item.subMenu?.map((subItem, subIdx) => (
            <MultiSelectMenuItem
              key={subIdx}
              item={subItem}
              onSelect={onSelect}
              selected={selected}
            />
          ))}
        </Block>
      </RadixMenu.SubContent>
    </RadixMenu.Sub>
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
    return <SubMenu item={item} onSelect={onSelect} selected={selected} />;
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
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={8}
        >
          <Text
            variant="body.md"
            color={
              isSelected
                ? FOUNDATION_THEME.colors.gray[700]
                : FOUNDATION_THEME.colors.gray[600]
            }
            fontWeight={500}
            truncate
          >
            {item.label}
          </Text>
          <Block as="span" display="flex" alignItems="center">
            <Checkbox checked={isSelected} disabled={item.disabled} />
          </Block>
        </Block>
        {item.subLabel && (
          <Block display="flex" alignItems="center" width="100%">
            <Text
              variant="body.sm"
              color={FOUNDATION_THEME.colors.gray[400]}
              fontWeight={400}
              userSelect="none"
              truncate
            >
              {item.subLabel}
            </Text>
          </Block>
        )}
      </Block>
    </RadixMenu.Item>
  );
};

export default MultiSelectMenuItem;

// const StyledItem = styled(RadixMenu.Item).withConfig({
//   shouldForwardProp: (prop) => prop !== "isSelected",
// })<{ isSelected: boolean }>(({ isSelected }) => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: 4,
//   padding: "8px 6px",
//   margin: "0px 6px",

//   alignItems: "center",
//   borderRadius: 4,
//   cursor: "pointer",
//   userSelect: "none",
//   backgroundColor: isSelected
//     ? FOUNDATION_THEME.colors.gray[50]
//     : "transparent",

//   // hover effects
//   "&:hover": {
//     backgroundColor: FOUNDATION_THEME.colors.gray[50],
//   },

//   "&[data-disabled]": {
//     opacity: 0.5,
//     cursor: "not-allowed",
//   },

//   "&[data-highlighted]": {
//     border: "none",
//     outline: "none",
//     backgroundColor: FOUNDATION_THEME.colors.gray[50],
//   },
// }));

// const StyledSubMenu = styled(RadixMenu.Sub)(() => ({
//   padding: "8px 6px",
//   margin: "0px 8px",
// }));

// const SubTrigger = styled(RadixMenu.SubTrigger)(() => ({
//   alignItems: "center",
//   padding: "8px 6px",
//   margin: "0px 6px",
//   borderRadius: 4,
//   // hover effects
//   "&:hover": {
//     backgroundColor: FOUNDATION_THEME.colors.gray[50],
//   },

//   "&[data-disabled]": {
//     opacity: 0.5,
//     cursor: "not-allowed",
//   },

//   "&[data-highlighted]": {
//     border: "none",
//     outline: "none",
//     backgroundColor: FOUNDATION_THEME.colors.gray[50],
//   },
// }));

// const SubContent = styled(RadixMenu.SubContent)(() => ({
//   backgroundColor: "white",
//   borderRadius: 8,
//   padding: "8px 0px",
//   boxShadow: FOUNDATION_THEME.shadows.lg,
//   zIndex: 9999,
// }));
