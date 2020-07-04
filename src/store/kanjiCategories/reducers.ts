import {
  LOAD_KANJI_CATEGORIES_SUCCESS,
  KanjiCategoriesActionTypes,
} from "./types";

const initialState: string[] = [];

export default function kanjiCategoriesReducer(
  state = initialState,
  action: KanjiCategoriesActionTypes
) {
  switch (action.type) {
    case LOAD_KANJI_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
