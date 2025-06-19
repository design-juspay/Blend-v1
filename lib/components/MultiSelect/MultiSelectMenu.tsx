import React, { useState } from "react";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { FOUNDATION_THEME } from "../../tokens";
import { Checkbox } from "../Checkbox";
import { ChevronRight } from "lucide-react";
import {
  MultiSelectMenuAlignment,
  MultiSelectMenuItemType,
  MultiSelectMenuProps,
  MultiSelectMenuSide,
} from "./types";

const Content = styled(RadixMenu.Content)(() => ({
  position: "relative",
  backgroundColor: "white",
  borderRadius: 8,
  padding: "8px 0px",
  // width: "var(--radix-dropdown-menu-trigger-width)",
  // maxWidth: "var(--radix-dropdown-menu-trigger-width)",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  overflowY: "auto",
  scrollbarWidth: "none",
  scrollbarColor: "transparent transparent",
}));

const Label = styled(RadixMenu.Label)(() => ({
  margin: "0px 8px",
  padding: "8px 6px",
  userSelect: "none",
  textTransform: "uppercase",
  overflow: "clip",
}));

const StyledItem = styled(RadixMenu.Item).withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ isSelected }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: "8px 6px",
  margin: "0px 8px",

  alignItems: "center",
  borderRadius: 4,
  cursor: "pointer",
  userSelect: "none",
  backgroundColor: isSelected
    ? FOUNDATION_THEME.colors.gray[50]
    : "transparent",

  // hover effects
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

const StyledSubMenu = styled(RadixMenu.Sub)(() => ({
  padding: "8px 6px",
  margin: "0px 8px",
}));

const SubTrigger = styled(RadixMenu.SubTrigger)(() => ({
  alignItems: "center",
  padding: "8px 6px",
  margin: "0px 8px",
  borderRadius: 4,
  // hover effects
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

const SubContent = styled(RadixMenu.SubContent)(() => ({
  backgroundColor: "white",
  borderRadius: 8,
  padding: "8px 0px",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
}));

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
    <StyledSubMenu>
      <SubTrigger asChild>
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
            {item.slot1 && (
              <Block flexShrink={0} height="auto" contentCentered>
                {item.slot1}
              </Block>
            )}

            <Text
              variant="body.md"
              color={FOUNDATION_THEME.colors.gray[600]}
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
          <Block flexShrink={0} size={20} contentCentered>
            <ChevronRight size={16} color={FOUNDATION_THEME.colors.gray[400]} />
          </Block>
        </Block>
      </SubTrigger>
      <SubContent avoidCollisions sideOffset={8}>
        {item.subMenu?.map((subItem, subIdx) => (
          <Item
            key={subIdx}
            item={subItem}
            onSelect={onSelect}
            selected={selected}
          />
        ))}
      </SubContent>
    </StyledSubMenu>
  );
};

const Item = ({
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
    <StyledItem
      isSelected={isSelected}
      onClick={handleClick}
      data-disabled={item.disabled}
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
          >
            {item.subLabel}
          </Text>
        </Block>
      )}
    </StyledItem>
  );
};

const Separator = styled(RadixMenu.Separator)(() => ({
  height: 1,
  backgroundColor: FOUNDATION_THEME.colors.gray[200],
  margin: "8px 0px",
}));

const MultiSelectMenu = ({
  items,
  selected,
  onSelect,
  trigger,
  minWidth,
  maxWidth,
  maxHeight,

  // alignment
  alignment = MultiSelectMenuAlignment.CENTER,
  side = MultiSelectMenuSide.BOTTOM,
  sideOffset = 8,
  alignOffset = 0,

  // open
  open,
  onOpenChange,
}: MultiSelectMenuProps) => {
  const [search, setSearch] = useState("");
  return (
    <RadixMenu.Root modal={false} open={true} onOpenChange={onOpenChange}>
      <RadixMenu.Trigger asChild>{trigger}</RadixMenu.Trigger>
      <Content
        align={alignment}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        side={side}
        style={{
          minWidth,
          width: "var(--radix-dropdown-menu-trigger-width)",
          maxWidth: maxWidth
            ? maxWidth
            : "var(--radix-dropdown-menu-trigger-width)",
          maxHeight,
        }}
      >
        {/* <Block
          position="sticky"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          marginBottom={10}
        >
          <SearchInput
            value={search}
            onChange={(e) => {
              e.stopPropagation();
              setSearch(e.target.value);
            }}
          />
        </Block> */}

        {items.map((group, groupId) => (
          <React.Fragment key={groupId}>
            {group.groupLabel && (
              <Label>
                <Text
                  variant="body.sm"
                  color={FOUNDATION_THEME.colors.gray[400]}
                >
                  {group.groupLabel}
                </Text>
              </Label>
            )}
            {group.items.map((item, itemIndex) => (
              <Item
                key={`${groupId}-${itemIndex}`}
                // isSelected={selected.includes(item.value)}
                selected={selected}
                item={item}
                onSelect={onSelect}
              />
            ))}
            {groupId !== items.length - 1 && group.showSeparator && (
              <Separator />
            )}
          </React.Fragment>
        ))}
      </Content>
    </RadixMenu.Root>
  );
};

export default MultiSelectMenu;
