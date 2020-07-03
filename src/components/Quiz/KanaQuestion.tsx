import React from "react";
import { KanaQuestionProps } from "../../models/props/KanaQuestionProps";

export default function KanaQuestion(props: KanaQuestionProps) {
  const {
    question,
    answerOptions,
    checkAnswer,
    defaultAnswerOptionClass,
    answerOptionsRefs,
  } = props;

  return (
    <>
      <div id="question">{question}</div>
      <div id="answers">
        {answerOptions.map((answerOption) => {
          let answerOptionRef = React.createRef();
          answerOptionsRefs.push(answerOptionRef);
          let ref = (answerOptionRef as unknown) as string;
          return (
            <div
              ref={ref}
              key={answerOption.latinName}
              onClick={checkAnswer}
              className={defaultAnswerOptionClass}
            >
              {answerOption.latinName}
            </div>
          );
        })}
      </div>
    </>
  );
}
