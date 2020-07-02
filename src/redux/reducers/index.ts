import { combineReducers } from "redux";
import kanjiCategoriesReducer from "../kanjiCategories/reducers";
import hiraganaCategoriesReducer from "../hiraganaCategories/reducers";
import katakanaCategoriesReducer from "../katakanaCategories/reducers";
import settingsReducer from "../settings/reducers";
import messagesReducer from "../messages/reducers";
import quizReducer from "../quiz/reducers";
/*import questionIndex from "./questionReducer";
import correctAnswerCount from "./correctAnswerReducer";
import quizTimer from "./quizTimerReducer";*/

const rootReducer = combineReducers({
  kanjiCategories: kanjiCategoriesReducer,
  hiraganaCategories: hiraganaCategoriesReducer,
  katakanaCategories: katakanaCategoriesReducer,
  settings: settingsReducer,
  message: messagesReducer,
  quiz: quizReducer /*
  questionIndex,
  correctAnswerCount,
  quizTimer,
  */,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
