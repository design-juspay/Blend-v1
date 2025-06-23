import Block from "../Primitives/Block/Block";
import { Tag, TagVariant } from "../Tags";
import { SplitTagProps } from "./types";

/**
 * @description A component that displays two connected tags, perfect for showing key-value pairs, status combinations, or related information. The primary tag typically contains a label or category, while the secondary tag shows the value or status.
 * @feature Two connected tags that appear as a single unit
 * @feature Customizable size and shape for consistent styling
 * @feature Optional leading and trailing slots for icons or adornments
 * @feature Individual click handlers for each tag section
 * @feature Automatic styling with primary tag using NO_FILL variant and secondary tag using ATTENTIVE variant
 * @example Basic Usage
 * ```tsx
 * import { SplitTag, TagColor } from "blend-v1";
 * 
 * <SplitTag
 *   primaryTag={{
 *     text: "Status",
 *     color: TagColor.NEUTRAL
 *   }}
 *   secondaryTag={{
 *     text: "Active",
 *     color: TagColor.SUCCESS
 *   }}
 * />
 * ```
 * @example Intermediate Usage with Click Handlers
 * ```tsx
 * import { SplitTag, TagColor, TagSize, TagShape } from "blend-v1";
 * import { User, Settings } from "lucide-react";
 * 
 * <SplitTag
 *   primaryTag={{
 *     text: "User Role",
 *     color: TagColor.PRIMARY,
 *     leftSlot: <User size={14} />,
 *     onClick: () => console.log('Role clicked')
 *   }}
 *   secondaryTag={{
 *     text: "Admin",
 *     color: TagColor.WARNING,
 *     rightSlot: <Settings size={14} />,
 *     onClick: () => console.log('Admin level clicked')
 *   }}
 *   size={TagSize.LG}
 *   shape={TagShape.ROUNDED}
 * />
 * ```
 * @example Advanced Usage with All Props
 * ```tsx
 * import { 
 *   SplitTag, 
 *   TagColor, 
 *   TagSize, 
 *   TagShape 
 * } from "blend-v1";
 * import { 
 *   TrendingUp, 
 *   DollarSign, 
 *   AlertCircle, 
 *   ExternalLink 
 * } from "lucide-react";
 * 
 * const portfolioData = {
 *   category: "Portfolio",
 *   value: "+12.5%",
 *   isPositive: true
 * };
 * 
 * <SplitTag
 *   leadingSlot={<TrendingUp size={16} className="text-green-600" />}
 *   primaryTag={{
 *     text: portfolioData.category,
 *     color: TagColor.NEUTRAL,
 *     leftSlot: <DollarSign size={14} />,
 *     onClick: () => console.log('Portfolio category clicked')
 *   }}
 *   secondaryTag={{
 *     text: portfolioData.value,
 *     color: portfolioData.isPositive ? TagColor.SUCCESS : TagColor.ERROR,
 *     rightSlot: <AlertCircle size={14} />,
 *     onClick: () => console.log('Performance value clicked')
 *   }}
 *   trailingSlot={<ExternalLink size={16} className="text-blue-600" />}
 *   size={TagSize.MD}
 *   shape={TagShape.SQUARICAL}
 * />
 * ```
 */
const SplitTag = ({ primaryTag, secondaryTag, leadingSlot, trailingSlot, size, shape }: SplitTagProps) => {
  return (
    <Block display="flex" width="fit-content" flexWrap="nowrap" alignItems="center">
      {leadingSlot}
      {primaryTag ? (
        <Tag
          {...primaryTag}
          splitTagPosition="left"
          variant={TagVariant.NO_FILL}
          size={size}
          shape={shape}
        />
      ) : null}
      {secondaryTag ? (
        <Tag
          {...secondaryTag}
          splitTagPosition="right"
          variant={TagVariant.ATTENTIVE}
          size={size}
          shape={shape}
        />
      ) : null}
      {trailingSlot}
    </Block>
  );
};

SplitTag.displayName = "SplitTag";

export default SplitTag;

