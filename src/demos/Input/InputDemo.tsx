import React, { useState } from "react";
import { User2 } from "lucide-react";
import { SelectMenuGroupType } from "../../../lib/components/Select/types";
import {
  DropdownInput,
  TextInputSize,
  MultiValueInput,
  NumberInput,
  NumberInputSize,
  OTPInput,
  SearchInput,
  Tag,
  TagColor,
  TagShape,
  TagSize,
  TextInput,
  UnitInput,
  UnitInputSize,
  TextArea,
  UnitPosition,
} from "../../../lib/main";

import Select from "../../../lib/components/Select/Select";

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
  const [inputSize, setInputSize] = useState<TextInputSize>(
    TextInputSize.MEDIUM
  );
  const [otp1, setOtp1] = useState("");
  const [selectedInput, setSelectedInput] = useState<string>("dropdown");
  const [tags, setTags] = useState<string[]>([
    "Tag 1",
    "Tag 2",
    "Tag 3",
    "Tag 4",
    "Tag 5",
    "Tag 6",
    "Tag 7",
    "Tag 8",
    "Tag 9",
    "Tag 10",
    "Tag 11",
    "Tag 12",
    "Tag 13",
    "Tag 14",
    "Tag 15",
    "Tag 16",
    "Tag 17",
  ]);

  const items: SelectMenuGroupType[] = [
    {
      groupLabel: "Americas",
      items: [
        { label: "US", value: "US" },
        { label: "CA", value: "CA" },
        { label: "AU", value: "AU" },
      ],
    },
    {
      groupLabel: "Europe",
      items: [
        { label: "UK", value: "UK" },
        { label: "DE", value: "DE" },
      ],
    },
    {
      groupLabel: "Asia",
      items: [
        { label: "JP", value: "JP" },
        { label: "CN", value: "CN" },
        { label: "IN", value: "IN" },
      ],
    },
  ];

  const inputOptions = [
    { label: "Text Input", value: "text" },
    { label: "Number Input", value: "number" },
    { label: "Dropdown Input", value: "dropdown" },
    { label: "Search Input", value: "search" },
    { label: "OTP Input", value: "otp" },
    { label: "Text Area", value: "textarea" },
    { label: "Unit Input", value: "unit" },
    { label: "Multi Value Input", value: "multi-value-input" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 400,
        padding: 16,
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <Select
          label="Input Type"
          placeholder="Select input type"
          items={[
            {
              groupLabel: "Input Types",
              items: inputOptions.map((opt) => ({
                label: opt.label,
                value: opt.value,
              })),
            },
          ]}
          selected={selectedInput}
          onSelectChange={(val) => setSelectedInput(val as string)}
          required={false}
        />
      </div>
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
            value={TextInputSize.MEDIUM}
            checked={inputSize === TextInputSize.MEDIUM}
            onChange={() => setInputSize(TextInputSize.MEDIUM)}
          />
          Md
        </label>
        <label style={{ color: "black" }}>
          <input
            type="radio"
            name="inputSize"
            value={TextInputSize.LARGE}
            checked={inputSize === TextInputSize.LARGE}
            onChange={() => setInputSize(TextInputSize.LARGE)}
          />
          Lg
        </label>
      </div>
      {selectedInput === "dropdown" && (
        <div style={{ marginTop: 0 }}>
          <p style={{ color: "black" }}>Dropdown Text: {dropDownText}</p>
          <p style={{ color: "black", marginBottom: 20 }}>
            Dropdown Value: {dropdownValue}
          </p>
          <DropdownInput
            slot={
              <Tag
                size={TagSize.XS}
                text="Global Search"
                color={TagColor.PURPLE}
                shape={TagShape.ROUNDED}
              />
            }
            size={inputSize}
            label="Dropdown Input"
            sublabel="This is a sublabel to help user."
            required
            error={error}
            errorMessage="This is an error message."
            hintText="This is a hint text to help user."
            disabled={disabled}
            helpIconHintText="This is a help icon hint text to help user."
            name="dropdownInput"
            value={dropDownText}
            onChange={(e) => setDropDownText(e.target.value)}
            dropDownValue={dropdownValue}
            onDropDownChange={setDropdownValue}
            placeholder="Country"
            dropDownItems={items}
          />
        </div>
      )}
      {selectedInput === "text" && (
        <>
          <p style={{ color: "black" }}>Value: {value}</p>
          <TextInput
            label="Full Name"
            name="textInput"
            required
            disabled={disabled}
            size={inputSize}
            value={value}
            error={error}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your full name"
            errorMessage="Name is required."
            hintText="Please enter your legal name as per your documents."
            helpIconHintText="This will be used for verification."
            rightSlot={<User2 color="black" size={14} />}
          />
        </>
      )}
      {selectedInput === "search" && (
        <>
          <div style={{ height: 100 }}></div>
          <SearchInput
            rightSlot={
              <Tag
                size={TagSize.XS}
                text="Global Search"
                color={TagColor.PURPLE}
                shape={TagShape.ROUNDED}
              />
            }
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            error={error}
          />
        </>
      )}
      {selectedInput === "number" && (
        <>
          <p style={{ color: "black" }}>Value: {numberValue}</p>
          <NumberInput
            required
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
            step={1}
            size={
              inputSize === TextInputSize.MEDIUM
                ? NumberInputSize.MEDIUM
                : NumberInputSize.LARGE
            }
          />
        </>
      )}
      {selectedInput === "otp" && (
        <div style={{ marginTop: 100 }}>
          <p style={{ color: "black", marginBottom: 50 }}>Value: {otp1}</p>
          <OTPInput
            form="otp1"
            value={otp1}
            onChange={(e) => setOtp1(e)}
            label="OTP"
            sublabel="optional"
            required
            helpIconHintText="This is a help icon hint text to help user."
            hintText="This is a hint text to help user."
            error={error}
            errorMessage="This is an error message."
            disabled={disabled}
          />
        </div>
      )}
      {selectedInput === "textarea" && (
        <>
          <p style={{ color: "black" }}>Value: {textAreaValue}</p>
          <TextArea
            required
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
        </>
      )}
      {selectedInput === "unit" && (
        <>
          <p style={{ color: "black" }}>Value: {unitValue} kgs</p>
          <div style={{ width: "100%" }}>
            <UnitInput
              unit="kgs"
              value={unitValue}
              onChange={(e) => setUnitValue(Number(e.target.value))}
              label="Unit Input"
              name="unitInput"
              sublabel="This is a sublabel to help user."
              required
              error={error}
              errorMessage="This is an error message."
              placeholder="Enter your number"
              min={0}
              step={1000}
              disabled={disabled}
              unitPosition={UnitPosition.LEFT}
              hintText="This is a hint text to help user."
              helpIconHintText="This is a help icon hint text to help "
              size={
                inputSize === TextInputSize.MEDIUM
                  ? UnitInputSize.MEDIUM
                  : UnitInputSize.LARGE
              }
            />
          </div>
        </>
      )}
      {selectedInput === "multi-value-input" && (
        <>
          <p style={{ color: "black" }}>Values: {tags.join(", ")}</p>
          <div style={{ width: "100%" }}>
            <MultiValueInput
              label="Multi Value Input"
              sublabel="This is a sublabel to help user."
              disabled={disabled}
              error={error}
              errorMessage="This is an error message."
              hintText="This is a hint text to help user."
              helpIconHintText="This is a help icon hint text to help user."
              required
              tags={tags}
              onTagAdd={(tag) => setTags([...tags, tag])}
              onTagRemove={(tag) => setTags(tags.filter((t) => t !== tag))}
              size={inputSize}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default InputDemo;
