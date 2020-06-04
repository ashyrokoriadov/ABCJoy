const baseUrl = process.env.API_URL + "/hiragana/";
import { handleResponse, handleError } from "./apiUtils";

export function getCategories() {
  return fetch(baseUrl + "types")
    .then(handleResponse)
    .catch(handleError);
}

export function getQuiz(type) {
  return fetch(baseUrl + "?type=" + type + "&number=5")
    .then(handleResponse)
    .catch(handleError);
}
