import React from "react";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import { connect } from "react-redux";

import ThemedButton from "../hoc/ThemedButton";

const AddToFavorite = (props) => {
  const addOrRemoveFavoriteClickHandler = () => {
    if (props.favoriteItem) {
      props.removeFavoriteAction(props.favoriteItem);
      return;
    }
    const favoriteToBeAdded = {
      cityName: props.cityName,
      cityKey: props.cityKey,
    };
    props.addToFavoriteAction(favoriteToBeAdded);
  };

  return (
    <ThemedButton
      className="float-right"
      onClick={addOrRemoveFavoriteClickHandler}
    >
      {props.favoriteItem ? "Remove favorite " : "Add favorite"}
    </ThemedButton>
  );
};

const mapStateToProps = (state) => {
  return {
    currConData: state.weatherData.currentConditionsData,
    cityName: state.weatherData.cityName,
    cityKey: state.weatherData.cityKey,
    favoriteItem: state.favorite.favoriteItem,
    dark: state.theme.dark,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToFavoriteAction: (favorite) => dispatch(favoriteActions.addToFavoriteAction(favorite)),
    removeFavoriteAction: (favorite) => dispatch(favoriteActions.removeFavoriteAction(favorite)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorite);
