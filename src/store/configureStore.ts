import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import kanjiCategoriesSaga from "./kanjiCategories/sagas";
//import thunk from "redux-thunk";

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

  sagaMiddleware.run(kanjiCategoriesSaga);
  return store;
}
