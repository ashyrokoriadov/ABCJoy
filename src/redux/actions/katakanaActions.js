import * as types from "./actionTypes";
import * as katakanaApi from "../../api/katakanaApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_KATAKANA_CATEGORIES_SUCCESS, categories };
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
