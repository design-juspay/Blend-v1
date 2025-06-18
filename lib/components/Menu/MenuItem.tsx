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

const getHoverBgColor = (item: MenuItemV2Type): string => {
  if (item.variant === MenuItemV2Variant.ACTION) {
    if (item.actionType === MenuItemV2ActionType.DANGER) {
      return (
        FOUNDATION_THEME.colors.red[50] ||
        FOUNDATION_THEME.colors.gray[50] ||
        ""
      );
    }
    return (
      FOUNDATION_THEME.colors.primary[50] ||
      FOUNDATION_THEME.colors.gray[50] ||
      ""
    );
  }
  return FOUNDATION_THEME.colors.gray[50] || "";
};

const getTextColor = (item: MenuItemV2Type) => {
  if (item.variant === MenuItemV2Variant.ACTION) {
    if (item.actionType === MenuItemV2ActionType.DANGER) {
      if (item.disabled === true) {
        return FOUNDATION_THEME.colors.red[400];
      }
      return FOUNDATION_THEME.colors.red[600];
    }
    if (item.disabled === true) {
      return FOUNDATION_THEME.colors.primary[300];
    }
    return FOUNDATION_THEME.colors.primary[600];
  } else {
    if (item.disabled === true) {
      return FOUNDATION_THEME.colors.gray[400];
    }
    return FOUNDATION_THEME.colors.gray[600];
  }
};

const MenuItem = ({ item, idx }: { item: MenuItemV2Type; idx: number }) => {
  if (item.subMenu) {
    return <SubMenu item={item} idx={idx} />;
  }
  const hoverBg = getHoverBgColor(item);

  return (
    <RadixMenu.Item
      asChild
      disabled={item.disabled}
      style={{ outline: "none", border: "none" }}
    >
      <Block
        key={idx}
        display="flex"
        padding="6px"
        margin="0px 6px"
        borderRadius={4}
        onClick={item.disabled ? undefined : item.onClick}
        cursor={item.disabled ? "not-allowed" : "pointer"}
        border="none"
        outline="none" // tokenised
        flexDirection="column"
        gap={4} // tokenised
        _hover={{
          backgroundColor: item.disabled ? "none" : hoverBg,
          outline: "none !important",
          border: "none !important",
        }}
        _focus={{
          outline: "none !important",
          border: "none !important",
        }}
        _active={{
          outline: "none !important",
          border: "none !important",
        }}
        _focusVisible={{
          outline: "none !important",
          border: "none !important",
        }}
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
