export const QUESTION_INDEX_SET_SUCCESS = "QUESTION_INDEX_SET_SUCCESS";

interface QuestionIndexSetSuccess {
  type: typeof QUESTION_INDEX_SET_SUCCESS;
  payload: number;
}

export type QuestionActionTypes = QuestionIndexSetSuccess;
