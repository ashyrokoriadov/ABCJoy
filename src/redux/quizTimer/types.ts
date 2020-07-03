export const START_QUIZ_TIMER = "START_QUIZ_TIMER";
export const PAUSE_QUIZ_TIMER = "PAUSE_QUIZ_TIMER";
export const RESET_QUIZ_TIMER = "RESET_QUIZ_TIMER";
export const INCREMENT_QUIZ_TIMER = "INCREMENT_QUIZ_TIMER";

interface StartTimer {
  type: typeof START_QUIZ_TIMER;
}

interface PauseTimer {
  type: typeof PAUSE_QUIZ_TIMER;
}

interface ResetTimer {
  type: typeof RESET_QUIZ_TIMER;
}

interface IncrementTimer {
  type: typeof INCREMENT_QUIZ_TIMER;
  payload: number;
}

export type QuizTimerActionTypes =
  | StartTimer
  | PauseTimer
  | ResetTimer
  | IncrementTimer;
