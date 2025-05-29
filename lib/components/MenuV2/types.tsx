import { Settings2 } from "lucide-react";
import { Tag, TagColor, TagShape, TagSize } from "../Tags";

export enum MenuAlignment {
  START = "start",
  CENTER = "center",
  END = "end",
}

export enum MenuSide {
  TOP = "top",
  LEFT = "left",
  RIGHT = "right",
  BOTTOM = "bottom",
}

export type MenuV2Props = {
  trigger: React.ReactNode;
  items?: MenuV2GroupType[];
  asModal?: boolean;
  alignment?: MenuAlignment;
  side?: MenuSide;
  sideOffset?: number;
  alignOffset?: number;
  collisonBoundaryRef?: Element | null | Array<Element | null>;
  maxHeight?: number;
};

export enum MenuItemV2Variant {
  DEFAULT = "default",
  ACTION = "action",
}

export enum MenuItemV2ActionType {
  PRIMARY = "primary",
  DANGER = "danger",
}

export type MenuItemV2Type = {
  label: string;
  subLabel?: string;
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  variant?: MenuItemV2Variant;
  actionType?: MenuItemV2ActionType;
  disabled?: boolean;
  onClick?: () => void;
  subMenu?: MenuItemV2Type[];
};

export type MenuV2GroupType = {
  label?: string;
  items: MenuItemV2Type[];
  showSeparator?: boolean;
};

export const dummyMenuItems: MenuV2GroupType[] = [
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
        // subLabel: "Manage your payment methods and plans",
        onClick: () => alert("Billing"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.DEFAULT,
      },
      {
        label: "Sign Out",
        // subLabel: "Sign out of your account",
        onClick: () => alert("Sign Out"),
        slot1: <Settings2 size={13} />,
        variant: MenuItemV2Variant.ACTION,
        actionType: MenuItemV2ActionType.PRIMARY,
      },
      {
        label: "Delete Account",
        // subLabel: "Permanently delete your account and all data",
        onClick: () => alert("Delete Account"),
        slot1: <Settings2 size={13} />,
        // slot2: <Terminal size={13} />,
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
        slot1: <Settings2 size={13} />,
        subMenu: [
          {
            label: "Email Notifications",
            subLabel: "Receive updates via email",
            slot1: <Settings2 size={13} />,
            onClick: () => alert("Email Notifications"),
            subMenu: [
              {
                label: "Slack",
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
