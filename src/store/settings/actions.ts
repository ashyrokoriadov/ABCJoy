import { LOAD_SETTINGS, SAVE_SETTINGS, SettingsActionTypes } from "./types";
import { QuizSettings } from "../../models/QuizSettings";

export function loadSettings(): SettingsActionTypes {
  return {
    type: LOAD_SETTINGS,
  };
}

export function saveSettings(settings: QuizSettings): SettingsActionTypes {
  return {
    type: SAVE_SETTINGS,
    payload: settings,
  };
}
