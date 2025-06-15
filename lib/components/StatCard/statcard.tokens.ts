import { CSSObject } from 'styled-components';
import { FOUNDATION_THEME, ThemeType } from '../../tokens';
import { ChangeType } from './types';

export type StatCardTokensType = Readonly<{
  container: {
    fixedHeight: CSSObject['height'];
    border: {
      width: CSSObject['borderWidth'];
      color: CSSObject['borderColor'];
      radius: CSSObject['borderRadius'];
    };
    background: {
      color: CSSObject['backgroundColor'];
    };
    effect: {
      boxShadow: CSSObject['boxShadow'];
    };
    spacing: {
      padding: CSSObject['padding'];
      gap: CSSObject['gap'];
    };
  };

  header: {
    spacing: {
      gap: CSSObject['gap'];
      titleIconPaddingLeft: CSSObject['paddingLeft'];
    };
  };
  
  titleArea: {
    spacing: {
        gap: CSSObject['gap'];
    };
  };

  titleIcon: {
    dimension: {
      width: CSSObject['width'];
      height: CSSObject['height'];
    };
  };

  titleText: {
    font: {
      weight: CSSObject['fontWeight'];
    };
    color: CSSObject['color'];
  };

  helpIcon: {
    dimension: {
        width: CSSObject['width'];
        height: CSSObject['height'];
    };
    color: CSSObject['color'];
  };
  
  valueArea: {
      spacing: {
          gap: CSSObject['gap'];
      }
  };

  valueText: {
    font: {
      default: { // For line, bar, progress variants
        weight: CSSObject['fontWeight'];
      };
      numberVariant: { // For number variant
        weight: CSSObject['fontWeight'];
      };
    };
    color: CSSObject['color'];
  };

  changeIndicator: {
    arrowIcon: {
      spacing: {
        marginRight: CSSObject['marginRight'];
      };
    };
    text: {
      font: {
        weight: CSSObject['fontWeight'];
      };
      color: {
        [key in ChangeType]: CSSObject['color'];
      };
    };
    spacing: {
        marginLeft: CSSObject['marginLeft'];
    }
  };

  subtitleText: {
    font: {
      weight: CSSObject['fontWeight'];
    };
    color: CSSObject['color'];
  };

  chartArea: {
    height: CSSObject['height'];
  };

  chartLine: {
    stroke: {
      [key in ChangeType]: CSSObject['stroke'];
    };
    strokeWidth: CSSObject['strokeWidth'];
    areaFillOpacity: CSSObject['opacity'];
    areaBaseFill: CSSObject['fill'];
    activeDot: {
        fill: CSSObject['fill'];
    };
  };

  chartBar: {
    fill: {
      default: CSSObject['fill'];
      active: CSSObject['fill'];
    };
    radius: [number, number, number, number] | number | undefined;
  };
  
  chartTooltip: {
      background: CSSObject['backgroundColor'];
      spacing: {
          padding: CSSObject['padding'];
      };
      border: {
          radius: CSSObject['borderRadius'];
      };
      text: {
          color: CSSObject['color'];
      };
      cursor: {
          stroke: CSSObject['stroke'];
          strokeDasharray: CSSObject['strokeDasharray'];
      }
  };

  progressBar: {
    dimension: {
      height: CSSObject['height'];
    };
    spacing: {
      gap: CSSObject['gap'];
    };
    // $target: 'track'
    track: {
      background: CSSObject['backgroundColor'];
      patternColor: CSSObject['color'];
      radius: CSSObject['borderRadius'];
      patternSegmentWidth: CSSObject['backgroundSize'];
    };
    fill: {
      background: CSSObject['backgroundColor'];
    };
    text: {
      font: {
        weight: CSSObject['fontWeight'];
      };
      color: CSSObject['color'];
    };
  };
}>;

