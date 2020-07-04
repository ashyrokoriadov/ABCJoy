import { LOAD_SETTINGS, SAVE_SETTINGS, SettingsActionTypes } from "./types";
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
    case LOAD_SETTINGS:
      return state;
    case SAVE_SETTINGS:
      return action.payload;
    default:
      return state;
  }
}
