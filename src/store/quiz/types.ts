import { Quiz } from "../../models/Quiz";
import { LoadQuizParameters } from "../../models/api/LoadQuizParameters";

export const LOAD_QUIZ = "LOAD_QUIZ";
export const LOAD_QUIZ_SUCCESS = "LOAD_QUIZ_SUCCESS";

interface LoadQuiz {
  type: typeof LOAD_QUIZ;
  payload: LoadQuizParameters;
}

interface QuizLoaded {
  type: typeof LOAD_QUIZ_SUCCESS;
  payload: Quiz[];
}

export type QuizActionTypes = QuizLoaded | LoadQuiz;
