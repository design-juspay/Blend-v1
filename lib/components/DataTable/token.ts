import { FOUNDATION_THEME } from "../../tokens";

const dataTableTokens = {
  container: {
    width: "100%",
    backgroundColor: FOUNDATION_THEME.colors.white,
    borderRadius: FOUNDATION_THEME.border.radius[12],
    boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
    overflow: "hidden"
  },
  header: {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: `${FOUNDATION_THEME.unit[24]} ${FOUNDATION_THEME.unit[24]} ${FOUNDATION_THEME.unit[16]}`,
      flexDirection: "column",
      gap: FOUNDATION_THEME.unit[16],
      borderBottom: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[100]}`
    },
    title: {
      fontSize: FOUNDATION_THEME.font.size.heading.lg.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
      color: FOUNDATION_THEME.colors.gray[900],
      lineHeight: FOUNDATION_THEME.font.size.heading.lg.lineHeight,
      margin: "0"
    },
    description: {
      fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
      color: FOUNDATION_THEME.colors.gray[600],
      lineHeight: FOUNDATION_THEME.font.size.body.md.lineHeight,
      margin: "0"
    }
  },
  filters: {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: FOUNDATION_THEME.unit[12],
      alignItems: "center"
    }
  },
  table: {
    base: {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "separate",
      borderSpacing: "0"
    },
    variant: {
      default: {
        borderSpacing: "0"
      },
      compact: {
        borderSpacing: "0"
      },
      bordered: {
        border: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`
      }
    },
    size: {
      sm: {
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize
      },
      md: {
        fontSize: FOUNDATION_THEME.font.size.body.md.fontSize
      },
      lg: {
        fontSize: FOUNDATION_THEME.font.size.body.lg.fontSize
      }
    },
    striped: {
      backgroundColor: FOUNDATION_THEME.colors.gray[25]
    },
    hoverable: {
      backgroundColor: FOUNDATION_THEME.colors.gray[50]
    }
  },
  thead: {
    base: {
      backgroundColor: FOUNDATION_THEME.colors.gray[50],
      borderBottom: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`
    },
    variant: {
      default: {},
      compact: {},
      bordered: {
        borderBottom: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`
      }
    }
  },
  th: {
    base: {
      padding: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[24]}`,
      textAlign: "left",
      fontWeight: FOUNDATION_THEME.font.weight[600],
      color: FOUNDATION_THEME.colors.gray[700],
      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
      lineHeight: FOUNDATION_THEME.font.size.body.sm.lineHeight,
      height: FOUNDATION_THEME.unit[48],
      verticalAlign: "middle",
      borderBottom: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`
    },
    variant: {
      default: {},
      compact: {
        padding: `${FOUNDATION_THEME.unit[8]} ${FOUNDATION_THEME.unit[16]}`
      },
      bordered: {
        borderRight: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`
      }
    },
    size: {
      sm: {
        fontSize: FOUNDATION_THEME.font.size.body.xs.fontSize,
        padding: `${FOUNDATION_THEME.unit[8]} ${FOUNDATION_THEME.unit[16]}`
      },
      md: {
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
        padding: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[24]}`
      },
      lg: {
        fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
        padding: `${FOUNDATION_THEME.unit[16]} ${FOUNDATION_THEME.unit[32]}`
      }
    },
    sortable: {
      cursor: "pointer",
      userSelect: "none",
      transition: "color 0.2s ease",
      "&:hover": {
        color: FOUNDATION_THEME.colors.gray[900]
      }
    }
  },
  tbody: {
    backgroundColor: FOUNDATION_THEME.colors.white
  },
  tr: {
    base: {
      borderBottom: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[100]}`,
      transition: "background-color 0.2s ease"
    },
    variant: {
      default: {},
      compact: {},
      bordered: {}
    },
    striped: {
      backgroundColor: FOUNDATION_THEME.colors.gray[25]
    },
    hover: {
      backgroundColor: FOUNDATION_THEME.colors.gray[50]
    }
  },
  td: {
    base: {
      padding: `${FOUNDATION_THEME.unit[16]} ${FOUNDATION_THEME.unit[24]}`,
      fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
      color: FOUNDATION_THEME.colors.gray[900],
      fontWeight: FOUNDATION_THEME.font.weight[500],
      lineHeight: FOUNDATION_THEME.font.size.body.md.lineHeight,
      verticalAlign: "middle",
      height: FOUNDATION_THEME.unit[64]
    },
    variant: {
      default: {},
      compact: {
        padding: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[16]}`,
        height: FOUNDATION_THEME.unit[48]
      },
      bordered: {
        borderRight: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[100]}`
      }
    },
    size: {
      sm: {
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
        padding: `${FOUNDATION_THEME.unit[12]} ${FOUNDATION_THEME.unit[16]}`
      },
      md: {
        fontSize: FOUNDATION_THEME.font.size.body.md.fontSize,
        padding: `${FOUNDATION_THEME.unit[16]} ${FOUNDATION_THEME.unit[24]}`
      },
      lg: {
        fontSize: FOUNDATION_THEME.font.size.body.lg.fontSize,
        padding: `${FOUNDATION_THEME.unit[20]} ${FOUNDATION_THEME.unit[32]}`
      }
    }
  },
  pagination: {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${FOUNDATION_THEME.unit[16]} ${FOUNDATION_THEME.unit[24]}`,
      borderTop: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[200]}`,
      backgroundColor: FOUNDATION_THEME.colors.gray[25],
      minHeight: FOUNDATION_THEME.unit[64]
    },
    text: {
      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
      color: FOUNDATION_THEME.colors.gray[700],
      fontWeight: FOUNDATION_THEME.font.weight[500],
      display: "flex",
      alignItems: "center",
      gap: FOUNDATION_THEME.unit[8]
    },
    controls: {
      display: "flex",
      alignItems: "center",
      gap: FOUNDATION_THEME.unit[8]
    },
    button: {
      base: {
        padding: `${FOUNDATION_THEME.unit[8]} ${FOUNDATION_THEME.unit[12]}`,
        borderRadius: FOUNDATION_THEME.border.radius[6],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[300]}`,
        backgroundColor: FOUNDATION_THEME.colors.white,
        fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
        fontWeight: FOUNDATION_THEME.font.weight[500],
        minWidth: FOUNDATION_THEME.unit[32],
        height: FOUNDATION_THEME.unit[32],
        transition: "all 0.2s ease"
      },
      enabled: {
        color: FOUNDATION_THEME.colors.gray[700],
        cursor: "pointer",
        "&:hover": {
          backgroundColor: FOUNDATION_THEME.colors.gray[50],
          borderColor: FOUNDATION_THEME.colors.gray[400]
        }
      },
      disabled: {
        opacity: FOUNDATION_THEME.opacity[50],
        cursor: "not-allowed",
        color: FOUNDATION_THEME.colors.gray[400],
        backgroundColor: FOUNDATION_THEME.colors.gray[50]
      },
      active: {
        backgroundColor: FOUNDATION_THEME.colors.blue[600],
        borderColor: FOUNDATION_THEME.colors.blue[600],
        color: FOUNDATION_THEME.colors.white
      }
    },
    select: {
      padding: `${FOUNDATION_THEME.unit[6]} ${FOUNDATION_THEME.unit[12]}`,
      borderRadius: FOUNDATION_THEME.border.radius[6],
      border: `${FOUNDATION_THEME.border.width[1]} solid ${FOUNDATION_THEME.colors.gray[300]}`,
      backgroundColor: FOUNDATION_THEME.colors.white,
      fontSize: FOUNDATION_THEME.font.size.body.sm.fontSize,
      color: FOUNDATION_THEME.colors.gray[700],
      cursor: "pointer",
      "&:focus": {
        outline: "none",
        borderColor: FOUNDATION_THEME.colors.blue[500],
        boxShadow: `0 0 0 3px ${FOUNDATION_THEME.colors.blue[100]}`
      }
    }
  },
  sortIcon: {
    base: {
      marginLeft: FOUNDATION_THEME.unit[8],
      height: FOUNDATION_THEME.unit[16],
      width: FOUNDATION_THEME.unit[16],
      color: FOUNDATION_THEME.colors.gray[400],
      transition: "color 0.2s ease"
    },
    active: {
      color: FOUNDATION_THEME.colors.gray[700]
    },
    asc: {
      transform: "rotate(0deg)"
    },
    desc: {
      transform: "rotate(180deg)"
    }
  },
  border: {
    radius: FOUNDATION_THEME.border.radius[12],
    width: FOUNDATION_THEME.border.width[1],
    color: FOUNDATION_THEME.colors.gray[200]
  }
};

export default dataTableTokens; 