import { Letter } from "../../models/Letter";
import { KanjiLetter } from "../../models/KanjiLetter";

abstract class QuestionHelper<T extends Letter> {
  constructor(
    isAnswered: boolean,
    correctAnswer: T,
    timeBetweenQuestions: number,
    questionIndex: number,
    correctAnswersCount: number,
    answerOptionsRefs: Array<any>,
    setQuestionIndex: (number: number) => void,
    setCorrectAnswersCount: (number: number) => void
  ) {
    this._isAnswered = isAnswered;
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
    this._isAnswered = true;

    setTimeout(
      this.triggerLogicWithTimeout.bind(this),
      this.timeBetweenQuestions * 1000
    );
  }

  protected abstract setCssClassOnSelectedAnswer(event): void;

  protected abstract showCorrectAnswer(event): void;

  protected abstract defineWhetherAnswerIsCorrect(event): void;

  protected triggerLogicWithTimeout(): void {
    this.setCssClassOnAnswerOption(this.defaultAnswerOptionClass);
    this.setQuestionIndex(this.questionIndex + 1);
    if (this.isCorrectAnswer) {
      this.setCorrectAnswersCount(this.correctAnswersCount + 1);
    }
  }

  protected setCssClassOnAnswerOption(className: string): void {
    this.answerOptionsRefs.forEach(
      (x: any) => (x.current.className = className)
    );
  }

  protected _isAnswered: boolean;

  get isAnswered(): boolean {
    return this._isAnswered;
  }

  get defaultAnswerOptionClass(): string {
    return "answer";
  }

  get wrongAnswerClass(): string {
    return "wrong";
  }

  get correctAnswerClass(): string {
    return "correct";
  }

  protected _isCorrectAnswer: boolean = false;

  get isCorrectAnswer(): boolean {
    return this._isCorrectAnswer;
  }

  readonly correctAnswer: T;
  readonly timeBetweenQuestions: number;
  readonly questionIndex: number;
  readonly correctAnswersCount: number;
  readonly answerOptionsRefs: Array<any>;

  protected setQuestionIndex: (number: number) => void;
  protected setCorrectAnswersCount: (number: number) => void;
}

export class LetterQuestionHelper extends QuestionHelper<Letter> {
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
    super(
      isAnswered,
      correctAnswer,
      timeBetweenQuestions,
      questionIndex,
      correctAnswersCount,
      answerOptionsRefs,
      setQuestionIndex,
      setCorrectAnswersCount
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

  setCssClassOnSelectedAnswer(event) {
    event.target.className +=
      event.target.innerText == this.correctAnswer.latinName
        ? ` ${this.correctAnswerClass}`
        : ` ${this.wrongAnswerClass}`;
  }

  defineWhetherAnswerIsCorrect(event): void {
    this._isCorrectAnswer =
      event.target.innerText == this.correctAnswer.latinName;
  }
}

export class KanjiQuestionHelper extends QuestionHelper<KanjiLetter> {
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
    super(
      isAnswered,
      correctAnswer,
      timeBetweenQuestions,
      questionIndex,
      correctAnswersCount,
      answerOptionsRefs,
      setQuestionIndex,
      setCorrectAnswersCount
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

  setCssClassOnSelectedAnswer(event) {
    event.target.className +=
      event.target.innerText == this.correctAnswer.polish
        ? ` ${this.correctAnswerClass}`
        : ` ${this.wrongAnswerClass}`;
  }

  defineWhetherAnswerIsCorrect(event): void {
    this._isCorrectAnswer = event.target.innerText == this.correctAnswer.polish;
  }
}
