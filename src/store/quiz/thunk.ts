import { Action } from "redux";
import { quizLoaded } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { Quiz } from "../../models/Quiz";
import * as quizApi from "../../api/quizApi";

export function loadQuiz(
  abc: string,
  type: string,
  questionsCount: number
): ThunkAction<void, RootState, unknown, Action> {
  return function (dispatch) {
    return quizApi
      .getQuiz(abc, type, questionsCount)
      .then((quizResponse) => {
        const quiz = quizResponse as Quiz[];
        if (quiz) {
          dispatch(quizLoaded(quiz));
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}
