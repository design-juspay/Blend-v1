import { FOUNDATION_THEME } from "../../tokens";
import { CSSObject } from "styled-components";
import { foundationToken } from "../../foundationToken";

type SnackbarToken = {
  base: {
    container: CSSObject;
    content: CSSObject;
    icon: CSSObject;
    closeButton: CSSObject;
  };
  layout: {
    headerContainer: CSSObject;
    headerContent: CSSObject;
    messageContainer: CSSObject;
    heading: CSSObject;
    message: CSSObject;
    actionMessage: CSSObject;
  };
  type: {
    info: {
      backgroundColor: CSSObject["backgroundColor"];
      textColor: CSSObject["color"];
      iconColor: CSSObject["color"];
    };
    warning: {
      backgroundColor: CSSObject["backgroundColor"];
      textColor: CSSObject["color"];
      iconColor: CSSObject["color"];
    };
    error: {
      backgroundColor: CSSObject["backgroundColor"];
      textColor: CSSObject["color"];
      iconColor: CSSObject["color"];
    };
    success: {
      backgroundColor: CSSObject["backgroundColor"];
      textColor: CSSObject["color"];
      iconColor: CSSObject["color"];
    };
  };
  position: {
    topRight: CSSObject;
    topLeft: CSSObject;
    bottomRight: CSSObject;
    bottomLeft: CSSObject;
  };
};

const snackbarTokens: SnackbarToken = {
  base: {
    container: {
      display: "flex",
      "flex-direction": "column",
      padding: FOUNDATION_THEME.unit[16],
      "border-radius": FOUNDATION_THEME.border.radius[12],
      "box-shadow": FOUNDATION_THEME.shadows.lg,
      "max-width": "300px",
      transition: "all 200ms ease",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: FOUNDATION_THEME.unit[4],
    },
    icon: {
      flexShrink: 0,
    },
    closeButton: {
      marginLeft: FOUNDATION_THEME.unit[16],
      flexShrink: 0,
      cursor: "pointer",
      opacity: 1,
      border: "none",
      background: "transparent",
      padding: FOUNDATION_THEME.unit[4],
      borderRadius: FOUNDATION_THEME.border.radius[4],
      transition: "opacity 150ms ease",
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
  layout: {
    headerContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      gap: FOUNDATION_THEME.unit[8],
    },
    messageContainer: {
      marginTop: FOUNDATION_THEME.unit[6],
      paddingLeft: FOUNDATION_THEME.unit[28],
      display: "flex",
      flexDirection: "column",
      gap: FOUNDATION_THEME.unit[16],
    },
    heading: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "1.5",
      margin: 0,
    },
    message: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "1.4",
      wordBreak: "break-word",
      margin: 0,
    },
    actionMessage: {
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      background: "transparent",
      padding: 0,
      textAlign: "left",
      textDecoration: "none",
      transition: "color 150ms ease",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  type: {
    info: {
      backgroundColor: foundationToken.colors.gray[800],
      textColor: foundationToken.colors.gray[100],
      iconColor: foundationToken.colors.primary[400],
    },
    warning: {
      backgroundColor: foundationToken.colors.gray[800],
      textColor: foundationToken.colors.gray[100],
      iconColor: foundationToken.colors.yellow[400],
    },
    error: {
      backgroundColor: foundationToken.colors.gray[800],
      textColor: foundationToken.colors.gray[100],
      iconColor: foundationToken.colors.red[400],
    },
    success: {
      backgroundColor: foundationToken.colors.gray[800],
      textColor: foundationToken.colors.gray[100],
      iconColor: foundationToken.colors.green[400],
    },
  },
  position: {
    topRight: {
      top: FOUNDATION_THEME.unit[16],
      right: FOUNDATION_THEME.unit[16],
    },
    topLeft: {
      top: FOUNDATION_THEME.unit[16],
      left: FOUNDATION_THEME.unit[16],
    },
    bottomRight: {
      bottom: FOUNDATION_THEME.unit[16],
      right: FOUNDATION_THEME.unit[16],
    },
    bottomLeft: {
      bottom: FOUNDATION_THEME.unit[16],
      left: FOUNDATION_THEME.unit[16],
    },
  },
};

export default snackbarTokens; 