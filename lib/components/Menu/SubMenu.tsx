import styled from "styled-components";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import {
  MenuItemV2ActionType,
  MenuItemV2Type,
  MenuItemV2Variant,
} from "./types";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { contentBaseStyle } from "./Menu";
import Item, { itemBaseStyle } from "./MenuItem";
import { ChevronRightIcon } from "lucide-react";
import Virtualizer from "../Virtualizer/Virtualizer";

export const Sub = styled(RadixMenu.Sub)(() => ({
  padding: 0,
  listStyle: "none",
  margin: "0px 6px",
}));

const getHoverBgColor = (item: MenuItemV2Type): string => {
  if (item.variant === MenuItemV2Variant.ACTION) {
    if (item.actionType === MenuItemV2ActionType.DANGER) {
      return (
        FOUNDATION_THEME.colors.red[50] ||
        FOUNDATION_THEME.colors.gray[50] ||
        ""
      );
    }
    // PRIMARY or undefined
    return (
      FOUNDATION_THEME.colors.primary[50] ||
      FOUNDATION_THEME.colors.gray[50] ||
      ""
    );
  }
  return FOUNDATION_THEME.colors.gray[50] || "";
};

const SubTrigger = styled(RadixMenu.SubTrigger)<{ $hoverBg: string }>(
  ({ $hoverBg }) => ({
    ...itemBaseStyle,
    "&:hover": {
      backgroundColor: $hoverBg,
    },
    "&[data-highlighted]": {
      border: "none",
      outline: "none",
      backgroundColor: $hoverBg,
    },
  })
);

const SubContent = styled(RadixMenu.SubContent)(() => ({
  ...contentBaseStyle,
  paddingTop: 10,
  paddingBottom: 10,
}));

export const SubMenu = ({
  item,
  idx,
  useVirtualization = false,
  virtualizationThreshold = 20,
  itemHeight = 40,
  maxHeight = 300,
}: {
  item: MenuItemV2Type;
  idx: number;
  useVirtualization?: boolean;
  virtualizationThreshold?: number;
  itemHeight?: number;
  maxHeight?: number;
}) => {
  const hoverBg = getHoverBgColor(item);
  const hasLargeSubMenu =
    item.subMenu && item.subMenu.length > virtualizationThreshold;
  const shouldVirtualize = useVirtualization && hasLargeSubMenu;

  return (
    <Sub key={idx}>
      <SubTrigger asChild $hoverBg={hoverBg}>
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
          {shouldVirtualize && item.subMenu ? (
            <Virtualizer
              items={item.subMenu}
              itemHeight={itemHeight}
              maxHeight={maxHeight}
              renderItem={(subItem, subIdx) => (
                <Item
                  key={`submenu-${subIdx}`}
                  item={subItem}
                  idx={subIdx}
                  useVirtualization={useVirtualization}
                  virtualizationThreshold={virtualizationThreshold}
                  itemHeight={itemHeight}
                  maxHeight={maxHeight}
                />
              )}
            />
          ) : (
            item.subMenu &&
            item.subMenu.map((subItem, subIdx) => (
              <Item key={subIdx} item={subItem} idx={subIdx} />
            ))
          )}
        </SubContent>
      </RadixMenu.Portal>
    </Sub>
  );
};
