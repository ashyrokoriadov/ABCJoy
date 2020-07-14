import {
  START_QUIZ_TIMER,
  PAUSE_QUIZ_TIMER,
  RESET_QUIZ_TIMER,
  INCREMENT_QUIZ_TIMER,
  QuizTimerActionTypes,
} from "./types";

export function startTimer(): QuizTimerActionTypes {
  return { type: START_QUIZ_TIMER };
}

export function pauseTimer(): QuizTimerActionTypes {
  return { type: PAUSE_QUIZ_TIMER };
}

export function resetTimer(): QuizTimerActionTypes {
  return { type: RESET_QUIZ_TIMER };
}

export function incrementTimer(newValue: number): QuizTimerActionTypes {
  return { type: INCREMENT_QUIZ_TIMER, payload: newValue };
}
