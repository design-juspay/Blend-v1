import * as RadixTooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
import PrimitiveText from "../Primitives/PrimitiveText/PrimitiveText";
import Block from "../Primitives/Block/Block";
import { TooltipProps, TooltipAlign, TooltipSide, TooltipSize, TooltipSlotDirection } from "./types";



const Content = styled(RadixTooltip.Content)<{ $size: TooltipSize }>`
  background-color: black;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  max-width: 280px;
  line-height: 1.4;
`;

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
  slotDirection = TooltipSlotDirection.RIGHT,
  delayDuration = 300,
  offset = 5,
}: TooltipProps) => {
  console.log(slot, slotDirection);
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open}>
        <RadixTooltip.Trigger asChild>
          <Block as="span" aria-hidden="true" className="debug">
            {trigger}
          </Block>
        </RadixTooltip.Trigger>
        <Content side={side} align={align} sideOffset={offset} $size={size}>
          <PrimitiveText>{content}</PrimitiveText>
          {showArrow && <Arrow offset={8} />}
        </Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
