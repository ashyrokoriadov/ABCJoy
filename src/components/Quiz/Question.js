import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as questionActions from "../../redux/actions/questionActions";
import * as messageActions from "../../redux/actions/messageActions";
import { INFO } from "../common/MessageTypes";

export function Question(props) {
  const { quiz, actions, questionIndex } = props;
  const defaultAnswerOptionClass = "answer";

  let question = "";
  let correctAnswer = { latinName: "" };
  let answerOptions = [];
  let answerOptionsRefs = [];

  if (props.quiz != undefined && props.quiz.length > 0) {
    actions.setQuestionIndex(questionIndex);

    useEffect(() => {
      if (questionIndex == quiz.length) {
        actions.showMessage("Quiz został zakończony", INFO);
        actions.setQuestionIndex(0);
      }
    });

    if (questionIndex < quiz.length) {
      question = questionIndex + 1 + ". " + quiz[questionIndex].question;
      correctAnswer = quiz[questionIndex].correctAnswer;
      answerOptions = quiz[questionIndex].answerOptions;
    } else {
      showLastQuestion();
    }
  }

  function showLastQuestion() {
    question = quiz.length + ". " + quiz[quiz.length - 1].question;
    correctAnswer = quiz[quiz.length - 1].correctAnswer;
    answerOptions = quiz[quiz.length - 1].answerOptions;
  }

  function checkAnswer(event) {
    event.target.className +=
      event.target.innerText == correctAnswer.latinName ? " correct" : " wrong";

    if (event.target.innerText != correctAnswer.latinName) {
      showCorrectAnswer();
    }

    setTimeout(function () {
      setCssCallsOnAnswerOption(defaultAnswerOptionClass);
      actions.setQuestionIndex(questionIndex + 1);
    }, 1000);
  }

  function showCorrectAnswer() {
    let _correctAnswer = answerOptionsRefs.find(
      (x) => x.current.innerText == correctAnswer.latinName
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  function setCssCallsOnAnswerOption(className) {
    answerOptionsRefs.forEach((x) => (x.current.className = className));
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
  actions: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    questionIndex: state.questionIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
      showMessage: bindActionCreators(messageActions.showMessage, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
