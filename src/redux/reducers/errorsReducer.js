import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: {},
  showErrorModal: false,
  haveError: false
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: {},
      };
    case actionTypes.SHOW_ERROR_MODAL:
      return {
        ...state,
        showErrorModal: action.showErrorModal,
      };
      case actionTypes.HAVE_ERROR:
      return {
        ...state,
        haveError: action.haveError,
      };

    default:
      return state;
  }
};

export default errorsReducer;
