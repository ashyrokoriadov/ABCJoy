import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import * as settingsAction from "../../redux/settings/thunk";
import * as quizActions from "../../redux/quiz/thunk";
import * as questionActions from "../../redux/question/thunk";
//import PropTypes from "prop-types";
//import QuizStatisticsView from "./QuizStatistics";
import QuizQuestion from "./Question";
/*import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
} from "../MenuItems/CategoryMappers";*/
//import { renderKanjiSubMenuItem as renderKanji } from "../common/renderers/LetterRenderer";
//import { renderKana } from "../common/renderers/KanaRenderer";
//import * as quizActions from "../../redux/actions/quizActions";
//import * as questionActions from "../../redux/actions/questionActions";
//import * as settingsAction from "../../redux/actions/settingsActions";
//import * as abcTypes from "../common/constants/abcTypes";

const mapState = (state: RootState) => ({
  quiz: state.quiz,
  settings: state.settings,
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
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Quiz = (props: PropsFromRedux) => {
  const { abc, type } = useParams();
  //let quizType = setQuizType(abc, type);

  useEffect(() => {
    try {
      props.actions.loadQuiz(abc, type, props.settings.questionsCount);
    } catch (error) {
      alert("Loading quiz failed. " + error);
    }
    props.actions.setQuestionIndex(0);
  }, [abc, type, props.settings.questionsCount]);

  useEffect(() => {
    props.actions.loadQuizSettings();
  }, [props.settings.questionsCount, props.settings.timeBetweenQuestions]);

  return (
    <div id="quiz">
      {
        <QuizQuestion />
        /*
      <QuizStatisticsView type={quizType} questionsCount={questionsCount} />*/
      }
    </div>
  );
};
/*
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
  questionsCount: PropTypes.number,
  timeBetweenQuestions: PropTypes.number,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    quiz: state.quiz,
    questionsCount: state.settings.questionsCount,
    timeBetweenQuestions: state.settings.timeBetweenQuestions,
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
      loadSettings: bindActionCreators(settingsAction.loadSettings, dispatch),
    },
  };
}
*/

export default connector(Quiz);
