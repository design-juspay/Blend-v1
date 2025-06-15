import { CSSObject } from 'styled-components';
import { FOUNDATION_THEME, ThemeType } from '../../tokens';
import { AvatarSize, AvatarShape } from './types';

export type AvatarTokensType = Readonly<{
  container: {
    background: {
      default: CSSObject['backgroundColor'];
    };
    border: {
      color: {
        withImage: CSSObject['borderColor'];
        withoutImage: CSSObject['borderColor'];
      };
      width: CSSObject['borderWidth'];
    };
    dimension: {
      [key in AvatarSize]: {
        width: CSSObject['width'];
        height: CSSObject['height'];
      };
    };
    shape: {
      [key in AvatarShape]: {
        borderRadius: CSSObject['borderRadius'];
      };
    };
  };

  fallbackText: {
    font: {
      [key in AvatarSize]: {
        size: CSSObject['fontSize'];
        weight: CSSObject['fontWeight'];
      };
    };
    color: {
      default: CSSObject['color'];
    };
  };

  indicator: {
    background: {
      default: CSSObject['backgroundColor'];
    };
    dimension: {
      [key in AvatarSize]: {
        size: CSSObject['width'];
      };
    };
    ring: {
      color: {
        default: CSSObject['borderColor'];
      };
      width: {
        [key in AvatarSize]: CSSObject['borderWidth'];
      };
    };
    shape: {
        borderRadius: CSSObject['borderRadius'];
    };
  };
}>;

export const getAvatarTokens = (foundationToken: ThemeType): AvatarTokensType => {
  return {
    container: {
      background: {
        default: foundationToken.colors.gray[100],
      },
      border: {
        color: {
          withImage: foundationToken.colors.gray[0],
          withoutImage: foundationToken.colors.gray[200],
        },
        width: foundationToken.border.width[1],
      },
      dimension: {
        sm: {
          width: foundationToken.unit[24],
          height: foundationToken.unit[24],
        },
        md: {
          width: foundationToken.unit[32],
          height: foundationToken.unit[32],
        },
        lg: {
          width: foundationToken.unit[40],
          height: foundationToken.unit[40],
        },
        xl: {
          width: foundationToken.unit[48],
          height: foundationToken.unit[48],
        },
      },
      shape: {
        circular: {
          borderRadius: foundationToken.border.radius.full,
        },
        rounded: {
          borderRadius: foundationToken.border.radius[8],
        },
      },
    },
    fallbackText: {
      font: {
        sm: {
          size: foundationToken.font.size.body.sm.fontSize,
          weight: foundationToken.font.weight[500],
        },
        md: {
          size: foundationToken.font.size.body.md.fontSize,
          weight: foundationToken.font.weight[500],
        },
        lg: {
          size: foundationToken.font.size.body.lg.fontSize,
          weight: foundationToken.font.weight[500],
        },
        xl: {
          size: foundationToken.font.size.heading.sm.fontSize,
          weight: foundationToken.font.weight[600],
        },
      },
      color: {
        default: foundationToken.colors.gray[900],
      },
    },
    indicator: {
      background: {
        default: foundationToken.colors.green[400],
      },
      dimension: {
        sm: { size: '9px' },
        md: { size: '11px' },
        lg: { size: '13px' },
        xl: { size: '15px' },
      },
      ring: {
        color: {
          default: foundationToken.colors.gray[0],
        },
        width: {
          sm: '2px',
          md: '2px',
          lg: '2px',
          xl: '2.5px',
        },
      },
      shape: {
        borderRadius: foundationToken.border.radius.full,
      }
    },
  };
};

const avatarTokens: AvatarTokensType = getAvatarTokens(FOUNDATION_THEME);

export default avatarTokens;
