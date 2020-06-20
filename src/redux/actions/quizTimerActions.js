import * as types from "./actionTypes";

function dispatchStartTimer() {
  return { type: types.START_QUIZ_TIMER };
}

function dispatchPauseTimer() {
  return { type: types.PAUSE_QUIZ_TIMER };
}

function dispatchResetTimer() {
  return { type: types.RESET_QUIZ_TIMER };
}

function dispatchIncrementTimer(newValue) {
  return { type: types.INCREMENT_QUIZ_TIMER, value: newValue };
}

export function startTimer() {
  return function (dispatch) {
    return dispatch(dispatchStartTimer());
  };
}

export function pauseTimer() {
  return function (dispatch) {
    return dispatch(dispatchPauseTimer());
  };
}

export function resetTimer() {
  return function (dispatch) {
    return dispatch(dispatchResetTimer());
  };
}

export function incrementTimer(newValue) {
  return function (dispatch) {
    return dispatch(dispatchIncrementTimer(newValue));
  };
}
