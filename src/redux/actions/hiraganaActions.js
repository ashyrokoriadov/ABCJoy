import * as types from "./actionTypes";
import * as hiraganaApi from "../../api/hiraganaApi";

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_HIRAGANA_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  return function (dispatch) {
    return hiraganaApi
      .getCategories()
      .then((categories) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch((error) => {
        throw error;
      });
  };
}
