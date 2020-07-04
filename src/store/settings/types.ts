import { QuizSettings } from "../../models/QuizSettings";

export const LOAD_SETTINGS = "LOAD_SETTINGS";
export const SAVE_SETTINGS = "SAVE_SETTINGS";

interface LoadSettings {
  type: typeof LOAD_SETTINGS;
}

interface SaveSettings {
  type: typeof SAVE_SETTINGS;
  payload: QuizSettings;
}

export type SettingsActionTypes = LoadSettings | SaveSettings;
