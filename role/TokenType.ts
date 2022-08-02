export type ColorType = {
  brandPrimary: string;
  brandSecondary: string;
  brandTertiary: string;
  darkPrimary: string;
  darkSecondary: string;
  lightPrimary: string;
  lightSecondary: string;
};

export type SpacingType = {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  ml: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
  xxxxl: number;
};

export type BorderType = {
  width: {
    thin: number;
    thick: number;
    bold: number;
  },
  radius: {
    default: number;
    rounded: string;
  },
};

export type FontSizeType = {
  gigantic: number;
  huge: number;
  big: number;
  large: number;
  medium: number;
  small: number;
  tiny: number;
  micro: number;
};
