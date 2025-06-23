import * as RadixTooltip from "@radix-ui/react-tooltip";
import styled, { CSSObject } from "styled-components";
import {
  TooltipProps,
  TooltipAlign,
  TooltipSide,
  TooltipSize,
  TooltipSlotDirection,
} from "./types";
import { TooltipTokensType } from "./tooltip.tokens";
import Block from "../Primitives/Block/Block";
import Text from "../Text/Text";
import { useComponentToken } from "../../context/useComponentToken";

const Arrow = styled(RadixTooltip.Arrow)<{
  $color: CSSObject["backgroundColor"];
}>`
  fill: ${({ $color }) => $color};
`;

/**
 * @description A contextual popup that displays descriptive text or information when hovering over or focusing on an element.
 * Provides accessible, customizable tooltips with flexible positioning and content options.
 * @feature Displays informative text in a floating panel near a trigger element
 * @feature Customizable content supporting both text and ReactNode elements
 * @feature Flexible positioning with side, alignment, and offset controls
 * @feature Optional arrow pointing to trigger element
 * @feature Configurable delay duration and size variants
 * @feature Slot support for additional content like icons
 * @feature Built on Radix UI for accessibility and keyboard navigation
 * @example Basic Usage
 * ```tsx
 * import { Tooltip } from "blend-v1";
 * 
 * function BasicTooltipExample() {
 *   return (
 *     <div className="p-8">
 *       <Tooltip content="This is a helpful tooltip">
 *         <button className="px-4 py-2 bg-blue-500 text-white rounded">
 *           Hover me
 *         </button>
 *       </Tooltip>
 *     </div>
 *   );
 * }
 * ```
 * @example Positioning and Rich Content
 * ```tsx
 * import { 
 *   Tooltip, 
 *   TooltipSide, 
 *   TooltipAlign, 
 *   TooltipSize 
 * } from "blend-v1";
 * import { Info } from "lucide-react";
 * 
 * function CustomTooltipExample() {
 *   return (
 *     <div className="p-8 space-y-6">
 *       <Tooltip
 *         content="Bottom tooltip with large size"
 *         side={TooltipSide.BOTTOM}
 *         align={TooltipAlign.START}
 *         size={TooltipSize.LARGE}
 *         delayDuration={500}
 *         offset={10}
 *       >
 *         <span className="inline-flex items-center gap-2 text-blue-600 cursor-help">
 *           <Info size={16} />
 *           More information
 *         </span>
 *       </Tooltip>
 * 
 *       <Tooltip
 *         content="Rich content tooltip with formatting"
 *         side={TooltipSide.RIGHT}
 *         size={TooltipSize.LARGE}
 *         showArrow={false}
 *       >
 *         <button className="px-3 py-1 border rounded text-sm">
 *           Rich tooltip
 *         </button>
 *       </Tooltip>
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with Slots and Control
 * ```tsx
 * import { 
 *   Tooltip, 
 *   TooltipSide, 
 *   TooltipAlign, 
 *   TooltipSize,
 *   TooltipSlotDirection
 * } from "blend-v1";
 * import { 
 *   HelpCircle, 
 *   AlertTriangle, 
 *   CheckCircle, 
 *   Star 
 * } from "lucide-react";
 * import { useState } from "react";
 * 
 * function AdvancedTooltipExample() {
 *   const [showTooltip, setShowTooltip] = useState(false);
 * 
 *   return (
 *     <div className="p-8 space-y-8">
 *       <Tooltip
 *         content="This action will permanently delete the item"
 *         side={TooltipSide.TOP}
 *         align={TooltipAlign.CENTER}
 *         size={TooltipSize.LARGE}
 *         slot={<AlertTriangle size={14} className="text-red-500" />}
 *         slotDirection={TooltipSlotDirection.LEFT}
 *         showArrow={true}
 *         delayDuration={200}
 *         offset={8}
 *       >
 *         <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
 *           Delete Item
 *         </button>
 *       </Tooltip>
 * 
 *       <Tooltip
 *         content="This tooltip is controlled programmatically"
 *         side={TooltipSide.RIGHT}
 *         align={TooltipAlign.START}
 *         size={TooltipSize.LARGE}
 *         slot={<CheckCircle size={16} className="text-green-500" />}
 *         slotDirection={TooltipSlotDirection.LEFT}
 *         open={showTooltip}
 *         delayDuration={0}
 *       >
 *         <button
 *           className="px-4 py-2 bg-green-500 text-white rounded"
 *           onClick={() => setShowTooltip(!showTooltip)}
 *         >
 *           Toggle Controlled Tooltip
 *         </button>
 *       </Tooltip>
 *     </div>
 *   );
 * }
 * ```
 */
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
  const tooltipTokens = useComponentToken("TOOLTIP") as TooltipTokensType;
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open}>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Content
          side={side}
          align={align}
          sideOffset={offset}
          style={{ zIndex: 1000 }}
        >
          <Block
            display="flex"
            alignItems="center"
            overflow="hidden"
            backgroundColor={tooltipTokens.background}
            padding={tooltipTokens.padding[size]}
            borderRadius={tooltipTokens.borderRadius[size]}
            maxWidth={tooltipTokens.maxWidth[size]}
            gap={tooltipTokens.gap[size]}
          >
            {slot && slotDirection === TooltipSlotDirection.LEFT && (
              <Block contentCentered flexShrink={0}>
                {slot}
              </Block>
            )}
            <Block flexGrow={1} overflow="hidden">
              <Text
                color={tooltipTokens.color}
                variant={tooltipTokens.fontSize[size]}
                fontWeight={tooltipTokens.fontWeight[size]}
              >
                {content}
              </Text>
            </Block>

            {slot && slotDirection === TooltipSlotDirection.RIGHT && (
              <Block contentCentered flexShrink={0}>
                {slot}
              </Block>
            )}
          </Block>
          {showArrow && <Arrow offset={8} $color={tooltipTokens.background} />}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
