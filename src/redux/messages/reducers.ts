import { Message, MessageTypes } from "../../models/Message";
import {
  DISPLAY_INFO_MESSAGE,
  CLOSE_MESSAGE,
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
      console.log(message);
      return message;
    case CLOSE_MESSAGE:
      message = {
        text: "",
        messageType: MessageTypes.INFO.toLowerCase(),
        shouldDisplay: false,
      };
      return message;
    default:
      return state;
  }
}
