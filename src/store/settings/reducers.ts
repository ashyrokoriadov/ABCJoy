import {
  LOAD_SETTINGS,
  SETTINGS_LOADED,
  SAVE_SETTINGS,
  SETTINGS_SAVED,
  SettingsActionTypes,
} from "./types";
import { QuizSettings } from "../../models/QuizSettings";

const initialState: QuizSettings = {
  questionsCount: 3,
  timeBetweenQuestions: 2,
};

export default function settingsReducer(
  state = initialState,
  action: SettingsActionTypes
) {
  switch (action.type) {
    case SETTINGS_LOADED:
      return state;
    case SETTINGS_SAVED:
      return action.payload;
    default:
      return state;
  }
}
