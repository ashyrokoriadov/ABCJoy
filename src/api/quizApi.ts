import { handleQuizResponse, handleError } from "./ApiUtilities";
import { Quiz } from "../models/Quiz";

export function getQuiz(
  abc: string,
  type: string,
  questionsCount: number = 3
): Promise<void | Quiz[]> {
  const url = `${process.env.API_URL}/${abc}?type=${type}&number=${questionsCount}`;
  return fetch(url).then(handleQuizResponse).catch(handleError);
}
