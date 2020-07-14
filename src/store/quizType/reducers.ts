import {
  SET_QUIZ_TYPE,
  SET_QUIZ_TYPE_SUCCESS,
  QuizTypeActionTypes,
} from "./types";
import { setQuizType } from "../../components/common/renderers/QuizTypeRenderer";
import { AbcType } from "../../models/enums/AbcTypes";

const initialState: JSX.Element = setQuizType(AbcType.HIRAGANA, "Regular");

export default function quizTypeReducer(
  state = initialState,
  action: QuizTypeActionTypes
) {
  switch (action.type) {
    case SET_QUIZ_TYPE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
