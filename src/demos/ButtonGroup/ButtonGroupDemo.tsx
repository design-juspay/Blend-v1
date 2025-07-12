import { ButtonGroupV2 } from "../../../lib/components/ButtonGroupV2";
import { Trash, PlusIcon, Edit2 } from "lucide-react";
import { ButtonSizeV2, ButtonTypeV2, ButtonV2 } from "../../../lib/main";

const ButtonGroupDemo = () => {
  return (
    <div
      className="component-demo"
      style={{ display: "flex", gap: "10px", flexDirection: "column" }}
    >
      <ButtonGroupV2 stacked>
        <ButtonV2
          buttonType={ButtonTypeV2.SECONDARY}
          text="Add"
          leadingIcon={<PlusIcon size={14} />}
          size={ButtonSizeV2.LARGE}
        />
        <ButtonV2
          buttonType={ButtonTypeV2.SECONDARY}
          text="Cancel"
          leadingIcon={<Edit2 size={14} />}
          size={ButtonSizeV2.LARGE}
        />
        <ButtonV2
          buttonType={ButtonTypeV2.DANGER}
          text="Delete"
          leadingIcon={<Trash size={14} />}
          size={ButtonSizeV2.LARGE}
        />
      </ButtonGroupV2>
      <ButtonGroupV2>
        <ButtonV2
          buttonType={ButtonTypeV2.SECONDARY}
          text="Add"
          leadingIcon={<PlusIcon size={14} />}
        />
        <ButtonV2
          buttonType={ButtonTypeV2.SECONDARY}
          text="Cancel"
          leadingIcon={<Edit2 size={14} />}
        />
        <ButtonV2
          buttonType={ButtonTypeV2.DANGER}
          text="Delete"
          leadingIcon={<Trash size={14} />}
        />
      </ButtonGroupV2>
    </div>
  );
};

export default ButtonGroupDemo;
