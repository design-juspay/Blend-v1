import { Weight } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import PrimitiveInput from "../Primitives/PrimitiveInput/PrimitiveInput";
import { useEffect, useRef, useState } from "react";
import InputFooter from "../Inputs/utils/InputFooter/InputFooter";
import InputLabels from "../Inputs/utils/InputLabels/InputLabels";
import { NumberInputSize, UnitInputProps, UnitPosition } from "./types";

const UnitInput = ({
  value,
  onChange,
  min,
  max,
  step,
  error = true,
  errorMessage,
  required,
  disabled,
  size = NumberInputSize.MEDIUM,
  placeholder,
  sublabel,
  helpIconHintText,
  label = "Number Input",
  hintText,
  leftSlot,
  rightSlot = <Weight size={16} color={FOUNDATION_THEME.colors.gray[400]} />,
  unit,
  unitPosition = UnitPosition.RIGHT,
  name,
}: UnitInputProps) => {
  const paddingX = size === NumberInputSize.MEDIUM ? 12 : 14;
  const paddingY = size === NumberInputSize.MEDIUM ? 8 : 10;

  const leftSlotRef = useRef<HTMLDivElement>(null);
  const rightSlotRef = useRef<HTMLDivElement>(null);
  const unitRef = useRef<HTMLDivElement>(null);

  const [leftSlotWidth, setLeftSlotWidth] = useState(0);
  const [rightSlotWidth, setRightSlotWidth] = useState(0);
  const [unitWidth, setUnitWidth] = useState(0);

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
    if (unitRef.current) {
      setUnitWidth(unitRef.current.offsetWidth);
    } else {
      setUnitWidth(0);
    }
  }, [leftSlot, rightSlot, unit]);

  const paddingInlineStart =
    !leftSlot && unitPosition !== UnitPosition.LEFT
      ? paddingY
      : (unitPosition === UnitPosition.LEFT ? unitWidth + 8 : 8) +
        (leftSlot ? leftSlotWidth + 8 : 0);

  const paddingInlineEnd =
    !rightSlot && unitPosition !== UnitPosition.RIGHT
      ? paddingY
      : (unitPosition === UnitPosition.RIGHT ? unitWidth + 8 : 0) +
        (rightSlot ? rightSlotWidth + 8 : 0);

  const RightUnitSlot = () => {
    return (
      <Block
        ref={unitRef}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        paddingX={12}
        margin={1}
        contentCentered
        backgroundColor={FOUNDATION_THEME.colors.gray[50]}
        borderLeft={
          error
            ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
            : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
        }
        borderRadius={`0px 8px 8px 0px`}
      >
        <Text
          variant="body.md"
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[300]
              : FOUNDATION_THEME.colors.gray[500]
          }
        >
          {unit}
        </Text>
      </Block>
    );
  };

  const LeftUnitSlot = () => {
    return (
      <Block
        ref={unitRef}
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        paddingX={12}
        margin={1}
        contentCentered
        backgroundColor={FOUNDATION_THEME.colors.gray[50]}
        borderRight={
          error
            ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
            : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
        }
        borderRadius={`8px 0px 0px 8px`}
      >
        <Text
          variant="body.md"
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[300]
              : FOUNDATION_THEME.colors.gray[500]
          }
        >
          {unit}
        </Text>
      </Block>
    );
  };

  return (
    <Block display="flex" flexDirection="column" gap={8} width="100%">
      <InputLabels
        label={label}
        sublabel={sublabel}
        helpIconHintText={helpIconHintText}
        disabled={disabled}
        name={name}
        required={required}
      />
      <Block
        position="relative"
        width={"100%"}
        display="flex"
        borderRadius={8}
        overflow="hidden"
      >
        {leftSlot && (
          <Block
            ref={leftSlotRef}
            position="absolute"
            top={paddingY}
            left={unitPosition === UnitPosition.LEFT ? unitWidth + 8 : paddingX}
            bottom={paddingY}
            contentCentered
          >
            {leftSlot}
          </Block>
        )}
        {rightSlot && (
          <Block
            ref={rightSlotRef}
            position="absolute"
            top={paddingY}
            right={
              unitPosition === UnitPosition.RIGHT ? unitWidth + 8 : paddingX
            }
            bottom={paddingY}
            contentCentered
          >
            {rightSlot}
          </Block>
        )}

        {unitPosition === UnitPosition.RIGHT && <RightUnitSlot />}
        {unitPosition === UnitPosition.LEFT && <LeftUnitSlot />}
        <PrimitiveInput
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          step={step}
          min={min}
          max={max}
          paddingInlineStart={paddingInlineStart}
          paddingInlineEnd={paddingInlineEnd}
          paddingTop={paddingY}
          paddingBottom={paddingY}
          required={required}
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
          color={
            disabled
              ? FOUNDATION_THEME.colors.gray[300]
              : FOUNDATION_THEME.colors.gray[800]
          }
          _focusVisible={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[0]} !important`,
            outline: "none !important",
          }}
          _focus={{
            border: `1px solid ${FOUNDATION_THEME.colors.primary[500]} !important`,
            outline: "none !important",
          }}
          disabled={disabled}
          _disabled={{
            backgroundColor: FOUNDATION_THEME.colors.gray[50],
            border: `1px solid ${FOUNDATION_THEME.colors.gray[200]}`,
            cursor: "not-allowed",
          }}
        />
      </Block>
      <InputFooter
        error={error}
        errorMessage={errorMessage}
        hintText={hintText}
        disabled={disabled}
      />
    </Block>
  );
};

export default UnitInput;
