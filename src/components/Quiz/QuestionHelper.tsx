import { Letter } from "../../models/Letter";
import { KanjiLetter } from "../../models/KanjiLetter";

export class LetterQuestionHelper {
  isAnswered: boolean;
  correctAnswer: Letter;
  timeBetweenQuestions: number;
  questionIndex: number;
  correctAnswersCount: number;
  answerOptionsRefs: Array<any>;
  setQuestionIndex: (number: number) => void;
  setCorrectAnswersCount: (number: number) => void;
  defaultAnswerOptionClass: string = "answer";
  wrongAnswerClass: string = "wrong";
  correctAnswerClass: string = "correct";
  isCorrectAnswer: boolean = false;
  constructor(
    isAnswered: boolean,
    correctAnswer: Letter,
    timeBetweenQuestions: number,
    questionIndex: number,
    correctAnswersCount: number,
    answerOptionsRefs: Array<any>,
    setQuestionIndex: (number: number) => void,
    setCorrectAnswersCount: (number: number) => void
  ) {
    this.isAnswered = isAnswered;
    this.correctAnswer = correctAnswer;
    this.timeBetweenQuestions = timeBetweenQuestions;
    this.questionIndex = questionIndex;
    this.correctAnswersCount = correctAnswersCount;
    this.answerOptionsRefs = answerOptionsRefs;
    this.setQuestionIndex = setQuestionIndex;
    this.setCorrectAnswersCount = setCorrectAnswersCount;
  }

  checkAnswer(event) {
    if (this.isAnswered) {
      return;
    }

    this.setCssClassOnSelectedAnswer(event);
    this.showCorrectAnswer(event);
    this.defineWhetherAnswerIsCorrect(event);
    this.isAnswered = true;

    setTimeout(
      this.triggerLogicWithTimeout.bind(this),
      this.timeBetweenQuestions * 1000
    );
  }

  showCorrectAnswer(event): void {
    if (event.target.innerText != this.correctAnswer.latinName) {
      let _correctAnswer: any = this.answerOptionsRefs.find(
        (x: any) => x.current.innerText == this.correctAnswer.latinName
      );

      if (_correctAnswer != undefined) {
        _correctAnswer.current.className += " correct";
      }
    }
  }

  setCssClassOnAnswerOption(className: string): void {
    this.answerOptionsRefs.forEach(
      (x: any) => (x.current.className = className)
    );
  }

  setCssClassOnSelectedAnswer(event) {
    event.target.className +=
      event.target.innerText == this.correctAnswer.latinName
        ? ` ${this.correctAnswerClass}`
        : ` ${this.wrongAnswerClass}`;
  }

  defineWhetherAnswerIsCorrect(event): void {
    this.isCorrectAnswer =
      event.target.innerText == this.correctAnswer.latinName;
  }

  triggerLogicWithTimeout(): void {
    this.setCssClassOnAnswerOption(this.defaultAnswerOptionClass);
    this.setQuestionIndex(this.questionIndex + 1);
    if (this.isCorrectAnswer) {
      this.setCorrectAnswersCount(this.correctAnswersCount + 1);
    }
  }
}

export class KanjiQuestionHelper {
  isAnswered: boolean;
  correctAnswer: KanjiLetter;
  timeBetweenQuestions: number;
  questionIndex: number;
  correctAnswersCount: number;
  answerOptionsRefs: Array<any>;
  setQuestionIndex: (number: number) => void;
  setCorrectAnswersCount: (number: number) => void;
  defaultAnswerOptionClass: string = "answer";
  wrongAnswerClass: string = "wrong";
  correctAnswerClass: string = "correct";
  isCorrectAnswer: boolean = false;
  constructor(
    isAnswered: boolean,
    correctAnswer: KanjiLetter,
    timeBetweenQuestions: number,
    questionIndex: number,
    correctAnswersCount: number,
    answerOptionsRefs: Array<any>,
    setQuestionIndex: (number: number) => void,
    setCorrectAnswersCount: (number: number) => void
  ) {
    this.isAnswered = isAnswered;
    this.correctAnswer = correctAnswer;
    this.timeBetweenQuestions = timeBetweenQuestions;
    this.questionIndex = questionIndex;
    this.correctAnswersCount = correctAnswersCount;
    this.answerOptionsRefs = answerOptionsRefs;
    this.setQuestionIndex = setQuestionIndex;
    this.setCorrectAnswersCount = setCorrectAnswersCount;
  }

  checkAnswer(event) {
    if (this.isAnswered) {
      return;
    }

    this.setCssClassOnSelectedAnswer(event);
    this.showCorrectAnswer(event);
    this.defineWhetherAnswerIsCorrect(event);
    this.isAnswered = true;

    setTimeout(
      this.triggerLogicWithTimeout.bind(this),
      this.timeBetweenQuestions * 1000
    );
  }

  showCorrectAnswer(event): void {
    if (event.target.innerText != this.correctAnswer.polish) {
      let _correctAnswer: any = this.answerOptionsRefs.find(
        (x: any) => x.current.innerText == this.correctAnswer.polish
      );

      if (_correctAnswer != undefined) {
        _correctAnswer.current.className += " correct";
      }
    }
  }

  setCssClassOnAnswerOption(className: string): void {
    this.answerOptionsRefs.forEach(
      (x: any) => (x.current.className = className)
    );
  }

  setCssClassOnSelectedAnswer(event) {
    event.target.className +=
      event.target.innerText == this.correctAnswer.polish
        ? ` ${this.correctAnswerClass}`
        : ` ${this.wrongAnswerClass}`;
  }

  defineWhetherAnswerIsCorrect(event): void {
    this.isCorrectAnswer = event.target.innerText == this.correctAnswer.polish;
  }

  triggerLogicWithTimeout(): void {
    this.setCssClassOnAnswerOption(this.defaultAnswerOptionClass);
    this.setQuestionIndex(this.questionIndex + 1);
    if (this.isCorrectAnswer) {
      this.setCorrectAnswersCount(this.correctAnswersCount + 1);
    }
  }
}
