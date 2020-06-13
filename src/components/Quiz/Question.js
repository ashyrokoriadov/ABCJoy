import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as questionActions from "../../redux/actions/questionActions";
import * as messageActions from "../../redux/actions/messageActions";
import * as correctAnswersActions from "../../redux/actions/correctAnswerActions";
import { INFO } from "../common/MessageTypes";
import KanaQuestion from "./KanaQuestion";
import KanjiQuestion from "./KanjiQuestion";

export function Question(props) {
  const { quiz, actions, questionIndex, abc, correctAnswersCount } = props;
  const defaultAnswerOptionClass = "answer";

  let question = "";
  let correctAnswer = { latinName: "" };
  let answerOptions = [];
  let answerOptionsRefs = [];
  let isAnswered = false;
  let isCorrectAnswer = false;

  if (props.quiz != undefined && props.quiz.length > 0) {
    useEffect(() => {
      actions.setQuestionIndex(questionIndex);
      if (questionIndex == quiz.length) {
        actions.showMessage("Quiz został zakończony", INFO);
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

  function checkAnswerKana(event) {
    if (isAnswered) {
      return;
    }

    event.target.className +=
      event.target.innerText == correctAnswer.latinName ? " correct" : " wrong";

    if (event.target.innerText != correctAnswer.latinName) {
      showCorrectAnswerKana();
    }

    isCorrectAnswer = event.target.innerText == correctAnswer.latinName;
    isAnswered = true;

    setTimeout(function () {
      setCssCallsOnAnswerOption(defaultAnswerOptionClass);
      actions.setQuestionIndex(questionIndex + 1);
      if (isCorrectAnswer) {
        actions.setCorrectAnswersCount(correctAnswersCount + 1);
      }
    }, 1000);
  }

  function showCorrectAnswerKana() {
    let _correctAnswer = answerOptionsRefs.find(
      (x) => x.current.innerText == correctAnswer.latinName
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  function checkAnswerKanji(event) {
    if (isAnswered) {
      return;
    }

    event.target.className +=
      event.target.innerText == correctAnswer.polish ? " correct" : " wrong";

    if (event.target.innerText != correctAnswer.polish) {
      showCorrectAnswerKanji();
    }

    isCorrectAnswer = event.target.innerText == correctAnswer.polish;
    isAnswered = true;

    setTimeout(function () {
      setCssCallsOnAnswerOption(defaultAnswerOptionClass);
      actions.setQuestionIndex(questionIndex + 1);
      if (isCorrectAnswer) {
        actions.setCorrectAnswersCount(correctAnswersCount + 1);
      }
    }, 1000);
  }

  function showCorrectAnswerKanji() {
    let _correctAnswer = answerOptionsRefs.find(
      (x) => x.current.innerText == correctAnswer.polish
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  function setCssCallsOnAnswerOption(className) {
    answerOptionsRefs.forEach((x) => (x.current.className = className));
  }

  function getControlToRender(abc) {
    switch (abc) {
      case "kanji":
        return (
          <KanjiQuestion
            question={question}
            answerOptions={answerOptions}
            answerOptionsRefs={answerOptionsRefs}
            checkAnswer={checkAnswerKanji}
            defaultAnswerOptionClass={defaultAnswerOptionClass}
            correctAnswer={correctAnswer}
          />
        );
      default:
        return (
          <KanaQuestion
            question={question}
            answerOptions={answerOptions}
            answerOptionsRefs={answerOptionsRefs}
            checkAnswer={checkAnswerKana}
            defaultAnswerOptionClass={defaultAnswerOptionClass}
          />
        );
    }
  }

  return getControlToRender(abc);
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
  abc: PropTypes.string.isRequired,
  correctAnswersCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    questionIndex: state.questionIndex,
    correctAnswersCount: state.correctAnswerCount,
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
      setCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.saveCorrectAnswersCount,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
