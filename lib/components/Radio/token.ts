import { FOUNDATION_THEME } from "../../tokens";

/**
 * Radio component specific tokens
 */
const radioTokens = {
  background: {
    default: FOUNDATION_THEME.colors.gray[0], // White background
    checked: FOUNDATION_THEME.colors.primary[500], // Primary color for checked state
    disabled: FOUNDATION_THEME.colors.gray[50], // Light gray for disabled
    disabledChecked: FOUNDATION_THEME.colors.primary[200] // Light primary for disabled but checked
  },
  border: {
    width: FOUNDATION_THEME.border.width[1], // "1px"
    radius: FOUNDATION_THEME.border.radius.full, // Full radius for circular radio
    default: FOUNDATION_THEME.colors.gray[300], // Border color
    hover: FOUNDATION_THEME.colors.primary[600], // Hover border color
    focus: FOUNDATION_THEME.colors.primary[200] // Focus ring color
  },
  indicator: {
    color: FOUNDATION_THEME.colors.gray[0], // White indicator dot
    size: {
      sm: FOUNDATION_THEME.unit[6], // "6px" inner dot for small
      md: FOUNDATION_THEME.unit[8] // "8px" inner dot for medium
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
  sizes: {
    sm: {
      radio: {
        width: FOUNDATION_THEME.unit[14], // "14px" (3.5 * 4)
        height: FOUNDATION_THEME.unit[14]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // body-sm
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`, // body-sm
        marginLeft: FOUNDATION_THEME.unit[20], // "20px" (5 * 4)
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    },
    md: {
      radio: {
        width: FOUNDATION_THEME.unit[16], // "16px" (4 * 4)
        height: FOUNDATION_THEME.unit[16]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`, // body-md
        marginLeft: FOUNDATION_THEME.unit[24], // "24px" (6 * 4)
        marginTop: FOUNDATION_THEME.unit[4] // "4px"
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[6], // "6px" (1.5 * 4)
    radioMarginRight: FOUNDATION_THEME.unit[8], // "8px" (2 * 4)
    groupSpacing: FOUNDATION_THEME.unit[16] // "16px" spacing between radio items
  }
};

export default radioTokens; 