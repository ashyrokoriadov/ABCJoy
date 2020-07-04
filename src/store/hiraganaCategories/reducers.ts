import {
  LOAD_HIRAGANA_CATEGORIES_SUCCESS,
  HiraganaCategoriesActionTypes,
} from "./types";

const initialState: string[] = [];

export default function hiraganaCategoriesReducer(
  state = initialState,
  action: HiraganaCategoriesActionTypes
) {
  switch (action.type) {
    case LOAD_HIRAGANA_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
