import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";
import * as questionActions from "../../redux/question/thunk";
import * as messageActions from "../../redux/messages/thunk";
import * as correctAnswersActions from "../../redux/correctAnswer/thunk";
import * as timerActions from "../../redux/quizTimer/thunk";
import { MessageType } from "../../models/MessageType";
import { Letter } from "../../models/Letter";
import { KanjiLetter } from "../../models/KanjiLetter";
import { KanaQuestionProps } from "../../models/props/KanaQuestionProps";
import { KanjiQuestionProps } from "../../models/props/KanjiQuestionProps";
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
      showMessage: bindActionCreators(messageActions.showMessage, dispatch),
      setCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.saveCorrectAnswersCount,
        dispatch
      ),
      pauseTimer: bindActionCreators(timerActions.pauseTimer, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Question = (props: PropsFromRedux) => {
  const { abc, type } = useParams();
  const { quiz, actions, questionIndex, settings } = props;
  const defaultAnswerOptionClass: string = "answer";

  let question: string = "";
  let correctAnswer = { latinName: "" };
  let answerOptions: Letter[] = [];
  let answerOptionsRefs = [];
  let isAnswered = false;
  let isCorrectAnswer = false;

  useEffect(() => {
    actions.setQuestionIndex(questionIndex);
    if (questionIndex == quiz.length) {
      actions.pauseTimer();
      actions.showMessage("Quiz został zakończony", MessageType.INFO);
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

  function showLastQuestion() {
    question = quiz.length + ". " + quiz[quiz.length - 1].question;
    correctAnswer = quiz[quiz.length - 1].correctAnswer;
    answerOptions = quiz[quiz.length - 1].answerOptions;
  }

  function checkAnswerKana(event) {
    if (isAnswered) {
      return;
    }

    event.target.className +=
      event.target.innerText == correctAnswer.latinName ? " correct" : " wrong";

    if (event.target.innerText != correctAnswer.latinName) {
      showCorrectAnswerKana();
    }

    isCorrectAnswer = event.target.innerText == correctAnswer.latinName;
    isAnswered = true;

    setTimeout(function () {
      setCssCallsOnAnswerOption(defaultAnswerOptionClass);
      actions.setQuestionIndex(questionIndex + 1);
      if (isCorrectAnswer) {
        props.actions.setCorrectAnswersCount(props.correctAnswersCount + 1);
      }
    }, settings.timeBetweenQuestions * 1000);
  }

  function showCorrectAnswerKana() {
    let _correctAnswer: any = answerOptionsRefs.find(
      (x: any) => x.current.innerText == correctAnswer.latinName
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  function checkAnswerKanji(event) {
    if (isAnswered) {
      return;
    }

    let correctAnswerKanji = correctAnswer as KanjiLetter;

    event.target.className +=
      event.target.innerText == correctAnswerKanji.polish
        ? " correct"
        : " wrong";

    if (event.target.innerText != correctAnswerKanji.polish) {
      showCorrectAnswerKanji();
    }

    isCorrectAnswer = event.target.innerText == correctAnswerKanji.polish;
    isAnswered = true;

    setTimeout(function () {
      setCssCallsOnAnswerOption(defaultAnswerOptionClass);
      actions.setQuestionIndex(questionIndex + 1);
      if (isCorrectAnswer) {
        props.actions.setCorrectAnswersCount(props.correctAnswersCount + 1);
      }
    }, settings.timeBetweenQuestions * 1000);
  }

  function showCorrectAnswerKanji() {
    let correctAnswerkanji: KanjiLetter = correctAnswer as KanjiLetter;
    let _correctAnswer: any = answerOptionsRefs.find(
      (x: any) => x.current.innerText == correctAnswerkanji.polish
    );

    if (_correctAnswer != undefined) {
      _correctAnswer.current.className += " correct";
    }
  }

  function setCssCallsOnAnswerOption(className) {
    answerOptionsRefs.forEach((x: any) => (x.current.className = className));
  }

  function getControlToRender(abc) {
    switch (abc) {
      case "kanji":
        let kanjiQuestionProps: KanjiQuestionProps = {
          question,
          answerOptions: answerOptions as KanjiLetter[],
          answerOptionsRefs,
          checkAnswer: checkAnswerKanji,
          defaultAnswerOptionClass,
          correctAnswer: correctAnswer as KanjiLetter,
        };
        return <KanjiQuestion {...kanjiQuestionProps} />;
      default:
        let kanaQuestionProps: KanaQuestionProps = {
          question,
          answerOptions,
          answerOptionsRefs,
          defaultAnswerOptionClass,
          checkAnswer: checkAnswerKana,
        };
        return <KanaQuestion {...kanaQuestionProps} />;
    }
  }

  return getControlToRender(abc);
};

export default connector(Question);
