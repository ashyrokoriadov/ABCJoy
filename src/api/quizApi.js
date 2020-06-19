const baseUrl = process.env.API_URL + "/";
import { handleResponse, handleError } from "./apiUtils";

export function getQuiz(abc, type, questionsCount) {
  const defaultNumber = 3;
  const number = questionsCount == undefined ? defaultNumber : questionsCount;
  return fetch(baseUrl + abc + "?type=" + type + "&number=" + number)
    .then(handleResponse)
    .catch(handleError);
}
