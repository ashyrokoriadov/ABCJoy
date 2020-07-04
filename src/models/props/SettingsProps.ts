import { QuizSettings } from "../QuizSettings";

export interface SettingsProps {
  settings: QuizSettings;
  handleOk: (settings: QuizSettings) => void;
}
