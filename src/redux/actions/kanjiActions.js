import * as types from "./actionTypes";
import * as kanjiCategoriesApi from "../../api/kanjiCategoryApi";

export function loadKanjiCategoriesSuccess(categories) {
  return { type: types.LOAD_KANJI_CATEGORIES_SUCCESS, categories };
}

export function loadKanjiCategories() {
  return function (dispatch) {
    return kanjiCategoriesApi
      .getKanjiCategories()
      .then((categories) => {
        dispatch(loadKanjiCategoriesSuccess(categories));
      })
      .catch((error) => {
        throw error;
      });
  };
}
