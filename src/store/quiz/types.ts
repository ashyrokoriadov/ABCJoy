import { Quiz } from "../../models/Quiz";

export const LOAD_QUIZ_SUCCESS = "LOAD_QUIZ_SUCCESS";

interface QuizLoaded {
  type: typeof LOAD_QUIZ_SUCCESS;
  payload: Quiz[];
}

export type QuizActionTypes = QuizLoaded;
