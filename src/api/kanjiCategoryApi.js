const baseUrl = process.env.API_URL + "/kanji/";
import { handleResponse, handleError } from "./apiUtils";

export function getKanjiCategories() {
  return fetch(baseUrl + "types")
    .then(handleResponse)
    .catch(handleError);
}
