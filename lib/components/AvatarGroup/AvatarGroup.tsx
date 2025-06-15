import { forwardRef, useState, useEffect, useRef, useCallback } from 'react'; // Removed React default import
import { Avatar } from '../Avatar';
import { AvatarShape, AvatarSize } from '../Avatar/types';
import { AvatarGroupProps } from './types';
import {
  StyledAvatarGroupContainer,
  StyledAvatarWrapper,
  StyledOverflowCounter,
  VisuallyHidden
} from './StyledAvatarGroup';
import { createMenuItems, filterAvatars } from './avatarGroupUtils';
import MenuComponent from '../Menu/Menu';
import { MenuV2GroupType, MenuItemV2Type, MenuSide, MenuAlignment } from '../Menu/types';

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      avatars,
      maxCount = 5,
      size = AvatarSize.MD,
      shape = AvatarShape.CIRCULAR,
      selectedAvatarIds,
      onSelectionChange,
      ...props
    },
    ref
  ) => {
    const safeMaxCount = Math.max(1, maxCount);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [internalSelectedIds, setInternalSelectedIds] = useState<(string | number)[]>(
      selectedAvatarIds || []
    );
    const [searchTerm, setSearchTerm] = useState(''); 
    
    const overflowCounterRef = useRef<HTMLButtonElement>(null);

    const visibleAvatars = avatars.slice(0, safeMaxCount);
    const overflowCount = Math.max(0, avatars.length - safeMaxCount);

    useEffect(() => {
      setInternalSelectedIds(selectedAvatarIds || []);
    }, [selectedAvatarIds]);

    const handleSelect = useCallback((id: string | number) => {
      setInternalSelectedIds(prevSelected => {
        const newSelectedIds = prevSelected.includes(id)
          ? prevSelected.filter(selectedId => selectedId !== id)
          : [...prevSelected, id];
        onSelectionChange?.(newSelectedIds);
        return newSelectedIds;
      });
    }, [onSelectionChange]);

    const handleOpenChange = useCallback((open: boolean) => {
      setIsMenuOpen(open);
      if (!open) {
        setSearchTerm('');
      }
    }, []);
    
    const filteredAvatarsForMenu = searchTerm 
      ? filterAvatars(avatars, searchTerm) 
      : avatars;

    const menuItems: MenuItemV2Type[] = createMenuItems(
      filteredAvatarsForMenu,
      (id) => {
        handleSelect(id);
        setIsMenuOpen(false); 
      },
      Avatar
    );

    const menuGroups: MenuV2GroupType[] = [{
      items: menuItems,
    }];
    
    return (
      <StyledAvatarGroupContainer
        ref={ref}
        role="group"
        aria-label={`Group of ${avatars.length} avatars, ${internalSelectedIds.length} selected`}
        {...props}
      >
        {visibleAvatars.map((avatar, index) => (
          <StyledAvatarWrapper
            key={avatar.id}
            $index={index}
            $total={visibleAvatars.length}
            $isSelected={internalSelectedIds.includes(avatar.id)}
            $size={size}
            role="button"
            tabIndex={0}
            aria-pressed={internalSelectedIds.includes(avatar.id)}
            aria-label={`Select avatar ${avatar.alt || (typeof avatar.fallback === 'string' ? avatar.fallback : String(avatar.id))}`}
            onClick={() => handleSelect(avatar.id)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(avatar.id);
              }
            }}
          >
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              fallback={avatar.fallback}
              size={size}
              shape={shape}
            />
          </StyledAvatarWrapper>
        ))}

        {overflowCount > 0 && (
          <MenuComponent
            asModal={false}
            open={isMenuOpen}
            onOpenChange={handleOpenChange}
            trigger={
              <StyledOverflowCounter
                ref={overflowCounterRef}
                type="button"
                $size={size}
                $shape={shape}
                $isOpen={isMenuOpen}
                aria-label={`+${overflowCount} more avatars, click to view and select`}
              >
                +{overflowCount}
              </StyledOverflowCounter>
            }
            items={menuGroups}
            enableSearch={true}
            side={MenuSide.BOTTOM}
            alignment={MenuAlignment.CENTER} 
            sideOffset={8} 
          />
        )}

        {overflowCount > 0 && !isMenuOpen && (
          <VisuallyHidden>
            And {overflowCount} more {overflowCount === 1 ? 'avatar' : 'avatars'}
          </VisuallyHidden>
        )}
      </StyledAvatarGroupContainer>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
