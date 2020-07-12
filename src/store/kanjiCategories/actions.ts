import {
  LOAD_KANJI_CATEGORIES_SUCCESS,
  LOAD_KANJI_CATEGORIES,
  KanjiCategoriesActionTypes,
} from "./types";
import { AbcType } from "../../models/enums/AbcTypes";

export function loadCategoriesSuccess(
  categories: string[]
): KanjiCategoriesActionTypes {
  return {
    type: LOAD_KANJI_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function loadCategories(abcType: AbcType): KanjiCategoriesActionTypes {
  return {
    type: LOAD_KANJI_CATEGORIES,
    payload: abcType,
  };
}
