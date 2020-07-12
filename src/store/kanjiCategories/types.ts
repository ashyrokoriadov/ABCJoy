import { AbcType } from "../../models/enums/AbcTypes";

export const LOAD_KANJI_CATEGORIES_SUCCESS = "LOAD_KANJI_CATEGORIES_SUCCESS";
export const LOAD_KANJI_CATEGORIES = "LOAD_KANJI_CATEGORIES";

interface LoadCategoriesSuccess {
  type: typeof LOAD_KANJI_CATEGORIES_SUCCESS;
  payload: string[];
}

interface LoadCategories {
  type: typeof LOAD_KANJI_CATEGORIES;
  payload: AbcType;
}

export type KanjiCategoriesActionTypes = LoadCategoriesSuccess | LoadCategories;
