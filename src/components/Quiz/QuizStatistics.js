import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as timerActions from "../../redux/actions/quizTimerActions";
import { bindActionCreators } from "redux";
import QuizTimer from "../common/Timer";

export function QuizStatistics(props) {
  const { type, correctAnswersCount, questionsCount, actions, quiz } = props;
  let answersCount = correctAnswersCount == undefined ? 0 : correctAnswersCount;
  let questions = questionsCount == undefined ? 0 : questionsCount;

  useEffect(() => {
    actions.resetTimer();
    actions.startTimer();
  }, [quiz]);

  return (
    <div id="statistics">
      <div className="statistics-label"> Typ zadania </div>
      <div className="statistics-value"> {type} </div>
      <div className="statistics-label"> Prawidłowe odpowiedzi </div>
      <div className="statistics-value">
        {answersCount} / {questions}
      </div>
      <div className="statistics-label"> Czas </div>
      <div className="statistics-value">
        <QuizTimer />
      </div>
    </div>
  );
}

QuizStatistics.propTypes = {
  type: PropTypes.object.isRequired,
  correctAnswersCount: PropTypes.number,
  questionsCount: PropTypes.number,
  quiz: PropTypes.array,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    correctAnswersCount: state.correctAnswerCount,
    quiz: state.quiz,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      startTimer: bindActionCreators(timerActions.startTimer, dispatch),
      resetTimer: bindActionCreators(timerActions.resetTimer, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizStatistics);
