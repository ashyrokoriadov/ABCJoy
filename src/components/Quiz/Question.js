import React from "react";
import PropTypes from "prop-types";

export default function Question(props) {
  let firstQuestion = "";

  if (props.quiz != undefined && props.quiz.length > 0) {
    firstQuestion = props.quiz[0].question;
  }

  return (
    <>
      <div id="question"> 6. {firstQuestion} </div>
      <div id="answers">
        <div id="answer-one" className="answer wrong">
          KA
        </div>
        <div id="answer-two" className="answer">
          NO
        </div>
        <div id="answer-three" className="answer">
          RA
        </div>
        <div id="answer-four" className="answer correct">
          MI
        </div>
      </div>
    </>
  );
}

Question.propTypes = {
  quiz: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.object.isRequired,
      answerOptions: PropTypes.array.isRequired,
    })
  ).isRequired,
};
