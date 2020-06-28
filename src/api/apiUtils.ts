import { HttpResponse } from "../models/api/HttpResponse";

export async function handleResponse(
  response: HttpResponse
): Promise<string[]> {
  if (response.ok) {
    var test = response.json();
    return test;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
