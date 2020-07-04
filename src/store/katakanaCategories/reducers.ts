import {
  LOAD_KATAKANA_CATEGORIES_SUCCESS,
  KatakanaCategoriesActionTypes,
} from "./types";

const initialState: string[] = [];

export default function kanjiCategoriesReducer(
  state = initialState,
  action: KatakanaCategoriesActionTypes
) {
  switch (action.type) {
    case LOAD_KATAKANA_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
