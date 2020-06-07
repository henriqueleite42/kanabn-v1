export const Colors = {
  gray: "#bdbdbe",
  grayLight: "#bdbdbe",
  dark: "#1c1d25",
  white: "#ffffff",
  background: "#282c34",
};

export type TypeOfColors = keyof typeof Colors;

/**
 * return true if color is dark
 * @param color HexColor Code
 */
export const checkIfIsDarkOrLight = (color: TypeOfColors) => {
  // strip # and convert rrggbb to decimal
  const rgb = parseInt(Colors[color].substring(1), 16);
  // extract red
  const r = (rgb >> 16) & 0xff;
  // extract green
  const g = (rgb >> 8) & 0xff;
  // extract blue
  const b = (rgb >> 0) & 0xff;

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 40;
};
