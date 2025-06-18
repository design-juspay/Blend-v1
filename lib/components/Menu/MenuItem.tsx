import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { FOUNDATION_THEME } from "../../tokens";
import {
  MenuItemV2ActionType,
  MenuItemV2Type,
  MenuItemV2Variant,
} from "./types";
import { SubMenu } from "./SubMenu";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { getTextColor } from "./menu.utils";
import menuTokens, { MenuItemStates } from "./menu.tokens";

const MenuItem = ({ item, idx }: { item: MenuItemV2Type; idx: number }) => {
  if (item.subMenu) {
    return <SubMenu item={item} idx={idx} />;
  }
  if (item.variant === undefined) {
    item.variant = MenuItemV2Variant.DEFAULT;
  }

  const getBgColor = (state: MenuItemStates) => {
    const bg = menuTokens.item.backgroundColor;

    // check for variant
    if (item.variant === MenuItemV2Variant.DEFAULT) {
      if (!item.disabled) {
        return bg.default.enabled[state];
      } else {
        return bg.default.disabled[state];
      }
    } else {
      // check for action type
      if (item.actionType === undefined) {
        item.actionType = MenuItemV2ActionType.PRIMARY;
      }
      if (item.actionType === MenuItemV2ActionType.PRIMARY) {
        if (!item.disabled) {
          return bg.action.primary.enabled[state];
        } else {
          return bg.action.primary.disabled[state];
        }
      } else {
        if (!item.disabled) {
          return bg.action.danger.enabled[state];
        } else {
          return bg.action.danger.disabled[state];
        }
      }
    }
  };

  return (
    <RadixMenu.Item
      asChild
      disabled={item.disabled}
      style={{ outline: "none", border: "none" }}
    >
      <Block
        key={idx}
        display="flex"
        padding={menuTokens.item.padding}
        margin={menuTokens.item.margin}
        borderRadius={menuTokens.item.borderRadius}
        onClick={item.disabled ? undefined : item.onClick}
        cursor={item.disabled ? "not-allowed" : "pointer"}
        border={menuTokens.item.border.default}
        outline={menuTokens.item.outline.default}
        flexDirection="column"
        gap={menuTokens.item.gap}
        backgroundColor={getBgColor("default")}
        _hover={{
          backgroundColor: getBgColor("hover"),
        }}
        // _hover={{
        //   backgroundColor: menuTokens.item.backgroundColor.hover,
        //   outline: menuTokens.item.outline.hover,
        //   border: menuTokens.item.border.hover,
        // }}
        // _focus={{
        //   outline: menuTokens.item.outline.focus,
        //   border: menuTokens.item.border.focus,
        //   backgroundColor: item.disabled
        //     ? menuTokens.item.backgroundColor.disabled
        //     : menuTokens.item.backgroundColor.focus,
        // }}
        // _active={{
        //   outline: menuTokens.item.outline.active,
        //   border: menuTokens.item.border.active,
        //   backgroundColor: item.disabled
        //     ? menuTokens.item.backgroundColor.disabled
        //     : menuTokens.item.backgroundColor.active,
        // }}
        // _focusVisible={{
        //   outline: menuTokens.item.outline.focusVisible,
        //   border: menuTokens.item.border.focusVisible,
        //   backgroundColor: item.disabled
        //     ? menuTokens.item.backgroundColor.disabled
        //     : menuTokens.item.backgroundColor.focusVisible,
        // }}
        color={getTextColor(item)}
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
              color={getTextColor(item)}
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
    </RadixMenu.Item>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
