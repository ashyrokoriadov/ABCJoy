import { combineReducers } from "redux";
import kanjiCategoriesReducer from "../kanjiCategories/reducers";
import hiraganaCategoriesReducer from "../hiraganaCategories/reducers";
import katakanaCategoriesReducer from "../katakanaCategories/reducers";
import settingsReducer from "../settings/reducers";
import messagesReducer from "../messages/reducers";
import quizReducer from "../quiz/reducers";
import questionReducer from "../question/reducers";
/*
import correctAnswerCount from "./correctAnswerReducer";
import quizTimer from "./quizTimerReducer";*/

const rootReducer = combineReducers({
  kanjiCategories: kanjiCategoriesReducer,
  hiraganaCategories: hiraganaCategoriesReducer,
  katakanaCategories: katakanaCategoriesReducer,
  settings: settingsReducer,
  message: messagesReducer,
  quiz: quizReducer,
  questionIdex: questionReducer /*
  correctAnswerCount,
  quizTimer,
  */,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
