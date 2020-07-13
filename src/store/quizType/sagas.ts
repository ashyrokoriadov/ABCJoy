import { put, takeEvery } from "redux-saga/effects";
import { setQuizType } from "../../components/common/renderers/QuizTypeRenderer";
import { SET_QUIZ_TYPE, SET_QUIZ_TYPE_SUCCESS } from "./types";

function* setType(action) {
  try {
    var elementToRender = setQuizType(action.payload.abc, action.payload.type);
    yield put({
      type: SET_QUIZ_TYPE_SUCCESS,
      payload: elementToRender,
    });
  } catch (error) {
    throw error;
  }
}

function* correctAnswerSaga() {
  yield takeEvery(SET_QUIZ_TYPE, setType);
}

export default correctAnswerSaga;
