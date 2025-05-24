type FontWeightType = Readonly<{
  100: number;
  200: number;
  300: number;
  400: number;
  500: number;
  600: number;
  700: number;
  800: number;
  900: number;
}>;

type FontFamilyType = Readonly<{
  display: string;
  body: string;
  heading: string;
  mono: string;
}>;

type LetterSpacingType = Readonly<{
  compressed: number;
  condensed: number;
  normal: number;
  expanded: number;
  extended: number;
}>;

export type FontGroupType = Readonly<{
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}>;

type FontSizeType = Readonly<{
  base: number; // as 1rem
  body: {
    xs: FontGroupType;
    sm: FontGroupType;
    md: FontGroupType;
    lg: FontGroupType;
  };
  heading: {
    sm: FontGroupType;
    md: FontGroupType;
    lg: FontGroupType;
    xl: FontGroupType;
    "2xl": FontGroupType;
  };
  display: {
    sm: FontGroupType;
    md: FontGroupType;
    lg: FontGroupType;
    xl: FontGroupType;
  };
  code: {
    sm: FontGroupType;
    md: FontGroupType;
    lg: FontGroupType;
  };
}>

export type FontTokensType = Readonly<{
  family: FontFamilyType;
  weight: FontWeightType;
  letterSpacing: LetterSpacingType;
  size: FontSizeType;
}>;


/**
 * Font tokens
 * @description
 * Font tokens are used to define the font family, weight, size, and letter spacing.
 * @warning
 * Whenever changing the font tokens, make sure to handle it in the Text   Component as well.
 */
const fontTokens: FontTokensType = {
  family: {
    display: "InterDisplay",
    body: "InterDisplay",
    heading: "InterDisplay",
    mono: "SF Mono",
  },
  weight: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  letterSpacing: {
    compressed: -2,
    condensed: -1,
    normal: 0,
    expanded: 1,
    extended: 2,
  },
  size: {
    base: 16,
    body: {
      xs: {
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: 0,
      },
      sm: {
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0,
      },
      md: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
      },
      lg: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
      },
    },
    heading: {
      sm: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0,
      },
      md: {
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0,
      },
      lg: {
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
      xl: {
        fontSize: 32,
        lineHeight: 38,
        letterSpacing: 0,
      },
      "2xl": {
        fontSize: 40,
        lineHeight: 46,
        letterSpacing: 0,
      },
    },
    display: {
      sm: {
        fontSize: 48,
        lineHeight: 56,
        letterSpacing: 0,
      },
      md: {
        fontSize: 56,
        lineHeight: 64,
        letterSpacing: 0,
      },
      lg: {
        fontSize: 64,
        lineHeight: 70,
        letterSpacing: 0,
      },
      xl: {
        fontSize: 72,
        lineHeight: 78,
        letterSpacing: 0,
      },
    },
    code: {
      sm: {
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: 0,
      },
      md: {
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0,
      },
      lg: {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0,
      },
    },
  },
};

export default fontTokens;