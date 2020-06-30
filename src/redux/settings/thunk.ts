import { Action } from "redux";
import { loadSettings, saveSettings } from "./actions";
import { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";
import { QuizSettings } from "../../models/QuizSettings";

export const loadQuizSettings = () => async (dispatch) => {
  return dispatch(loadSettings());
};

export const saveQuizSettings = (settings) => async (dispatch) => {
  return dispatch(saveSettings(settings));
};
