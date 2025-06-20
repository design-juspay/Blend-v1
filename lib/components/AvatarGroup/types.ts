import { HTMLAttributes } from 'react';
import { AvatarProps, AvatarSize, AvatarShape } from '../Avatar/types';

/**
 * @description Defines the data structure for an individual avatar within an AvatarGroup.
 * It extends properties from `AvatarProps` but requires a unique `id`.
 */
export interface AvatarData extends Omit<AvatarProps, 'className' | 'id'> {
  /**
   * @propCategory Required
   * @description A unique identifier for the avatar.
   */
  id: string | number;
  /**
   * @propCategory Content
   * @description The alt text for the avatar image, for accessibility.
   */
  alt?: string;
  /**
   * @propCategory Content
   * @description Fallback content to display if the avatar image fails to load or is not provided.
   * Can be a string (e.g., initials) or a ReactNode (e.g., an icon).
   */
  fallback?: string | React.ReactNode;
}

/**
 * @description Displays a stack of avatars, often used to represent a group of users or entities.
 * It can show a limited number of avatars with an overflow indicator for the rest.
 * @feature Displays multiple avatars in a compact, overlapping group.
 * @feature Limits the number of visible avatars with an overflow counter.
 * @feature Customizable size and shape for all avatars in the group.
 * @feature Supports selection of avatars within the group.
 * @example
 * ```tsx
 * import { AvatarGroup } from "./components/AvatarGroup";
 * import { AvatarSize, AvatarShape } from "./components/Avatar/types";
 *
 * const avatarsData = [
 *   { id: 1, src: "url1.jpg", alt: "User 1" },
 *   { id: 2, src: "url2.jpg", alt: "User 2" },
 *   { id: 3, fallback: "U3" },
 * ];
 *
 * <AvatarGroup
 *   avatars={avatarsData}
 *   maxCount={2}
 *   size={AvatarSize.MEDIUM}
 *   shape={AvatarShape.CIRCLE}
 * />
 * ```
 */
export type AvatarGroupProps = {
  /**
   * @propCategory Required
   * @description An array of `AvatarData` objects, each representing an avatar to be displayed in the group.
   */
  avatars: AvatarData[];
  /**
   * @propCategory Behavior
   * @description The maximum number of avatars to display before showing an overflow counter.
   * If not provided, all avatars are displayed.
   */
  maxCount?: number;
  /**
   * @propCategory Appearance
   * @description The size of the avatars in the group. Inherits from `AvatarSize` enum.
   * @default AvatarSize.MEDIUM
   */
  size?: AvatarSize;
  /**
   * @propCategory Appearance
   * @description The shape of the avatars in the group. Inherits from `AvatarShape` enum.
   * @default AvatarShape.CIRCLE
   */
  shape?: AvatarShape;
  /**
   * @propCategory State
   * @description An array of IDs for avatars that are currently selected. Used for controlled selection.
   */
  selectedAvatarIds?: (string | number)[];
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the selection of avatars changes.
   * Receives an array of the currently selected avatar IDs.
   */
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type StyledAvatarGroupContainerProps = {
  $spacing?: string;
};

export type StyledAvatarWrapperProps = {
  $index: number;
  $total: number;
  $isSelected: boolean;
  $size: AvatarSize;
};

export type StyledOverflowCounterProps = {
  $size: AvatarSize;
  $shape: AvatarShape;
  $isOpen: boolean;
};
