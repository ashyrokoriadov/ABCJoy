import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quiz from "./quizReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
  quiz,
});

export default rootReducer;
