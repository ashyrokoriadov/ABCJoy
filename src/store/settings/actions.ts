import {
  LOAD_SETTINGS,
  SETTINGS_LOADED,
  SAVE_SETTINGS,
  SETTINGS_SAVED,
  SettingsActionTypes,
} from "./types";
import { QuizSettings } from "../../models/QuizSettings";

export function loadSettings(): SettingsActionTypes {
  return {
    type: LOAD_SETTINGS,
  };
}

export function settingsLoaded(settings: QuizSettings): SettingsActionTypes {
  return {
    type: SETTINGS_LOADED,
    payload: settings,
  };
}

export function saveSettings(settings: QuizSettings): SettingsActionTypes {
  return {
    type: SAVE_SETTINGS,
    payload: settings,
  };
}

export function settingsSaved(settings: QuizSettings): SettingsActionTypes {
  return {
    type: SETTINGS_SAVED,
    payload: settings,
  };
}
