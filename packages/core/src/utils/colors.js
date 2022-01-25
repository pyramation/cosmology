import Color from 'color';

export const lighten = (color, opacity) => {
  return Color(color).mix(Color('#fff'), opacity).hex();
};

export const darken = (color, opacity) =>
  Color(color).mix(Color('#000'), opacity).hex();

export const toColorHue = (color, hue) => `${color}.${hue}`;

// Reference: https://24ways.org/2010/calculating-color-contrast
export const getForegroundColor = bgColor => {
  const colorObj = Color(bgColor);
  const [r, g, b] = colorObj.rgb().array();
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq > 128 ? 'black' : 'white';
};
