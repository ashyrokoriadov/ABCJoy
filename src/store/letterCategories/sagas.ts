import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS,
  LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS,
  LOAD_KATAKANA_CATEGORIES_SUCCESS,
  LOAD_HIRAGANA_CATEGORIES_SUCCESS,
  LOAD_LETTER_CATEGORIES,
} from "./types";
import * as LettersApi from "../../api/LettersApi";
import { AbcType } from "../../models/enums/AbcTypes";

function* fetchCategories(action) {
  try {
    const categories = yield call(LettersApi.getCategories, action.payload);

    switch (action.payload) {
      case AbcType.KANJI_PHRASES:
        yield put({
          type: LOAD_KANJI_PHRASES_CATEGORIES_SUCCESS,
          payload: categories,
        });
        break;
      case AbcType.KANJI_SIGNS:
        yield put({
          type: LOAD_KANJI_SIGNS_CATEGORIES_SUCCESS,
          payload: categories,
        });
        break;
      case AbcType.KATAKANA:
        yield put({
          type: LOAD_KATAKANA_CATEGORIES_SUCCESS,
          payload: categories,
        });
        break;
      case AbcType.HIRAGANA:
        yield put({
          type: LOAD_HIRAGANA_CATEGORIES_SUCCESS,
          payload: categories,
        });
        break;
    }
  } catch (error) {
    throw error;
  }
}

function* letterCategoriesSaga() {
  yield takeEvery(LOAD_LETTER_CATEGORIES, fetchCategories);
}

export default letterCategoriesSaga;
