type BorderWidthType = Readonly<{
  0: "0px";
  1: "1px";
  1.5: "1.5px";
  2: "2px";
  3: "3px";
  4: "4px";
}>;

type BorderRadiusType = Readonly<{
  0: string;
  2: string;
  4: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  full: string;
}>;


export type BorderTokensType = Readonly<{
  width: BorderWidthType;
  radius: BorderRadiusType;
}>;

const borderTokens: BorderTokensType = {
  width: {
    0: '0px',
    1: '1px',
    1.5: '1.5px',
    2: '2px',
    3: '3px',
    4: '4px',
  },
  radius: {
    0: '0px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    16: '16px',
    20: '20px',
    full: '9999px',
  },
};

export default borderTokens;
