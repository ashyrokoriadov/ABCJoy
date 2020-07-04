import { Action } from "redux";
import { loadCategoriesSuccess } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import * as LettersApi from "../../api/LettersApi";
import { LetterType } from "../../models/api/LetterType";

export const loadCategories = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch) => {
  return await LettersApi.getCategories(LetterType.KANJI)
    .then((categoriesResponse) => {
      const categories = categoriesResponse as string[];
      if (categories) {
        dispatch(loadCategoriesSuccess(categories));
      }
    })
    .catch((error) => {
      throw error;
    });
};
