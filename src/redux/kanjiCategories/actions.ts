import {
  LOAD_KANJI_CATEGORIES_SUCCESS,
  KanjiCategoriesActionTypes,
} from "./types";
import * as kanjiApi from "../../api/kanjiApi";

export function loadCategoriesSuccess(
  categories: string[]
): KanjiCategoriesActionTypes {
  return {
    type: LOAD_KANJI_CATEGORIES_SUCCESS,
    payload: categories,
  };
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
