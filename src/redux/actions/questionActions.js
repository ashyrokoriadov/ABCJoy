import * as types from "./actionTypes";

export function questionIndexSetSuccess(questionIndex) {
  return { type: types.QUESTION_INDEX_SET_SUCCESS, questionIndex };
}

export function setQuestionIndex(questionIndex) {
  return function (dispatch) {
    return dispatch(questionIndexSetSuccess(questionIndex));
  };
}
