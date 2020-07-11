import * as actionTypes from "./actionTypes";

export const addErrorObj = (err) => {
  return {
    type: actionTypes.ADD_ERROR,
    error: err,
  };
};

export const showErrorModalAction = (showErrorModal) => {
  return {
    type: actionTypes.SHOW_ERROR_MODAL,
    showErrorModal: showErrorModal,
  };
};

export const haveErrorAction = (haveError) => {
  return {
    type: actionTypes.HAVE_ERROR,
    haveError: haveError,
  };
};

export const addNewError = (error, bool) => {
  return (dispatch) => {
    dispatch(addErrorObj(error));
    dispatch(showErrorModalAction(bool));
    dispatch(haveErrorAction(bool));
  }
};
