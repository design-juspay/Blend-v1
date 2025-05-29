import { FOUNDATION_THEME } from "../../tokens";
import Block from "../Primitives/Block/Block";
import { TooltipSize } from "../Tooltip/types";
import PrimitiveInput from "../Primitives/PrimitiveInput/PrimitiveInput";
import Text from "../Text/Text";
import { HelpCircleIcon, MinusIcon, PlusIcon, Triangle } from "lucide-react";
import { Tooltip } from "../Tooltip";
import PrimitiveButton from "../Primitives/PrimitiveButton/PrimitiveButton";

enum NumberInputSize {
  MEDIUM = "md",
  LARGE = "lg",
}

type NumberInputProps = {
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
};

const NumberInput = ({
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
}: NumberInputProps) => {
  const paddingX = size === NumberInputSize.MEDIUM ? 12 : 14;
  const paddingY = size === NumberInputSize.MEDIUM ? 8 : 10;

  return (
    <Block
      display="flex"
      flexDirection="column"
      gap={8}
      width="100%"
    >
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
        <PrimitiveInput
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          step={step}
          min={min}
          max={max}
          required={required}
          paddingX={paddingX}
          paddingY={paddingY}
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
        <Block
          display="flex"
          flexDirection="column"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          margin={1}
        >
          <Block
            display="flex"
            flexDirection="column"
            gap={1}
            as="span"
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            zIndex={1}
            borderLeft={
              error
                ? `1px solid ${FOUNDATION_THEME.colors.red[500]}`
                : `1px solid ${FOUNDATION_THEME.colors.gray[200]}`
            }
          ></Block>
          <PrimitiveButton
            onClick={() =>
              onChange({
                target: { value: String(value + (step ?? 1)) },
              } as any)
            }
            backgroundColor={FOUNDATION_THEME.colors.gray[0]}
            flexGrow={1}
            width={"24px"}
            height={"50%"}
            contentCentered
            borderRadius={"0 8px 0 0"}
            disabled={disabled || (typeof max === "number" && value >= max)}
            _focus={{
              backgroundColor: FOUNDATION_THEME.colors.gray[100],
            }}
            _hover={{
              backgroundColor: FOUNDATION_THEME.colors.gray[100],
            }}
          >
            <TriangleSVG direction="up" />
          </PrimitiveButton>
          <PrimitiveButton
            onClick={() =>
              onChange({
                target: { value: String(value - (step ?? 1)) },
              } as any)
            }
            backgroundColor={FOUNDATION_THEME.colors.gray[0]}
            flexGrow={1}
            width={"24px"}
            height={"50%"}
            contentCentered
            borderRadius={"0 0px 8px 0"}
            _focus={{
              backgroundColor: FOUNDATION_THEME.colors.gray[100],
            }}
            _hover={{
              backgroundColor: FOUNDATION_THEME.colors.gray[100],
            }}
            disabled={disabled || (typeof min === "number" && value <= min)}
          >
            <TriangleSVG direction="down" />
          </PrimitiveButton>
        </Block>
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

const TriangleSVG = ({ direction }: { direction: "up" | "down" }) => {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === "up" ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M5.19369 4.25489C6.29087 3.37174 7.26951 2.34261 8.10412 1.19449C8.20686 1.05498 8.26202 0.879398 8.24784 0.693089C8.21641 0.28007 7.85611 -0.0292686 7.4431 0.00216258C5.48387 0.151262 3.51614 0.151262 1.55692 0.00216222C1.1439 -0.029269 0.783599 0.280069 0.752168 0.693089C0.737989 0.879395 0.793151 1.05498 0.895889 1.19448C1.7305 2.34261 2.70914 3.37174 3.80632 4.25489C4.21232 4.5817 4.78769 4.5817 5.19369 4.25489Z"
        fill="#222530"
      />
    </svg>
  );
};

export default NumberInput;
