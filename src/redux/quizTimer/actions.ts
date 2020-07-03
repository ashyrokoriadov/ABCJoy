import {
  START_QUIZ_TIMER,
  PAUSE_QUIZ_TIMER,
  RESET_QUIZ_TIMER,
  INCREMENT_QUIZ_TIMER,
  QuizTimerActionTypes,
} from "./types";

export function dispatchStartTimer(): QuizTimerActionTypes {
  return { type: START_QUIZ_TIMER };
}

export function dispatchPauseTimer(): QuizTimerActionTypes {
  return { type: PAUSE_QUIZ_TIMER };
}

export function dispatchResetTimer(): QuizTimerActionTypes {
  return { type: RESET_QUIZ_TIMER };
}

export function dispatchIncrementTimer(newValue: number): QuizTimerActionTypes {
  return { type: INCREMENT_QUIZ_TIMER, payload: newValue };
}
