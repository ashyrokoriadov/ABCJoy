import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOAD_KANJI_CATEGORIES_SUCCESS, LOAD_KANJI_CATEGORIES } from "./types";
import * as LettersApi from "../../api/LettersApi";
import { LetterType } from "../../models/api/LetterType";

function* fetchKanjiCategories(action) {
  try {
    const categories = yield call(LettersApi.getCategories, action.payload);
    yield put({ type: LOAD_KANJI_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    throw error;
  }
}

function* kanjiCategoriesSaga() {
  yield takeEvery(LOAD_KANJI_CATEGORIES, fetchKanjiCategories);
}

export default kanjiCategoriesSaga;
