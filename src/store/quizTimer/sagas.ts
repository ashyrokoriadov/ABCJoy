import { put, takeEvery } from "redux-saga/effects";
import {
  START_QUIZ_TIMER,
  PAUSE_QUIZ_TIMER,
  RESET_QUIZ_TIMER,
  INCREMENT_QUIZ_TIMER,
  QUIZ_TIMER_STARTED,
  QUIZ_TIMER_PAUSED,
  QUIZ_TIMER_INCREMENTED,
  QUIZ_TIMER_RESET,
} from "./types";
import { resetCounter } from "store/correctAnswer/actions";

function* startTimer() {
  try {
    yield put({
      type: QUIZ_TIMER_STARTED,
    });
  } catch (error) {
    throw error;
  }
}

function* pauseTimer() {
  try {
    yield put({
      type: QUIZ_TIMER_PAUSED,
    });
  } catch (error) {
    throw error;
  }
}

function* resetTimer() {
  try {
    yield put({
      type: QUIZ_TIMER_RESET,
    });
  } catch (error) {
    throw error;
  }
}

function* incrementTimer(action) {
  try {
    yield put({
      type: QUIZ_TIMER_INCREMENTED,
      payload: action.payload,
    });
  } catch (error) {
    throw error;
  }
}

function* quizTimerSaga() {
  yield takeEvery(START_QUIZ_TIMER, startTimer);
  yield takeEvery(PAUSE_QUIZ_TIMER, pauseTimer);
  yield takeEvery(INCREMENT_QUIZ_TIMER, incrementTimer);
  yield takeEvery(RESET_QUIZ_TIMER, resetTimer);
}

export default quizTimerSaga;
