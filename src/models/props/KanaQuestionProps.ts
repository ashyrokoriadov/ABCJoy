import { Letter } from "../Letter";

export interface KanaQuestionProps {
  question: string;
  answerOptions: Letter[];
  checkAnswer: (event: any) => void;
  defaultAnswerOptionClass: string;
  answerOptionsRefs: Array<any>;
}
