import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoryReducer";
import katakanaCategories from "./katakanaCategoryReducer";
import hiraganaCategories from "./hiraganaCategoryReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
});

export default rootReducer;
