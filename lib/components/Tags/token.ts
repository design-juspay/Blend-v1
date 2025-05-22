import { foundationToken } from '../foundationToken';
import { TagSize } from './types';

// Tag token definitions using foundationToken as the source of truth
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
  // Updated sizes to match design specifications
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
  // Updated styles for tag shapes to match design specifications
  style: {
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
  // Updated split tag specific styles
  splitStyle: {
    rounded: {
      left: (size: TagSize) => `${tagTokens.style.rounded[size]} 0 0 ${tagTokens.style.rounded[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.style.rounded[size]} ${tagTokens.style.rounded[size]} 0`
    },
    squarical: {
      left: (size: TagSize) => `${tagTokens.style.squarical[size]} 0 0 ${tagTokens.style.squarical[size]}`,
      right: (size: TagSize) => `0 ${tagTokens.style.squarical[size]} ${tagTokens.style.squarical[size]} 0`
    }
  },
  // Layout styles
  layout: {
    slot: 'flex items-center justify-center',
    container: 'inline-flex',
    base: 'inline-flex items-center justify-center transition-all duration-200'
  },
  // Font styling
  font: {
    family: 'var(--font-family-primary)',
    letterSpacing: '-0.01em'
  }
};

export default tagTokens; 