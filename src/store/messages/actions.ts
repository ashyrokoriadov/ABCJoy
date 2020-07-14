import {
  DISPLAY_INFO_MESSAGE,
  CLOSE_MESSAGE,
  MessageActionTypes,
} from "./types";

export function showInfoMessage(messageText: string): MessageActionTypes {
  return {
    type: DISPLAY_INFO_MESSAGE,
    payload: messageText,
  };
}

export function requestCloseMessage(): MessageActionTypes {
  return {
    type: CLOSE_MESSAGE,
  };
}
