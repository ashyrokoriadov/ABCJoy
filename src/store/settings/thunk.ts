import { Action } from "redux";
import { loadSettings, saveSettings } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { QuizSettings } from "../../models/QuizSettings";

export const loadQuizSettings = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch) => {
  return dispatch(loadSettings());
};

export const saveQuizSettings = (
  settings: QuizSettings
): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
  return dispatch(saveSettings(settings));
};
