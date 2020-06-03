import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import QuizStatistics from "./QuizStatistics";
import Question from "./Question";
import * as kanjiActions from "../../redux/actions/kanjiActions";

function Quiz(props) {
  const { abc, type, actions, quiz } = props;

  useEffect(() => {
    if (quiz == undefined || quiz.length == 0) {
      actions.loadQuiz().catch((error) => {
        alert("Loading quiz failed. " + error);
      });
    }
  }, [abc, type, quiz]);

  return (
    <div id="quiz">
      <Question quiz={props.quiz} />
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
    quiz: state.quizReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadQuiz: bindActionCreators(kanjiActions.loadQuiz, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
