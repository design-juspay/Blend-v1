import { foundationToken } from "../../foundationToken";


const buttonTokens = {
  background: {
    primary: {
      default: `linear-gradient(180deg, ${foundationToken.colors.primary[600]} -5%, ${foundationToken.colors.primary[500]} 107.5%)`,
      hover: `linear-gradient(180deg, ${foundationToken.colors.primary[700]} -5%, ${foundationToken.colors.primary[600]} 107.5%)`,
      disabled: foundationToken.colors.primary[300],
    },
    secondary: {
      default: foundationToken.colors.gray[0],
      hover: foundationToken.colors.gray[50],
      disabled: foundationToken.colors.gray[0],
    },
    danger: {
      default: `linear-gradient(180deg, ${foundationToken.colors.red[600]} 0%, ${foundationToken.colors.red[500]} 93.75%)`,
      hover: `linear-gradient(180deg, ${foundationToken.colors.red[700]} 0%, ${foundationToken.colors.red[600]} 93.75%)`,
      disabled: foundationToken.colors.red[300],
    },
    success: {
      default: `linear-gradient(180deg, ${foundationToken.colors.green[600]} 0%, ${foundationToken.colors.green[500]} 100%)`,
      hover: `linear-gradient(180deg, ${foundationToken.colors.green[700]} 0%, ${foundationToken.colors.green[600]} 100%)`,
      disabled: foundationToken.colors.green[300],
    },
  },
  text: {
    primary: {
      default: foundationToken.colors.gray[0],
      disabled: foundationToken.colors.gray[0],
    },
    secondary: {
      default: foundationToken.colors.primary[500],
      disabled: foundationToken.colors.primary[300],
    },
    danger: {
      default: foundationToken.colors.gray[0],
      disabled: foundationToken.colors.gray[0],
    },
    success: {
      default: foundationToken.colors.gray[0],
      disabled: foundationToken.colors.gray[0],
    },
  },
  border: {
    primary: {
      default: foundationToken.colors.primary[500],
      disabled: foundationToken.colors.primary[300],
    },
    secondary: {
      default: foundationToken.colors.gray[300],
      disabled: foundationToken.colors.gray[200],
    },
    danger: {
      default: foundationToken.colors.red[600],
      disabled: foundationToken.colors.red[300],
    },
    success: {
      default: foundationToken.colors.green[600],
      disabled: foundationToken.colors.green[300],
    },
  },
  borderWidth: {
    default: "1px",
    success: "1.5px",
  },
  borderRadius: {
    default: "8px",
    success: "10px",
  },
  lightBg: {
    primary: foundationToken.colors.primary[50],
    secondary: foundationToken.colors.gray[50],
    danger: foundationToken.colors.red[50],
    success: foundationToken.colors.green[50],
  },
  link: {
    primary: foundationToken.colors.primary[500],
    secondary: foundationToken.colors.gray[700],
    danger: foundationToken.colors.red[500],
    success: foundationToken.colors.green[500],
  },
};

export default buttonTokens;
