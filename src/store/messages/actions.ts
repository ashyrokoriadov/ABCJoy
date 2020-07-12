import {
  DISPLAY_INFO_MESSAGE,
  INFO_MESSAGE_DISPAYED,
  CLOSE_MESSAGE,
  MESSAGE_CLOSED,
  MessageActionTypes,
} from "./types";

export function showInfoMessage(messageText: string): MessageActionTypes {
  return {
    type: DISPLAY_INFO_MESSAGE,
    payload: messageText,
  };
}

export function infoMessageShown(): MessageActionTypes {
  return {
    type: INFO_MESSAGE_DISPAYED,
  };
}

export function requestCloseMessage(): MessageActionTypes {
  return {
    type: CLOSE_MESSAGE,
  };
}

export function completeCloseMessageRequest(): MessageActionTypes {
  return {
    type: MESSAGE_CLOSED,
  };
}
