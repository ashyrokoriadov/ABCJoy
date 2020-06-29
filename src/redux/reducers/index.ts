import { combineReducers } from "redux";
import kanjiCategoriesReducer from "../kanjiCategories/reducers";
import hiraganaCategoriesReducer from "../hiraganaCategories/reducers";
import katakanaCategoriesReducer from "../katakanaCategories/reducers";
/*import katakanaCategories from "./katakanaCategoryReducer";
import quiz from "./quizReducer";
import questionIndex from "./questionReducer";
import message from "./messageReducer";
import correctAnswerCount from "./correctAnswerReducer";
import settings from "./settingsReducer";
import quizTimer from "./quizTimerReducer";*/

const rootReducer = combineReducers({
  kanjiCategories: kanjiCategoriesReducer,
  hiraganaCategories: hiraganaCategoriesReducer,
  katakanaCategories: katakanaCategoriesReducer /*

  quiz,
  questionIndex,
  message,
  correctAnswerCount,
  settings,
  quizTimer,
  */,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
