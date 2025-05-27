import { FOUNDATION_THEME } from "../../tokens";

const radioTokens = {
  background: {
    default: FOUNDATION_THEME.colors.gray[0], 
    checked: FOUNDATION_THEME.colors.primary[500],
    disabled: FOUNDATION_THEME.colors.gray[50],
    disabledChecked: FOUNDATION_THEME.colors.primary[200]
  },
  border: {
    width: FOUNDATION_THEME.border.width[1],
    radius: FOUNDATION_THEME.border.radius.full,
    default: FOUNDATION_THEME.colors.gray[300],
    hover: FOUNDATION_THEME.colors.primary[600],
    focus: FOUNDATION_THEME.colors.primary[200]
  },
  indicator: {
    color: FOUNDATION_THEME.colors.gray[0],
    size: {
      sm: FOUNDATION_THEME.unit[6],
      md: FOUNDATION_THEME.unit[8]
    }
  },
  label: {
    default: FOUNDATION_THEME.colors.gray[700],
    disabled: FOUNDATION_THEME.colors.gray[300],
    fontWeight: 500
  },
  subtext: {
    default: FOUNDATION_THEME.colors.gray[400], 
    disabled: FOUNDATION_THEME.colors.gray[200] 
  },
  groupLabel: {
    color: FOUNDATION_THEME.colors.gray[700],       
    fontWeight: 500
  },
  sizes: {
    sm: {
      radio: {
        width: FOUNDATION_THEME.unit[14],
        height: FOUNDATION_THEME.unit[14]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.sm.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[20],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    },
    md: {
      radio: {
        width: FOUNDATION_THEME.unit[16],
        height: FOUNDATION_THEME.unit[16]
      },
      fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
      subtext: {
        fontSize: `${FOUNDATION_THEME.font.size.body.md.fontSize}px`,
        marginLeft: FOUNDATION_THEME.unit[24],
        marginTop: FOUNDATION_THEME.unit[4]
      }
    }
  },
  spacing: {
    rightSlot: FOUNDATION_THEME.unit[6], 
    radioMarginRight: FOUNDATION_THEME.unit[8], 
    groupSpacing: FOUNDATION_THEME.unit[16] 
  }
};

export default radioTokens; 