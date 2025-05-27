import * as RadixTooltip from "@radix-ui/react-tooltip";
import styled, { CSSObject } from "styled-components";
import {
  TooltipProps,
  TooltipAlign,
  TooltipSide,
  TooltipSize,
  TooltipSlotDirection,
} from "./types";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import tooltipTokens from "./tooltip.token";

const blockedProps = ["size"];

const Content = styled(RadixTooltip.Content).withConfig({
  shouldForwardProp: (prop) => !blockedProps.includes(prop),
})<{ size: TooltipSize }>(({ size }) => {
  const styles: CSSObject = {};

  styles.display = "flex";
  styles.alignItems = "center";
  styles.justifyContent = "center";
  styles.gap = 4;

  styles.backgroundColor = "black";
  styles.borderRadius = tooltipTokens.border.radius[size];

  switch (size) {
    case TooltipSize.SMALL:
      styles.padding = tooltipTokens.padding.sm;
      break;
    case TooltipSize.LARGE:
      styles.padding = tooltipTokens.padding.lg;
      break;
  }
  return styles;
});

const Arrow = styled(RadixTooltip.Arrow)`
  fill: black;
`;

export const Tooltip = ({
  children: trigger,
  content,
  open,
  side = TooltipSide.TOP,
  align = TooltipAlign.CENTER,
  showArrow = true,
  size = TooltipSize.SMALL,
  slot,
  slotDirection = TooltipSlotDirection.LEFT,
  delayDuration = 300,
  offset = 5,
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open}>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <Content
          arrowPadding={8}
          side={side}
          align={align}
          sideOffset={offset}
          size={size}
        >
          {slot && slotDirection === TooltipSlotDirection.LEFT && (
            <Block size={tooltipTokens.size[size]} contentCentered>
              {slot}
            </Block>
          )}
          <Text variant={tooltipTokens.font.size[size]}>{content}</Text>
          {slot && slotDirection === TooltipSlotDirection.RIGHT && (
            <Block
              className="debug"
              size={tooltipTokens.size[size]}
              contentCentered
            >
              {slot}
            </Block>
          )}
          {showArrow && <Arrow offset={8} />}
        </Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
