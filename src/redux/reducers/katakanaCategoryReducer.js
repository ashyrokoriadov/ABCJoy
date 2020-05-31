import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function katakanaCategoryReducer(
  state = initialState.katakanaCategories,
  action
) {
  switch (action.type) {
    case types.LOAD_KATAKANA_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
