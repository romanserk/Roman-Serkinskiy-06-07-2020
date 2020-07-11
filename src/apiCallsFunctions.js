import axios from "axios";

//const apiKey = process.env.REACT_APP_ACCU_API_KEY_V1;
const apiKey = process.env.REACT_APP_ACCU_API_KEY_V2;

export const getAutocompleteCityList = async (seatchString) => {
  return axios
    .get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${seatchString}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { err };
    });
};

export const fetchFiveDaysWeather = async (cityKey, measureType) => {
  return axios
    .get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=en-us&details=false&metric=${measureType}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { err };
    });
};

export const fetchCurrentConditionsDataApiCall = async (cityKey) => {
  return axios
    .get(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&details=false`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { err };
    });
};

export const fetchKeyByGeolocation = async (lat, lon) => {
  return axios(
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${lon}`
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { err };
    });
};
