const baseUrl = process.env.API_URL + "/katakana/";
import { handleResponse, handleError } from "./apiUtils";

export function getCategories() {
  return fetch(baseUrl + "types")
    .then(handleResponse)
    .catch(handleError);
}
