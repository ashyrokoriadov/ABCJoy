import * as types from "./actionTypes";
import * as kanjiApi from "../../api/kanjiApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_KANJI_CATEGORIES_SUCCESS, categories };
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
