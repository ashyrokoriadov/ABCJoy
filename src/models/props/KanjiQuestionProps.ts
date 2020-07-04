import { KanjiLetter } from "../KanjiLetter";
import { KanjiQuestionHelper } from "../../components/Quiz/QuestionHelper";

export interface KanjiQuestionProps {
  question: string;
  answerOptions: KanjiLetter[];
  questionHelper: KanjiQuestionHelper;
  defaultAnswerOptionClass: string;
  answerOptionsRefs: Array<any>;
  correctAnswer: KanjiLetter;
}
