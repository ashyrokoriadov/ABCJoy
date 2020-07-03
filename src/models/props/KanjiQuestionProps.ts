import { KanjiLetter } from "../KanjiLetter";

export interface KanjiQuestionProps {
  question: string;
  answerOptions: KanjiLetter[];
  checkAnswer: (event: any) => void;
  defaultAnswerOptionClass: string;
  answerOptionsRefs: Array<any>;
  correctAnswer: KanjiLetter;
}
