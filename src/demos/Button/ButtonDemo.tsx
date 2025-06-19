import React from "react";
import "./ButtonDemo.css";
import ButtonV2 from "../../../lib/components/ButtonV2/ButtonV2";
import {
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "../../../lib/components/ButtonV2/types";
import { Tooltip } from "../../../lib/main";

const ButtonDemo: React.FC = () => {
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
