import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import Text from "../Text/Text";
import { Settings2 } from "lucide-react";
import { Tag, TagColor, TagShape, TagSize } from "../Tags";

import styled, { CSSObject } from "styled-components";
import { FOUNDATION_THEME } from "../../tokens";
import {
  MenuV2Props,
  MenuAlignment,
  MenuSide,
  MenuV2GroupType,
  MenuItemV2Variant,
  MenuItemV2ActionType,
} from "./types";
import React, { useState } from "react";
import { filterMenuGroups } from "./utils";
import MenuGroupLabel from "./MenuGroupLabel";
import MenuGroupSeperator from "./MenuGroupSeperator";
import Item from "./MenuItem";
import Block from "../Primitives/Block/Block";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import Virtualizer from "../Virtualizer/Virtualizer";

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

const dummyMenuItems: MenuV2GroupType[] = [
  {
    label: "Account GGWP",
    showSeparator: true,
    items: [
      {
        label: "Profile Settings",
        onClick: () => alert("Profile Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Billing & Subscription",
        // subLabel: "Manage your payment methods and plans",
        onClick: () => alert("Billing"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Sign Out",
        // subLabel: "Sign out of your account",
        onClick: () => alert("Sign Out"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.PRIMARY,
      },
      {
        label: "Delete Account",
        // subLabel: "Permanently delete your account and all data",
        onClick: () => alert("Delete Account"),
        slot1: <Settings2 size={13} />,
        // slot2: <Terminal size={13} />,
        slot3: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.ERROR}
            size={TagSize.XS}
            text="Permanent"
          />
        ),
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.DANGER,
      },
    ],
  },
  {
    label: "Workspace",
    showSeparator: true,
    items: [
      {
        label: "Workspace Settings",
        // subLabel: "Configure workspace preferences",
        onClick: () => alert("Workspace Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Members & Permissions",
        // subLabel: "Manage team members and their roles",
        onClick: () => alert("Members"),
        slot1: <Settings2 size={13} />,
        slot2: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.SUCCESS}
            size={TagSize.XS}
            text="8 members"
          />
        ),
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Integrations",
        subLabel: "Connect third-party apps and services",
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Slack",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Connect your Slack workspace",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Slack"),
          },
          {
            label: "GitHub",
            subLabel: "Link your GitHub repositories",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect GitHub"),
          },
          {
            label: "Google Drive",
            subLabel: "Sync with Google Drive",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Google Drive"),
          },
        ],
      },
    ],
  },
  {
    label: "Preferences",
    items: [
      {
        label: "Notifications",
        subLabel: "Configure your notification preferences",
        actionType: MenuItemV2ActionType.DANGER,
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Email Notifications",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Receive updates via email",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Email Notifications"),
            subMenu: [
              {
                label: "Slack",
                variant: MenuItemV2Variant.ACTION,
                actionType: MenuItemV2ActionType.DANGER,
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Slack"),
              },
              {
                label: "GitHub",
                subLabel: "Link your GitHub repositories",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect GitHub"),
              },
              {
                label: "Google Drive",
                subLabel: "Sync with Google Drive",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Google Drive"),
              },
            ],
          },
          {
            label: "Push Notifications",
            subLabel: "Get notifications on your device",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Push Notifications"),
          },
          {
            label: "Slack Notifications",
            subLabel: "Receive alerts in Slack",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Slack Notifications"),
          },
        ],
      },
      {
        label: "Theme",
        subLabel: "Customize your interface appearance",
        onClick: () => alert("Theme Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Language & Region",
        subLabel: "Set your language and timezone",
        onClick: () => alert("Language Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
    ],
  },
];

const Menu = ({
  trigger,
  items = dummyMenuItems,
  asModal = false,
  alignment = MenuAlignment.CENTER,
  side = MenuSide.BOTTOM,
  sideOffset = 8,
  alignOffset = 0,
  collisonBoundaryRef,
  maxHeight = 300,
  enableSearch = true,
  useVirtualization = false,
  itemHeight = 40,
  virtualizationThreshold = 20,
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

              {useVirtualization &&
              group.items.length > virtualizationThreshold ? (
                <Virtualizer
                  items={group.items}
                  itemHeight={itemHeight}
                  maxHeight={maxHeight}
                  renderItem={(item, itemIndex) => (
                    <Item
                      key={`${groupId}-${itemIndex}`}
                      item={item}
                      idx={itemIndex}
                      useVirtualization={useVirtualization}
                      virtualizationThreshold={virtualizationThreshold}
                      itemHeight={itemHeight}
                      maxHeight={maxHeight}
                    />
                  )}
                />
              ) : (
                group.items.map((item, itemIndex) => (
                  <Item
                    key={`${groupId}-${itemIndex}`}
                    item={item}
                    idx={itemIndex}
                    useVirtualization={useVirtualization}
                    virtualizationThreshold={virtualizationThreshold}
                    itemHeight={itemHeight}
                    maxHeight={maxHeight}
                  />
                ))
              )}

              {groupId !== filteredItems.length - 1 && group.showSeparator && (
                <MenuGroupSeperator />
              )}
            </React.Fragment>
          ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default Menu;
