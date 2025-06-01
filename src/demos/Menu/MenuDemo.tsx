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
import MenuV2 from "../../../lib/components/MenuV2/MenuV2";
import Select from "../../../lib/components/Select/Select";
import { useState } from "react";
import { SelectMenuVariant } from "../../../lib/components/Select/types";

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
  // Add state for Select demo
  const [selectedOption, setSelectedOption] = useState("");
  // Add state for multi-select demo
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
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
        <MenuV2 trigger={<Button text="Open MenuV2" onClick={() => {}} />} />
        <p style={{ color: "black" }}>{selectedOption}</p>
        <div style={{ width: "300px" }}>
          <Select
            enableSearch={true}
            placeholder="Gateway"
            // variant={SelectMenuVariant.NO_CONTAINER}
            label="Select an option"
            selected={selectedOption}
            onSelectChange={(value) => {
              if (typeof value === "string") setSelectedOption(value);
            }}
          />
        </div>
        {/* Multi-select demo */}
        <div >
          <Select
            enableSearch={true}
            label="Multi Select"
            variant={SelectMenuVariant.NO_CONTAINER}
            placeholder="Gateway"
            allowMultiSelect
            selected={multiSelected}
            onSelectChange={(value) =>
              Array.isArray(value) && setMultiSelected(value)
            }
          />
        </div>
        <div style={{ marginTop: 8, color: "black" }}>
          Selected:{" "}
          {multiSelected.length > 0 ? multiSelected.join(", ") : "None"}
        </div>
      </Block>
    </div>
  );
};

export default MenuDemo;

