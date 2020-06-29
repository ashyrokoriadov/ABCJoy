import { handleResponse, handleError } from "./ApiUtilities";

export function getCategories(
  letterType: LetterType
): Promise<void | string[]> {
  return fetch(process.env.API_URL + "/" + letterType + "/types")
    .then(handleResponse)
    .catch(handleError);
}
