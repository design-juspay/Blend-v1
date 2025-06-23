import { ReactNode } from "react";
import { TagColor, TagProps, TagShape, TagSize, TagVariant } from "../Tags";

/**
 * @description Configuration for a single part of a SplitTag.
 * This type is not directly used in `SplitTagProps` but might be intended for internal use or future enhancements
 * where `primaryTag` and `secondaryTag` could be defined via this simpler config.
 * For now, `SplitTagProps` uses `Omit<TagProps, ...>` for `primaryTag` and `secondaryTag`.
 */
export type TagConfig = {
  /**
   * @propCategory Required
   * @description The text content of the tag part.
   */
  text: string;
  /**
   * @propCategory Appearance
   * @description The visual variant of the tag part, inherited from `TagVariant`.
   */
  variant?: TagVariant;
  /**
   * @propCategory Appearance
   * @description The color style of the tag part, inherited from `TagColor`.
   */
  style?: TagColor;
  /**
   * @propCategory Event Handler
   * @description Optional click handler for this part of the tag.
   */
  onClick?: () => void;
};

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
export type SplitTagProps = {
  /**
   * @propCategory Required
   * @description Props for the primary (usually left) part of the split tag.
   * Uses `TagProps` excluding `splitTagPosition`, `size`, and `shape` (which are controlled by `SplitTagProps`).
   */
  primaryTag: Omit<TagProps, "splitTagPosition" | "size" | "shape">;
  /**
   * @propCategory Content
   * @description Props for the secondary (usually right) part of the split tag. Optional.
   * Uses `TagProps` excluding `splitTagPosition`, `size`, and `shape`.
   */
  secondaryTag?: Omit<TagProps, "splitTagPosition" | "size" | "shape">;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed at the beginning (left) of the entire split tag.
   */
  leadingSlot?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode to be displayed at the end (right) of the entire split tag.
   */
  trailingSlot?: ReactNode;
  /**
   * @propCategory Appearance
   * @description The overall size of the split tag, inherited from `TagSize`.
   * @default TagSize.MEDIUM
   */
  size?: TagSize;
  /**
   * @propCategory Appearance
   * @description The overall shape of the split tag, inherited from `TagShape`.
   * @default TagShape.ROUNDED
   */
  shape?: TagShape;
};
