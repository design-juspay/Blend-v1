import React from "react";
import Popover from "../../../lib/components/Popover/Popover";

import "./PopoverDemo.css";
import Block from "../../../lib/components/Primitives/Block/Block";
import {
  addSnackbar,
  ButtonTypeV2,
  ButtonV2,
  useTheme,
} from "../../../lib/main";
import { PopoverSize } from "../../../lib/components/Popover/types";

const PopoverDemo: React.FC = () => {
  const onOpenChange = (open: boolean) => {
    addSnackbar({
      header: `Popover is ${open ? "open" : "closed"}`,
    });
  };

  const onClose = () => {
    alert("Popover closed");
  };

  const { foundationTokens } = useTheme();
  return (
    <div className="popover-demo">
      <h1>Popover Component Demo</h1>

      <Popover
        trigger={<ButtonV2 text="Open Popover"></ButtonV2>}
        heading="Popover Heading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        showCloseButton={true}
        size={PopoverSize.MEDIUM}
        onOpenChange={onOpenChange}
        onClose={onClose}
        align="start"
        side="right"
        primaryAction={{
          text: "Accept",
          onClick: () => {},
        }}
        secondaryAction={{
          text: "Reject",
          buttonType: ButtonTypeV2.SECONDARY,
          onClick: () => {},
        }}
      >
        <Block
          height={100}
          border={`1px dashed ${foundationTokens.colors.purple[500]}`}
          borderRadius={4}
          backgroundColor={foundationTokens.colors.purple[200]}
        ></Block>
      </Popover>
    </div>
  );
};

export default PopoverDemo;
