import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  DISPLAY_INFO_MESSAGE,
  INFO_MESSAGE_DISPAYED,
  CLOSE_MESSAGE,
  MESSAGE_CLOSED,
} from "./types";

function* showMessage(action) {
  try {
    yield put({ type: INFO_MESSAGE_DISPAYED, payload: action.payload });
  } catch (error) {
    throw error;
  }
}

function* closeMessage() {
  try {
    yield put({ type: MESSAGE_CLOSED });
  } catch (error) {
    throw error;
  }
}

function* messagesSaga() {
  yield takeEvery(DISPLAY_INFO_MESSAGE, showMessage);
  yield takeEvery(CLOSE_MESSAGE, closeMessage);
}

export default messagesSaga;
