export const LOAD_KATAKANA_CATEGORIES_SUCCESS =
  "LOAD_KATAKANA_CATEGORIES_SUCCESS";

interface LoadCategoriesSuccess {
  type: typeof LOAD_KATAKANA_CATEGORIES_SUCCESS;
  payload: string[];
}

export type KatakanaCategoriesActionTypes = LoadCategoriesSuccess;
