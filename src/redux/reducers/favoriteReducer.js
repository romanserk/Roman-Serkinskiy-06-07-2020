import * as actionTypes from "../actions/actionTypes";

const initialState = {
  favorite: [],
  favoriteItem: null,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.favorite],
      };
    case actionTypes.SET_FAVORITE_ITEM:
      return {
        ...state,
        favoriteItem: action.favoriteItem,
      };
    case actionTypes.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.cityKey !== action.favorite.cityKey),
      };

    default:
      return state;
  }
};

export default favoriteReducer;
