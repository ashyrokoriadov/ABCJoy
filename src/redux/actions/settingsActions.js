import * as types from "./actionTypes";

function dispatchLoadSettings() {
  return { type: types.LOAD_SETTINGS };
}

export function loadSettings() {
  return function (dispatch) {
        return dispatch(dispatchLoadSettings());
    };
}

function dispatchSaveSettings(settings) {
  return { type: types.SAVE_SETTINGS, settings };
}

export function saveSettings(settings) {
  return function (dispatch) {
    return dispatch(requestCloseMaessage(settings));
  };
}