import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import Text from "../Text/Text";
import styled from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import {
  dummyMenuItems,
  MenuItemV2ActionType,
  MenuItemV2Type,
  MenuItemV2Variant,
  MenuV2Props,
  MenuV2GroupType,
  MenuAlignment,
  MenuSide,
} from "./types";
import Block from "../Primitives/Block/Block";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const Content = styled(RadixMenu.Content)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 6px",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,

  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: `${FOUNDATION_THEME.colors.gray[200]} ${FOUNDATION_THEME.colors.gray[0]}`,
}));

const StyledItem = styled(RadixMenu.Item)(() => ({
  alignItems: "center",
  gap: 8,
  padding: "8px 6px",
  borderRadius: 4,
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    backgroundColor: FOUNDATION_THEME.colors.gray[50],
  },

  "&[data-disabled]": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&[data-highlighted]": {
    border: "none",
    outline: "none",
    backgroundColor: FOUNDATION_THEME.colors.gray[50],
  },
}));

const Sub = styled(RadixMenu.Sub)(() => ({
  padding: 0,
  margin: 0,
  listStyle: "none",
}));

const SubContent = styled(RadixMenu.SubContent)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 6px",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,
}));

const SubTrigger = styled(RadixMenu.SubTrigger)(() => ({
  alignItems: "center",
  gap: 8,
  padding: "6px 8px",
  borderRadius: 4,
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    backgroundColor: FOUNDATION_THEME.colors.gray[50],
  },

  "&[data-disabled]": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&[data-highlighted]": {
    border: "none",
    outline: "none",
    backgroundColor: FOUNDATION_THEME.colors.gray[50],
  },
}));

const SubMenu = ({ item, idx }: { item: MenuItemV2Type; idx: number }) => {
  return (
    <Sub key={idx}>
      <SubTrigger data-gg="sub menu trigger" asChild>
        <Block
          padding="6px"
          display="flex"
          flexDirection="column"
          gap={4}
          width="100%"
        >
          <Block display="flex" alignItems="center" gap={4} width="100%">
            {item.slot1 && (
              <Block flexShrink={0} height="auto" contentCentered>
                {item.slot1}
              </Block>
            )}
            <Block
              display="flex"
              flexGrow={1}
              alignItems="center"
              maxWidth="100%"
              overflow="hidden"
            >
              <Text
                variant="body.md"
                color={
                  item.variant === MenuItemV2Variant.ACTION
                    ? item.actionType === MenuItemV2ActionType.PRIMARY ||
                      !item.actionType
                      ? FOUNDATION_THEME.colors.primary[600]
                      : FOUNDATION_THEME.colors.red[600]
                    : FOUNDATION_THEME.colors.gray[600]
                }
                fontWeight={500}
                truncate
              >
                {item.label}
              </Text>
            </Block>
            {item.slot2 && (
              <Block flexShrink={0} height="auto" contentCentered>
                {item.slot2}
              </Block>
            )}
            {item.slot3 && (
              <Block flexShrink={0} height="auto" contentCentered>
                {item.slot3}
              </Block>
            )}
            {item.slot4 && (
              <Block flexShrink={0} height="auto" contentCentered>
                {item.slot4}
              </Block>
            )}

            <Block flexShrink={0} size="auto" contentCentered>
              <ChevronRightIcon size={16} />
            </Block>
          </Block>
          {item.subLabel && (
            <Block display="flex" alignItems="center" width="100%">
              <Text
                variant="body.sm"
                color={FOUNDATION_THEME.colors.gray[400]}
                fontWeight={400}
              >
                {item.subLabel}
              </Text>
            </Block>
          )}
        </Block>
      </SubTrigger>
      <RadixMenu.Portal>
        <SubContent avoidCollisions>
          {item.subMenu &&
            item.subMenu.map((subItem, subIdx) => (
              <Item key={subIdx} item={subItem} idx={subIdx} />
            ))}
        </SubContent>
      </RadixMenu.Portal>
    </Sub>
  );
};

const Separator = styled(RadixMenu.Separator)(() => ({
  height: 1,
  backgroundColor: "#eee",
  margin: "6px 0",
}));

