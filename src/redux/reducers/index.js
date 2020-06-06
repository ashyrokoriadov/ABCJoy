import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quiz from "./quizReducer";
import questionIndex from "./questionReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
  quiz,
  questionIndex,
});

export default rootReducer;
