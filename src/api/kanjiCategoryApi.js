//const baseUrl = process.env.API_URL + "/courses/";
const baseUrl = "https://localhost:44342/api/kanji/types";
import { handleResponse, handleError } from "./apiUtils";

export function getKanjiCategories() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
