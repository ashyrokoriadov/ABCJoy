import { Letter } from "../Letter";
import { LetterQuestionHelper } from "../../components/Quiz/QuestionHelper";

export interface KanaQuestionProps {
  question: string;
  answerOptions: Letter[];
  questionHelper: LetterQuestionHelper;
  defaultAnswerOptionClass: string;
  answerOptionsRefs: Array<any>;
}
