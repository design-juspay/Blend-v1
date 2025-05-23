import { HTMLAttributes } from 'react';
import { AvatarProps, AvatarSize, AvatarShape } from '../Avatar/types';

export interface AvatarData extends Omit<AvatarProps, 'className' | 'id'> {
  id: string | number;
  alt?: string;
  fallback?: string | React.ReactNode;
}

export type AvatarGroupProps = {
  /**
   * Array of avatar data to display in the group
   */
  avatars: AvatarData[];
  /**
   * Maximum number of avatars to display before showing a +X overflow
   * @default 5
   */
  maxCount?: number;
  /**
   * Size of all avatars in the group
   * @default AvatarSize.MD
   */
  size?: AvatarSize;
  /**
   * Shape of all avatars in the group
   * @default AvatarShape.CIRCULAR
   */
  shape?: AvatarShape;
  /**
   * IDs of selected avatars
   */
  selectedAvatarIds?: (string | number)[];
  /**
   * Callback when selection changes
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
