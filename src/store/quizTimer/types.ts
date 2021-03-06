export const START_QUIZ_TIMER = "START_QUIZ_TIMER";
export const PAUSE_QUIZ_TIMER = "PAUSE_QUIZ_TIMER";
export const RESET_QUIZ_TIMER = "RESET_QUIZ_TIMER";
export const INCREMENT_QUIZ_TIMER = "INCREMENT_QUIZ_TIMER";
export const QUIZ_TIMER_STARTED = "QUIZ_TIMER_STARTED";
export const QUIZ_TIMER_PAUSED = "QUIZ_TIMER_PAUSED";
export const QUIZ_TIMER_RESET = "QUIZ_TIMER_RESET";
export const QUIZ_TIMER_INCREMENTED = "QUIZ_TIMER_INCREMENTED";

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

interface TimerStarted {
  type: typeof QUIZ_TIMER_STARTED;
}

interface TimerPaused {
  type: typeof QUIZ_TIMER_PAUSED;
}

interface TimerReset {
  type: typeof QUIZ_TIMER_RESET;
}

interface TimerIncremented {
  type: typeof QUIZ_TIMER_INCREMENTED;
  payload: number;
}

export type QuizTimerActionTypes =
  | StartTimer
  | PauseTimer
  | ResetTimer
  | IncrementTimer
  | TimerStarted
  | TimerPaused
  | TimerReset
  | TimerIncremented;
