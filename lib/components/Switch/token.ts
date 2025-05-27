import { FOUNDATION_THEME } from "../../tokens";

/**
 * Switch component specific tokens
 */
const switchTokens = {
  background: {
    enabled: FOUNDATION_THEME.colors.primary[500], // Primary color for enabled state
    disabled: FOUNDATION_THEME.colors.primary[300], // Light primary for disabled but checked
    inactive: FOUNDATION_THEME.colors.gray[150], // Light gray for inactive/unchecked state
  },
  thumb: {
    background: FOUNDATION_THEME.colors.gray[25], // Light background for thumb
    border: {
      color: FOUNDATION_THEME.colors.gray[300], // Border color for thumb
      width: '0.5px' // Thin border
    }
  },
  label: {
    default: FOUNDATION_THEME.colors.gray[700], // Text color
    disabled: FOUNDATION_THEME.colors.gray[300], // Disabled text color
    fontWeight: 500
  },
  subtext: {
    default: FOUNDATION_THEME.colors.gray[400], // Subtext color
    disabled: FOUNDATION_THEME.colors.gray[200] // Disabled subtext color
  },
  groupLabel: {
    color: FOUNDATION_THEME.colors.gray[700], // Group label color
    fontWeight: 500
  },
  border: {
    radius: FOUNDATION_THEME.border.radius.full, // Full radius for rounded switch
    focus: FOUNDATION_THEME.colors.primary[200] // Focus ring color
  },
  sizes: {
    sm: {
      root: {
        width: FOUNDATION_THEME.unit[24], // "24px" (w-6)
        height: FOUNDATION_THEME.unit[12] // "12px" (h-3)
      },
      thumb: {
        width: FOUNDATION_THEME.unit[10], // "10px" (w-2.5)
        height: FOUNDATION_THEME.unit[10], // "10px" (h-2.5)
        top: '1px'
      },
      thumbOn: FOUNDATION_THEME.unit[12], // "12px" translate-x-3
      thumbOff: FOUNDATION_THEME.unit[2], // "2px" translate-x-0.5
      fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // body-sm
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // body-sm
        marginLeft: FOUNDATION_THEME.unit[32], // "32px" (ml-8)
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    },
    md: {
      root: {
        width: FOUNDATION_THEME.unit[28], // "28px" (w-7)
        height: FOUNDATION_THEME.unit[14] // "14px" (h-3.5)
      },
      thumb: {
        width: FOUNDATION_THEME.unit[12], // "12px" (w-3)
        height: FOUNDATION_THEME.unit[12], // "12px" (h-3)
        top: '1px'
      },
      thumbOn: FOUNDATION_THEME.unit[14], // "14px" translate-x-3.5
      thumbOff: FOUNDATION_THEME.unit[2], // "2px" translate-x-0.5
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
        marginLeft: FOUNDATION_THEME.unit[36], // "36px" (ml-9)
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[8], // "8px" (ml-2)
    switchMarginRight: FOUNDATION_THEME.unit[8], // "8px" spacing between switch and label
    groupSpacing: FOUNDATION_THEME.unit[16] // "16px" spacing between switch items
  },
  transition: {
    duration: '300ms', // Transition duration
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Smooth easing
  }
};

export default switchTokens; 