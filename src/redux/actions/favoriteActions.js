import * as actionTypes from "./actionTypes";

export const addToFavoriteAction = (item) => {
  return {
    type: actionTypes.ADD_TO_FAVORITE,
    favorite: item,
  };
};

export const removeFavoriteAction = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITE,
    favorite: item,
  };
};

export const setFavoriteItem = () => {
  return (dispatch, getState) => {
    const favItem = getState().favorite.favorite.find((item) => item.cityKey === getState().weatherData.cityKey);
    dispatch(saveFavoriteItem(favItem));
  };
};

export const saveFavoriteItem = (item) => {
  return {
    type: actionTypes.SET_FAVORITE_ITEM,
    favoriteItem: item,
  };
};
