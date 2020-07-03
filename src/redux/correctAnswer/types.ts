export const INCREMENT_CORRECT_ANSWER_COUNT = "INCREMENT_CORRECT_ANSWER_COUNT";
export const RESET_CORRECT_ANSWER_COUNT = "RESET_CORRECT_ANSWER_COUNT";

interface SetCounter {
  type: typeof INCREMENT_CORRECT_ANSWER_COUNT;
  payload: number;
}

interface ResetCounter {
  type: typeof RESET_CORRECT_ANSWER_COUNT;
}

export type CorrectAnswerActionTypes = SetCounter | ResetCounter;
