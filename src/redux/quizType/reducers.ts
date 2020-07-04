import { QUIZ_TYPE_SET, QuizTypeActionTypes } from "./types";
import { setQuizType } from "../../components/common/renderers/QuizTypeRenderer";
import { AbcType } from "../../models/enums/AbcTypes";

const initialState: JSX.Element = setQuizType(AbcType.HIRAGANA, "Regular");

export default function quizTypeReducer(
  state = initialState,
  action: QuizTypeActionTypes
) {
  switch (action.type) {
    case QUIZ_TYPE_SET:
      return action.payload;
    default:
      return state;
  }
}
