import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { INFO } from "../../components/common/MessageTypes";

export default function questionReducer(state = initialState.message, action) {
  switch (action.type) {
    case types.DISPLAY_INFO_MESSAGE:
      return {
        text: action.text,
        messageType: INFO.toLowerCase(),
        shouldDisplay: true,
      };
    case types.CLOSE_MESSAGE:
      return {
        text: "",
        messageType: INFO.toLowerCase(),
        shouldDisplay: false,
      };
    default:
      return state;
  }
}
