import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import QuizStatistics from "./QuizStatistics";
import Question from "./Question";
import * as kanjiActions from "../../redux/actions/kanjiActions";
import * as hiraganaActions from "../../redux/actions/hiraganaActions";
import * as katakanaActions from "../../redux/actions/katakanaActions";

function Quiz(props) {
  const { abc, type, actions } = props;

  useEffect(() => {
    switch (abc) {
      case "kanji":
        actions.loadKanjiQuiz(type).catch((error) => {
          alert("Loading quiz failed. " + error);
        });
        break;
      case "hiragana":
        actions.loadHiraganaQuiz(type).catch((error) => {
          alert("Loading quiz failed. " + error);
        });
        break;
      case "katakana":
        actions.loadKatakanaQuiz(type).catch((error) => {
          alert("Loading quiz failed. " + error);
        });
        break;
    }
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
      loadKanjiQuiz: bindActionCreators(kanjiActions.loadQuiz, dispatch),
      loadHiraganaQuiz: bindActionCreators(hiraganaActions.loadQuiz, dispatch),
      loadKatakanaQuiz: bindActionCreators(katakanaActions.loadQuiz, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
