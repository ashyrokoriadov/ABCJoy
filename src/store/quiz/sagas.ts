import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_QUIZ, LOAD_QUIZ_SUCCESS } from "./types";
import * as quizApi from "../../api/quizApi";

function* loadQuiz(action) {
  try {
    const quiz = yield call(
      quizApi.getQuiz,
      action.payload.abc,
      action.payload.type,
      action.payload.questionsCount
    );
    yield put({ type: LOAD_QUIZ_SUCCESS, payload: quiz });
  } catch (error) {
    throw error;
  }
}

function* quizSaga() {
  yield takeEvery(LOAD_QUIZ, loadQuiz);
}

export default quizSaga;
