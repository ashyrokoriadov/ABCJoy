import { Message, MessageTypes } from "../../models/Message";
import {
  DISPLAY_INFO_MESSAGE,
  INFO_MESSAGE_DISPAYED,
  CLOSE_MESSAGE,
  MESSAGE_CLOSED,
  MessageActionTypes,
} from "./types";

const initialState: Message = {
  text: "",
  messageType: MessageTypes.INFO.toLowerCase(),
  shouldDisplay: false,
};

export default function messageReducer(
  state = initialState,
  action: MessageActionTypes
) {
  let message: Message;

  switch (action.type) {
    case DISPLAY_INFO_MESSAGE:
      message = {
        text: action.payload,
        messageType: MessageTypes.INFO.toLowerCase(),
        shouldDisplay: true,
      };
      return message;
    case CLOSE_MESSAGE:
    case MESSAGE_CLOSED:
      message = {
        text: "",
        messageType: MessageTypes.INFO.toLowerCase(),
        shouldDisplay: false,
      };
      return message;
    case INFO_MESSAGE_DISPAYED:
    default:
      return state;
  }
}
