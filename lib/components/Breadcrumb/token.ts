import { foundationToken } from '../../foundationToken';

const breadcrumbTokens = {
  text: {
    default: foundationToken.colors.gray[400],
    hover: foundationToken.colors.gray[1000],
    active: foundationToken.colors.gray[700],
  },
  
  icon: {
    main: {
      default: foundationToken.colors.gray[400],
      hover: foundationToken.colors.gray[1000],
      active: foundationToken.colors.gray[700],
    },
    more: {
      default: foundationToken.colors.gray[400],
      hover: foundationToken.colors.gray[1000],
      active: foundationToken.colors.gray[1000],
    },
  },
  
  background: {
    more: {
      default: 'transparent',
      hover: 'transparent',
      active: foundationToken.colors.gray[50],
    },
    separator: {
      default: foundationToken.colors.gray[400],
    },
    dropdown: {
      default: foundationToken.colors.gray[0],
    },
  },
  
  border: {
    more: {
      default: 'transparent',
      hover: foundationToken.colors.gray[150],
      active: foundationToken.colors.gray[150],
    },
    dropdown: {
      default: foundationToken.colors.gray[200],
    },
  },
  
  fontWeight: {
    default: foundationToken.fontWeight[500],
    active: foundationToken.fontWeight[600],
  },
  
  fontSize: {
    md: foundationToken.fontSize.bodyMD,
  },
  
  spacing: {
    gap: foundationToken.spacing[8],
    dropdownPadding: foundationToken.spacing[4],
    itemPadding: `${foundationToken.spacing[8]} ${foundationToken.spacing[16]}`,
    moreButtonSize: '32px', // 8 * 4px
    iconSlotSize: '18px', // 4.5 * 4px
  },
  
  borderRadius: {
    dropdown: foundationToken.borderRadius[8],
    moreButton: foundationToken.borderRadius[8],
  },
  
  shadow: {
    dropdown: foundationToken.boxShadow.lg,
  },
  
  getTextColor: (isActive: boolean, isHovered?: boolean): string => {
    if (isActive) return breadcrumbTokens.text.active;
    if (isHovered) return breadcrumbTokens.text.hover;
    return breadcrumbTokens.text.default;
  },
  
  getFontWeight: (isActive: boolean): string => {
    return isActive 
      ? breadcrumbTokens.fontWeight.active 
      : breadcrumbTokens.fontWeight.default;
  },
  
  getMoreButtonBgColor: (isActive: boolean): string => {
    return isActive 
      ? breadcrumbTokens.background.more.active 
      : breadcrumbTokens.background.more.default;
  },
  
  getMoreButtonBorderColor: (isActive: boolean, isHovered?: boolean): string => {
    if (isActive) return breadcrumbTokens.border.more.active;
    if (isHovered) return breadcrumbTokens.border.more.hover;
    return breadcrumbTokens.border.more.default;
  }
};

export default breadcrumbTokens; 