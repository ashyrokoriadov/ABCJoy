import { combineReducers } from "redux";
import kanjiCategories from "./kanjiCategoriesReducer";

const rootReducer = combineReducers({
  kanjiCategories,
});

export default rootReducer;
