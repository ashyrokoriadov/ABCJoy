import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quiz from "./quizReducer";
import questionIndex from "./questionReducer";
import message from "./messageReducer";
import correctAnswerCount from "./correctAnswerReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
  quiz,
  questionIndex,
  message,
  correctAnswerCount,
});

export default rootReducer;
