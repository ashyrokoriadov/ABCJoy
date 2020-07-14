import { Message, MessageTypes } from "../../models/Message";
import {
  INFO_MESSAGE_DISPLAYED,
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
    case MESSAGE_CLOSED:
      message = {
        text: "",
        messageType: MessageTypes.INFO.toLowerCase(),
        shouldDisplay: false,
      };
      return message;
    case INFO_MESSAGE_DISPLAYED:
      message = {
        text: action.payload,
        messageType: MessageTypes.INFO.toLowerCase(),
        shouldDisplay: true,
      };
      return message;
    default:
      return state;
  }
}
