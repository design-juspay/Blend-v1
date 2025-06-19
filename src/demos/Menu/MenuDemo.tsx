import {
  AlertTriangle,
  Bell,
  CreditCard,
  Lock,
  LogOut,
  Palette,
  Shield,
  Trash,
  User,
} from "lucide-react";
import Block from "../../../lib/components/Primitives/Block/Block";
import Menu from "../../../lib/components/Menu/Menu";
import Select, {
  SelectionTagType,
} from "../../../lib/components/Select/Select";
import { useState } from "react";
import {
  MenuAlignment,
  MenuItemV2ActionType,
  MenuItemV2Variant,
  MenuSide,
  MenuV2GroupType,
} from "../../../lib/components/Menu/types";
import {
  SelectMenuAlignment,
  SelectMenuSize,
  SelectMenuVariant,
} from "../../../lib/components/Select/types";
import MultiSelect from "../../../lib/components/MultiSelect/MultiSelect";
import { addSnackbar, ButtonV2, Tag } from "../../../lib/main";
import { FOUNDATION_THEME } from "../../../lib/tokens";
import SingleSelect from "../../../lib/components/SingleSelect/SingleSelect";
import { Settings2 } from "lucide-react";
import { TagColor, TagShape, TagSize } from "../../../lib/components/Tags";

