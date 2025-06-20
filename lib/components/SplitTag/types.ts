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
 * @description A component that displays two tags joined together, often to represent a key-value pair or a status with a sub-status.
 * It can also include leading and trailing slots for icons or other elements.
 * @feature Displays two connected tags (primary and optional secondary).
 * @feature Customizable size and shape for the combined tag.
 * @feature Optional leading and trailing slots for icons or adornments.
 * @feature Individual tag parts can have their own text, variant, style, and onClick handlers (via `TagProps`).
 * @example
 * ```tsx
 * import { SplitTag, TagSize, TagShape, TagColor, TagVariant } from "./components/SplitTag"; // Assuming path
 * import { CheckCircle, AlertTriangle } from "lucide-react"; // Assuming lucide-react
 *
 * <SplitTag
 *   primaryTag={{
 *     text: "Status",
 *     variant: TagVariant.FILLED,
 *     style: TagColor.NEUTRAL,
 *   }}
 *   secondaryTag={{
 *     text: "Active",
 *     variant: TagVariant.FILLED,
 *     style: TagColor.SUCCESS,
 *     onClick: () => console.log("Active part clicked"),
 *   }}
 *   leadingSlot={<CheckCircle size={14} />}
 *   size={TagSize.MEDIUM}
 *   shape={TagShape.ROUNDED}
 * />
 *
 * <SplitTag
 *   primaryTag={{ text: "Priority", style: TagColor.NEUTRAL }}
 *   secondaryTag={{ text: "High", style: TagColor.ERROR }}
 *   trailingSlot={<AlertTriangle size={14} />}
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
