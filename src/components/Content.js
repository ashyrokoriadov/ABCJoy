import React from "react";
import Quiz from "./Quiz/Quiz";
import { useParams } from "react-router-dom";

export default function Content() {
  const { abc, type } = useParams();
  console.log("abc: " + abc);
  console.log("type: " + type);
  return (
    <div className="content">
      <Quiz />
    </div>
  );
}
