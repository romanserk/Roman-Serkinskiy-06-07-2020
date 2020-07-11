import * as actionTypes from "./actionTypes";

export const setDarkTheme = (bool) => {
  return {
    type: actionTypes.SET_THEME,
    dark: bool,
  };
};
