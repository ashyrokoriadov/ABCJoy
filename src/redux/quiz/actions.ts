import { Quiz } from "../../models/Quiz";
import { LOAD_QUIZ_SUCCESS, QuizActionTypes } from "./types";

export function quizLoaded(quiz: Quiz[]): QuizActionTypes {
  return { type: LOAD_QUIZ_SUCCESS, payload: quiz };
}
