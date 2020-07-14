import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
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
  const composeEnhancers =
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
    compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
    )
  );

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
