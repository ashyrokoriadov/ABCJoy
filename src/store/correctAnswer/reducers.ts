import {
  INCREMENT_CORRECT_ANSWER_COUNT,
  RESET_CORRECT_ANSWER_COUNT,
  CorrectAnswerActionTypes,
} from "./types";

const initialState: number = 0;

export default function correctAnswerReducer(
  state = initialState,
  action: CorrectAnswerActionTypes
) {
  switch (action.type) {
    case INCREMENT_CORRECT_ANSWER_COUNT:
      return action.payload != undefined ? action.payload : 0;
    case RESET_CORRECT_ANSWER_COUNT:
      return 0;
    default:
      return state;
  }
}