export const dummyMenuItems = [
  {
    groupLabel: "Account",
    showSeparator: true,
    items: [
      {
        label: "Profile",
        value: "profile",
        slot1: <User size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subLabel: "Manage your personal information",
      },
      {
        label: "Security",
        value: "security",
        slot1: <Shield size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subMenu: [
          {
            label: "Password",
            value: "password",
            subLabel: "Change your password",
          },
          {
            label: "Two-Factor Auth",
            value: "2fa",
            subLabel: "Enable 2FA for extra security",
          },
        ],
      },
      {
        label: "Billing",
        value: "billing",
        slot2: <Tag text="Pro" />,
        slot3: <Tag text="Active" />,
        slot4: <Tag text="Free" />,
        slot1: (
          <CreditCard size={16} color={FOUNDATION_THEME.colors.gray[500]} />
        ),
        subMenu: [
          {
            label: "Payment Methods",
            value: "payment-methods",
            subLabel: "Manage your cards and billing info",
          },
          {
            label: "Subscription",
            value: "subscription",
            subLabel: "View and manage your plan",
          },
        ],
      },
      {
        label: "Sign Out",
        value: "sign-out",
        slot1: <LogOut size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
      },
      {
        label: "Delete Account",
        value: "delete-account",
        slot1: <Trash size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subMenu: [
          {
            label: "Confirm Deletion",
            value: "confirm-deletion",
            subLabel: "This action cannot be undone",
            subMenu: [
              {
                label: "Yes, Delete My Account",
                value: "delete-confirmed",
                slot1: (
                  <AlertTriangle
                    size={16}
                    color={FOUNDATION_THEME.colors.gray[500]}
                  />
                ),
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
        label: "Appearance",
        value: "appearance",
        slot1: <Palette size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subMenu: [
          {
            label: "Theme",
            value: "theme",
            subLabel: "Choose light or dark mode",
          },
          {
            label: "Accent Color",
            value: "accent-color",
            subLabel: "Customize your interface colors",
          },
        ],
      },
      {
        label: "Notifications",
        value: "notifications",
        slot1: <Bell size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subMenu: [
          {
            label: "Email",
            value: "email-notifications",
            subLabel: "Configure email alerts",
          },
          {
            label: "Push",
            value: "push-notifications",
            subLabel: "Manage push notifications",
          },
        ],
      },
      {
        label: "Privacy",
        value: "privacy",
        slot1: <Lock size={16} color={FOUNDATION_THEME.colors.gray[500]} />,
        subMenu: [
          {
            label: "Data Usage",
            value: "data-usage",
            subLabel: "Control how your data is used",
          },
          {
            label: "Sharing",
            value: "sharing",
            subLabel: "Manage content sharing settings",
          },
        ],
      },
    ],
  },
];

const dummyMenuItemsV2: MenuV2GroupType[] = [
  {
    label: "Account GGWP",
    showSeparator: true,
    items: [
      {
        label: "Profile Settings",
        onClick: () => alert("Profile Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Billing & Subscription",
        onClick: () => alert("Billing"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Sign Out",
        onClick: () => alert("Sign Out"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.PRIMARY,
        // disabled: true,
      },
      {
        label: "Delete Account",
        subLabel: "Permanently delete your account and all data",
        onClick: () => alert("Delete Account"),
        slot1: <Settings2 size={13} />,
        // disabled: true,

        slot3: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.ERROR}
            size={TagSize.XS}
            text="Permanent"
          />
        ),
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.DANGER,
      },
    ],
  },
  {
    label: "Workspace",
    showSeparator: true,
    items: [
      {
        label: "Workspace Settings",
        // subLabel: "Configure workspace preferences",
        onClick: () => alert("Workspace Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Members & Permissions",
        // subLabel: "Manage team members and their roles",
        onClick: () => alert("Members"),
        slot1: <Settings2 size={13} />,
        slot2: (
          <Tag
            shape={TagShape.ROUNDED}
            color={TagColor.SUCCESS}
            size={TagSize.XS}
            text="8 members"
          />
        ),
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Integrations",
        subLabel: "Connect third-party apps and services",
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Slack",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Connect your Slack workspace",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Slack"),
          },
          {
            label: "GitHub",
            subLabel: "Link your GitHub repositories",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect GitHub"),
          },
          {
            label: "Google Drive",
            subLabel: "Sync with Google Drive",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Connect Google Drive"),
          },
        ],
      },
    ],
  },
  {
    label: "Preferences",
    items: [
      {
        label: "Notifications",
        subLabel: "Configure your notification preferences",
        actionType: MenuItemV2ActionType.DANGER,
        variant: MenuItemV2Variant.ACTION,
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Email Notifications",
            variant: MenuItemV2Variant.ACTION,
            actionType: MenuItemV2ActionType.PRIMARY,
            subLabel: "Receive updates via email",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Email Notifications"),
            subMenu: [
              {
                label: "Slack",
                variant: MenuItemV2Variant.ACTION,
                actionType: MenuItemV2ActionType.DANGER,
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Slack"),
              },
              {
                label: "GitHub",
                subLabel: "Link your GitHub repositories",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect GitHub"),
              },
              {
                label: "Google Drive",
                subLabel: "Sync with Google Drive",
                slot1: <Settings2 size={13} />,
                onClick: () => alert("Connect Google Drive"),
              },
            ],
          },
          {
            label: "Push Notifications",
            subLabel: "Get notifications on your device",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Push Notifications"),
          },
          {
            label: "Slack Notifications",
            subLabel: "Receive alerts in Slack",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Slack Notifications"),
          },
        ],
      },
      {
        label: "Theme",
        subLabel: "Customize your interface appearance",
        onClick: () => alert("Theme Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Language & Region",
        subLabel: "Set your language and timezone",
        onClick: () => alert("Language Settings"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
    ],
  },
];

const MenuDemo = () => {
  // Add state for Select demo
  const [selectedOption, setSelectedOption] = useState("");
  // Add state for multi-select demo
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const [mv, setMv] = useState<string[]>(["profile"]);

  // Controls for container type, size, and selectionTagType
  const [containerType, setContainerType] = useState<SelectMenuVariant>(
    SelectMenuVariant.CONTAINER
  );
  const [menuSize, setMenuSize] = useState<SelectMenuSize>(
    SelectMenuSize.SMALL
  );
  const [tagType, setTagType] = useState<SelectionTagType>(
    SelectionTagType.COUNT
  );

  const handleChange = (value: string) => {
    if (value === "") {
      setMv([]);
      return;
    }
    setMv((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const [singleSelected, setSingleSelected] = useState("");
  const handleSingleSelect = (value: string) => {
    addSnackbar({ header: "value updataed" });
    if (value === singleSelected) {
      setSingleSelected("");
      return;
    }
    setSingleSelected(value);
  };

  // Helper for control dropdowns
  const controlOptions = {
    containerType: [
      { label: "Container", value: SelectMenuVariant.CONTAINER },
      { label: "No Container", value: SelectMenuVariant.NO_CONTAINER },
    ],
    menuSize: [
      { label: "Small", value: SelectMenuSize.SMALL },
      { label: "Medium", value: SelectMenuSize.MEDIUM },
      { label: "Large", value: SelectMenuSize.LARGE },
    ],
    tagType: [
      { label: "Count", value: SelectionTagType.COUNT },
      { label: "Text", value: SelectionTagType.TEXT },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu Component</h2>
      {/* Controls for container type, size, and selectionTagType */}
      <Block display="flex" gap={24} style={{ marginBottom: 32 }}>
        <div style={{ width: 180 }}>
          <Select
            items={[
              { groupLabel: undefined, items: controlOptions.containerType },
            ]}
            label="Container Type"
            selected={containerType}
            onSelectChange={(v) =>
              typeof v === "string" && setContainerType(v as SelectMenuVariant)
            }
            enableSearch={false}
            placeholder="Container Type"
          />
        </div>
        <div style={{ width: 180 }}>
          <Select
            items={[{ groupLabel: undefined, items: controlOptions.menuSize }]}
            label="Size"
            selected={menuSize}
            onSelectChange={(v) =>
              typeof v === "string" && setMenuSize(v as SelectMenuSize)
            }
            enableSearch={false}
            placeholder="Size"
          />
        </div>
        <div style={{ width: 180 }}>
          <Select
            items={[{ groupLabel: undefined, items: controlOptions.tagType }]}
            label="Selection Tag Type"
            selected={tagType}
            onSelectChange={(v) =>
              typeof v === "string" && setTagType(v as SelectionTagType)
            }
            enableSearch={false}
            placeholder="Selection Tag Type"
          />
        </div>
      </Block>
      <Block
        contentCentered
        display="flex"
        flexDirection="column"
        gap={100}
        style={{ marginTop: "20px" }}
      >
        <div style={{ width: "400px" }}>
          <p style={{ color: "black", paddingBottom: 16 }}>
            Current Selected: {singleSelected ? singleSelected : "None"}
          </p>
          <SingleSelect
            enableSearch={false}
            selected={singleSelected}
            onSelect={handleSingleSelect}
            items={dummyMenuItems}
            label="Single Select"
            subLabel="Select an option"
            placeholder="Select an option"
            hintText="Hint text"
            helpIconText="Help icon text"
            required={true}
            name="single-select"
            size={menuSize}
            variant={containerType}
          />
        </div>
        <div style={{ width: "400px" }}>
          <MultiSelect
            selectedValues={mv}
            onChange={handleChange}
            variant={containerType}
            selectionTagType={tagType}
            size={menuSize}
            items={dummyMenuItems}
            label="Gateway"
            sublabel="Select an option"
            disabled={false}
            helpIconHintText="Help icon text"
            name="multi-select"
            required={true}
            placeholder="Select an option"
            hintText="Hint text"
            alignment={SelectMenuAlignment.START}
            minWidth={300}
            maxWidth={500}
          />
        </div>
        <Menu
          items={dummyMenuItemsV2}
          alignment={MenuAlignment.END}
          enableSearch={true}
          // maxHeight={300}
          minWidth={300}
          side={MenuSide.TOP}
          trigger={<ButtonV2 text="Open MenuV2" onClick={() => {}} />}
        />
        <p style={{ color: "black" }}>{selectedOption}</p>
        <div style={{ width: "300px" }}>
          <Select
            items={dummyMenuItems}
            slot={<User size={16} />}
            enableSearch={true}
            placeholder="Gateway"
            variant={containerType}
            size={menuSize}
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
            variant={containerType}
            size={menuSize}
            selectionTagType={tagType}
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
