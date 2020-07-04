export const DISPLAY_INFO_MESSAGE = "DISPLAY_INFO_MESSAGE";
export const CLOSE_MESSAGE = "CLOSE_MESSAGE";

interface ShowInfoMessage {
  type: typeof DISPLAY_INFO_MESSAGE;
  payload: string;
}

interface RequestCloseMessage {
  type: typeof CLOSE_MESSAGE;
}

export type MessageActionTypes = ShowInfoMessage | RequestCloseMessage;
