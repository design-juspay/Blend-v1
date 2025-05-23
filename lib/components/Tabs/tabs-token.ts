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
      gap: foundationToken.spacing[12],
    },
    expanded: {
      justifyContent: "space-between",
    }
  },
  sizes: {
    md: {
      triggerHeight: foundationToken.spacing[36],
      underlineOffset: foundationToken.spacing[0],
    },
    lg: {
      listHeight: foundationToken.spacing[48], 
      triggerHeight: foundationToken.spacing[40],
      underlineOffset: foundationToken.spacing[0],
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
      radius: foundationToken.borderRadius[8]
    },
    floating: {
      radius: foundationToken.borderRadius[8],
    },
    underline: {
      default: "transparent",
      active: foundationToken.colors.gray[700],
      width: foundationToken.borderWidth[2],
    },
    list: {
      bottom: foundationToken.colors.gray[200],
    }
  },
  shadow: {
    boxed: foundationToken.boxShadow.sm,
  },
  content: {
    animation: {
      duration: "0.2s",
      timing: "ease-in-out",
    }
  },
  font: {
    weight: {
      default: foundationToken.fontWeight[500],
      active: foundationToken.fontWeight[600],
    },
    size: foundationToken.fontSize.bodyMD
  },
  spacing: {
    icon: foundationToken.spacing[8]
  }
};

export default tabsTokens;