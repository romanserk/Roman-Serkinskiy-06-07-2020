import * as actionTypes from "../actions/actionTypes";
// dark theme dark = true , normal theme dark = false
const initialState = {
  dark: false
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        dark: action.dark,
      };
    
    default:
      return state;
  }
};

export default themeReducer;
