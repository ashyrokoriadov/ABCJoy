import { Quiz } from "../../models/Quiz";
import { LOAD_QUIZ_SUCCESS, QuizActionTypes, LOAD_QUIZ } from "./types";

export function quizLoaded(quiz: Quiz[]): QuizActionTypes {
  return { type: LOAD_QUIZ_SUCCESS, payload: quiz };
}

export function loadQuiz(
  abc: string,
  type: string,
  questionsCount: number
): QuizActionTypes {
  return { type: LOAD_QUIZ, payload: { abc, type, questionsCount } };
}
