import { SET_QUESTION_INDEX, QuestionActionTypes } from "./types";

export function setQuestionIndex(index: number): QuestionActionTypes {
  return { type: SET_QUESTION_INDEX, payload: index };
}
