import { Action } from "redux";
import { setCounter, resetCounter } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";

export function saveCorrectAnswersCount(
  correctAnswerCount: number
): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(setCounter(correctAnswerCount));
  };
}

export function resetCorrectAnswersCount(): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> {
  return function (dispatch) {
    return dispatch(resetCounter());
  };
}
