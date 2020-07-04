export const QUIZ_TYPE_SET = "QUIZ_TYPE_SET";

interface QuizTypeSet {
  type: typeof QUIZ_TYPE_SET;
  payload: JSX.Element;
}

export type QuizTypeActionTypes = QuizTypeSet;
