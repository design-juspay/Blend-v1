import React, { useState } from "react";
import Input, { InputVariant } from "../../../lib/components/Input/Input";
import NumberInput from "../../../lib/components/NumberInput/NumberInput";
import TextArea from "../../../lib/components/TextArea/TextArea";
import DropdownInput from "../../../lib/components/DropdownInput/DropdownInput";
import { Tag, TagShape } from "../../../lib/main";
import { Search } from "lucide-react";

const InputDemo: React.FC = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [dropDownText, setDropDownText] = useState<string>("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <label style={{ marginRight: 8, color: "black" }}>
          <input
            type="checkbox"
            checked={error}
            onChange={() => setError((e) => !e)}
          />
          Error
        </label>
        <label style={{ color: "black" }}>
          <input
            type="checkbox"
            checked={disabled}
            onChange={() => setDisabled((d) => !d)}
          />
          Disabled
        </label>
      </div>
      <p style={{ color: "black" }}>Value: {value}</p>
      <Input
        label="Full Name"
        value={value}
        // leftSlot={<Search size={16} color="black" />}
        leftSlot={<Tag text="Tag" />}
        // variant={InputVariant.SEARCH}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your full name"
        error={error}
        errorMessage="Name is required."
        hintText="Please enter your legal name as per your documents."
        helpIconHintText="This will be used for verification."
        disabled={disabled}
      />

      <div style={{ height: 100 }}></div>
      <Input
        variant={InputVariant.SEARCH}
        placeholder="Search"
        label="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        error={error}
        errorMessage="This is an error message."
      />
      <div style={{ height: 100 }}></div>
      <p style={{ color: "black" }}>Value: {numberValue}</p>
      <NumberInput
        value={numberValue}
        onChange={(e) => setNumberValue(Number(e.target.value))}
        label="Number Input"
        hintText="This is a hint text to help user."
        helpIconHintText="This is a help icon hint text to help user."
        disabled={disabled}
        sublabel="This is a sublabel to help user."
        error={error}
        errorMessage="This is an error message."
        placeholder="Enter your number"
        max={100}
        // min={0}
        step={5}
      />
      <div style={{ height: 100 }}></div>
      <p style={{ color: "black" }}>Value: {numberValue}</p>
      <TextArea
        placeholder="Enter your text"
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        label="Text Area"
        helpIconHintText="This is a hint text to help user."
        helpIconText="This is a help icon hint text to help user."
        disabled={disabled}
        error={error}
        cols={10}
        errorMessage="This is an error message."
        hintText="This is a hint text to help user."
      />
      <div style={{ height: 100 }}></div>
      <p style={{ color: "black" }}>Value: {dropDownText}</p>
      <p style={{ color: "black" }}>Value: {dropdownValue}</p>
      <DropdownInput
        label="Country"
        options={["United States", "Canada", "Mexico"]}
        value={dropDownText}
        onChange={(e) => setDropDownText(e.target.value)}
        dropdownValue={dropdownValue}
        onDropdownChange={(value) => setDropdownValue(value)}
      />
    </div>
  );
};

export default InputDemo;
