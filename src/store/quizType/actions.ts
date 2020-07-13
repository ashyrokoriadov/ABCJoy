import {
  SET_QUIZ_TYPE,
  SET_QUIZ_TYPE_SUCCESS,
  QuizTypeActionTypes,
} from "./types";

export function setQuizType(abc: string, type: string): QuizTypeActionTypes {
  return { type: SET_QUIZ_TYPE, payload: { abc, type } };
}

export function setQuizTypeSuccess(
  elementToRender: JSX.Element
): QuizTypeActionTypes {
  return { type: SET_QUIZ_TYPE_SUCCESS, payload: elementToRender };
}
