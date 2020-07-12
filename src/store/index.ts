import { combineReducers } from "redux";
import letterCategoriesReducer from "./letterCategories/reducers";
import settingsReducer from "./settings/reducers";
import messagesReducer from "./messages/reducers";
import quizReducer from "./quiz/reducers";
import questionReducer from "./question/reducers";
import correctAnswerCountReducer from "./correctAnswer/reducers";
import quizTimerReducer from "./quizTimer/reducers";
import quizTypeReducer from "./quizType/reducers";

const rootReducer = combineReducers({
  letterCategories: letterCategoriesReducer,
  settings: settingsReducer,
  message: messagesReducer,
  quiz: quizReducer,
  questionIdex: questionReducer,
  correctAnswerCount: correctAnswerCountReducer,
  quizTimer: quizTimerReducer,
  quizType: quizTypeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
