import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
    compose;
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
