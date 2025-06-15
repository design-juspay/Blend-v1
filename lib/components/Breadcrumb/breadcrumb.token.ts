import { FOUNDATION_THEME, ThemeType } from '../../tokens';
// Removed import from ./types, definitions will be added below
import { CSSObject } from 'styled-components';

// Token Structure: $component.[$target].$property.[$variant].[$type].[$state]
// $component: BREADCRUMB (implied by filename)
// $target: e.g., layout, item, divider, moreButton, dropdown, dropdownItem, iconSlot
// $property: e.g., gap, text, icon, color, background, border, size, spacing, font, transition, effect
// [$variant]: Optional. e.g., for item.text.font.weight (default, active), item.text.color (default, hover, active)
// [$type]: Optional. Not heavily used in Breadcrumb tokens directly, more for variants like primary/secondary in other components.
// [$state]: Optional. Covered by interaction states like 'default', 'hover', 'active'.

// States for item interaction - MOVED FROM TYPES.TS
export type BreadcrumbItemInteractionState = 'default' | 'hover' | 'active';

// MOVED FROM TYPES.TS
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
    icon: { // For icons within the item link/span, not the left/right slots
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['color'];
      };
    };
    spacing: {
      gap: CSSObject['gap']; // Gap between icon/slot and text within an item
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
        weight: CSSObject['fontWeight']; // For the "..." text
    };
    icon: { // Visual style of "..." if treated as an icon/button text
      color: {
        [key in BreadcrumbItemInteractionState]: CSSObject['color'];
      };
    };
    background: {
      color: {
        // hover for background is often handled by border or direct hover state
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
  dropdown: {
    size: {
      minWidth: CSSObject['minWidth'];
    };
    spacing: {
      offsetY: CSSObject['transform']; // Or could be marginTop
      padding: CSSObject['padding'];
    };
    background: {
      color: CSSObject['backgroundColor'];
    };
    border: {
      radius: CSSObject['borderRadius'];
      width: CSSObject['borderWidth'];
      color: CSSObject['borderColor'];
    };
    effect: {
      shadow: CSSObject['boxShadow'];
    };
  };
  dropdownItem: {
    spacing: {
      padding: CSSObject['padding'];
    };
    background: {
      color: {
        hover: CSSObject['backgroundColor'];
      };
    };
    // item text/icon styles will reuse item.text and item.icon tokens for consistency
    // or define dropdownItem.text.color etc. if they need to be distinct
  };
  iconSlot: { // For leftSlot/rightSlot containers
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
    dropdown: {
      size: {
        minWidth: '192px' as CSSObject['minWidth'],
      },
      spacing: {
        offsetY: 'translateY(4px)' as CSSObject['transform'],
        padding: `${foundationToken.unit[4]} 0` as CSSObject['padding'],
      },
      background: {
        color: foundationToken.colors.gray[0] as CSSObject['backgroundColor'],
      },
      border: {
        radius: foundationToken.border.radius[8] as CSSObject['borderRadius'],
        width: foundationToken.border.width[1] as CSSObject['borderWidth'], // Assuming 1px
        color: foundationToken.colors.gray[200] as CSSObject['borderColor'],
      },
      effect: {
        shadow: foundationToken.shadows.lg as CSSObject['boxShadow'],
      },
    },
    dropdownItem: {
      spacing: {
        padding: `${foundationToken.unit[8]} ${foundationToken.unit[16]}` as CSSObject['padding'],
      },
      background: {
        color: {
          hover: foundationToken.colors.gray[50] as CSSObject['backgroundColor'],
        },
      },
    },
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
