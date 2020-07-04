import { Action } from "redux";
import { showInfoMessage, requestCloseMessage } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { MessageType } from "../../models/enums/MessageType";

export function showMessage(
  text: string,
  type: MessageType
): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    switch (type) {
      case MessageType.INFO:
      default:
        return dispatch(showInfoMessage(text));
    }
  };
}

export function closeMessage(): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(requestCloseMessage());
  };
}
