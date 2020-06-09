import React from "react";
import PropTypes from "prop-types";

export default function KanjiQuestion(props) {
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
          return (
            <div
              ref={answerOptionRef}
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

KanjiQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answerOptions: PropTypes.arrayOf(
    PropTypes.shape({
      sign: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      cyrillicName: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
  checkAnswer: PropTypes.func.isRequired,
  defaultAnswerOptionClass: PropTypes.string.isRequired,
  answerOptionsRefs: PropTypes.array.isRequired,
  correctAnswer: PropTypes.object.isRequired,
};
