import { FOUNDATION_THEME } from "../../lib/tokens";

export const HDFC_COMPONENT_TOKENS = {
  TAGS: {
    background: {
      noFill: {
        neutral: FOUNDATION_THEME.colors.gray[0],
        primary: FOUNDATION_THEME.colors.gray[0],
        success: FOUNDATION_THEME.colors.gray[0],
        error: FOUNDATION_THEME.colors.gray[0],
        warning: FOUNDATION_THEME.colors.gray[0],
        purple: FOUNDATION_THEME.colors.gray[0],
      },
      attentive: {
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[600],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[500],
        purple: FOUNDATION_THEME.colors.purple[500],
      },
      subtle: {
        neutral: FOUNDATION_THEME.colors.gray[50],
        primary: FOUNDATION_THEME.colors.primary[50],
        success: FOUNDATION_THEME.colors.green[50],
        error: FOUNDATION_THEME.colors.red[50],
        warning: FOUNDATION_THEME.colors.orange[50],
        purple: FOUNDATION_THEME.colors.purple[50],
      },
    },
    color: {
      noFill: {
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[800],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[500],
        purple: FOUNDATION_THEME.colors.purple[500],
      },
      attentive: {
        neutral: FOUNDATION_THEME.colors.gray[0],
        primary: FOUNDATION_THEME.colors.gray[0],
        success: FOUNDATION_THEME.colors.gray[0],
        error: FOUNDATION_THEME.colors.gray[0],
        warning: FOUNDATION_THEME.colors.gray[0],
        purple: FOUNDATION_THEME.colors.gray[0],
      },
      subtle: {
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[600],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[600],
        purple: FOUNDATION_THEME.colors.purple[600],
      },
    },
    borderColor: {
      noFill: {
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[600],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[500],
        purple: FOUNDATION_THEME.colors.purple[500],
      },
      subtle: {
        neutral: FOUNDATION_THEME.colors.gray[200],
        primary: FOUNDATION_THEME.colors.primary[100],
        success: FOUNDATION_THEME.colors.green[100],
        error: FOUNDATION_THEME.colors.red[100],
        warning: FOUNDATION_THEME.colors.orange[100],
        purple: FOUNDATION_THEME.colors.purple[100],
      },
      attentive: {
        neutral: FOUNDATION_THEME.colors.gray[950],
        primary: FOUNDATION_THEME.colors.primary[600],
        success: FOUNDATION_THEME.colors.green[600],
        error: FOUNDATION_THEME.colors.red[600],
        warning: FOUNDATION_THEME.colors.orange[500],
        purple: FOUNDATION_THEME.colors.purple[500],
      },
    },
    borderRadius: {
      squarical: {
        xs: FOUNDATION_THEME.border.radius[6],
        sm: FOUNDATION_THEME.border.radius[6],
        md: FOUNDATION_THEME.border.radius[6],
        lg: FOUNDATION_THEME.border.radius[8],
      },
      rounded: {
        xs: FOUNDATION_THEME.border.radius.full,
        sm: FOUNDATION_THEME.border.radius.full,
        md: FOUNDATION_THEME.border.radius.full,
        lg: FOUNDATION_THEME.border.radius.full,
      },
    },
    borderWidth: {
      noFill: {
        neutral: 1,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
      },
      subtle: {
        neutral: 1,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
      },
      attentive: {
        neutral: 2,
        primary: 1,
        success: 1,
        error: 1,
        warning: 1,
        purple: 1,
      },
    },
    font: {
      xs: {
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
        fontWeight: FOUNDATION_THEME.font.weight[600],
      },
      sm: {
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
        fontWeight: FOUNDATION_THEME.font.weight[600],
      },
      md: {
        fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
        fontWeight: FOUNDATION_THEME.font.weight[600],
      },
      lg: {
        fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
        fontWeight: FOUNDATION_THEME.font.weight[600],
      },
    },
    gap: {
      xs: FOUNDATION_THEME.unit[6],
      sm: FOUNDATION_THEME.unit[6],
      md: FOUNDATION_THEME.unit[6],
      lg: FOUNDATION_THEME.unit[6],
    },
    padding: {
      xs: `${FOUNDATION_THEME.unit[2]} ${FOUNDATION_THEME.unit[6]}`,
      sm: `${FOUNDATION_THEME.unit[3]} ${FOUNDATION_THEME.unit[8]}`,
      md: `${FOUNDATION_THEME.unit[4]} ${FOUNDATION_THEME.unit[10]}`,
      lg: `${FOUNDATION_THEME.unit[6]} ${FOUNDATION_THEME.unit[12]}`,
    },
    height: {
      xs: FOUNDATION_THEME.unit[20],
      sm: FOUNDATION_THEME.unit[22],
      md: FOUNDATION_THEME.unit[24],
      lg: FOUNDATION_THEME.unit[28],
    },
    slot: {
      size: {
        xs: FOUNDATION_THEME.unit[12],
        sm: FOUNDATION_THEME.unit[12],
        md: FOUNDATION_THEME.unit[12],
        lg: FOUNDATION_THEME.unit[12],
      },
    },
  },
};

export default HDFC_COMPONENT_TOKENS;
