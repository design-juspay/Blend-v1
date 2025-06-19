import React from "react";
import { Button } from "../../../lib/components/Button";
import {
  ButtonType,
  ButtonSize,
  ButtonSubType,
} from "../../../lib/components/Button/types";
import {
  Send,
  Mail,
  Settings,
  ChevronRight,
  Bell,
  Trash,
  Check,
  Plus,
  CircleAlert,
} from "lucide-react";
import "./ButtonDemo.css";
import ButtonV2 from "../../../lib/components/ButtonV2/ButtonV2";
import {
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "../../../lib/components/ButtonV2/types";
import { Tooltip } from "../../../lib/main";

const ButtonDemo: React.FC = () => {
  const buttonTypes = [
    {
      type: ButtonType.PRIMARY,
      label: "Primary",
      icon: Send,
      color: "#0561E2",
    },
    {
      type: ButtonType.SECONDARY,
      label: "Secondary",
      icon: Mail,
      color: "#666",
    },
    { type: ButtonType.DANGER, label: "Danger", icon: Trash, color: "#E53935" },
    {
      type: ButtonType.SUCCESS,
      label: "Success",
      icon: Check,
      color: "#2E7D32",
    },
  ];

  const buttonSizes = [
    { size: ButtonSize.SMALL, label: "Small" },
    { size: ButtonSize.MEDIUM, label: "Medium" },
    { size: ButtonSize.LARGE, label: "Large" },
  ];

  const buttonSubTypes = [
    { subType: ButtonSubType.DEFAULT, label: "Default" },
    { subType: ButtonSubType.ICON_ONLY, label: "Icon Only" },
    { subType: ButtonSubType.LINK, label: "Link" },
    { subType: ButtonSubType.PLAIN_ICON, label: "Plain Icon" },
  ];

  // Additional states to display
  const buttonStates = [
    { state: "default", label: "Default" },
    { state: "disabled", label: "Disabled" },
  ];

  return (
    <div>
      <Tooltip content="Vinit">
        <ButtonV2
          text="Button"
          buttonType={ButtonTypeV2.PRIMARY}
          subType={ButtonSubTypeV2.ICON_ONLY}
        />
      </Tooltip>
    </div>
  );
};

export default ButtonDemo;
