import {
  LOAD_HIRAGANA_CATEGORIES_SUCCESS,
  HiraganaCategoriesActionTypes,
} from "./types";

export function loadCategoriesSuccess(
  categories: string[]
): HiraganaCategoriesActionTypes {
  return {
    type: LOAD_HIRAGANA_CATEGORIES_SUCCESS,
    payload: categories,
  };
}
