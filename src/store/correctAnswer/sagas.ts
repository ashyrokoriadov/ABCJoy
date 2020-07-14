import { put, takeEvery } from "redux-saga/effects";
import {
  INCREMENT_CORRECT_ANSWER_COUNT,
  RESET_CORRECT_ANSWER_COUNT,
  RESET_CORRECT_ANSWER_COUNT_SUCCESS,
  INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS,
} from "./types";

function* incrementCorrectAnswerCount(action) {
  try {
    yield put({
      type: INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    throw error;
  }
}

function* resetCorrectAnswerCount() {
  try {
    yield put({ type: RESET_CORRECT_ANSWER_COUNT_SUCCESS });
  } catch (error) {
    throw error;
  }
}

function* correctAnswerSaga() {
  yield takeEvery(INCREMENT_CORRECT_ANSWER_COUNT, incrementCorrectAnswerCount);
  yield takeEvery(RESET_CORRECT_ANSWER_COUNT, resetCorrectAnswerCount);
}

export default correctAnswerSaga;
