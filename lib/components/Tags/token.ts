import { foundationToken } from '../../foundationToken';
import { TagSize, TagShape, TagVariant, TagStatus } from './types';

// Type for the tag status values
type TagStatusValue = 'neutral' | 'primary' | 'success' | 'error' | 'warning' | 'purple';

const tagTokens = {
  background: {
    noFill: {
      neutral: foundationToken.colors.gray[0],
      primary: foundationToken.colors.gray[0],
      success: foundationToken.colors.gray[0],
      error: foundationToken.colors.gray[0],
      warning: foundationToken.colors.gray[0],
      purple: foundationToken.colors.gray[0]
    },
    attentive: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[600],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[500],
      purple: foundationToken.colors.purple[500]
    },
    subtle: {
      neutral: foundationToken.colors.gray[50],
      primary: foundationToken.colors.primary[50],
      success: foundationToken.colors.green[50],
      error: foundationToken.colors.red[50],
      warning: foundationToken.colors.orange[50],
      purple: foundationToken.colors.purple[50]
    }
  },
  text: {
    noFill: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[800],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[500],
      purple: foundationToken.colors.purple[500]
    },
    attentive: {
      neutral: foundationToken.colors.gray[0],
      primary: foundationToken.colors.gray[0],
      success: foundationToken.colors.gray[0],
      error: foundationToken.colors.gray[0],
      warning: foundationToken.colors.gray[0],
      purple: foundationToken.colors.gray[0]
    },
    subtle: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[600],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[600],
      purple: foundationToken.colors.purple[600]
    }
  },
  icon: {
    noFill: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[800],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[500],
      purple: foundationToken.colors.purple[500]
    },
    attentive: {
      neutral: foundationToken.colors.gray[0],
      primary: foundationToken.colors.gray[0],
      success: foundationToken.colors.gray[0],
      error: foundationToken.colors.gray[0],
      warning: foundationToken.colors.gray[0],
      purple: foundationToken.colors.gray[0]
    },
    subtle: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[600],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[600],
      purple: foundationToken.colors.purple[600]
    }
  },
  border: {
    noFill: {
      neutral: foundationToken.colors.gray[950],
      primary: foundationToken.colors.primary[600],
      success: foundationToken.colors.green[600],
      error: foundationToken.colors.red[600],
      warning: foundationToken.colors.orange[500],
      purple: foundationToken.colors.purple[500]
    },
    subtle: {
      neutral: foundationToken.colors.gray[200],
      primary: foundationToken.colors.primary[100],
      success: foundationToken.colors.green[100],
      error: foundationToken.colors.red[100],
      warning: foundationToken.colors.orange[100],
      purple: foundationToken.colors.purple[100]
    },
    attentive: {
      neutral: 'transparent',
      primary: 'transparent',
      success: 'transparent',
      error: 'transparent',
      warning: 'transparent',
      purple: 'transparent'
    }
  },
  sizes: {
    xs: {
      height: '20px',
      padding: '2px 6px',
      fontSize: '12px',
      fontWeight: '600',
      iconSize: '12px',
      gap: '6px'
    },
    sm: {
      height: '22px',
      padding: '3px 8px',
      fontSize: '12px',
      fontWeight: '600',
      iconSize: '12px',
      gap: '6px'
    },
    md: {
      height: '24px',
      padding: '4px 10px',
      fontSize: '14px',
      fontWeight: '600',
      iconSize: '12px',
      gap: '6px'
    },
    lg: {
      height: '28px',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: '600',
      iconSize: '12px',
      gap: '6px'
    }
  },
  borderRadius: {
    squarical: {
      xs: '6px',
      sm: '6px',
      md: '6px',
      lg: '8px'
    },
    rounded: {
      xs: '100px',
      sm: '100px',
      md: '100px',
      lg: '100px'
    }
  },
  splitShape: {
    rounded: {
      left: (size: TagSize) => `${tagTokens.borderRadius.rounded[size]} 0 0 ${tagTokens.borderRadius.rounded[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.borderRadius.rounded[size]} ${tagTokens.borderRadius.rounded[size]} 0`
    },
    squarical: {
      left: (size: TagSize) => `${tagTokens.borderRadius.squarical[size]} 0 0 ${tagTokens.borderRadius.squarical[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.borderRadius.squarical[size]} ${tagTokens.borderRadius.squarical[size]} 0`
    }
  },
  layout: {
    slot: 'flex items-center justify-center',
    container: 'inline-flex',
    base: 'inline-flex items-center justify-center transition-all duration-200'
  },
  font: {
    letterSpacing: '-0.01em'
  },
  
  /**
   * Token Utility Methods
   * 
   * These utility methods provide a standardized, type-safe interface for accessing 
   * token values. They offer several key advantages over direct object access:
   * 
   * 1. Type Safety: Ensures proper enum values are used with TypeScript validation
   * 2. Abstraction: Shields component implementation from token structure changes
   * 3. Normalization: Handles any necessary data transformations consistently
   * 4. Performance: Reduces potential for complex inline expressions in styled components
   * 5. Maintainability: Centralizes token access logic for easier updates
   * 
   * Example usage in styled components:
   * ${({$variant, $status}) => tagTokens.getBackgroundColor($variant, $status)}
   */
  
  // Utility methods for normalized token access
  getBackgroundColor: (variant: TagVariant, status: TagStatus): string => 
    tagTokens.background[variant as keyof typeof tagTokens.background][status as TagStatusValue],
  
  getTextColor: (variant: TagVariant, status: TagStatus): string => 
    tagTokens.text[variant as keyof typeof tagTokens.text][status as TagStatusValue],
  
  getIconColor: (variant: TagVariant, status: TagStatus): string => 
    tagTokens.icon[variant as keyof typeof tagTokens.icon][status as TagStatusValue],
  
  getBorderColor: (variant: TagVariant, status: TagStatus): string => 
    tagTokens.border[variant as keyof typeof tagTokens.border][status as TagStatusValue],
  
  getBorderRadius: (shape: TagShape, size: TagSize): string => 
    tagTokens.borderRadius[shape][size],
  
  getSplitBorderRadius: (shape: TagShape, position: 'left' | 'right', size: TagSize): string => 
    tagTokens.splitShape[shape][position](size)
};

export default tagTokens; 