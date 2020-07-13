import { SetQuizTypeParameters } from "../../models/SetQuizTypeParameters";

export const SET_QUIZ_TYPE = "SET_QUIZ_TYPE";
export const SET_QUIZ_TYPE_SUCCESS = "SET_QUIZ_TYPE_SUCCESS";

interface SetQuizType {
  type: typeof SET_QUIZ_TYPE;
  payload: SetQuizTypeParameters;
}

interface SetQuizTypeSuccess {
  type: typeof SET_QUIZ_TYPE_SUCCESS;
  payload: JSX.Element;
}

export type QuizTypeActionTypes = SetQuizType | SetQuizTypeSuccess;
