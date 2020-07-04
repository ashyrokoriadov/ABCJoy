import { QUIZ_TYPE_SET, QuizTypeActionTypes } from "./types";

export function quizLoaded(elementToRender: JSX.Element): QuizTypeActionTypes {
  return { type: QUIZ_TYPE_SET, payload: elementToRender };
}
