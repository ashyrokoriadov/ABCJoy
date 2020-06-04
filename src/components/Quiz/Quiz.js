import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import QuizStatistics from "./QuizStatistics";
import Question from "./Question";
import * as quizActions from "../../redux/actions/quizActions";

function Quiz(props) {
  const { abc, type, actions } = props;

  useEffect(() => {
    actions.loadQuiz(abc, type).catch((error) => {
      alert("Loading quiz failed. " + error);
    });
  }, [abc, type]);

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
    quiz: state.quiz,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadQuiz: bindActionCreators(quizActions.loadQuiz, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
