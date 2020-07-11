import * as actionTypes from "./actionTypes";
import { fetchFiveDaysWeather, fetchCurrentConditionsDataApiCall } from "../../apiCallsFunctions";
import * as errorsActions from "./errorsActions";

export const saveWeatherData = (res) => {
  return {
    type: actionTypes.SET_WEATHER_DATA,
    weatherData: res,
  };
};

export const saveCurrentConditionsData = (res) => {
  return {
    type: actionTypes.SET_CURRENT_CONDITIONS_DATA,
    currentConditionsData: res,
  };
};

export const setCityNameAction = (cityName) => {
  return {
    type: actionTypes.SET_CITY_NAME,
    cityName: cityName,
  };
};

export const setCityKeyAction = (cityKey) => {
  return {
    type: actionTypes.SET_CITY_KEY,
    cityKey: cityKey,
  };
};
export const setMeasureType = (bool) => {
  return {
    type: actionTypes.SET_MESURE_TYPE,
    measureType: bool,
  };
};
export const setMeasureTypeAndFetch = (bool) => {
  return (dispatch) => {
    dispatch(setMeasureType(bool));
    dispatch(fetchWeatherDataAction());
  };
};

export const setCityKeyTriggerRefetchAction = (cityKey) => {
  return (dispatch) => {
    dispatch(setCityKeyAction(cityKey));
    dispatch(fetchWeatherDataAction());
    dispatch(fetchCurrentConditionsData());
  };
};

export const setCityInfoAction = (result) => {
  return (dispatch) => {
    dispatch(setCityNameAction(result.LocalizedName));
    dispatch(setCityKeyTriggerRefetchAction(result.Key));
  };
};

export const fetchWeatherDataAction = () => {
  return async (dispatch, getState) => {
    const weatherData = await fetchFiveDaysWeather(getState().weatherData.cityKey, getState().weatherData.measureType);
    if (weatherData.err) dispatch(errorsActions.addNewError(weatherData.err, true));
    else dispatch(saveWeatherData(weatherData));
  };
};

export const fetchCurrentConditionsData = () => {
  return async (dispatch, getState) => {
    let res = await fetchCurrentConditionsDataApiCall(getState().weatherData.cityKey);
    if (res.err) {
      dispatch(errorsActions.addNewError(res.err, true));
      return;
    }
    res = res[0];
    const currentConditionsData = {
      metricTemp: Math.round(res.Temperature.Metric.Value),
      imperialTemp: Math.round(res.Temperature.Imperial.Value),
      weatherText: res.WeatherText,
      weatherIcon: `./weatherIcons/${res.WeatherIcon}.png`,
      dateDay: new Date(res.EpochTime * 1000).toLocaleDateString("en-us", { weekday: "long" }),
    };
    dispatch(saveCurrentConditionsData(currentConditionsData));
  };
};
