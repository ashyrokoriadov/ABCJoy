import { combineReducers } from "redux";
//import kanjiCategories from "./kanjiCategoryReducer";
import kanjiCategoriesReducer from "../kanjiCategories/reducers";
/*import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quiz from "./quizReducer";
import questionIndex from "./questionReducer";
import message from "./messageReducer";
import correctAnswerCount from "./correctAnswerReducer";
import settings from "./settingsReducer";
import quizTimer from "./quizTimerReducer";*/

const rootReducer = combineReducers({
  kanjiCategories: kanjiCategoriesReducer /*
  katakanaCategories,
  hiraganaCategories,
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
