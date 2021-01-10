import { AbcType } from "../../models/enums/AbcTypes";

export const LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS =
  "LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS";
export const LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS =
  "LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS";
export const LOAD_KATAKANA_CATEGORIES_SUCCESS =
  "LOAD_KATAKANA_CATEGORIES_SUCCESS";
export const LOAD_HIRAGANA_CATEGORIES_SUCCESS =
  "LOAD_HIRAGANA_CATEGORIES_SUCCESS";
export const LOAD_LETTER_CATEGORIES = "LOAD_LETTER_CATEGORIES";

interface LoadKanjiPhrasesCategoriesSuccess {
  type: typeof LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS;
  payload: string[];
}

interface LoadKanjiSignsCategoriesSuccess {
  type: typeof LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS;
  payload: string[];
}

interface LoadKatakanaCategoriesSuccess {
  type: typeof LOAD_KATAKANA_CATEGORIES_SUCCESS;
  payload: string[];
}

interface LoadHiraganaCategoriesSuccess {
  type: typeof LOAD_HIRAGANA_CATEGORIES_SUCCESS;
  payload: string[];
}

interface LoadCategories {
  type: typeof LOAD_LETTER_CATEGORIES;
  payload: AbcType;
}

export type LetterCategoriesActionTypes =
  | LoadKanjiPhrasesCategoriesSuccess
  | LoadKanjiSignsCategoriesSuccess
  | LoadCategories
  | LoadKatakanaCategoriesSuccess
  | LoadHiraganaCategoriesSuccess;
