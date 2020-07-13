export const QUESTION_INDEX_SET_SUCCESS = "QUESTION_INDEX_SET_SUCCESS";
export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";

interface QuestionIndexSetSuccess {
  type: typeof QUESTION_INDEX_SET_SUCCESS;
  payload: number;
}

interface SetQuestionIndex {
  type: typeof SET_QUESTION_INDEX;
  payload: number;
}

export type QuestionActionTypes = QuestionIndexSetSuccess | SetQuestionIndex;
