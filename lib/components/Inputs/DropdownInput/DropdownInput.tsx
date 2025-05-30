import { HelpCircleIcon } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { Tooltip, TooltipSize } from "../Tooltip";
import Select from "../Select/Select";
import PrimitiveInput from "../Primitives/PrimitiveInput/PrimitiveInput";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { SelectMenuVariant } from "../Select/types";

enum InputSize {
  MEDIUM = "medium",
  LARGE = "large",
}
type DropdownInputProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownValue: string;
  onDropdownChange: (value: string) => void;
  placeholder?: string;
  dropdownPlaceholder?: string;
  disabled?: boolean;
  sublabel?: string;
  helpIconHintText?: string;
  error?: boolean;
  errorMessage?: string;
  hintText?: string;
  size?: InputSize;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

const DropdownInput = ({
  label,
  options,
  value,
  onChange,
  dropdownValue,
  onDropdownChange,
  placeholder,
  dropdownPlaceholder,
  disabled,
  sublabel,
  helpIconHintText,
  error,
  errorMessage,
  hintText,
  leftSlot,
  rightSlot,
  size = InputSize.LARGE,
}: DropdownInputProps) => {
  const leftSlotRef = useRef<HTMLDivElement>(null);
  const rightSlotRef = useRef<HTMLDivElement>(null);

  const [leftSlotWidth, setLeftSlotWidth] = useState(0);
  const [rightSlotWidth, setRightSlotWidth] = useState(0);

  useEffect(() => {
    if (leftSlotRef.current) {
      setLeftSlotWidth(leftSlotRef.current.offsetWidth);
    } else {
      setLeftSlotWidth(0);
    }
    if (rightSlotRef.current) {
      setRightSlotWidth(rightSlotRef.current.offsetWidth);
    } else {
      setRightSlotWidth(0);
    }
  }, [leftSlot, rightSlot]);

  const paddingX = size === InputSize.MEDIUM ? 12 : 14;
  const paddingY = size === InputSize.MEDIUM ? 8 : 10;

  const paddingInlineStart = leftSlot ? paddingX + leftSlotWidth + 8 : paddingX;
  const paddingInlineEnd = rightSlot
    ? paddingX + rightSlotWidth + 8
    : paddingX + 50;
  return (
    <Block display="flex" flexDirection="column" gap={8} width={"100%"}>
      <Block display="flex" alignItems="center" gap={4}>
        <Text
          as="label"
          variant="body.md"
          fontWeight={500}
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[400]
              : FOUNDATION_THEME.colors.gray[700]
          }
          style={{ margin: 0, padding: 0 }}
        >
          {label}
        </Text>
        {sublabel && (
          <Text
            variant="body.md"
            fontWeight={400}
            color={
              disabled
                ? FOUNDATION_THEME.colors.gray[300]
                : FOUNDATION_THEME.colors.gray[400]
            }
            margin={0}
          >
            (optional)
          </Text>
        )}
        {helpIconHintText && (
          <Block contentCentered size={16}>
            <Tooltip content={helpIconHintText} size={TooltipSize.SMALL}>
              <HelpCircleIcon
                size={14}
                color={FOUNDATION_THEME.colors.gray[400]}
              />
            </Tooltip>
          </Block>
        )}
      </Block>

      <Block position="relative">
        {/* <Select
          placeholder="United States"
          label="Country"
          selected={dropdownValue}
          allowMultiSelect={false}
          onSelectChange={(value) =>
            onDropdownChange(Array.isArray(value) ? value[0] : value)
          }
        /> */}
        <Block position="absolute" right={0} top={0}>
          <Select
            placeholder="Code"
            variant={SelectMenuVariant.NO_CONTAINER}
            label="Country"
            selected={dropdownValue}
            allowMultiSelect={false}
            onSelectChange={(value) =>
              onDropdownChange(Array.isArray(value) ? value[0] : value)
            }
          />
        </Block>
        <PrimitiveInput
          value={value}
          onChange={onChange}
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          placeholder={placeholder}
          borderRadius={8}
          boxShadow={FOUNDATION_THEME.shadows.sm}
          border={
            error
              ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
              : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
          }
          outline="none"
          width={"100%"}
          _hover={{
            border: `1px solid ${FOUNDATION_THEME.colors.gray[400]}`,
          }}
          color={FOUNDATION_THEME.colors.gray[800]}
          _focusVisible={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          _focus={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: FOUNDATION_THEME.colors.gray[200],
            border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            cursor: "not-allowed",
          }}
        />
      </Block>
      {error && errorMessage && (
        <Text variant="body.md" color={FOUNDATION_THEME.colors.red[500]}>
          {errorMessage}
        </Text>
      )}
      {hintText && !error && (
        <Text
          variant="body.md"
          fontWeight={400}
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[300]
              : FOUNDATION_THEME.colors.gray[500]
          }
        >
          {hintText}
        </Text>
      )}
    </Block>
  );
};

export default DropdownInput;
