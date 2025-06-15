import React, { RefObject } from 'react';
import { AvatarData } from './types';
import { AvatarProps, AvatarSize } from '../Avatar/types';
import { MenuItemV2Type, MenuItemV2Variant } from '../Menu/types';

export const positionMenu = (
  menuRef: RefObject<HTMLDivElement>,
  counterRef: RefObject<HTMLButtonElement>
): void => {
  if (!menuRef?.current || !counterRef?.current) return;

  const counterRect = counterRef.current.getBoundingClientRect();
  const menuElement = menuRef.current;
  const menuWidth = 320;

  menuElement.style.position = 'fixed';
  menuElement.style.top = `${counterRect.bottom + 4}px`;
  menuElement.style.left = `${counterRect.left + counterRect.width / 2 - menuWidth / 2}px`;
  menuElement.style.zIndex = '50';

  const rightEdge = parseFloat(menuElement.style.left) + menuWidth;
  const windowRight = window.innerWidth;
  if (rightEdge > windowRight - 4) {
    menuElement.style.left = `${windowRight - menuWidth - 4}px`;
  }

  if (parseFloat(menuElement.style.left) < 4) {
    menuElement.style.left = '4px';
  }
};

export const createMenuItems = (
  avatars: AvatarData[],
  onSelect: (id: string | number) => void,
  AvatarComponent: React.ComponentType<AvatarProps>
): MenuItemV2Type[] => {
  return avatars.map((avatar): MenuItemV2Type => { 
    return {
      label: avatar.alt || (typeof avatar.fallback === 'string' ? avatar.fallback : `Avatar ${avatar.id}`),
      slot1: (
        <AvatarComponent
          size={AvatarSize.SM}
          src={avatar.src}
          alt={avatar.alt}
          fallback={avatar.fallback}
        />
      ),
      onClick: () => onSelect(avatar.id),
      variant: MenuItemV2Variant.DEFAULT,
    };
  });
};

export const filterAvatars = (avatars: AvatarData[], searchTerm: string): AvatarData[] => {
  if (!searchTerm) return avatars;
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  return avatars.filter(avatar => {
    const altText = (avatar.alt || '').toLowerCase();
    const fallbackText = typeof avatar.fallback === 'string' 
      ? avatar.fallback.toLowerCase() 
      : '';
    
    return altText.includes(lowerSearchTerm) || fallbackText.includes(lowerSearchTerm);
  });
};
