import { LetterType } from "../../models/api/LetterType";
import { MenuItemProps } from "../../models/props/MenuItemProps";
import {
  renderKatakanaSubMenuItem,
  renderHiraganaSubMenuItem,
  renderKanjiSubMenuItem,
} from "../common/renderers/LetterRenderer";

export function order(type: LetterType, categories: string[]): MenuItemProps {
  switch (type) {
    case LetterType.KANJI:
      return {
        categories,
        renderSubMenuItem: renderKanjiSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: type,
        menuItemText: "語",
      };
    case LetterType.HIRAGANA:
      return {
        categories,
        renderSubMenuItem: renderHiraganaSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: type,
        menuItemText: "あ",
      };
    case LetterType.KATAKANA:
      return {
        categories,
        renderSubMenuItem: renderKatakanaSubMenuItem,
        abcTypeCss: type.toLowerCase(),
        abcType: type.toLowerCase(),
        subMenuItemHeader: type,
        menuItemText: "ア",
      };
  }
}
