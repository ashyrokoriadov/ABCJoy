import { SET_QUIZ_TYPE, QuizTypeActionTypes } from "./types";

export function setQuizType(abc: string, type: string): QuizTypeActionTypes {
  return { type: SET_QUIZ_TYPE, payload: { abc, type } };
}
