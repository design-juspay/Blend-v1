import React from "react";
import "./ButtonDemo.css";
import ButtonV2 from "../../../lib/components/ButtonV2/ButtonV2";
import {
  ButtonSubTypeV2,
  ButtonTypeV2,
} from "../../../lib/components/ButtonV2/types";
import { Tooltip } from "../../../lib/main";
import { User } from "lucide-react";

const ButtonDemo: React.FC = () => {
  return (
    <div style={{ width: 300 }}>
      <Tooltip content="Vinit">
        <ButtonV2
          text="Button"
          fullWidth={true}
          justifyContent="space-between"
          leadingIcon={<User size={16} />}
          trailingIcon={<></>}
          buttonType={ButtonTypeV2.PRIMARY}
          subType={ButtonSubTypeV2.ICON_ONLY}
        />
      </Tooltip>
    </div>
  );
};

export default ButtonDemo;
