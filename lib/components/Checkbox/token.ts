import { FOUNDATION_THEME } from "../../tokens";

/**
 * Checkbox component specific tokens
 */
const checkboxTokens = {
  background: {
    default: FOUNDATION_THEME.colors.gray[0], // "#FFFFFF"
    hover: FOUNDATION_THEME.colors.gray[0], // "#FFFFFF"
    intermediate: FOUNDATION_THEME.colors.primary[500], // Primary color for indeterminate state
    checked: FOUNDATION_THEME.colors.primary[500], // Primary color for checked state
    disabled: FOUNDATION_THEME.colors.gray[50], // Lighter gray for disabled
    disabledChecked: FOUNDATION_THEME.colors.primary[200] // Light primary for disabled but checked
  },
  icon: {
    default: FOUNDATION_THEME.unit[24], // "24px"
    small: FOUNDATION_THEME.unit[16], // "16px"
    color: FOUNDATION_THEME.colors.gray[0] // White icon
  },
  label: {
    default: FOUNDATION_THEME.colors.gray[600], // Text color
    disabled: FOUNDATION_THEME.colors.gray[400], // Disabled text color
    fontWeight: 500
  },
  subtext: {
    default: FOUNDATION_THEME.colors.gray[400], // Subtext color
    disabled: FOUNDATION_THEME.colors.gray[200] // Disabled subtext color
  },
  border: {
    width: FOUNDATION_THEME.border.width[1], // "1px"
    radius: FOUNDATION_THEME.border.radius[4], // "4px" rounded
    default: FOUNDATION_THEME.colors.gray[200], // Border color
    hover: FOUNDATION_THEME.colors.primary[600], // Hover border color
    focus: FOUNDATION_THEME.colors.primary[200] // Focus ring color
  },
  sizes: {
    sm: {
      root: {
        width: FOUNDATION_THEME.unit[14], // Now we can use the 14px token
        height: FOUNDATION_THEME.unit[14]
      },
      indicator: {
        width: FOUNDATION_THEME.unit[14],
        height: FOUNDATION_THEME.unit[14]
      },
      icon: {
        width: FOUNDATION_THEME.unit[10], // Slightly smaller than container
        height: FOUNDATION_THEME.unit[10]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // body-sm
        marginLeft: FOUNDATION_THEME.unit[20], // "20px"
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    },
    md: {
      root: {
        width: FOUNDATION_THEME.unit[16], // "16px"
        height: FOUNDATION_THEME.unit[16]
      },
      indicator: {
        width: FOUNDATION_THEME.unit[16], 
        height: FOUNDATION_THEME.unit[16]
      },
      icon: {
        width: FOUNDATION_THEME.unit[12], // Using 12px for icon
        height: FOUNDATION_THEME.unit[12]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
        marginLeft: FOUNDATION_THEME.unit[24], // "24px"
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[6], // "6px" (1.5 from tailwind)
    checkboxMarginRight: FOUNDATION_THEME.unit[8] // "8px" (2 from tailwind)
  }
};

export default checkboxTokens; 