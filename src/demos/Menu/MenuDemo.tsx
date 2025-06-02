import { Trash, User } from "lucide-react";
import { Button } from "../../../lib/components/Button";
import Block from "../../../lib/components/Primitives/Block/Block";
import Menu from "../../../lib/components/Menu/Menu";
import Select from "../../../lib/components/Select/Select";
import { useState } from "react";
import { MenuAlignment } from "../../../lib/components/Menu/types";

const MenuDemo = () => {
  // Add state for Select demo
  const [selectedOption, setSelectedOption] = useState("");
  // Add state for multi-select demo
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const dummyMenuItems = [
    {
      groupLabel: "Account GGWP",
      showSeparator: true,
      items: [
        {
          label: "Profile Settings",
          value: "profile-settings",
          slot1: <User size={13} />,
        },
        {
          label: "Billing & Subscription",
          value: "billing-subscription",
          subLabel: "Manage your payment methods and plans",
        },
        {
          label: "Sign Out",
          value: "sign-out",
        },
        {
          label: "Delete Account",
          value: "delete-account",
          subMenu: [
            {
              label: "Delete Account",
              value: "delete-account",
              slot1: <Trash size={13} />,
              subMenu: [
                {
                  label: "Are you sure?",
                  value: "are-you-sure",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Preferences",
      showSeparator: true,
      items: [
        {
          label: "Theme Settings",
          value: "theme-settings",
          subLabel: "Customize your appearance",
        },
        {
          label: "Notifications",
          value: "notifications",
        },
        {
          label: "Privacy",
          value: "privacy",
        },
      ],
    },
  ];

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
          alignment={MenuAlignment.END}
          enableSearch={false}
          trigger={<Button text="Open MenuV2" onClick={() => {}} />}
        />
        <p style={{ color: "black" }}>{selectedOption}</p>
        <div style={{ width: "300px" }}>
          <Select
            items={dummyMenuItems}
            slot={<User size={16} />}
            // enableSearch={true}
            enableSearch={false}
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
        <div style={{ width: "300px" }}>
          <Select
            items={dummyMenuItems}
            enableSearch={true}
            label="Multi Select"
            slot={<User size={16} />}
            // variant={SelectMenuVariant.NO_CONTAINER}
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
