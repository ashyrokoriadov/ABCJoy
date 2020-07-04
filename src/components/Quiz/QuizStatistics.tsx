import React, { useEffect } from "react";
import { RootState } from "../../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import * as timerActions from "../../redux/quizTimer/thunk";
import { bindActionCreators } from "redux";
import QuizTimer from "../common/Timer";

const mapState = (state: RootState) => ({
  correctAnswersCount: state.correctAnswerCount,
  settngs: state.settings,
  quiz: state.quiz,
  quizType: state.quizType,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      startTimer: bindActionCreators(timerActions.startTimer, dispatch),
      resetTimer: bindActionCreators(timerActions.resetTimer, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export function QuizStatistics(props: PropsFromRedux) {
  useEffect(() => {
    props.actions.resetTimer();
    props.actions.startTimer();
  }, [props.quiz]);

  return (
    <div id="statistics">
      <div className="statistics-label"> Typ zadania </div>
      <div className="statistics-value"> {props.quizType} </div>
      <div className="statistics-label"> Prawidłowe odpowiedzi </div>
      <div className="statistics-value">
        {props.correctAnswersCount} / {props.settngs.questionsCount}
      </div>
      <div className="statistics-label"> Czas </div>
      <div className="statistics-value">
        <QuizTimer />
      </div>
    </div>
  );
}

export default connector(QuizStatistics);
