import * as actionTypes from "../actions/actionTypes";

/**
 * measureType: true - celsius, false - farenheit
 */
const initialState = {
  cityKey: "215854",
  cityName: "Tel Aviv",
  measureType: true,
  currentConditionsData: {},
  weatherData: {},
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    case actionTypes.SET_CITY_NAME:
      return {
        ...state,
        cityName: action.cityName,
      };
    case actionTypes.SET_CITY_KEY:
      return {
        ...state,
        cityKey: action.cityKey,
      };
    case actionTypes.SET_CURRENT_CONDITIONS_DATA:
      return {
        ...state,
        currentConditionsData: action.currentConditionsData,
      };
      case actionTypes.SET_MESURE_TYPE:
      return {
        ...state,
        measureType: action.measureType,
      };

    default:
      return state;
  }
};

export default weatherDataReducer;
