import React from "react";
import { KanjiQuestionProps } from "../../models/props/KanjiQuestionProps";

export default function KanjiQuestion(props: KanjiQuestionProps) {
  const {
    question,
    answerOptions,
    checkAnswer,
    defaultAnswerOptionClass,
    answerOptionsRefs,
    correctAnswer,
  } = props;
  return (
    <>
      <div id="question" title={correctAnswer.latinName}>
        {question}
      </div>
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
              {answerOption.polish}
            </div>
          );
        })}
      </div>
    </>
  );
}
