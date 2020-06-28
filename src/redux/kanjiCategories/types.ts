export const LOAD_KANJI_CATEGORIES_SUCCESS = "LOAD_KANJI_CATEGORIES_SUCCESS";

interface LoadCategoriesSuccess {
  type: typeof LOAD_KANJI_CATEGORIES_SUCCESS;
  payload: string[];
}

export type KanjiCategoriesActionTypes = LoadCategoriesSuccess;
