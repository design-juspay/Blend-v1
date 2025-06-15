import { CSSObject } from 'styled-components';
import { FOUNDATION_THEME, ThemeType } from '../../tokens';
import { AvatarSize, AvatarShape } from '../Avatar/types';
import { AvatarGroupOverflowCounterState } from './types';

export type AvatarGroupTokensType = Readonly<{
  container: {
    spacing: {
      [key in AvatarSize]: CSSObject['marginLeft'];
    };
  };
  avatar: {
    stacking: {
      zIndex: CSSObject['zIndex'];
    };
    border: {
      width: CSSObject['borderWidth'];
      color: CSSObject['borderColor'];
    };
    selected: {
      ringColor: CSSObject['borderColor'];
      ringWidth: CSSObject['boxShadow'];
      ringOffset: CSSObject['outlineOffset'];
    };
  };
  overflowCounter: {
    dimension: {
      [key in AvatarSize]: {
        width: CSSObject['width'];
        height: CSSObject['height'];
        fontSize: CSSObject['fontSize'];
      };
    };
    font: {
        weight: CSSObject['fontWeight'];
    };
    shape: {
      [key in AvatarShape]: {
        borderRadius: CSSObject['borderRadius'];
      };
    };
    background: {
      [key in Extract<AvatarGroupOverflowCounterState, 'default' | 'hover' | 'active' | 'isOpen'>]: CSSObject['backgroundColor'];
    };
    text: {
      color: CSSObject['color'];
    };
    border: {
      width: CSSObject['borderWidth'];
      color: CSSObject['borderColor'];
    };
    transition: CSSObject['transition'];
  };
  menu: {
    spacing: {
        marginTop: CSSObject['marginTop'];
    };
    zIndex: CSSObject['zIndex'];
  };
}>;

export const getAvatarGroupTokens = (foundationToken: ThemeType): AvatarGroupTokensType => {
  const overflowCounterDimensions = {
    sm: {
      width: foundationToken.unit[24], 
      height: foundationToken.unit[24],
      fontSize: foundationToken.font.size.body.sm.fontSize,
    },
    md: {
      width: foundationToken.unit[32],
      height: foundationToken.unit[32],
      fontSize: foundationToken.font.size.body.md.fontSize,
    },
    lg: {
      width: foundationToken.unit[40],
      height: foundationToken.unit[40],
      fontSize: foundationToken.font.size.body.lg.fontSize,
    },
    xl: {
      width: foundationToken.unit[48],
      height: foundationToken.unit[48],
      fontSize: foundationToken.font.size.heading.sm.fontSize,
    },
  };

  const overflowCounterShapes = {
    circular: {
      borderRadius: foundationToken.border.radius.full,
    },
    rounded: {
      borderRadius: foundationToken.border.radius[8],
    },
  };

  return {
    container: {
      spacing: {
        [AvatarSize.SM]: `-${foundationToken.unit[6]}`,
        [AvatarSize.MD]: `-${foundationToken.unit[8]}`,
        [AvatarSize.LG]: `-${foundationToken.unit[12]}`, 
        [AvatarSize.XL]: `-${foundationToken.unit[16]}`, 
      },
    },
    avatar: {
      stacking: {
        zIndex: 1,
      },
      selected: {
        ringColor: foundationToken.colors.primary[500],
        ringWidth: `0 0 0 2px ${foundationToken.colors.primary[500]}`,
        ringOffset: '2px',
      },
      border: {
        width: '2px',
        color: foundationToken.colors.gray[0],
      },
    },
    overflowCounter: {
      dimension: overflowCounterDimensions,
      font: {
        weight: foundationToken.font.weight[500],
      },
      shape: overflowCounterShapes,
      background: {
        default: foundationToken.colors.gray[900],
        hover: foundationToken.colors.gray[800],
        active: foundationToken.colors.gray[950],
        isOpen: foundationToken.colors.gray[950],
      },
      text: {
        color: foundationToken.colors.gray[50],
      },
      border: {
        width: '2px',
        color: foundationToken.colors.gray[0],
      },
      transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
    },
    menu: {
      spacing: {
        marginTop: foundationToken.unit[4],
      },
      zIndex: 50,
    },
  };
};

const avatarGroupTokens: AvatarGroupTokensType = getAvatarGroupTokens(FOUNDATION_THEME);

export default avatarGroupTokens;
