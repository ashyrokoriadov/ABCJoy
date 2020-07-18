import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import createSagaMiddleware from "redux-saga";
import letterCategoriesSaga from "./letterCategories/sagas";
import settingsSaga from "./settings/sagas";
import messagessaga from "./messages/sagas";
import quizSaga from "./quiz/sagas";
import questionSaga from "./question/sagas";
import correctAnswerSaga from "./correctAnswer/sagas";
import quizTimerSaga from "./quizTimer/sagas";
import quizTypeSaga from "./quizType/sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(letterCategoriesSaga);
  sagaMiddleware.run(settingsSaga);
  sagaMiddleware.run(messagessaga);
  sagaMiddleware.run(quizSaga);
  sagaMiddleware.run(questionSaga);
  sagaMiddleware.run(correctAnswerSaga);
  sagaMiddleware.run(quizTimerSaga);
  sagaMiddleware.run(quizTypeSaga);

  return store;
}
