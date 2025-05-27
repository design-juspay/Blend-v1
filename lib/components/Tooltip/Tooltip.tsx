import * as RadixTooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
import {
  TooltipProps,
  TooltipAlign,
  TooltipSide,
  TooltipSize,
  TooltipSlotDirection,
} from "./types";
import tooltipTokens from "./tooltip.tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";

const Arrow = styled(RadixTooltip.Arrow)`
  fill: ${tooltipTokens.background.color};
`;

export const Tooltip = ({
  children: trigger,
  content,
  side = TooltipSide.TOP,
  align = TooltipAlign.CENTER,
  showArrow = true,
  size = TooltipSize.SMALL,
  slot,
  slotDirection = TooltipSlotDirection.LEFT,
  delayDuration = 300,
  offset = 5,
  open,
}: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open}>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Content side={side} align={align} sideOffset={offset}>
          <Block
            display="flex"
            alignItems="center"
            overflow="hidden"
            backgroundColor={tooltipTokens.background.color}
            padding={tooltipTokens.padding[size]}
            borderRadius={tooltipTokens.border.radius[size]}
            maxWidth={tooltipTokens.maxWidth[size]}
            gap={4}
          >
            {slot && slotDirection === TooltipSlotDirection.LEFT && (
              <Block
                size={tooltipTokens.size[size]}
                contentCentered
                flexShrink={0}
              >
                {slot}
              </Block>
            )}
            <Block flexGrow={1} overflow="hidden">
              <Text
                color={tooltipTokens.color.text}
                fontWeight={500}
                fontSize={tooltipTokens.font[size]}
                // truncate={true}
              >
                {content}
              </Text>
            </Block>

            {slot && slotDirection === TooltipSlotDirection.RIGHT && (
              <Block
                size={tooltipTokens.size[size]}
                contentCentered
                flexShrink={0}
              >
                {slot}
              </Block>
            )}
          </Block>
          {showArrow && <Arrow offset={8} />}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