const Item = ({ item, idx }: { item: MenuItemV2Type; idx: number }) => {
  if (item.subMenu) {
    return <SubMenu item={item} idx={idx} />;
  }
  return (
    <StyledItem
      onClick={item.onClick}
      asChild
      disabled={item.disabled}
      key={idx}
    >
      <Block
        padding="6px"
        display="flex"
        flexDirection="column"
        gap={4}
        width="100%"
      >
        <Block
          display="flex"
          alignItems="center"
          gap={4}
          width="100%"
          overflow="hidden"
        >
          {item.slot1 && (
            <Block flexShrink={0} height="auto" contentCentered>
              {item.slot1}
            </Block>
          )}
          <Block
            display="flex"
            flexGrow={1}
            alignItems="center"
            maxWidth="100%"
            overflow="hidden"
          >
            <Text
              variant="body.md"
              color={
                item.variant === MenuItemV2Variant.ACTION
                  ? item.actionType === MenuItemV2ActionType.PRIMARY ||
                    !item.actionType
                    ? FOUNDATION_THEME.colors.primary[600]
                    : FOUNDATION_THEME.colors.red[600]
                  : FOUNDATION_THEME.colors.gray[600]
              }
              fontWeight={500}
              truncate
            >
              {item.label}
            </Text>
          </Block>
          {item.slot2 && (
            <Block flexShrink={0} height="auto" contentCentered>
              {item.slot2}
            </Block>
          )}
          {item.slot3 && (
            <Block flexShrink={0} height="auto" contentCentered>
              {item.slot3}
            </Block>
          )}
          {item.slot4 && (
            <Block flexShrink={0} height="auto" contentCentered>
              {item.slot4}
            </Block>
          )}
        </Block>
        {item.subLabel && (
          <Block display="flex" alignItems="center" width="100%">
            <Text
              variant="body.sm"
              color={FOUNDATION_THEME.colors.gray[400]}
              fontWeight={400}
            >
              {item.subLabel}
            </Text>
          </Block>
        )}
      </Block>
    </StyledItem>
  );
};

const Group = styled(RadixMenu.Group)(() => ({}));

const Label = styled(RadixMenu.Label)(() => ({
  padding: "6px 8px",
  userSelect: "none",
}));

const SearchInput = styled.input(() => ({
  padding: "6px 8px",
  borderRadius: 4,
  border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
  width: "100%",
  marginBottom: 10,
  position: "sticky",
  top: 0,
  zIndex: 1000,
  height: 40,
}));

// Utility: Recursively filter menu items and groups by search text
function filterMenuGroups(
  groups: MenuV2GroupType[],
  searchText: string
): MenuV2GroupType[] {
  if (!searchText) return groups;
  const lower = searchText.toLowerCase();
  return groups
    .map((group: MenuV2GroupType) => {
      // TODO: Should we include the whole group if the label matches?
      // if (group.label && group.label.toLowerCase().includes(lower)) {
      //   return group;
      // }
      const filteredItems = group.items
        .map((item: MenuItemV2Type) => filterMenuItem(item, lower))
        .filter(Boolean) as MenuItemV2Type[];
      if (filteredItems.length === 0) return null;
      return { ...group, items: filteredItems };
    })
    .filter(Boolean) as MenuV2GroupType[];
}

function filterMenuItem(
  item: MenuItemV2Type,
  lower: string
): MenuItemV2Type | null {
  // Check if this item matches
  const matches =
    (item.label && item.label.toLowerCase().includes(lower)) ||
    (item.subLabel && item.subLabel.toLowerCase().includes(lower));
  // If it has a submenu, filter recursively
  if (item.subMenu) {
    const filteredSub = item.subMenu
      .map((sub: MenuItemV2Type) => filterMenuItem(sub, lower))
      .filter(Boolean) as MenuItemV2Type[];
    if (filteredSub.length > 0 || matches) {
      return { ...item, subMenu: filteredSub };
    }
    return null;
  }
  return matches ? item : null;
}

const MenuV2 = ({
  trigger,
  items = dummyMenuItems,
  asModal = false,
  alignment = MenuAlignment.CENTER,
  side = MenuSide.BOTTOM,
  sideOffset = 8,
  alignOffset = 0,
  collisonBoundaryRef,
  maxHeight,
}: MenuV2Props) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredItems = filterMenuGroups(items, searchText);

  return (
    <RadixMenu.Root modal={asModal}>
      <RadixMenu.Trigger asChild>{trigger}</RadixMenu.Trigger>
      <Content
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        side={side}
        align={alignment}
        collisionBoundary={collisonBoundaryRef}
        style={{
          maxHeight: maxHeight ? `${maxHeight}px` : "auto",
        }}
      >
        <SearchInput
          placeholder="Search"
          onKeyDown={(e) => e.stopPropagation()}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {filteredItems &&
          filteredItems.map((group, groupId) => (
            <Group key={groupId}>
              {group.label && (
                <Label>
                  <Text
                    variant="body.sm"
                    color={FOUNDATION_THEME.colors.gray[400]}
                  >
                    {group.label}
                  </Text>
                </Label>
              )}
              {group.items.map((item, itemIndex) => (
                <Item
                  key={`${groupId}-${itemIndex}`}
                  item={item}
                  idx={itemIndex}
                />
              ))}
              {groupId !== filteredItems.length - 1 && group.showSeparator && (
                <Separator />
              )}
            </Group>
          ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default MenuV2;
