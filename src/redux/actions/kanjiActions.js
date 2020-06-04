import * as types from "./actionTypes";
import * as kanjiApi from "../../api/kanjiApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_KANJI_CATEGORIES_SUCCESS, categories };
}

export function loadQuizSuccess(quiz) {
  return { type: types.LOAD_QUIZ_SUCCESS, quiz };
}

export function loadCategories() {
  return function (dispatch) {
    return kanjiApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadQuiz(type) {
  return function (dispatch) {
    return kanjiApi
      .getQuiz(type)
      .then((quiz) => {
        dispatch(loadQuizSuccess(quiz));
      })
      .catch((error) => {
        throw error;
      });
  };
}
