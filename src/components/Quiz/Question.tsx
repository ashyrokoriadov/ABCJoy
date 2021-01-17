import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import * as questionActions from "../../store/question/actions";
import * as messageActions from "../../store/messages/actions";
import * as correctAnswersActions from "../../store/correctAnswer/actions";
import * as timerActions from "../../store/quizTimer/actions";
import { Letter } from "../../models/Letter";
import { KanjiLetter } from "../../models/KanjiLetter";
import { KanaQuestionProps } from "../../models/props/KanaQuestionProps";
import { KanjiQuestionProps } from "../../models/props/KanjiQuestionProps";
import { LetterQuestionHelper, KanjiQuestionHelper } from "./QuestionHelper";
import KanaQuestion from "./KanaQuestion";
import KanjiQuestion from "./KanjiQuestion";

const mapState = (state: RootState) => ({
  questionIndex: state.questionIdex,
  settings: state.settings,
  quiz: state.quiz,
  correctAnswersCount: state.correctAnswerCount,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
      showInfoMessage: bindActionCreators(
        messageActions.showInfoMessage,
        dispatch
      ),
      setCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.setCounter,
        dispatch
      ),
      pauseTimer: bindActionCreators(timerActions.pauseTimer, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Question = (props: PropsFromRedux) => {
  const { abc } = useParams();
  const { quiz, actions, questionIndex } = props;
  const defaultAnswerOptionClass: string = "answer";

  let question: string = "";
  let correctAnswer: Letter = {
    sign: "",
    cyrillicName: "",
    latinName: "",
    type: "",
  };
  let answerOptions: Letter[] = [];
  let answerOptionsRefs = [];
  let isAnswered = false;

  useEffect(() => {
    if (props.quiz != undefined && props.quiz.length > 0) {
      actions.setQuestionIndex(questionIndex);
      if (questionIndex == quiz.length) {
        actions.pauseTimer();
        actions.showInfoMessage("Quiz został zakończony");
      }
    }
  });

  if (props.quiz != undefined && props.quiz.length > 0) {
    if (questionIndex < quiz.length) {
      question = questionIndex + 1 + ". " + quiz[questionIndex].question;
      correctAnswer = quiz[questionIndex].correctAnswer;
      answerOptions = quiz[questionIndex].answerOptions;
    } else {
      showLastQuestion();
    }
  }

  function showLastQuestion(): void {
    question = quiz.length + ". " + quiz[quiz.length - 1].question;
    correctAnswer = quiz[quiz.length - 1].correctAnswer;
    answerOptions = quiz[quiz.length - 1].answerOptions;
  }

  function getControlToRender(abc) {
    switch (abc) {
      case "kanjiphrases":
      case "kanjisigns":
        let kanjiQuestionHelper = new KanjiQuestionHelper(
          isAnswered,
          correctAnswer as KanjiLetter,
          props.settings.timeBetweenQuestions,
          questionIndex,
          props.correctAnswersCount,
          answerOptionsRefs,
          props.actions.setQuestionIndex,
          props.actions.setCorrectAnswersCount
        );

        let kanjiQuestionProps: KanjiQuestionProps = {
          question,
          answerOptions: answerOptions as KanjiLetter[],
          answerOptionsRefs,
          questionHelper: kanjiQuestionHelper,
          defaultAnswerOptionClass,
          correctAnswer: correctAnswer as KanjiLetter,
        };
        return <KanjiQuestion {...kanjiQuestionProps} />;
      default:
        let letterQuestionHelper = new LetterQuestionHelper(
          isAnswered,
          correctAnswer,
          props.settings.timeBetweenQuestions,
          questionIndex,
          props.correctAnswersCount,
          answerOptionsRefs,
          props.actions.setQuestionIndex,
          props.actions.setCorrectAnswersCount
        );

        let kanaQuestionProps: KanaQuestionProps = {
          question,
          answerOptions,
          answerOptionsRefs,
          defaultAnswerOptionClass,
          questionHelper: letterQuestionHelper,
        };

        return <KanaQuestion {...kanaQuestionProps} />;
    }
  }

  return getControlToRender(abc);
};

export default connector(Question);
