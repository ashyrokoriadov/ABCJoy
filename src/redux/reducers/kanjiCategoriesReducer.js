import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function kanjiCategoriesReducer(
  state = initialState.kanjiCategories,
  action
) {
  switch (action.type) {
    case types.LOAD_KANJI_CATEGORIES:
      return state;
    case types.LOAD_KANJI_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
