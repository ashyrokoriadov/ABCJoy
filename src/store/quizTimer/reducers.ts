import {
  START_QUIZ_TIMER,
  PAUSE_QUIZ_TIMER,
  RESET_QUIZ_TIMER,
  INCREMENT_QUIZ_TIMER,
  QuizTimerActionTypes,
} from "./types";
import { QuizTimerState } from "../../models/QuizTimerState";

const initialState: QuizTimerState = {
  isActive: false,
  value: 0,
};

export default function settingsReducer(
  state = initialState,
  action: QuizTimerActionTypes
) {
  switch (action.type) {
    case START_QUIZ_TIMER:
      return {
        isActive: true,
        value: 0,
      };
    case PAUSE_QUIZ_TIMER:
      return {
        isActive: false,
        value: state.value,
      };
    case INCREMENT_QUIZ_TIMER:
      return {
        isActive: state.isActive,
        value: action.payload,
      };
    case RESET_QUIZ_TIMER:
      return {
        isActive: false,
        value: 0,
      };
    default:
      return state;
  }
}
