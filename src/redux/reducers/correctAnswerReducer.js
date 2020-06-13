import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function correctAnswerReducer(
  state = initialState.correctAnswerCount,
  action
) {
  switch (action.type) {
    case types.INCREMENT_CORRECT_ANSWER_COUNT:
      return action.correctAnswerCount != undefined
        ? action.correctAnswerCount
        : 0;
    case types.RESET_CORRECT_ANSWER_COUNT:
      return 0;
    default:
      return state;
  }
}
