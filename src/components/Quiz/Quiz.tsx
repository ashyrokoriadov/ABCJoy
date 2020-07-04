import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import * as settingsAction from "../../redux/settings/thunk";
import * as quizActions from "../../redux/quiz/thunk";
import * as questionActions from "../../redux/question/thunk";
import * as quizTypeActions from "../../redux/quizType/thunk";
import QuizStatisticsView from "./QuizStatistics";
import QuizQuestion from "./Question";

const mapState = (state: RootState) => ({
  quiz: state.quiz,
  settings: state.settings,
  quizType: state.quizType,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      loadQuiz: bindActionCreators(quizActions.loadQuiz, dispatch),
      loadQuizSettings: bindActionCreators(
        settingsAction.loadQuizSettings,
        dispatch
      ),
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
      setQuizType: bindActionCreators(
        quizTypeActions.dispatchSetQuizType,
        dispatch
      ),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Quiz = (props: PropsFromRedux) => {
  const { abc, type } = useParams();

  useEffect(() => {
    try {
      props.actions.loadQuiz(abc, type, props.settings.questionsCount);
    } catch (error) {
      alert("Loading quiz failed. " + error);
    }
    props.actions.setQuestionIndex(0);
    props.actions.setQuizType(abc, type);
  }, [abc, type, props.settings.questionsCount]);

  useEffect(() => {
    props.actions.loadQuizSettings();
  }, [props.settings.questionsCount, props.settings.timeBetweenQuestions]);

  return (
    <div id="quiz">
      <QuizQuestion />
      <QuizStatisticsView />
    </div>
  );
};

export default connector(Quiz);
