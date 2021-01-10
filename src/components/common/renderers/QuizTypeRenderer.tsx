import React from "react";
import { AbcType } from "../../../models/enums/AbcTypes";
import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
} from "../../MenuItems/CategoryMappers";
import { renderKanjiSubMenuItem as renderKanji } from "./LetterRenderer";
import { renderKana } from "./KanaRenderer";

export function setQuizType(abc: AbcType, type: string): JSX.Element {
  switch (abc.toLowerCase()) {
    case AbcType.HIRAGANA.toLowerCase():
      return renderKana(mapCategoryToHiragana(type), "statistics-value-text");
    case AbcType.KATAKANA.toLowerCase():
      return renderKana(mapCategoryToKatakana(type), "statistics-value-text");
    case AbcType.KANJI_PHRASES.toLowerCase():
      return renderKanji(type);
    default:
      return <></>;
  }
}
