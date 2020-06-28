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
  const categories = await kanjiApi.getCategories().catch((error) => {
    throw error;
  });
  dispatch(loadCategoriesSuccess(categories));
};
