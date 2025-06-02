import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import Text from "../Text/Text";
import styled, { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import { dummyMenuItems, MenuV2Props, MenuAlignment, MenuSide } from "./types";
import React, { useState } from "react";
import { filterMenuGroups } from "./utils";
import MenuGroupLabel from "./MenuGroupLabel";
import MenuGroupSeperator from "./MenuGroupSeperator";
import Item from "./MenuItem";
import Block from "../Primitives/Block/Block";
import SearchInput from "../Inputs/SearchInput/SearchInput";

export const contentBaseStyle: CSSObject = {
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "none",
  scrollbarColor: "transparent transparent",
  padding: "0px 6px",
};

const Content = styled(RadixMenu.Content)(() => ({
  ...contentBaseStyle,
}));



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
  enableSearch = true,
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
          paddingTop: 10,
        }}
      >
        {enableSearch && (
          <Block
            width="calc(100% + 12px)"
            marginLeft="-6px"
            position="sticky"
            top={0}
            zIndex={1000}
          >
            <SearchInput
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Block>
        )}
        {filteredItems &&
          filteredItems.map((group, groupId) => (
            <React.Fragment key={groupId}>
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
            </React.Fragment>
          ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default MenuV2;
