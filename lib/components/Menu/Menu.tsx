import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { FileIcon, PencilIcon } from "lucide-react";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
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

enum MenuItemVariant {
  DEFAULT = "default",
  ACTION = "action",
  MULTISELECT = "multiselect",
}

type MenuItemType = {
  variant?: MenuItemVariant;
  text: string;
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
        slot1: <FileIcon size={14} />,
        text: "Save As CSV",
        onClick: () => alert("Delete clicked"),
      },
    ],
  },
  {
    items: [
      {
        variant: MenuItemVariant.MULTISELECT,
        text: "Select All",
        onClick: () => alert("Select All clicked"),
      },
    ],
  },
  {
    items: [
      {
        text: "Disabled Item",
        disabled: true,
        onClick: () => alert("This won't fire"),
      },
      {
        text: "Sub Menu",
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

export const Menu = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <RadixDropdownMenu.Root open>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <Content sideOffset={8} style={{ padding: 6 }}>
        {dummyItems.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.label && (
              /* ------------
               * Label
               * ------------ */
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
                    <Block
                      display="flex"
                      height={32}
                      alignItems="center"
                      paddingX={8}
                      paddingY={6}
                      style={{ cursor: "pointer" }}
                    >
                      {item.text}
                    </Block>
                  </RadixDropdownMenu.SubTrigger>
                  <RadixDropdownMenu.Portal>
                    <SubContent sideOffset={8} style={{ padding: 6 }}>
                      {item.subMenu.items.map((subItem, subIndex) => (
                        <RadixDropdownMenu.Item
                          asChild
                          key={subIndex}
                          disabled={subItem.disabled}
                        >
                          <Block
                            display="flex"
                            alignItems="center"
                            gap={8}
                            height={32}
                            paddingX={8}
                            paddingY={6}
                            onClick={
                              subItem.disabled ? undefined : subItem.onClick
                            }
                          >
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
                                color={FOUNDATION_THEME.colors.gray[600]}
                                fontWeight={500}
                                truncate
                              >
                                {item.text}
                              </Text>
                            </Block>
                          </Block>
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
                  <Block
                    display="flex"
                    alignItems="center"
                    gap={8}
                    height={32}
                    paddingX={8}
                    paddingY={6}
                    style={{
                      cursor: item.disabled ? "not-allowed" : "pointer",
                      opacity: item.disabled ? 0.5 : 1,
                    }}
                    onClick={item.disabled ? undefined : item.onClick}
                  >
                    {item.slot1 && (
                      <Block size={16} contentCentered>
                        {item.slot1}
                      </Block>
                    )}
                    <Block
                      display="flex"
                      flexGrow={1}
                      alignItems="center"
                      maxWidth={"100%"}
                      overflow="hidden"
                    >
                      <Text
                        variant="body.md"
                        color={FOUNDATION_THEME.colors.gray[600]}
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
