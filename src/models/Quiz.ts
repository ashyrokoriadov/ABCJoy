import { Letter } from "./Letter";

export interface Quiz {
  question: string;
  correctAnswer: Letter;
  answerOptions: Letter[];
}
