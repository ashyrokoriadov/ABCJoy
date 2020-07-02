import { Letter } from "./Letter";

export interface Quiz {
  question: string;
  correctanswer: Letter;
  answerOptions: Letter[];
}
