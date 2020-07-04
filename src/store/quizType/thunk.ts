import { Action } from "redux";
import { quizLoaded } from "./actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import { setQuizType } from "../../components/common/renderers/QuizTypeRenderer";
import { AbcType } from "../../models/enums/AbcTypes";

export const dispatchSetQuizType = (
  abc: AbcType,
  type: string
): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
  var elementToRender = setQuizType(abc, type);
  return dispatch(quizLoaded(elementToRender));
};
