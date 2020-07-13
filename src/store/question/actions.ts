import {
  QUESTION_INDEX_SET_SUCCESS,
  SET_QUESTION_INDEX,
  QuestionActionTypes,
} from "./types";

export function setQuestionIndexSuccess(index: number): QuestionActionTypes {
  return { type: QUESTION_INDEX_SET_SUCCESS, payload: index };
}

export function setQuestionIndex(index: number): QuestionActionTypes {
  return { type: SET_QUESTION_INDEX, payload: index };
}
