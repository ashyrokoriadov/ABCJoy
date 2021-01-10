import {
  LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS,
  LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS,
  LOAD_KATAKANA_CATEGORIES_SUCCESS,
  LOAD_HIRAGANA_CATEGORIES_SUCCESS,
  LOAD_LETTER_CATEGORIES,
  LetterCategoriesActionTypes,
} from "./types";
import { AbcType } from "../../models/enums/AbcTypes";

export function loadKanjiPhrasesCategoriesSuccess(
  categories: string[]
): LetterCategoriesActionTypes {
  return {
    type: LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function loadKanjiSignsCategoriesSuccess(
  categories: string[]
): LetterCategoriesActionTypes {
  return {
    type: LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function loadKatakanaCategoriesSuccess(
  categories: string[]
): LetterCategoriesActionTypes {
  return {
    type: LOAD_KATAKANA_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function loadCategories(abcType: AbcType): LetterCategoriesActionTypes {
  return {
    type: LOAD_LETTER_CATEGORIES,
    payload: abcType,
  };
}
