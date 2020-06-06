import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function questionReducer(
  state = initialState.questionIndex,
  action
) {
  switch (action.type) {
    case types.QUESTION_INDEX_SET_SUCCESS:
      return action.questionIndex != undefined ? action.questionIndex : 0;
    default:
      return state;
  }
}
