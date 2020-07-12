import { QuizSettings } from "../../models/QuizSettings";

export const LOAD_SETTINGS = "LOAD_SETTINGS";
export const SETTINGS_LOADED = "SETTINGS_LOADED";
export const SAVE_SETTINGS = "SAVE_SETTINGS";
export const SETTINGS_SAVED = "SETTINGS_SAVED";

interface LoadSettings {
  type: typeof LOAD_SETTINGS;
}

interface SettingsLoaded {
  type: typeof SETTINGS_LOADED;
  payload: QuizSettings;
}

interface SaveSettings {
  type: typeof SAVE_SETTINGS;
  payload: QuizSettings;
}

interface SettingsSaved {
  type: typeof SETTINGS_SAVED;
  payload: QuizSettings;
}

export type SettingsActionTypes =
  | LoadSettings
  | SettingsLoaded
  | SaveSettings
  | SettingsSaved;
