import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import weatherDataReducer from "./reducers/weatherDataReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import errorsReducer from "./reducers/errorsReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
  favorite: favoriteReducer,
  error: errorsReducer,
  theme: themeReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
