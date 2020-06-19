import * as types from "./actionTypes";
import * as quizApi from "../../api/quizApi";

export function loadQuizSuccess(quiz) {
  return { type: types.LOAD_QUIZ_SUCCESS, quiz };
}

export function loadQuiz(abc, type, questionsCount) {
  return function (dispatch) {
    return quizApi
      .getQuiz(abc, type, questionsCount)
      .then((quiz) => {
        dispatch(loadQuizSuccess(quiz));
      })
      .catch((error) => {
        throw error;
      });
  };
}
