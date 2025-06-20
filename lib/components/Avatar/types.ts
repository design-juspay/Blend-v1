import { HTMLAttributes } from 'react';

export enum AvatarSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export enum AvatarShape {
  CIRCULAR = 'circular',
  ROUNDED = 'rounded'
}

/**
 * Displays an image, initials, or a fallback icon representing a user or entity.
 * Avatars can vary in size, shape, and can indicate online status.
 * @feature Supports image source, custom fallback content, or initials derived from `alt` text.
 * @feature Customizable sizes (sm, md, lg, xl) and shapes (circular, rounded).
 * @feature Optional online status indicator.
 * @feature Optional leading and trailing slots for additional content next to the avatar.
 * @example Basic Image Avatar
 * ```tsx
 * <Avatar src="https://example.com/user.jpg" alt="User Name" />
 * ```
 * @example Fallback Initials
 * ```tsx
 * <Avatar alt="John Doe" size={AvatarSize.LG} />
 * ```
 * @example Online Status Indicator
 * ```tsx
 * <Avatar src="https://example.com/user.jpg" alt="User Name" online={true} />
 * ```
 */
export type AvatarProps = {
  /** Image source URL for the avatar.
   * @propCategory Content
   */
  src?: string;
  /** Alt text for the image, also used to generate initials if `src` fails or is not provided.
   * @propCategory Content
   */
  alt?: string;
  /** Custom fallback content (e.g., an icon component) to display if `src` is invalid or not provided, and `alt` text is not suitable for initials.
   * @propCategory Content
   */
  fallback?: React.ReactNode;
  /** Defines the size of the avatar.
   * @propCategory Appearance
   * @default AvatarSize.MD
   */
  size?: AvatarSize;
  /** Defines the shape of the avatar.
   * @propCategory Appearance
   * @default AvatarShape.CIRCULAR
   */
  shape?: AvatarShape;
  /** If true, displays an indicator suggesting online status.
   * @propCategory State
   * @default false
   */
  online?: boolean;
  /** Optional content to be placed before the avatar image/fallback.
   * @propCategory Layout
   */
  leadingSlot?: React.ReactNode;
  /** Optional content to be placed after the avatar image/fallback.
   * @propCategory Layout
   */
  trailingSlot?: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export type StyledAvatarContainerProps = {
  $size: AvatarSize;
  $shape: AvatarShape;
  $hasImage: boolean;
};

export type StyledAvatarIndicatorProps = {
  $size: AvatarSize;
};
