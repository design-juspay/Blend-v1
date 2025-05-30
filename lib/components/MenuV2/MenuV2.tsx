import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import Text from "../Text/Text";
import styled, { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import { dummyMenuItems, MenuV2Props, MenuAlignment, MenuSide } from "./types";
import { useState } from "react";
import { filterMenuGroups } from "./utils";
import SearchInput from "./MenuSearchInput";
import MenuGroupLabel from "./MenuGroupLabel";
import MenuGroupSeperator from "./MenuGroupSeperator";
import Item from "./MenuItem";



export const contentBaseStyle: CSSObject = {
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
};

const Content = styled(RadixMenu.Content)(() => ({
  ...contentBaseStyle,
}));

const Group = styled(RadixMenu.Group)(() => ({}));

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
                <MenuGroupLabel>
                  <Text
                    variant="body.sm"
                    color={FOUNDATION_THEME.colors.gray[400]}
                  >
                    {group.label}
                  </Text>
                </MenuGroupLabel>
              )}
              {group.items.map((item, itemIndex) => (
                <Item
                  key={`${groupId}-${itemIndex}`}
                  item={item}
                  idx={itemIndex}
                />
              ))}
              {groupId !== filteredItems.length - 1 && group.showSeparator && (
                <MenuGroupSeperator />
              )}
            </Group>
          ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default MenuV2;
