import { INFO } from "../../components/common/MessageTypes";

export default {
  kanjiCategories: [],
  katakanaCategories: [],
  hiraganaCategories: [],
  quiz: [],
  questionIndex: 0,
  message: {
    text: "",
    messageType: INFO.toLowerCase(),
    shouldDisplay: false,
  },
  correctAnswerCount: 0,
};
