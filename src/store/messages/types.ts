export const DISPLAY_INFO_MESSAGE = "DISPLAY_INFO_MESSAGE";
export const CLOSE_MESSAGE = "CLOSE_MESSAGE";
export const INFO_MESSAGE_DISPAYED = "INFO_MESSAGE_DISPAYED";
export const MESSAGE_CLOSED = "MESSAGE_CLOSED";

interface ShowInfoMessage {
  type: typeof DISPLAY_INFO_MESSAGE;
  payload: string;
}

interface InfoMessageShown {
  type: typeof INFO_MESSAGE_DISPAYED;
}

interface RequestCloseMessage {
  type: typeof CLOSE_MESSAGE;
}

interface RequestCloseMessageCompleted {
  type: typeof MESSAGE_CLOSED;
}

export type MessageActionTypes =
  | ShowInfoMessage
  | InfoMessageShown
  | RequestCloseMessage
  | RequestCloseMessageCompleted;
