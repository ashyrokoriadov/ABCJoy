import { Action } from "redux";
import { loadCategoriesSuccess } from "./actions";
import { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";
import * as kanjiApi from "../../api/kanjiApi";

export const loadCategories = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch) => {
  return await kanjiApi
    .getCategories()
    .then((categoriesResponse) => {
      const categories = categoriesResponse as string[];
      if (categories != undefined) {
        dispatch(loadCategoriesSuccess(categories));
      }
    })
    .catch((error) => {
      throw error;
    });
};
