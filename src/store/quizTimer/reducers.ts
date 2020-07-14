import {
  QUIZ_TIMER_STARTED,
  QUIZ_TIMER_PAUSED,
  QUIZ_TIMER_INCREMENTED,
  QUIZ_TIMER_RESET,
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
    case QUIZ_TIMER_STARTED:
      return {
        isActive: true,
        value: 0,
      };
    case QUIZ_TIMER_PAUSED:
      return {
        isActive: false,
        value: state.value,
      };
    case QUIZ_TIMER_INCREMENTED:
      return {
        isActive: state.isActive,
        value: action.payload,
      };
    case QUIZ_TIMER_RESET:
      return {
        isActive: false,
        value: 0,
      };
    default:
      return state;
  }
}
