import { QuizActionTypes, LOAD_QUIZ } from "./types";

export function loadQuiz(
  abc: string,
  type: string,
  questionsCount: number
): QuizActionTypes {
  return { type: LOAD_QUIZ, payload: { abc, type, questionsCount } };
}
