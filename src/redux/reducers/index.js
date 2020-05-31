import { combineReducers } from "redux";
import kanjiCategories from "./kanjiReducer";
import katakanaCategories from "./katakanaReducer";

const rootReducer = combineReducers({
  kanjiCategories,
  katakanaCategories,
});

export default rootReducer;
