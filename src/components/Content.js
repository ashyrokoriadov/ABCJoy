import React from "react";
import Quiz from "./Quiz/Quiz";
import MessagePanel from "./common/Message";
import { useParams } from "react-router-dom";

export default function Content() {
  const { abc, type } = useParams();
  return (
    <div className="content">
      <Quiz abc={abc} type={type} quiz={[]} />
      <MessagePanel text="" messageType="" shouldDisplay={false} />
    </div>
  );
}
