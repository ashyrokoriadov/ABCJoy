const baseUrl = process.env.API_URL + "/";
import { handleResponse, handleError } from "./apiUtils";

export function getQuiz(abc, type) {
  return fetch(baseUrl + abc + "?type=" + type + "&number=5")
    .then(handleResponse)
    .catch(handleError);
}
