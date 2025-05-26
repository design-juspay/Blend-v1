import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import {
  ChevronRightIcon,
  CopyIcon,
  FileIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";

const Content = styled(RadixDropdownMenu.Content)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 0",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,
}));

const SubContent = styled(RadixDropdownMenu.SubContent)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 0",
  boxShadow: FOUNDATION_THEME.shadows.lg,
  zIndex: 9999,
  minWidth: 200,
  maxWidth: 280,
}));

const Separator = styled(RadixDropdownMenu.Separator)(() => ({
  height: 1,
  backgroundColor: "#eee",
  margin: "6px 0",
}));

const Label = styled(RadixDropdownMenu.Label)(() => ({
  padding: "8px 6px",
  fontSize: 12,
  fontWeight: 500,
  color: "#666",
  textTransform: "uppercase",
}));

const StyledItem = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${FOUNDATION_THEME.colors.primary[50]};
  }

  &[data-highlighted] {
    outline: none;
    border: none;
    background-color: ${FOUNDATION_THEME.colors.primary[50]};
  }

  &:active {
    outline: none;
    border: none;
    background-color: ${FOUNDATION_THEME.colors.primary[50]};
  }
`;

enum MenuItemVariant {
  DEFAULT = "default",
  ACTION = "action",
  MULTISELECT = "multiselect",
}

enum MenuItemActionType {
  PRIMARY = "primary",
  DANGER = "danger",
}

type MenuItemType = {
  variant?: MenuItemVariant;
  text: string;
  actionType?: MenuItemActionType;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  subMenu?: MenuGroupType;
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};

type MenuGroupType = {
  label?: string;
  showSeparator?: boolean;
  items: MenuItemType[];
};

const dummyItems: MenuGroupType[] = [
  {
    label: "Options",
    showSeparator: true,
    items: [
      {
        variant: MenuItemVariant.DEFAULT,
        text: "Release Now",
        slot4: <kbd>⌘</kbd>,
        onClick: () => alert("Edit clicked"),
      },
      {
        variant: MenuItemVariant.ACTION,
        slot1: <FileIcon size={13} />,
        text: "Save As CSV",
        onClick: () => alert("Delete clicked"),
      },
    ],
  },
  {
    items: [
      {
        variant: MenuItemVariant.ACTION,
        actionType: MenuItemActionType.PRIMARY,
        slot1: <PlusIcon size={14} color={"blue"} />,
        text: "Create New",
        onClick: () => alert("Select All clicked"),
      },
      {
        text: "Copy CSV",
        slot1: <CopyIcon size={13} />,
        onClick: () => alert("This won't fire"),
      },
      {
        text: "Merchant Settings",
        slot1: <SettingsIcon size={13} />,
        slot2: <ChevronRightIcon size={13} />,
        subMenu: {
          items: [
            {
              variant: MenuItemVariant.DEFAULT,
              text: "Edit",
              onClick: () => alert("Edit clicked"),
            },
            {
              variant: MenuItemVariant.ACTION,
              text: "Delete",
              onClick: () => alert("Delete clicked"),
            },
          ],
        },
      },
    ],
  },
];

/**
 * @description A dropdown menu component
 * @param {React.ReactNode} trigger - The trigger element
 * @param {string} side - The side of the menu
 * @param {string} align - The alignment of the menu
 * @returns {React.ReactNode}
 *
 * @todo - Add support for collisionBoundaries
 */
export const Menu = ({
  trigger,
  side = "bottom",
  align = "center",
}: {
  trigger: React.ReactNode;
  side?: "left" | "right" | "bottom" | "top";
  align?: "start" | "center" | "end";
}) => {
  return (
    <RadixDropdownMenu.Root open>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <Content
        side={side}
        align={align}
        loop
        avoidCollisions
        sideOffset={8}
        style={{ padding: 6 }}
      >
        {dummyItems.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.label && (
              <RadixDropdownMenu.Label asChild>
                <Block
                  display="flex"
                  alignItems="center"
                  paddingX={8}
                  paddingY={6}
                >
                  <Text
                    variant="body.md"
                    fontWeight={500}
                    color={FOUNDATION_THEME.colors.gray[500]}
                  >
                    {group.label}
                  </Text>
                </Block>
              </RadixDropdownMenu.Label>
            )}
            {group.items.map((item, itemIndex) =>
              item.subMenu && item.subMenu.items.length > 0 ? (
                <RadixDropdownMenu.Sub key={itemIndex}>
                  <RadixDropdownMenu.SubTrigger asChild>
                    <StyledItem>
                      <Block
                        display="flex"
                        flexGrow={1}
                        alignItems="center"
                        gap={8}
                      >
                        {item.slot1 && (
                          <Block size={16} contentCentered>
                            {item.slot1}
                          </Block>
                        )}
                        <Block display="flex" flexGrow={1} alignItems="center">
                          <Text
                            variant="body.md"
                            color={
                              item.variant === MenuItemVariant.ACTION
                                ? item.actionType ===
                                    MenuItemActionType.PRIMARY ||
                                  !item.actionType
                                  ? FOUNDATION_THEME.colors.primary[600]
                                  : FOUNDATION_THEME.colors.red[600]
                                : FOUNDATION_THEME.colors.gray[600]
                            }
                            fontWeight={500}
                            truncate
                          >
                            {item.text}
                          </Text>
                        </Block>
                        {item.slot2 && (
                          <Block size={16} contentCentered>
                            {item.slot2}
                          </Block>
                        )}
                        {item.slot3 && (
                          <Block size={16} contentCentered>
                            {item.slot3}
                          </Block>
                        )}
                        {item.slot4 && (
                          <Block size={16} contentCentered>
                            {item.slot4}
                          </Block>
                        )}
                      </Block>
                    </StyledItem>
                  </RadixDropdownMenu.SubTrigger>
                  <RadixDropdownMenu.Portal>
                    <SubContent style={{ padding: 6 }}>
                      {item.subMenu.items.map((subItem, subIndex) => (
                        <RadixDropdownMenu.Item
                          asChild
                          key={subIndex}
                          disabled={subItem.disabled}
                        >
                          <StyledItem disabled={subItem.disabled}>
                            {subItem.slot1 && (
                              <Block size={16} contentCentered>
                                {subItem.slot1}
                              </Block>
                            )}
                            <Block
                              display="flex"
                              flexGrow={1}
                              alignItems="center"
                            >
                              <Text
                                variant="body.md"
                                color={
                                  item.variant === MenuItemVariant.ACTION
                                    ? item.actionType ===
                                      MenuItemActionType.PRIMARY
                                      ? FOUNDATION_THEME.colors.primary[600]
                                      : FOUNDATION_THEME.colors.red[600]
                                    : FOUNDATION_THEME.colors.gray[600]
                                }
                                fontWeight={500}
                                truncate
                              >
                                {subItem.text}
                              </Text>
                            </Block>
                          </StyledItem>
                        </RadixDropdownMenu.Item>
                      ))}
                    </SubContent>
                  </RadixDropdownMenu.Portal>
                </RadixDropdownMenu.Sub>
              ) : (
                <RadixDropdownMenu.Item
                  asChild
                  key={itemIndex}
                  disabled={item.disabled}
                >
                  <StyledItem disabled={item.disabled}>
                    {item.slot1 && (
                      <Block size={16} contentCentered>
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
                          item.variant === MenuItemVariant.ACTION
                            ? item.actionType === MenuItemActionType.PRIMARY ||
                              !item.actionType
                              ? FOUNDATION_THEME.colors.primary[600]
                              : FOUNDATION_THEME.colors.red[600]
                            : FOUNDATION_THEME.colors.gray[600]
                        }
                        fontWeight={500}
                        truncate
                      >
                        {item.text}
                      </Text>
                    </Block>
                    {item.slot2 && (
                      <Block size={16} contentCentered>
                        {item.slot2}
                      </Block>
                    )}
                    {item.slot3 && (
                      <Block size={16} contentCentered>
                        {item.slot3}
                      </Block>
                    )}
                    {item.slot4 && (
                      <Block size={16} contentCentered>
                        {item.slot4}
                      </Block>
                    )}
                  </StyledItem>
                </RadixDropdownMenu.Item>
              )
            )}
            {group.showSeparator && <Separator />}
          </div>
        ))}
      </Content>
    </RadixDropdownMenu.Root>
  );
};

export default Menu;
