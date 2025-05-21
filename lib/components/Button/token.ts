const buttonTokens = {
  background: {
    primary: {
      default:
        "linear-gradient(180deg, var(--color-primary-600, #0561E2) -5%, var(--color-primary-500, #2B7FFF) 107.5%)",
      hover:
        "linear-gradient(180deg, var(--color-primary-700, #0454C4) -5%, var(--color-primary-600, #0561E2) 107.5%)",
      disabled: "#a4ceff",
    },
    secondary: {
      default: "#ffffff",
      hover: "#f5f7fa",
      disabled: "#ffffff",
    },
    danger: {
      default:
        "linear-gradient(180deg, var(--color-red-600, #E7000B) 0%, var(--color-red-500, #FB2C36) 93.75%)",
      hover:
        "linear-gradient(180deg, var(--color-red-700, #D10009) 0%, var(--color-red-600, #E7000B) 93.75%)",
      disabled: "#ffa2a2",
    },
    success: {
      default:
        "linear-gradient(180deg, var(--color-green-600, #00A63E) 0%, var(--color-green-500, #00C951) 100%)",
      hover:
        "linear-gradient(180deg, var(--color-green-700, #008F36) 0%, var(--color-green-600, #00A63E) 100%)",
      disabled: "#b9f8cf",
    },
  },
  text: {
    primary: {
      default: "#ffffff",
      disabled: "#ffffff",
    },
    secondary: {
      default: "var(--color-primary-500, #2B7FFF)",
      disabled: "var(--color-primary-300, #a4ceff)",
    },
    danger: {
      default: "#ffffff",
      disabled: "#ffffff",
    },
    success: {
      default: "#ffffff",
      disabled: "#ffffff",
    },
  },
  border: {
    primary: {
      default: "var(--color-primary-500, #2B7FFF)",
      disabled: "var(--color-primary-300, #a4ceff)",
    },
    secondary: {
      default: "var(--color-gray-300, #e1e4ea)",
      disabled: "var(--color-gray-200, #f5f7fa)",
    },
    danger: {
      default: "var(--color-red-600, #E7000B)",
      disabled: "var(--color-red-300, #ffa2a2)",
    },
    success: {
      default: "var(--color-green-600, #00A63E)",
      disabled: "var(--color-green-300, #b9f8cf)",
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
    primary: "#eff6ff",
    secondary: "#f5f7fa",
    danger: "#fff1f1",
    success: "#f0fff5",
  },
  link: {
    primary: "var(--color-primary-500, #2B7FFF)",
    secondary: "var(--color-gray-700, #4a5568)",
    danger: "var(--color-red-500, #FB2C36)",
    success: "var(--color-green-500, #00C951)",
  },
};

export default buttonTokens;
