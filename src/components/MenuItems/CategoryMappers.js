export function mapCategoryToFa(category, size = "fa-2x") {
  switch (category) {
    case "adjectives":
      return "fab fa-amilia " + size;
    case "adverbs":
      return "fas fa-ad " + size;
    case "examples":
      return "fab fa-buromobelexperte " + size;
    case "nouns":
      return "fas fa-globe-europe " + size;
    case "verbs":
      return "fas fa-play " + size;
    case "numbers":
      return "fas fa-dice " + size;
    case "surnames":
      return "far fa-address-book " + size;
    case "ownNames":
      return "far fa-address-card " + size;
    case "weekdays":
      return "far fa-sun " + size;
    default:
      return "far fa-sun " + size;
  }
}

export function mapCategoryToKatakana(category) {
  switch (category) {
    case "Regular":
      return "ホ";
    case "Dakuten":
      return "ボ";
    case "Handakuten":
      return "ポ";
    default:
      return "ホ";
  }
}

export function mapCategoryToHiragana(category) {
  switch (category) {
    case "Regular":
      return "ほ";
    case "Dakuten":
      return "ぼ";
    case "Handakuten":
      return "ぽ ";
    default:
      return "ほ";
  }
}
