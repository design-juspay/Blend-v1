import { ChevronRightIcon, CopyIcon, FileIcon, Info, PlusIcon, SettingsIcon } from "lucide-react";
import { Button } from "../../../lib/components/Button";
import Dropdown from "../../../lib/components/Dropdown/Dropdown";
import {
  Menu,
  MenuGroupType,
  MenuItemActionType,
  MenuItemVariant,
} from "../../../lib/components/Menu/Menu";
import Block from "../../../lib/components/Primitives/Block/Block";

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

const MenuDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu Component</h2>
      <Block
        contentCentered
        display="flex"
        flexDirection="column"
        gap={100}
        style={{ marginTop: "20px" }}
      >
        <Menu
          // enableSearch
          items={dummyItems}
          trigger={<Button text="Open Menu" onClick={() => {}} />}
        />

        <Dropdown
          items={dummyItems}
          slot={<Info size={14} color={"black"} />}
        />
      </Block>
    </div>
  );
};

export default MenuDemo;
