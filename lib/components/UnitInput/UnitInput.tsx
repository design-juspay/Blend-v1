import { HelpCircleIcon, Search, Weight } from "lucide-react";
import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { Tooltip, TooltipSize } from "../Tooltip";
import PrimitiveInput from "../Primitives/PrimitiveInput/PrimitiveInput";
import { useEffect, useRef, useState } from "react";

enum NumberInputSize {
  MEDIUM = "md",
  LARGE = "lg",
}

export enum UnitPosition {
  LEFT = "left",
  RIGHT = "right",
}

export type UnitInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  size?: NumberInputSize;
  disabled?: boolean;
  placeholder?: string;
  label: string;
  sublabel?: string;
  helpIconHintText?: string;
  hintText?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  unit?: string;
  unitPosition?: UnitPosition;
};

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
  unit = "kgs",
  unitPosition = UnitPosition.RIGHT,
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
        <Text variant="body.md" color={FOUNDATION_THEME.colors.gray[500]}>
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
        <Text variant="body.md" color={FOUNDATION_THEME.colors.gray[500]}>
          {unit}
        </Text>
      </Block>
    );
  };

  return (
    <Block display="flex" flexDirection="column" gap={8} width="100%">
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
            ({sublabel})
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
          color={FOUNDATION_THEME.colors.gray[800]}
          _focusVisible={{
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

export default UnitInput;
