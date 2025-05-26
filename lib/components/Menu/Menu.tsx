import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { PencilIcon } from "lucide-react";

const Content = styled(RadixDropdownMenu.Content)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 0",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  zIndex: 9999,
  minWidth: 180,
}));

const SubContent = styled(RadixDropdownMenu.SubContent)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: 6,
  padding: "8px 0",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  zIndex: 9999,
  minWidth: 180,
}));

enum MenuItemVariant {
  DEFAULT = "default",
  ACTION = "action",
  MULTISELECT = "multiselect",
}

type MenuGroupType = {
  label?: string;
  showSeparator?: boolean;
  items: MenuItemType[];
};

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

const dummyItems: MenuItemType[] = [
  {
    variant: MenuItemVariant.DEFAULT,
    text: "Edit",
    slot1: <PencilIcon size={12} />,
    onClick: () => alert("Edit clicked"),
  },
  {
    variant: MenuItemVariant.ACTION,
    text: "Delete",
    onClick: () => alert("Delete clicked"),
  },
  {
    variant: MenuItemVariant.MULTISELECT,
    text: "Select All",
    onClick: () => alert("Select All clicked"),
  },
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
];

export const Menu = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <RadixDropdownMenu.Root open={true}>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <Content style={{ padding: 6 }} sideOffset={8}>
        {dummyItems.map((item, index) =>
          item.subMenu && item.subMenu.items.length > 0 ? (
            <RadixDropdownMenu.Sub key={index}>
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
                <SubContent style={{ padding: 6 }}>
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
                        onClick={subItem.disabled ? undefined : subItem.onClick}
                      >
                        {subItem.slot1 && (
                          <Block size={16} contentCentered>
                            {subItem.slot1}
                          </Block>
                        )}
                        <Block display="flex" flexGrow={1} alignItems="center">
                          <Text variant="body.md" fontWeight={500}>
                            {subItem.text}
                          </Text>
                        </Block>
                        {subItem.slot2 && (
                          <Block size={16} contentCentered>
                            {subItem.slot1}
                          </Block>
                        )}
                        {subItem.slot3 && (
                          <Block size={16} contentCentered>
                            {subItem.slot1}
                          </Block>
                        )}
                        {subItem.slot4 && (
                          <Block size={16} contentCentered>
                            {subItem.slot1}
                          </Block>
                        )}
                      </Block>
                    </RadixDropdownMenu.Item>
                  ))}
                </SubContent>
              </RadixDropdownMenu.Portal>
            </RadixDropdownMenu.Sub>
          ) : (
            <RadixDropdownMenu.Item
              asChild
              key={index}
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
                <Block display="flex" flexGrow={1} alignItems="center">
                  <Text variant="body.md" fontWeight={500}>
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
      </Content>
    </RadixDropdownMenu.Root>
  );
};

export default Menu;
