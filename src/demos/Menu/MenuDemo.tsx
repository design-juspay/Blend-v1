import { AlertTriangle, Bell, CreditCard, Lock, LogOut, Palette, Shield,   Trash, User } from "lucide-react";
import { Button } from "../../../lib/components/Button";
import Block from "../../../lib/components/Primitives/Block/Block";
import Menu from "../../../lib/components/Menu/Menu";
import Select from "../../../lib/components/Select/Select";
import { useState } from "react";
import { MenuAlignment } from "../../../lib/components/Menu/types";
import {
  SelectMenuAlignment,
  SelectMenuSize,
  SelectMenuVariant,
} from "../../../lib/components/Select/types";
import MultiSelect from "../../../lib/components/MultiSelect/MultiSelect";
import { Tag } from "../../../lib/main";
import { FOUNDATION_THEME } from "../../../lib/tokens";

export const dummyMenuItems = [
  {
    groupLabel: "Account",
    showSeparator: true,
    items: [
      {
        label: "Profile",
        value: "profile",
        slot1: <User size={16} />,
        subLabel: "Manage your personal information"
      },
      {
        label: "Security",
        value: "security",
        slot1: <Shield size={16} />,
        subMenu: [
          {
            label: "Password",
            value: "password",
            subLabel: "Change your password"
          },
          {
            label: "Two-Factor Auth",
            value: "2fa",
            subLabel: "Enable 2FA for extra security"
          }
        ]
      },
      {
        label: "Billing",
        value: "billing",
        slot2: <Tag text="Pro" />,
        slot3: <Tag text="Active" />,
        slot4: <Tag text="Free" />,
        slot1: <CreditCard size={16} />,
        subMenu: [
          {
            label: "Payment Methods",
            value: "payment-methods",
            subLabel: "Manage your cards and billing info"
          },
          {
            label: "Subscription",
            value: "subscription",
            subLabel: "View and manage your plan"
          }
        ]
      },
      {
        label: "Sign Out",
        value: "sign-out",
        slot1: <LogOut size={16} />
      },
      {
        label: "Delete Account",
        value: "delete-account",
        slot1: <Trash size={16} color={FOUNDATION_THEME.colors.red[500]} />,
        subMenu: [
          {
            label: "Confirm Deletion",
            value: "confirm-deletion",
            subLabel: "This action cannot be undone",
            subMenu: [
              {
                label: "Yes, Delete My Account",
                value: "delete-confirmed",
                slot1: <AlertTriangle size={16} color={FOUNDATION_THEME.colors.gray[500]} />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    groupLabel: "Preferences",
    showSeparator: true,
    items: [
      {
        label: "Appearance",
        value: "appearance",
        slot1: <Palette size={16} />,
        subMenu: [
          {
            label: "Theme",
            value: "theme",
            subLabel: "Choose light or dark mode"
          },
          {
            label: "Accent Color",
            value: "accent-color",
            subLabel: "Customize your interface colors"
          }
        ]
      },
      {
        label: "Notifications",
        value: "notifications",
        slot1: <Bell size={16} />,
        subMenu: [
          {
            label: "Email",
            value: "email-notifications",
            subLabel: "Configure email alerts"
          },
          {
            label: "Push",
            value: "push-notifications",
            subLabel: "Manage push notifications"
          }
        ]
      },
      {
        label: "Privacy",
        value: "privacy",
        slot1: <Lock size={16} />,
        subMenu: [
          {
            label: "Data Usage",
            value: "data-usage",
            subLabel: "Control how your data is used"
          },
          {
            label: "Sharing",
            value: "sharing",
            subLabel: "Manage content sharing settings"
          }
        ]
      }
    ]
  }
];

const MenuDemo = () => {
  // Add state for Select demo
  const [selectedOption, setSelectedOption] = useState("");
  // Add state for multi-select demo
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const [mv, setMv] = useState<string[]>(["profile"]);

  const handleChange = (value: string) => {
    if (value === "") {
      setMv([]);
      return;
    }
    setMv((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

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
        <div style={{ width: "400px" }}>
          <MultiSelect
            selectedValues={mv}
            onChange={handleChange}
            variant={SelectMenuVariant.NO_CONTAINER}
            items={dummyMenuItems}
            label="Multi Select"
            sublabel="Select an option"
            disabled={false}
            helpIconHintText="Help icon text"
            name="multi-select"
            required={true}
            placeholder="Select an option"
            size={SelectMenuSize.LARGE}
            hintText="Hint text"
            alignment={SelectMenuAlignment.START}
            minWidth={300}
          />
        </div>
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
            variant={SelectMenuVariant.NO_CONTAINER}
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
