import {
  LOAD_KATAKANA_CATEGORIES_SUCCESS,
  KatakanaCategoriesActionTypes,
} from "./types";

export function loadCategoriesSuccess(
  categories: string[]
): KatakanaCategoriesActionTypes {
  return {
    type: LOAD_KATAKANA_CATEGORIES_SUCCESS,
    payload: categories,
  };
}
