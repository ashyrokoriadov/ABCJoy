import { RouteComponentProps } from "react-router-dom";
import { History, LocationState } from "history";
import { MessageType } from "./MessageType";

export interface MessageProps extends RouteComponentProps<any> {
  text: string;
  messageType: MessageType;
  shouldDisplay: boolean;
  history: History<LocationState>;
}
