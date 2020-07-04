import {
  LOAD_KANJI_CATEGORIES_SUCCESS,
  KanjiCategoriesActionTypes,
} from "./types";

export function loadCategoriesSuccess(
  categories: string[]
): KanjiCategoriesActionTypes {
  return {
    type: LOAD_KANJI_CATEGORIES_SUCCESS,
    payload: categories,
  };
}
