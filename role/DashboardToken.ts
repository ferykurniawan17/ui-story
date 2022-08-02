import { BorderType, ColorType, SpacingType, FontSizeType } from './TokenType';

export const Color: ColorType = {
  brandPrimary: '#B49AD7',
  brandSecondary: '#7189DB',
  brandTertiary: '#D386A6',
  darkPrimary: '#282828',
  darkSecondary: '#222222',
  lightPrimary: '#FFFFFF',
  lightSecondary: '#F7F6F2',
};

export const Spacing: SpacingType = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 56,
};

export const FontSize: FontSizeType = {
  gigantic: 48,
  huge: 32,
  big: 24,
  large: 20,
  medium: 17,
  small: 15,
  tiny: 13,
  micro: 11,
};

export const Border: BorderType = {
  width: {
    thin: 0.5,
    thick: 1,
    bold: 2,
  },
  radius: {
    default: 10,
    rounded: '50%',
  },
};

const Token = {
  color: Color,
  spacing: Spacing,
  border: Border,
  fontSize: FontSize,
};

export default Token;