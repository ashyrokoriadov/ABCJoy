import * as types from "./actionTypes";
import * as katakanaApi from "../../api/katakanaApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_KATAKANA_CATEGORIES_SUCCESS, categories };
}

export function loadQuizSuccess(quiz) {
  return { type: types.LOAD_QUIZ_SUCCESS, quiz };
}

export function loadCategories() {
  return function (dispatch) {
    return katakanaApi
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
    return katakanaApi
      .getQuiz(type)
      .then((quiz) => {
        dispatch(loadQuizSuccess(quiz));
      })
      .catch((error) => {
        throw error;
      });
  };
}
