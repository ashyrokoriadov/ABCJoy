import {
  LOAD_KANJI_CATEGORIES_SUCCESS,
  LOAD_KATAKANA_CATEGORIES_SUCCESS,
  LOAD_HIRAGANA_CATEGORIES_SUCCESS,
  LetterCategoriesActionTypes,
} from "./types";
import { LetterCategoriesReducerState } from "../../models/states/LetterCategoriesReducerState";

const initialState: LetterCategoriesReducerState = {
  kanjiCategories: [],
  katakanaCategories: [],
  hiraganaCategories: [],
};

export default function kanjiCategoriesReducer(
  state = initialState,
  action: LetterCategoriesActionTypes
) {
  switch (action.type) {
    case LOAD_KANJI_CATEGORIES_SUCCESS:
      var newState = {
        kanjiCategories: action.payload,
        katakanaCategories: state.katakanaCategories,
        hiraganaCategories: state.hiraganaCategories,
      };
      return newState;
    case LOAD_KATAKANA_CATEGORIES_SUCCESS:
      var newState = {
        kanjiCategories: state.kanjiCategories,
        katakanaCategories: action.payload,
        hiraganaCategories: state.hiraganaCategories,
      };
      return newState;
    case LOAD_HIRAGANA_CATEGORIES_SUCCESS:
      var newState = {
        kanjiCategories: state.kanjiCategories,
        katakanaCategories: state.katakanaCategories,
        hiraganaCategories: action.payload,
      };
      return newState;
    default:
      return state;
  }
}