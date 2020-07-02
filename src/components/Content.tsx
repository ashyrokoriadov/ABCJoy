import React from "react";
import Quiz from "./Quiz/Quiz";
import MessagePanel from "./common/Message";

export default function Content(props): JSX.Element {
  return (
    <div className="content">
      <Quiz />
      {/*<MessagePanel {...props.history} />*/}
    </div>
  );
}
