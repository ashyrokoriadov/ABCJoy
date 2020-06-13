import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import QuizStatisticsView from "./QuizStatistics";
import QuizQuestion from "./Question";
import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
} from "../MenuItems/CategoryMappers";
import { renderKanjiSubMenuItem as renderKanji } from "../MenuItems/SubMenuItemRenderers";
import { renderKana } from "../common/renderers/KanaRenderer";
import * as quizActions from "../../redux/actions/quizActions";
import * as questionActions from "../../redux/actions/questionActions";
import * as abcTypes from "../common/constants/abcTypes";

function Quiz(props) {
  const { abc, type, actions } = props;
  let quizType = setQuizType(abc, type);

  useEffect(() => {
    actions.loadQuiz(abc, type).catch((error) => {
      alert("Loading quiz failed. " + error);
    });
    actions.setQuestionIndex(0);
  }, [abc, type]);

  return (
    <div id="quiz">
      <QuizQuestion
        quiz={props.quiz}
        abc={abc}
        questionIndex={0}
        correctAnswersCount={0}
      />
      <QuizStatisticsView type={quizType} />
    </div>
  );
}

function setQuizType(abc, type) {
  switch (abc.toLowerCase()) {
    case abcTypes.HIRAGANA.toLowerCase():
      return renderKana(mapCategoryToHiragana(type), "statistics-value-text");
    case abcTypes.KATAKANA.toLowerCase():
      return renderKana(mapCategoryToKatakana(type), "statistics-value-text");
    case abcTypes.KANJI.toLowerCase():
      return renderKanji(mapCategoryToFa(type));
    default:
      return "";
  }
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
