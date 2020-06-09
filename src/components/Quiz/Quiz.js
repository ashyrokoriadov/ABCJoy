import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import QuizStatistics from "./QuizStatistics";
import QuizQuestion from "./Question";
import * as quizActions from "../../redux/actions/quizActions";
import * as questionActions from "../../redux/actions/questionActions";

function Quiz(props) {
  const { abc, type, actions } = props;

  useEffect(() => {
    actions.loadQuiz(abc, type).catch((error) => {
      alert("Loading quiz failed. " + error);
    });
    actions.setQuestionIndex(0);
  }, [abc, type]);

  return (
    <div id="quiz">
      <QuizQuestion quiz={props.quiz} abc={abc} questionIndex={0} />
      <QuizStatistics />
    </div>
  );
}

Quiz.propTypes = {
  quiz: PropTypes.array.isRequired,
  abc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    quiz: state.quiz,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadQuiz: bindActionCreators(quizActions.loadQuiz, dispatch),
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
