import { FOUNDATION_THEME } from "../../tokens";

const alertTokens = {
  backgroundColor: {
    primary: {
      subtle: FOUNDATION_THEME.colors.primary[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    warning: {
      subtle: FOUNDATION_THEME.colors.yellow[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    success: {
      subtle: FOUNDATION_THEME.colors.green[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    purple: {
      subtle: FOUNDATION_THEME.colors.purple[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    neutral: {
      subtle: FOUNDATION_THEME.colors.gray[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    error: {
      subtle: FOUNDATION_THEME.colors.red[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
    orange: {
      subtle: FOUNDATION_THEME.colors.orange[50],
      noFill: FOUNDATION_THEME.colors.gray[0],
    },
  },
  border: {
    primary: FOUNDATION_THEME.colors.primary[500],
    warning: FOUNDATION_THEME.colors.yellow[500],
    success: FOUNDATION_THEME.colors.green[500],
    purple: FOUNDATION_THEME.colors.purple[500],
    neutral: FOUNDATION_THEME.colors.gray[500],
    error: FOUNDATION_THEME.colors.red[500],
    orange: FOUNDATION_THEME.colors.orange[500],
  },
  button: {
    primary: FOUNDATION_THEME.colors.primary[700],
    warning: FOUNDATION_THEME.colors.yellow[700],
    success: FOUNDATION_THEME.colors.green[700],
    purple: FOUNDATION_THEME.colors.purple[700],
    neutral: FOUNDATION_THEME.colors.gray[700],
    error: FOUNDATION_THEME.colors.red[700],
    orange: FOUNDATION_THEME.colors.orange[700],
  },
};

export default alertTokens;
