import { QUESTION_INDEX_SET_SUCCESS, QuestionActionTypes } from "./types";

export function setQuestionIndexSuccess(index: number): QuestionActionTypes {
  return { type: QUESTION_INDEX_SET_SUCCESS, payload: index };
}
