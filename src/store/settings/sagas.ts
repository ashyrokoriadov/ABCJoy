import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  LOAD_SETTINGS,
  SETTINGS_LOADED,
  SAVE_SETTINGS,
  SETTINGS_SAVED,
} from "./types";

function* loadSettings() {
  try {
    yield put({ type: SETTINGS_LOADED });
  } catch (error) {
    throw error;
  }
}

function* saveSettings(action) {
  try {
    yield put({ type: SETTINGS_SAVED, payload: action.payload });
  } catch (error) {
    throw error;
  }
}

function* settingsSaga() {
  yield takeEvery(LOAD_SETTINGS, loadSettings);
  yield takeEvery(SAVE_SETTINGS, saveSettings);
}

export default settingsSaga;
