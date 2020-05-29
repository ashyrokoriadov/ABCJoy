import React from "react";
import QuizStatistics from "./QuizStatistics";
import Question from "./Question";

export default function Quiz() {
  return (
    <div id="quiz">
      <Question />
      <QuizStatistics />
    </div>
  );
}
