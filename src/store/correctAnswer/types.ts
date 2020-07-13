export const INCREMENT_CORRECT_ANSWER_COUNT = "INCREMENT_CORRECT_ANSWER_COUNT";
export const RESET_CORRECT_ANSWER_COUNT = "RESET_CORRECT_ANSWER_COUNT";
export const INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS =
  "INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS";
export const RESET_CORRECT_ANSWER_COUNT_SUCCESS =
  "RESET_CORRECT_ANSWER_COUNT_SUCCESS";

interface SetCounter {
  type: typeof INCREMENT_CORRECT_ANSWER_COUNT;
  payload: number;
}

interface ResetCounter {
  type: typeof RESET_CORRECT_ANSWER_COUNT;
}

interface SetCounterSuccess {
  type: typeof INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS;
  payload: number;
}

interface ResetCounterSuccess {
  type: typeof RESET_CORRECT_ANSWER_COUNT_SUCCESS;
}

export type CorrectAnswerActionTypes =
  | SetCounter
  | ResetCounter
  | SetCounterSuccess
  | ResetCounterSuccess;
