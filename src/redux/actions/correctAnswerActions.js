import * as types from "./actionTypes";

function setCounter(correctAnswerCount) {
  return { type: types.INCREMENT_CORRECT_ANSWER_COUNT, correctAnswerCount };
}

export function saveCorrectAnswersCount(correctAnswerCount) {
  return function (dispatch) {
    return dispatch(setCounter(correctAnswerCount));
  };
}

function resetCounter() {
  return { type: types.RESET_CORRECT_ANSWER_COUNT };
}

export function resetCorrectAnswersCount() {
  return function (dispatch) {
    return dispatch(resetCounter());
  };
}
