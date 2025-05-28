import { FOUNDATION_THEME } from "../../tokens";

const selectTokens = {
  trigger: {
    container: {
      gap: FOUNDATION_THEME.unit[8],
    },
    label: {
      color: FOUNDATION_THEME.colors.gray[700],
      fontWeight: 500,
      fontSize: 14,
    },
    selectedValue: {
      color: FOUNDATION_THEME.colors.gray[700],
      font: {
        weight: 500,
        size: {
          sm: "body.sm",
          md: "body.md",
          lg: "body.md",
        },
      },
      padding: {
        sm: {
          x: FOUNDATION_THEME.unit[14],
          y: FOUNDATION_THEME.unit[6],
        },
        md: {
          x: FOUNDATION_THEME.unit[14],
          y: FOUNDATION_THEME.unit[8],
        },
        lg: {
          x: FOUNDATION_THEME.unit[14],
          y: FOUNDATION_THEME.unit[10],
        },
      },
    },
  },
};

export default selectTokens;
