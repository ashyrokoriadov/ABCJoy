import { setQuestionIndexSuccess } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export function setQuestionIndex(
  questionIndex: number
): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(setQuestionIndexSuccess(questionIndex));
  };
}
