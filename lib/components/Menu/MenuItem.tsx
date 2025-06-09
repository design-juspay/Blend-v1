import styled, { CSSObject } from "styled-components";
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

export const itemBaseStyle: CSSObject = {
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
};

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

const StyledItem = styled(RadixMenu.Item)<{ $hoverBg: string }>(
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

interface ItemProps {
  item: MenuItemV2Type;
  idx: number;
  useVirtualization?: boolean;
  virtualizationThreshold?: number;
  itemHeight?: number;
  maxHeight?: number;
}

const Item = ({
  item,
  idx,
  useVirtualization = false,
  virtualizationThreshold = 20,
  itemHeight = 40,
  maxHeight = 300,
}: ItemProps) => {
  if (item.subMenu) {
    return (
      <SubMenu
        item={item}
        idx={idx}
        useVirtualization={useVirtualization}
        virtualizationThreshold={virtualizationThreshold}
        itemHeight={itemHeight}
        maxHeight={maxHeight}
      />
    );
  }
  const hoverBg = getHoverBgColor(item);
  return (
    <StyledItem
      onClick={item.onClick}
      asChild
      disabled={item.disabled}
      key={idx}
      $hoverBg={hoverBg}
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

export default Item;
