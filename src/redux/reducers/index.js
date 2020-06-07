import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quiz from "./quizReducer";
import questionIndex from "./questionReducer";
import message from "./messageReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
  quiz,
  questionIndex,
  message,
});

export default rootReducer;