export const getStatCardTokens = (foundationToken: ThemeType): StatCardTokensType => {
  return {
    container: {
      fixedHeight: '190px',
      border: {
        width: foundationToken.border.width[1],
        color: foundationToken.colors.gray[200],
        radius: foundationToken.border.radius[8],
      },
      background: {
        color: foundationToken.colors.gray[0],
      },
      effect: {
        boxShadow: foundationToken.shadows.xs,
      },
      spacing: {
        padding: foundationToken.unit[16],
        gap: foundationToken.unit[24],
      },
    },
    header: {
      spacing: {
        gap: foundationToken.unit[4],
        titleIconPaddingLeft: foundationToken.unit[28],
      },
    },
    titleArea: {
        spacing: {
            gap: foundationToken.unit[8],
        }
    },
    titleIcon: {
      dimension: {
        width: foundationToken.unit[20],
        height: foundationToken.unit[20],
      },
    },
    titleText: {
      font: {
        weight: foundationToken.font.weight[500],
      },
      color: foundationToken.colors.gray[400],
    },
    helpIcon: {
      dimension: {
          width: '16px', // from CircleHelp width={16}
          height: '16px',
      },
      color: foundationToken.colors.gray[400],
    },
    valueArea: {
        spacing: {
            gap: foundationToken.unit[4],
        }
    },
    valueText: {
      font: {
        default: { // For line, bar, progress variants (uses heading.lg)
          weight: foundationToken.font.weight[600],
        },
        numberVariant: { // For number variant (uses heading.xl)
          weight: foundationToken.font.weight[600],
        },
      },
      color: foundationToken.colors.gray[800],
    },
    changeIndicator: {
      arrowIcon: {
        spacing: {
          marginRight: foundationToken.unit[2],
        },
      },
      text: {
        font: {
          weight: foundationToken.font.weight[600],
        },
        color: {
          [ChangeType.INCREASE]: foundationToken.colors.green[600],
          [ChangeType.DECREASE]: foundationToken.colors.red[600],
        },
      },
      spacing: {
          marginLeft: foundationToken.unit[8]
      }
    },
    subtitleText: {
      font: {
        weight: foundationToken.font.weight[500],
      },
      color: foundationToken.colors.gray[400],
    },
    chartArea: {
      height: '50px',
    },
    chartLine: {
      stroke: {
        [ChangeType.INCREASE]: foundationToken.colors.green[500],
        [ChangeType.DECREASE]: foundationToken.colors.red[500],
      },
      strokeWidth: '2px',
      areaFillOpacity: 0.2, // stopOpacity for start
      areaBaseFill: foundationToken.colors.gray[0], // stopColor for end (assuming white/transparent)
      activeDot: {
        fill: foundationToken.colors.gray[0],
        // stroke uses chartLine.stroke.increase/decrease
      },
    },
    chartBar: {
      fill: {
        default: foundationToken.colors.primary[500],
        active: foundationToken.colors.primary[100],
      },
      radius: [2, 2, 0, 0], // Directly assign the array
    },
    chartTooltip: {
        background: foundationToken.colors.gray[1000],
        spacing: {
            padding: `${foundationToken.unit[4]} ${foundationToken.unit[8]}`,
        },
        border: {
            radius: foundationToken.border.radius[4],
        },
        text: {
            color: foundationToken.colors.gray[0],
        },
        cursor: {
            stroke: foundationToken.colors.gray[400],
            strokeDasharray: "6 5",
        }
    },
    progressBar: {
      dimension: {
        height: foundationToken.unit[20],
      },
      spacing: {
        gap: foundationToken.unit[16],
      },
      track: {
        background: foundationToken.colors.gray[0],
        patternColor: foundationToken.colors.gray[200],
        radius: foundationToken.border.radius[4],
        patternSegmentWidth: `${foundationToken.unit[10]} ${foundationToken.unit[10]}`,
      },
      fill: {
        background: foundationToken.colors.primary[500],
      },
      text: {
        font: {
          weight: foundationToken.font.weight[600],
        },
        color: foundationToken.colors.gray[700],
      },
    },
  };
};

const statCardTokens: StatCardTokensType = getStatCardTokens(FOUNDATION_THEME);

export default statCardTokens;
