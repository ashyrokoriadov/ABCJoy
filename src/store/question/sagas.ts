import { put, takeEvery } from "redux-saga/effects";
import { SET_QUESTION_INDEX, QUESTION_INDEX_SET_SUCCESS } from "./types";
import * as quizApi from "../../api/quizApi";

function* loadQuiz(action) {
  try {
    yield put({ type: QUESTION_INDEX_SET_SUCCESS, payload: action.payload });
  } catch (error) {
    throw error;
  }
}

function* questionSaga() {
  yield takeEvery(SET_QUESTION_INDEX, loadQuiz);
}

export default questionSaga;
