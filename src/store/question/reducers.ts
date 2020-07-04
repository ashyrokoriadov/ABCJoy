import { QUESTION_INDEX_SET_SUCCESS, QuestionActionTypes } from "./types";

const initialState: number = 0;

export default function questionReducer(
  state = initialState,
  action: QuestionActionTypes
) {
  switch (action.type) {
    case QUESTION_INDEX_SET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
