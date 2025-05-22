import { foundationToken } from "../../foundationToken";

const tabsTokens = {
  layout: {
    root: {
      width: "100%",
    },
    list: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: "12px",
    },
    expanded: {
      justifyContent: "space-between",
    }
  },
  sizes: {
    md: {
      triggerHeight: "36px",
      underlineOffset: "0px",
    },
    lg: {
      listHeight: "48px", 
      triggerHeight: "40px",
      underlineOffset: "0px",
    }
  },
  background: {
    boxed: {
      list: foundationToken.colors.gray[50],
      default: "transparent",
      hover: foundationToken.colors.gray[0],
      active: foundationToken.colors.gray[0],
    },
    floating: {
      list: "transparent",
      default: "transparent",
      hover: "transparent",
      active: foundationToken.colors.gray[100],
    },
    underline: {
      list: "transparent",
      default: "transparent",
      hover: "transparent",
      active: "transparent",
    }
  },
  text: {
    boxed: {
      default: foundationToken.colors.gray[500],
      hover: foundationToken.colors.gray[600],
      active: foundationToken.colors.gray[700],
    },
    floating: {
      default: foundationToken.colors.gray[500],
      hover: foundationToken.colors.gray[700],
      active: foundationToken.colors.gray[700],
    },
    underline: {
      default: foundationToken.colors.gray[500],
      hover: foundationToken.colors.gray[600],
      active: foundationToken.colors.gray[700],
    }
  },
  border: {
    boxed: {
      radius: "8px"
    },
    floating: {
      radius: "8px",
    },
    underline: {
      default: "transparent",
      active: foundationToken.colors.gray[700],
      width: "2px",
    },
    list: {
      bottom: foundationToken.colors.gray[200],
    }
  },
  shadow: {
    boxed: "0px 2px 3px 0px rgba(5, 5, 6, 0.05)",
  },
  content: {
    animation: {
      duration: "0.2s",
      timing: "ease-in-out",
    }
  },
  font: {
    weight: {
      default: "500",
      active: "600",
    },
    size: "14px"
  },
  spacing: {
    icon: "8px"
  }
};

export default tabsTokens;