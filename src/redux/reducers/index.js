import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";
import quizReducer from "./quizReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
  quizReducer,
});

export default rootReducer;
