import React from "react";
import Quiz from "./Quiz/Quiz";
import { useParams } from "react-router-dom";

export default function Content() {
  const { abc, type } = useParams();
  return (
    <div className="content">
      <Quiz abc={abc} type={type} quiz={[]} />
    </div>
  );
}
