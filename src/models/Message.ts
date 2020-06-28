export interface Message {
  text: string;
  messageType: string;
  shouldDisplay: boolean;
}

export enum MessageTypes {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}
