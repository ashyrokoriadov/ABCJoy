import { Action } from "redux";
import {
  dispatchStartTimer,
  dispatchPauseTimer,
  dispatchResetTimer,
  dispatchIncrementTimer,
} from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";

export function startTimer(): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(dispatchStartTimer());
  };
}

export function pauseTimer(): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(dispatchPauseTimer());
  };
}

export function resetTimer(): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(dispatchResetTimer());
  };
}

export function incrementTimer(
  newValue: number
): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return dispatch(dispatchIncrementTimer(newValue));
  };
}
