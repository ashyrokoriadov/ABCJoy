import {
  INCREMENT_CORRECT_ANSWER_COUNT,
  RESET_CORRECT_ANSWER_COUNT,
  CorrectAnswerActionTypes,
  RESET_CORRECT_ANSWER_COUNT_SUCCESS,
  INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS,
} from "./types";

export function setCounter(
  correctAnswerCount: number
): CorrectAnswerActionTypes {
  return { type: INCREMENT_CORRECT_ANSWER_COUNT, payload: correctAnswerCount };
}
export function resetCounter(): CorrectAnswerActionTypes {
  return { type: RESET_CORRECT_ANSWER_COUNT };
}

export function setCounterSuccess(
  correctAnswerCount: number
): CorrectAnswerActionTypes {
  return {
    type: INCREMENT_CORRECT_ANSWER_COUNT_SUCCESS,
    payload: correctAnswerCount,
  };
}
export function resetCounterSuccess(): CorrectAnswerActionTypes {
  return { type: RESET_CORRECT_ANSWER_COUNT_SUCCESS };
}
