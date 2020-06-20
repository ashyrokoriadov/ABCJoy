import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function settingsReducer(
  state = initialState.quizTimer,
  action
) {
  switch (action.type) {
    case types.START_QUIZ_TIMER:
      return {
        isActive: true,
        value: 0,
      };
    case types.PAUSE_QUIZ_TIMER:
      return {
        isActive: false,
        value: state.value,
      };
    case types.INCREMENT_QUIZ_TIMER:
      return {
        isActive: state.isActive,
        value: action.value,
      };
    case types.RESET_QUIZ_TIMER:
      return {
        isActive: false,
        value: 0,
      };
    default:
      return state;
  }
}
