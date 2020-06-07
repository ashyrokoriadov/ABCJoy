import * as types from "./actionTypes";
import { INFO } from "../../components/common/MessageTypes";

export function showInfoMessage(text) {
  return { type: types.DISPLAY_INFO_MESSAGE, text };
}

export function showMessage(text, type) {
  return function (dispatch) {
    switch (type) {
      case INFO:
        return dispatch(showInfoMessage(text));
    }
  };
}

export function requestCloseMaessage() {
  return { type: types.CLOSE_MESSAGE };
}

export function closeMessage() {
  return function (dispatch) {
    return dispatch(requestCloseMaessage());
  };
}
