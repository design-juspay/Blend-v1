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
 * @description A versatile user representation component that displays profile images, initials, or fallback icons. Perfect for user interfaces, contact lists, and profile displays.
 * @feature Multiple display modes: image, initials from alt text, or custom fallback content
 * @feature Four size variants: small, medium, large, and extra-large
 * @feature Two shape options: circular and rounded rectangle
 * @feature Online status indicator with visual dot
 * @feature Leading and trailing slots for badges, icons, or additional content
 * @feature Automatic fallback hierarchy: image → initials → custom fallback
 * @example Basic Usage
 * ```tsx
 * import { Avatar, AvatarSize, AvatarShape } from "blend-v1";
 * 
 * <Avatar 
 *   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
 *   alt="John Smith" 
 *   size={AvatarSize.MD}
 *   shape={AvatarShape.CIRCULAR}
 * />
 * ```
 * @example Intermediate Usage with Status and Fallbacks
 * ```tsx
 * import { Avatar, AvatarSize, AvatarShape } from "blend-v1";
 * import { User } from "lucide-react";
 * 
 * function UserProfile() {
 *   return (
 *     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
 *       <Avatar 
 *         src="https://images.unsplash.com/photo-1494790108755-2616b612b1c6"
 *         alt="Sarah Johnson" 
 *         size={AvatarSize.LG}
 *         online={true}
 *         shape={AvatarShape.CIRCULAR}
 *       />
 *       
 *       <Avatar 
 *         alt="Michael Chen" 
 *         size={AvatarSize.MD}
 *         online={false}
 *         shape={AvatarShape.ROUNDED}
 *       />
 *       
 *       <Avatar 
 *         fallback={<User size={20} />}
 *         alt="Anonymous User" 
 *         size={AvatarSize.SM}
 *         shape={AvatarShape.CIRCULAR}
 *       />
 *     </div>
 *   );
 * }
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { Avatar, AvatarSize, AvatarShape } from "blend-v1";
 * import { Crown, Star, Settings } from "lucide-react";
 * 
 * function TeamMemberCard() {
 *   const adminBadge = (
 *     <div style={{ 
 *       background: '#F59E0B', 
 *       borderRadius: '50%', 
 *       width: '16px', 
 *       height: '16px',
 *       display: 'flex',
 *       alignItems: 'center',
 *       justifyContent: 'center'
 *     }}>
 *       <Crown size={10} color="white" />
 *     </div>
 *   );
 * 
 *   const premiumBadge = (
 *     <div style={{ 
 *       background: '#8B5CF6', 
 *       borderRadius: '4px', 
 *       padding: '2px 4px'
 *     }}>
 *       <Star size={12} color="white" />
 *     </div>
 *   );
 * 
 *   return (
 *     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
 *       <Avatar 
 *         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
 *         alt="Alex Rodriguez" 
 *         size={AvatarSize.XL}
 *         shape={AvatarShape.CIRCULAR}
 *         online={true}
 *         leadingSlot={adminBadge}
 *         trailingSlot={
 *           <button onClick={() => console.log('Settings clicked')}>
 *             <Settings size={16} />
 *           </button>
 *         }
 *         className="team-member-avatar"
 *         onClick={() => console.log('Avatar clicked')}
 *       />
 * 
 *       <Avatar 
 *         alt="Emma Thompson" 
 *         size={AvatarSize.LG}
 *         shape={AvatarShape.ROUNDED}
 *         online={false}
 *         leadingSlot={premiumBadge}
 *         fallback={
 *           <div style={{ 
 *             background: '#EF4444', 
 *             color: 'white', 
 *             fontWeight: 'bold',
 *             width: '100%',
 *             height: '100%',
 *             display: 'flex',
 *             alignItems: 'center',
 *             justifyContent: 'center'
 *           }}>
 *             ET
 *           </div>
 *         }
 *       />
 *     </div>
 *   );
 * }
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
