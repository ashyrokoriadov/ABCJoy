import React from "react";
import PropTypes from "prop-types";

export default function Question(props) {
  const { quiz } = props;
  let question = "";
  let correctAnswer = { latinName: "" };
  let answerOptions = [];
  let answerOptionsRefs = [];
  let questionIndex = 0;

  if (props.quiz != undefined && props.quiz.length > 0) {
    question = questionIndex + 1 + ". " + quiz[questionIndex].question;
    correctAnswer = quiz[questionIndex].correctAnswer;
    answerOptions = quiz[questionIndex].answerOptions;
  }

  function checkAnswer(event) {
    event.target.className +=
      event.target.innerText == correctAnswer.latinName ? " correct" : " wrong";

    if (event.target.innerText != correctAnswer.latinName) {
      showCorrectAnswer();
    }
  }

  function showCorrectAnswer() {
    let _correctAnswer = answerOptionsRefs.find(
      (x) => x.current.innerText == correctAnswer.latinName
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  return (
    <>
      <div id="question">{question}</div>
      <div id="answers">
        {answerOptions.map((answerOption) => {
          let answerOptionRef = React.createRef();
          answerOptionsRefs.push(answerOptionRef);
          return (
            <div
              ref={answerOptionRef}
              key={answerOption.latinName}
              onClick={checkAnswer}
              className="answer"
            >
              {answerOption.latinName}
            </div>
          );
        })}
      </div>
    </>
  );
}

Question.propTypes = {
  quiz: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.object.isRequired,
      answerOptions: PropTypes.arrayOf(
        PropTypes.shape({
          sign: PropTypes.string.isRequired,
          latinName: PropTypes.string.isRequired,
          cyrillicName: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        }).isRequired
      ),
    }).isRequired
  ),
};
