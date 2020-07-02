import { Quiz } from "../../models/Quiz";
import { LOAD_QUIZ_SUCCESS, QuizActionTypes } from "./types";

const initialState: Quiz[] = [];

export default function quizReducer(
  state = initialState,
  action: QuizActionTypes
) {
  switch (action.type) {
    case LOAD_QUIZ_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
