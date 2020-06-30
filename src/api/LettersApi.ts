import { handleResponse, handleError } from "./ApiUtilities";
import { LetterType } from "../models/api/LetterType";

export function getCategories(
  letterType: LetterType
): Promise<void | string[]> {
  return fetch(process.env.API_URL + "/" + letterType + "/types")
    .then(handleResponse)
    .catch(handleError);
}
