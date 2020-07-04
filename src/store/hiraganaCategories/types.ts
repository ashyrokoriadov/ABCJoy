export const LOAD_HIRAGANA_CATEGORIES_SUCCESS =
  "LOAD_HIRAGANA_CATEGORIES_SUCCESS";

interface LoadCategoriesSuccess {
  type: typeof LOAD_HIRAGANA_CATEGORIES_SUCCESS;
  payload: string[];
}

export type HiraganaCategoriesActionTypes = LoadCategoriesSuccess;
