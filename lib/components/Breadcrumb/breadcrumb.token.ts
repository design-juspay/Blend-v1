import { FOUNDATION_THEME, ThemeType } from '../../tokens';
import { CSSObject } from 'styled-components';

export type BreadcrumbItemInteractionState = 'default' | 'hover' | 'active';

export type BreadcrumbTokensType = Readonly<{
  layout: {
    gap: CSSObject['gap'];
  };

  item: {
    text: {
      font: {
        size: CSSObject['fontSize'];
        weight: {
          [key in Extract<BreadcrumbItemInteractionState, 'default' | 'active'>]: CSSObject['fontWeight'];
        };
      };
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['color'];
      };
    };
    icon: {
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['color'];
      };
    };
    spacing: {
      gap: CSSObject['gap'];
    };
    transition: {
        duration: CSSObject['transitionDuration'];
        timingFunction: CSSObject['transitionTimingFunction'];
    };
  };

  divider: {
    color: CSSObject['color'];
  };

  moreButton: {
    size: {
      width: CSSObject['width'];
      height: CSSObject['height'];
    };
    spacing: {
      padding: CSSObject['padding'];
    };
    font: {
        weight: CSSObject['fontWeight'];
    };
    icon: {
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['color'];
      };
    };
    background: {
      color: {
        [key in Extract<BreadcrumbItemInteractionState, 'default' | 'active'>]: CSSObject['backgroundColor'];
      };
    };
    border: {
      radius: CSSObject['borderRadius'];
      width: CSSObject['borderWidth'];
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['borderColor'];
      };
    };
    transition: {
        duration: CSSObject['transitionDuration'];
        timingFunction: CSSObject['transitionTimingFunction'];
    };
  };

  iconSlot: {
    size: {
      width: CSSObject['width'];
      height: CSSObject['height'];
    };
  };
}>;

export const getBreadcrumbTokens = (foundationToken: ThemeType): BreadcrumbTokensType => {
  return {
    layout: {
      gap: foundationToken.unit[8] as CSSObject['gap'],
    },
    item: {
      text: {
        font: {
          size: foundationToken.font.size.body.md.fontSize as CSSObject['fontSize'],
          weight: {
            default: foundationToken.font.weight[500] as CSSObject['fontWeight'],
            active: foundationToken.font.weight[600] as CSSObject['fontWeight'],
          },
        },
        color: {
          default: foundationToken.colors.gray[400] as CSSObject['color'],
          hover: foundationToken.colors.gray[1000] as CSSObject['color'],
          active: foundationToken.colors.gray[700] as CSSObject['color'],
        },
      },
      icon: { // Assuming item icons follow the same color pattern as text
        color: {
          default: foundationToken.colors.gray[400] as CSSObject['color'],
          hover: foundationToken.colors.gray[1000] as CSSObject['color'],
          active: foundationToken.colors.gray[700] as CSSObject['color'],
        },
      },
      spacing: {
        gap: foundationToken.unit[6] as CSSObject['gap'], // e.g. "6px" from original StyledBreadcrumbLink
      },
      transition: {
        duration: '0.2s' as CSSObject['transitionDuration'],
        timingFunction: 'ease' as CSSObject['transitionTimingFunction'],
      },
    },
    divider: {
      color: foundationToken.colors.gray[400] as CSSObject['color'],
    },
    moreButton: {
      size: {
        width: '32px' as CSSObject['width'], // foundationToken.unit[32] or similar if exists
        height: '32px' as CSSObject['height'],
      },
      spacing: {
        padding: foundationToken.unit[4] as CSSObject['padding'], // This was dropdownPadding, assuming it's for button too
      },
      font: {
        weight: foundationToken.font.weight[500] as CSSObject['fontWeight'], // Default font weight
      },
      icon: { // For the "..." text/icon
        color: {
          default: foundationToken.colors.gray[400] as CSSObject['color'],
          hover: foundationToken.colors.gray[1000] as CSSObject['color'],
          active: foundationToken.colors.gray[1000] as CSSObject['color'],
        },
      },
      background: {
        color: {
          default: 'transparent' as CSSObject['backgroundColor'],
          active: foundationToken.colors.gray[50] as CSSObject['backgroundColor'],
        },
      },
      border: {
        radius: foundationToken.border.radius[8] as CSSObject['borderRadius'],
        width: foundationToken.border.width[1] as CSSObject['borderWidth'], // Assuming 1px border
        color: {
          default: 'transparent' as CSSObject['borderColor'],
          hover: foundationToken.colors.gray[150] as CSSObject['borderColor'],
          active: foundationToken.colors.gray[150] as CSSObject['borderColor'],
        },
      },
      transition: {
        duration: '0.2s' as CSSObject['transitionDuration'],
        timingFunction: 'ease' as CSSObject['transitionTimingFunction'],
      },
    },
    // `dropdown` and `dropdownItem` token values removed.
    iconSlot: {
      size: {
        width: '18px' as CSSObject['width'],
        height: '18px' as CSSObject['height'],
      },
    },
  };
};

const breadcrumbTokens: BreadcrumbTokensType = getBreadcrumbTokens(FOUNDATION_THEME);

export default breadcrumbTokens;
