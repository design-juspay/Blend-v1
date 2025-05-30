import React, { useState } from "react";
import TextInput from "../../../lib/components/Inputs/TextInput/TextInput";
import NumberInput from "../../../lib/components/Inputs/NumberInput/NumberInput";
import TextArea from "../../../lib/components/TextArea/TextArea";
import DropdownInput from "../../../lib/components/DropdownInput/DropdownInput";

import UnitInput from "../../../lib/components/UnitInput/UnitInput";
import { InputSize } from "../../../lib/components/Inputs/TextInput/types";
import { NumberInputSize } from "../../../lib/components/Inputs/NumberInput/types";
import { NumberInputSize as UnitInputSize } from "../../../lib/components/UnitInput/types";

// DropdownInput InputSize is not exported, so define a compatible enum here
const DropdownInputSize = {
  MEDIUM: "medium",
  LARGE: "large",
} as const;

const InputDemo: React.FC = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState<string>("");
  const [dropDownText, setDropDownText] = useState<string>("");
  const [unitValue, setUnitValue] = useState<number>(0);
  const [inputSize, setInputSize] = useState<InputSize>(InputSize.MEDIUM);

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
      <div style={{ marginBottom: 16 }}>
        <span style={{ color: "black", marginRight: 8 }}>Input Size:</span>
        <label style={{ color: "black", marginRight: 8 }}>
          <input
            type="radio"
            name="inputSize"
            value={InputSize.MEDIUM}
            checked={inputSize === InputSize.MEDIUM}
            onChange={() => setInputSize(InputSize.MEDIUM)}
          />
          Md
        </label>
        <label style={{ color: "black" }}>
          <input
            type="radio"
            name="inputSize"
            value={InputSize.LARGE}
            checked={inputSize === InputSize.LARGE}
            onChange={() => setInputSize(InputSize.LARGE)}
          />
          Lg
        </label>
      </div>
      <p style={{ color: "black" }}>Value: {value}</p>
      <TextInput
        label="Full Name"
        name="textInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your full name"
        error={error}
        errorMessage="Name is required."
        hintText="Please enter your legal name as per your documents."
        helpIconHintText="This will be used for verification."
        disabled={disabled}
        size={inputSize}
      />

      {/* <div style={{ height: 100 }}></div>
      <TextInput
        variant={InputVariant.SEARCH}
        placeholder="Search"
        label="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        error={error}
        errorMessage="This is an error message."
      /> */}
      <div style={{ height: 100 }}></div>
      <p style={{ color: "black" }}>Value: {numberValue}</p>
      <NumberInput
        name="numberInput"
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
        size={
          inputSize === InputSize.MEDIUM
            ? NumberInputSize.MEDIUM
            : NumberInputSize.LARGE
        }
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
        size={
          inputSize === InputSize.MEDIUM
            ? DropdownInputSize.MEDIUM
            : DropdownInputSize.LARGE
        }
      />

      <div style={{ height: 100 }}></div>
      <p style={{ color: "black" }}>Value: {unitValue}</p>
      <div style={{ width: "100%" }}>
        <UnitInput
          value={unitValue}
          onChange={(e) => setUnitValue(Number(e.target.value))}
          label="Unit Input"
          error={error}
          errorMessage="This is an error message."
          placeholder="Enter your number"
          min={0}
          step={100000000}
          disabled={disabled}
          hintText="This is a hint text to help user."
          helpIconHintText="This is a help icon hint text to help "
          size={
            inputSize === InputSize.MEDIUM
              ? UnitInputSize.MEDIUM
              : UnitInputSize.LARGE
          }
        />
      </div>
      <div style={{ height: 400 }}></div>
    </div>
  );
};

export default InputDemo;
