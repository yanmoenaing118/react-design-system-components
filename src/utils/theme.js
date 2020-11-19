import { green, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: green[400],
  primaryColorHover: green[200],
  primaryColorActive: green[100],
  primaryColorDisabled: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textColorDisabled: neutral[500],
  primaryFont,
  themeBackground: neutral[100],
};

export const darkTheme = {
  primaryColor: green[400],
  primaryColorHover: green[200],
  primaryColorActive: green[100],
  primaryColorDisabled: neutral[300],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  textColorDisabled: neutral[200],
  primaryFont,
  themeBackground: neutral[600],
};
