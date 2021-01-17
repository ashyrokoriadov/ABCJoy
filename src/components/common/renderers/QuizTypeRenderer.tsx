import React from "react";
import { AbcType } from "../../../models/enums/AbcTypes";
import {
  mapCategoryToFa,
  mapCategoryToKatakana,
  mapCategoryToHiragana,
  mapNumberToJlpt,
} from "../../MenuItems/CategoryMappers";
import { renderKanjiSubMenuItem as renderKanji, renderKanjiSignSubMenuItem as renderKanjiSign } from "./LetterRenderer";
import { renderKana } from "./KanaRenderer";

export function setQuizType(abc: AbcType, type: string): JSX.Element {
  switch (abc.toLowerCase()) {
    case AbcType.HIRAGANA.toLowerCase():
      return renderKana(mapCategoryToHiragana(type), "statistics-value-text");
    case AbcType.KATAKANA.toLowerCase():
      return renderKana(mapCategoryToKatakana(type), "statistics-value-text");
    case AbcType.KANJI_PHRASES.toLowerCase():
      return renderKanji(type);
    case AbcType.KANJI_SIGNS.toLowerCase():
      return renderKana(mapNumberToJlpt(type), "statistics-value-text");
    default:
      return <></>;
  }
}
