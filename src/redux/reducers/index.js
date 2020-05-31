import { combineReducers } from "redux";
import kanjiCategories from "./kanjiReducer";
import katakanaCategories from "./katakanaReducer";
import hiraganaCategories from "./hiraganaReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
  hiraganaCategories,
});

export default rootReducer;
